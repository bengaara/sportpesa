package com.pevans.helpers;

import com.j256.ormlite.dao.Dao;
import com.pevans.dtos.Country;
import com.pevans.dtos.League;
import com.pevans.jsonconstants.SportJC;
import com.pevans.ormlite.DatabaseHelper;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class CountryHelper {

    /* renamed from: com.pevans.helpers.CountryHelper.1 */
    static class C02771 implements Comparator<Country> {
        C02771() {
        }

        public int compare(Country lhs, Country rhs) {
            return lhs.getName().compareTo(rhs.getName());
        }
    }

    public static void removeAll() {
        try {
            getDao().delete(getDao().queryForAll());
        } catch (SQLException e) {
        }
    }

    public static void save(Country country) {
        try {
            if (getDao().queryForId(country.getId()) == null) {
                getDao().create(country);
            }
        } catch (SQLException e) {
        }
    }

    public static void update(Country country) {
        try {
            getDao().update((Object) country);
        } catch (SQLException e) {
        }
    }

    public static List<Country> findBySportId(Integer sportId) {
        ArrayList<Country> result = new ArrayList();
        try {
            getDao().deleteById(Integer.valueOf(-sportId.intValue()));
            LeagueHelper.deleteById(-sportId.intValue());
            Country country = new Country();
            country.setId(Integer.valueOf(-sportId.intValue()));
            country.setSportId(sportId);
            country.setName("Country");
            country.setLeagues(DatabaseHelper.getInstance().getCountriesDao().getEmptyForeignCollection("leagues"));
            League league = new League();
            league.setId(Integer.valueOf(-sportId.intValue()));
            league.setCountry(country);
            league.setName("League");
            country.getLeagues().add(league);
            result.add(country);
            List loadedCountries = getDao().queryForEq(SportJC.ID, sportId);
            Collections.sort(loadedCountries, new C02771());
            result.addAll(loadedCountries);
        } catch (SQLException e) {
        }
        return result;
    }

    private static Dao getDao() {
        return DatabaseHelper.getInstance().getCountriesDao();
    }
}
