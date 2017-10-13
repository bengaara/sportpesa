package com.pevans.helpers;

import com.pevans.betslip.BetSlip;
import com.pevans.dataloaders.AsynkTaskResultReader;
import com.pevans.datarepositories.jackpot.JackpotSummaryRepository;
import com.pevans.dtos.JackpotBet;
import com.pevans.dtos.OrdinaryBet;
import com.pevans.jsoncomunicators.JCPlaceBet;
import com.pevans.jsoncomunicators.JCPlaceJackpotBet;
import com.pevans.jsonconstants.BetJC;
import com.pevans.jsonconstants.PlayerJC;
import com.pevans.jsonconstants.SecurityJC;
import com.pevans.sportpesa.jackpot.JackpotBetHelper;
import cz.msebera.httpclient.android.BuildConfig;
import java.math.BigDecimal;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class PlaceBetHelper {
    public static void placeJackpotBet(AsynkTaskResultReader resultReader) {
        try {
            JSONObject json = generateBetJson(true);
            json.put(BetJC.JACKPOT_ID, JackpotSummaryRepository.getInstance().getId());
            new JCPlaceJackpotBet(json, resultReader).execute(new Void[0]);
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    public static void placeBet(AsynkTaskResultReader resultReader, BigDecimal amount) {
        try {
            JSONObject json = generateBetJson(false);
            json.put(PlayerJC.AMOUNT, amount);
            new JCPlaceBet(json, resultReader).execute(new Void[0]);
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    private static JSONObject generateBetJson(boolean isJackpot) throws JSONException {
        JSONObject json = new JSONObject();
        json.put(PlayerJC.USERNAME, UserHelper.getInstance().getLoggedUser().getUsername());
        json.put(SecurityJC.TOKEN, UserHelper.getInstance().getLoggedUser().getToken());
        String betString = BuildConfig.VERSION_NAME;
        if (isJackpot) {
            for (JackpotBet b : JackpotBetHelper.findBetsInDatabase()) {
                betString = betString + b.getOddsId() + ",";
            }
        } else {
            JSONArray bets = new JSONArray();
            for (int i = 0; i < BetSlip.getInstance().calculateBetSlipSize().intValue(); i++) {
                OrdinaryBet b2 = BetSlip.getInstance().getBet(Integer.valueOf(i));
                JSONObject betJson = new JSONObject();
                betJson.put(BetJC.ODD, b2.getSelectedOdd());
                betJson.put("coef", b2.getOdd());
                bets.put(betJson);
            }
            json.put("bet", bets);
        }
        if (!BuildConfig.VERSION_NAME.equals(betString)) {
            if (isJackpot) {
                json.put(BetJC.BET_STRING, betString.substring(0, betString.length() - 1));
            } else {
                json.put(BetJC.BET_STRING, betString.substring(0, betString.length() - 1).replaceAll(",", "#"));
            }
        }
        return json;
    }
}
