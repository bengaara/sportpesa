package com.pevans.helpers;

import android.app.Activity;
import android.app.AlertDialog.Builder;
import android.content.DialogInterface;
import android.content.DialogInterface.OnClickListener;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.SharedPreferences.Editor;
import android.view.View;
import android.widget.TextView;
import android.widget.Toast;
import com.pevans.SportpesaApplication;
import com.pevans.dataloaders.AsynkTaskResultReader;
import com.pevans.jsoncomunicators.JCLogin;
import com.pevans.jsoncomunicators.JCLogout;
import com.pevans.jsoncomunicators.JCSignNewTerms;
import com.pevans.jsoncomunicators.JsonComunicator;
import com.pevans.jsonconstants.PlayerJC;
import com.pevans.services.UserService;
import com.pevans.sportpesa.ActivityTermsAndConditions;
import com.pevans.sportpesa.C0332R;
import com.pevans.urls.PlayerURLs;
import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;
import java.text.NumberFormat;
import java.util.Locale;
import org.apache.http.HttpHeaders;
import org.apache.http.HttpStatus;
import org.json.JSONException;
import org.json.JSONObject;

public class UserHelper {
    private static final String BALANCE = "balance";
    private static final String LAST_REMOTE_UPDATE = "last_remote_update";
    private static final String LAST_UPDATE = "last_update";
    private static final String LAST_USER = "";
    private static final String LEFT_TIME = "left_time";
    private static final String MODULE = "user";
    private static final String TOKEN = "token";
    private static final String USERNAME = "username";
    private static UserHelper instance;
    private LoggedUser loggedUser;
    private final SharedPreferences preferences;

    /* renamed from: com.pevans.helpers.UserHelper.1 */
    static class C02781 implements OnClickListener {
        final /* synthetic */ Long val$pid;
        final /* synthetic */ AsynkTaskResultReader val$resultReader;
        final /* synthetic */ String val$ticket;

        C02781(Long l, String str, AsynkTaskResultReader asynkTaskResultReader) {
            this.val$pid = l;
            this.val$ticket = str;
            this.val$resultReader = asynkTaskResultReader;
        }

        public void onClick(DialogInterface dialog, int id) {
            JSONObject json = new JSONObject();
            try {
                json.put(PlayerJC.USERNAME, this.val$pid);
                json.put(UserHelper.TOKEN, this.val$ticket);
            } catch (JSONException e) {
            }
            new JCSignNewTerms(json, PlayerURLs.SIGN_NEW_TERMS, this.val$resultReader).execute(new Void[0]);
        }
    }

    /* renamed from: com.pevans.helpers.UserHelper.2 */
    static class C02792 implements OnClickListener {
        C02792() {
        }

        public void onClick(DialogInterface dialog, int id) {
        }
    }

    /* renamed from: com.pevans.helpers.UserHelper.3 */
    static class C02803 implements View.OnClickListener {
        final /* synthetic */ Activity val$activity;

        C02803(Activity activity) {
            this.val$activity = activity;
        }

        public void onClick(View v) {
            this.val$activity.startActivityForResult(new Intent(this.val$activity, ActivityTermsAndConditions.class), 50);
        }
    }

    public UserHelper() {
        this.preferences = SportpesaApplication.getAppContext().getSharedPreferences(MODULE, 0);
    }

    public void storeLoggedUserInformation(LoggedUser loggedUser, boolean store, String name) {
        this.loggedUser = loggedUser;
        Editor editor = this.preferences.edit();
        editor.putString(USERNAME, loggedUser.getUsername());
        editor.putString(TOKEN, loggedUser.getToken());
        editor.putLong(BALANCE, loggedUser.getBalance().longValue());
        if (store) {
            editor.putString(LAST_USER, name);
        } else {
            editor.remove(LAST_USER);
        }
        editor.apply();
        resetTimer();
    }

    public void removeLoggedUserInformation() {
        this.loggedUser = null;
        Editor editor = this.preferences.edit();
        editor.remove(USERNAME);
        editor.remove(TOKEN);
        editor.remove(BALANCE);
        editor.remove(LEFT_TIME);
        editor.remove(LAST_UPDATE);
        editor.remove(LAST_REMOTE_UPDATE);
        editor.apply();
        FavouritesHelper.clear();
    }

    public boolean isLoggedAUser() {
        return !getLoggedUsername().equals(LAST_USER);
    }

    public String getLoggedUsername() {
        LoggedUser loggedUser = getLoggedUser();
        return loggedUser == null ? LAST_USER : loggedUser.getUsername();
    }

    public LoggedUser getLoggedUser() {
        if (this.loggedUser == null && this.preferences.contains(TOKEN)) {
            this.loggedUser = new LoggedUser();
            this.loggedUser.setUsername(this.preferences.getString(USERNAME, LAST_USER));
            this.loggedUser.setToken(this.preferences.getString(TOKEN, LAST_USER));
            this.loggedUser.setBalance(Double.valueOf(Long.valueOf(this.preferences.getLong(BALANCE, 0)).doubleValue()));
        }
        return this.loggedUser;
    }

    public static UserHelper getInstance() {
        if (instance == null) {
            instance = new UserHelper();
        }
        return instance;
    }

    public String getBalanceString() {
        LoggedUser lu = getLoggedUser();
        DecimalFormat formatter = (DecimalFormat) NumberFormat.getInstance(Locale.getDefault());
        DecimalFormatSymbols symbols = formatter.getDecimalFormatSymbols();
        symbols.setGroupingSeparator(',');
        formatter.setDecimalFormatSymbols(symbols);
        return (lu == null || lu.getBalance().compareTo(Double.valueOf(0.0d)) <= 0) ? "0.0 KSH" : "Balance: " + formatter.format(lu.getBalance()).toString() + " KSH";
    }

