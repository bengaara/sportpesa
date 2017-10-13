package com.pevans.helpers;

import com.j256.ormlite.dao.Dao;
import com.pevans.dtos.League;
import com.pevans.ormlite.DatabaseHelper;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class LeagueHelper {
    public static void removeAll() {
        try {
            getDao().delete(getDao().queryForAll());
        } catch (SQLException e) {
        }
    }

    public static League findLeagueInCollection(Collection<League> leagues, Integer pos) {
        int i = 0;
        for (League os : leagues) {
            if (i == pos.intValue()) {
                return os;
            }
            i++;
        }
        return null;
    }

    public static List<League> createListFromCollection(Collection<League> leagues) {
        List<League> result = new ArrayList();
        for (League os : leagues) {
            result.add(os);
        }
        return result;
    }

    public static void save(League league) {
        try {
            if (getDao().queryForId(league.getId()) == null) {
                getDao().create(league);
            }
        } catch (SQLException e) {
        }
    }

    private static Dao getDao() {
        return DatabaseHelper.getInstance().getLeaguesDao();
    }

    public static void deleteById(int id) {
        try {
            getDao().deleteById(Integer.valueOf(id));
        } catch (SQLException e) {
        }
    }
}
