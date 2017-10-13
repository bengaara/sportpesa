package com.pevans.helpers;

import android.util.Log;
import com.j256.ormlite.dao.Dao;
import com.pevans.dtos.JackpotMatch;
import com.pevans.ormlite.DatabaseHelper;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class JackpotMatchHelper {
    public static List<JackpotMatch> findAll() {
        List<JackpotMatch> result = new ArrayList();
        try {
            result = getDao().queryForAll();
        } catch (SQLException e) {
            Log.e(DatabaseHelper.class.getName(), "Can't add jackpot matches from database");
        }
        return result;
    }

    public static void save(JackpotMatch jackpotMatch) {
        try {
            getDao().create(jackpotMatch);
        } catch (SQLException e) {
            Log.e(DatabaseHelper.class.getName(), "Can't add jackpot match to database");
        }
    }

    public static void removeAll() {
        try {
            getDao().delete(findAll());
        } catch (SQLException e) {
            Log.e(DatabaseHelper.class.getName(), "Can't remove jackpot matches from database");
        }
    }

    private static Dao getDao() {
        return DatabaseHelper.getInstance().getJackpotMatchesDao();
    }

    public static JackpotMatch findMatchByGameID(int gameId) {
        try {
            return (JackpotMatch) getDao().queryForId(Integer.valueOf(gameId));
        } catch (SQLException e) {
            Log.e(DatabaseHelper.class.getName(), "Can't find jackpot match from database");
            return null;
        }
    }

    public static void update(JackpotMatch jackpotMatch) {
        try {
            getDao().update((Object) jackpotMatch);
        } catch (SQLException e) {
            Log.e(DatabaseHelper.class.getName(), "Can't update jackpot match from database");
        }
    }
}