    public String getFormattedBalance() {
        LoggedUser lu = getLoggedUser();
        DecimalFormat formatter = (DecimalFormat) NumberFormat.getInstance(Locale.getDefault());
        DecimalFormatSymbols symbols = formatter.getDecimalFormatSymbols();
        symbols.setGroupingSeparator(',');
        formatter.setDecimalFormatSymbols(symbols);
        return lu != null ? formatter.format(lu.getBalance()).toString() : "0.0";
    }

    public void logout() {
        removeLoggedUserInformation();
    }

    public void loginUserLocally(LoggedUser loggedUser, boolean store, String name) {
        storeLoggedUserInformation(loggedUser, store, name);
    }

    public static void signNewTermsAndConditions(AsynkTaskResultReader resultReader, Long pid, String username, String ticket) {
        Activity activity = (Activity) resultReader;
        View dialogView = activity.getLayoutInflater().inflate(C0332R.layout.tac_changed_dialog, null);
        Builder builder = new Builder(activity);
        builder.setView(dialogView);
        builder.setTitle("Do you want to accept new terms and conditions?");
        builder.setPositiveButton(HttpHeaders.ACCEPT, new C02781(pid, ticket, resultReader));
        builder.setNegativeButton("Cancel", new C02792());
        builder.create().show();
        ((TextView) dialogView.findViewById(C0332R.id.tac_changed_button)).setOnClickListener(new C02803(activity));
    }

    public static void logoutUser(Activity activity) {
        if (getInstance().isLoggedAUser()) {
            LoggedUser loggedUser = getInstance().getLoggedUser();
            FavouritesHelper.updateRemoteFavourites(activity);
            try {
                JSONObject json = new JSONObject();
                json.put(PlayerJC.USERNAME, loggedUser.getUsername());
                json.put(TOKEN, loggedUser.getToken());
                loggedUser.setToken(LAST_USER);
                new JCLogout(json, (AsynkTaskResultReader) activity).execute(new Void[0]);
                getInstance().logout();
            } catch (JSONException e) {
            }
        }
    }

    public static void saveResult(Integer httpcode, Object object, JsonComunicator dataComunicator, Activity activity, boolean store, String name) {
        try {
            if (dataComunicator instanceof JCLogin) {
                if (httpcode.intValue() >= HttpStatus.SC_OK && httpcode.intValue() < HttpStatus.SC_MULTIPLE_CHOICES) {
                    JSONObject receivedJson = new JSONObject((String) object);
                    LoggedUser loggedUser = new LoggedUser();
                    loggedUser.setUsername(receivedJson.getString(USERNAME));
                    loggedUser.setToken(receivedJson.getString(TOKEN));
                    loggedUser.setBalance(Double.valueOf(Double.parseDouble(receivedJson.getString(BALANCE).replaceAll(",", LAST_USER))));
                    loggedUser.setOperatorId(Integer.valueOf(receivedJson.getInt("operator")));
                    getInstance().loginUserLocally(loggedUser, store, name);
                    activity.finish();
                    FavouritesHelper.updateLocalFavourites(activity);
                }
            } else if (dataComunicator instanceof JCSignNewTerms) {
                JSONObject jsonTOSend = new JSONObject();
                jsonTOSend.put(PlayerJC.USERNAME, getInstance().getLoggedUsername());
                logoutUser(activity);
                new JCLogin(jsonTOSend, (AsynkTaskResultReader) activity).execute(new Void[0]);
            }
        } catch (Exception e) {
            Toast.makeText(activity, "Unexpected error!", 0).show();
            activity.finish();
        }
    }

    public void resetTimer() {
        resetTimer(false);
    }

    public void resetTimer(boolean remoteUpdated) {
        Intent intent = new Intent(SportpesaApplication.getAppContext(), UserService.class);
        intent.putExtra("remote_updated", remoteUpdated);
        SportpesaApplication.getAppContext().startService(intent);
        Intent broadcastIntent = new Intent();
        broadcastIntent.setAction(UserService.USER_ACTION);
        SportpesaApplication.getAppContext().sendBroadcast(broadcastIntent);
    }

    public String getLastLoggedUsername() {
        String result = LAST_USER;
        if (this.preferences.contains(LAST_USER)) {
            return this.preferences.getString(LAST_USER, LAST_USER);
        }
        return result;
    }

    public void setLeftTime(long leftTime) {
        Editor editor = this.preferences.edit();
        editor.putLong(LEFT_TIME, leftTime);
        editor.apply();
    }

    public void setLastUpdate(long lastUpdate) {
        Editor editor = this.preferences.edit();
        editor.putLong(LEFT_TIME, lastUpdate);
        editor.apply();
    }

    public long getLeftTime() {
        return this.preferences.getLong(LEFT_TIME, 0);
    }

    public long getLastUpdate() {
        return this.preferences.getLong(LAST_UPDATE, 0);
    }

    public void setLastRemoteUpdate(long time) {
        Editor editor = this.preferences.edit();
        editor.putLong(LAST_REMOTE_UPDATE, time);
        editor.apply();
    }

    public Long getLastRemoteUpdate() {
        return Long.valueOf(this.preferences.getLong(LAST_REMOTE_UPDATE, 0));
    }
}
