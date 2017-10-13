package com.pevans.helpers;

import android.util.Log;
import com.j256.ormlite.dao.Dao;
import com.pevans.dtos.JackpotMarket;
import com.pevans.ormlite.DatabaseHelper;
import java.sql.SQLException;
import java.util.List;

public class JackpotMarketHelper {
    public static JackpotMarket findById(Integer id) {
        try {
            return (JackpotMarket) getDao().queryForId(id);
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }
    }

    public static List<JackpotMarket> findAll() {
        try {
            return getDao().queryForAll();
        } catch (SQLException e) {
            return null;
        }
    }

    public static void update(JackpotMarket jackpotMarket) {
        try {
            getDao().update((Object) jackpotMarket);
        } catch (SQLException e) {
        }
    }

    public static void removeAll() {
        try {
            getDao().delete(findAll());
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public static void save(JackpotMarket jackpotMarket) {
        try {
            DatabaseHelper.getInstance().getJackpotMarketsDao().create(jackpotMarket);
        } catch (SQLException e) {
            Log.e(JackpotMarketHelper.class.getName(), "Cannot save the Jackpot Market");
        }
    }

    private static Dao getDao() {
        return DatabaseHelper.getInstance().getJackpotMarketsDao();
    }
}
