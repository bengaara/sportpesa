package com.pevans.helpers;

import android.app.Activity;
import com.j256.ormlite.dao.Dao;
import com.pevans.dataloaders.AsynkTaskResultReader;
import com.pevans.dtos.Favourite;
import com.pevans.jsoncomunicators.JCFindFavourites;
import com.pevans.jsoncomunicators.JCUpdateFavourites;
import com.pevans.jsonconstants.PlayerJC;
import com.pevans.jsonconstants.SecurityJC;
import com.pevans.ormlite.DatabaseHelper;
import java.sql.SQLException;
import java.util.List;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class FavouritesHelper {
    public static void saveFavourites(List<Favourite> favouriteList) {
        if (UserHelper.getInstance().isLoggedAUser()) {
            Dao<Favourite, Integer> favouritesDao = DatabaseHelper.getInstance().getFavouritesDao();
            try {
                clear();
                for (Favourite favourite : favouriteList) {
                    favouritesDao.create(favourite);
                }
            } catch (SQLException e) {
            }
        }
    }

    public static List<Favourite> loadFavourites() {
        if (UserHelper.getInstance().isLoggedAUser()) {
            try {
                return DatabaseHelper.getInstance().getFavouritesDao().queryForAll();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return null;
    }

    public static boolean isFavourite(Integer teamId) {
        return findFavourite(teamId) != null;
    }

    public static void removeFavourite(Integer teamId) {
        try {
            DatabaseHelper.getInstance().getFavouritesDao().deleteById(teamId);
        } catch (SQLException e) {
        }
        UserHelper.getInstance().getLoggedUser().setFavouritesModified(true);
    }

    public static void addFavourite(Favourite favourite) {
        try {
            DatabaseHelper.getInstance().getFavouritesDao().create(favourite);
        } catch (SQLException e) {
        }
        UserHelper.getInstance().getLoggedUser().setFavouritesModified(true);
    }

    public static void updateRemoteFavourites(Activity activity) {
        if (UserHelper.getInstance().isLoggedAUser() && UserHelper.getInstance().getLoggedUser().isFavouritesModified()) {
            UserHelper.getInstance().getLoggedUser().setFavouritesModified(false);
            new JCUpdateFavourites(createJson(UserHelper.getInstance().getLoggedUser()), (AsynkTaskResultReader) activity).execute(new Void[0]);
        }
    }

    public static void updateLocalFavourites(Activity activity) {
        if (!UserHelper.getInstance().getLoggedUser().isFavouritesModified()) {
            JSONObject json = new JSONObject();
            try {
                json.put(PlayerJC.USERNAME, UserHelper.getInstance().getLoggedUsername());
                json.put(SecurityJC.TOKEN, UserHelper.getInstance().getLoggedUser().getToken());
            } catch (JSONException e) {
            }
            new JCFindFavourites(json, (AsynkTaskResultReader) activity).execute(new Void[0]);
            UserHelper.getInstance().getLoggedUser().setFavouritesModified(false);
        }
    }

    public static Favourite findFavourite(Integer teamId) {
        try {
            return (Favourite) DatabaseHelper.getInstance().getFavouritesDao().queryForId(teamId);
        } catch (SQLException e) {
            return null;
        }
    }

    public static void clear() {
        Dao<Favourite, Integer> favouritesDao = DatabaseHelper.getInstance().getFavouritesDao();
        try {
            favouritesDao.delete(favouritesDao.queryForAll());
        } catch (SQLException e) {
        }
    }

    public static JSONObject createJson(LoggedUser loggedUser) {
        JSONObject json = new JSONObject();
        List<Favourite> favourites = loadFavourites();
        try {
            JSONArray array = new JSONArray();
            for (Favourite f : favourites) {
                array.put(f.getTeamId());
            }
            json.put(PlayerJC.USERNAME, loggedUser.getUsername());
            json.put(SecurityJC.TOKEN, loggedUser.getToken());
            json.put("fav_ids", array);
        } catch (JSONException e) {
        }
        return json;
    }

    public static int calculateFavoritesSize() {
        Integer result = Integer.valueOf(0);
        try {
            result = Integer.valueOf(DatabaseHelper.getInstance().getFavouritesDao().queryForAll().size());
        } catch (SQLException e) {
        }
        return result.intValue();
    }
}
