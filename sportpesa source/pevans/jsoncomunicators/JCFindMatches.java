package com.pevans.jsoncomunicators;

import com.pevans.dataloaders.AsynkTaskResultReader;
import com.pevans.dtos.Sport;
import com.pevans.urls.DataURLs;
import cz.msebera.httpclient.android.BuildConfig;
import org.json.JSONException;
import org.json.JSONObject;

public class JCFindMatches extends JsonComunicator {
    private static final String FROM = "from";
    private static final String LEAGUE_ID = "league_id";
    private static final String MAX = "max";
    private static final String SPORT_ID = "sport_id";
    private static final String TEAM_ID = "team_id";
    private static final String TEAM_NAME = "team_name";
    private static final String TO = "to";
    private Sport sport;

    public JCFindMatches(Integer teamId, AsynkTaskResultReader resultReader) {
        this(teamId, null, null, null, null, null, null, resultReader);
    }

    public JCFindMatches(Sport sport, String teamName, AsynkTaskResultReader resultReader) {
        this(null, sport, teamName, null, null, null, null, resultReader);
    }

    public JCFindMatches(Sport sport, Integer leagueId, Long from, Long to, AsynkTaskResultReader resultReader) {
        this(null, sport, null, leagueId, from, to, null, resultReader);
    }

    public JCFindMatches(Sport sport, Integer league_id, Long from, Integer max, AsynkTaskResultReader resultReader) {
        this(null, sport, null, league_id, from, null, max, resultReader);
    }

    private JCFindMatches(Integer teamId, Sport sport, String teamName, Integer leagueId, Long from, Long to, Integer max, AsynkTaskResultReader resultReader) {
        this(createJson(teamId, sport, teamName, leagueId, from, to, max), resultReader);
        this.sport = sport;
    }

    private JCFindMatches(JSONObject json, AsynkTaskResultReader resultReader) {
        super(json, DataURLs.FIND_MATCHES, resultReader, JsonComunicator.POST);
    }

    private static JSONObject createJson(Integer teamId, Sport sport, String teamName, Integer leagueId, Long from, Long to, Integer max) {
        JSONObject result = new JSONObject();
        try {
            String str = TEAM_ID;
            if (teamId == null) {
                teamId = BuildConfig.VERSION_NAME;
            }
            result.put(str, teamId);
            result.put(SPORT_ID, sport == null ? BuildConfig.VERSION_NAME : sport.getId());
            str = TEAM_NAME;
            if (teamName == null) {
                teamName = BuildConfig.VERSION_NAME;
            }
            result.put(str, teamName);
            str = LEAGUE_ID;
            if (leagueId == null) {
                leagueId = BuildConfig.VERSION_NAME;
            }
            result.put(str, leagueId);
            str = FROM;
            if (from == null) {
                from = BuildConfig.VERSION_NAME;
            }
            result.put(str, from);
            str = TO;
            if (to == null) {
                to = BuildConfig.VERSION_NAME;
            }
            result.put(str, to);
            str = MAX;
            if (max == null) {
                max = BuildConfig.VERSION_NAME;
            }
            result.put(str, max);
        } catch (JSONException e) {
        }
        return result;
    }

    public Sport getSport() {
        return this.sport;
    }
}
