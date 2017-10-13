package com.pevans.helpers;

import com.j256.ormlite.dao.Dao;
import com.pevans.dtos.JackpotSelection;
import com.pevans.ormlite.DatabaseHelper;
import java.sql.SQLException;
import java.util.Collection;
import java.util.List;

public class JackpotSelectionHelper {
    public static void save(JackpotSelection js) {
        try {
            getDao().create(js);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    private static Dao getDao() {
        return DatabaseHelper.getInstance().getJackpotSelectionsDao();
    }

    public static void removeAll() {
        try {
            getDao().delete(findAll());
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public static List<JackpotSelection> findAll() {
        try {
            return getDao().queryForAll();
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }
    }

    public static JackpotSelection findJackpotSelectionInCollection(Collection<JackpotSelection> selections, Integer pos) {
        int i = 0;
        for (JackpotSelection os : selections) {
            if (i == pos.intValue()) {
                return os;
            }
            i++;
        }
        return null;
    }
}
