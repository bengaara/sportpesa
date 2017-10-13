package com.pevans.datarepositories.matches;

import java.util.HashMap;
import java.util.Map;

public class MatchContainer {
    private static MatchContainer instance;
    private Map<Integer, MatchGroup> matchGroups;

    private MatchContainer() {
        this.matchGroups = new HashMap();
    }

    public static MatchContainer getInstance() {
        if (instance == null) {
            instance = new MatchContainer();
        }
        return instance;
    }

    public MatchGroup findMatchGroupFromSportId(Integer sportId) {
        MatchGroup matchGroup = (MatchGroup) this.matchGroups.get(sportId);
        return matchGroup == null ? matchGroup : matchGroup;
    }

    public void saveMatchGroup(Integer id, MatchGroup matchGroup) {
        this.matchGroups.put(id, matchGroup);
    }

    public void clear() {
        this.matchGroups.clear();
    }

    public void clearSport(Integer sportId) {
        this.matchGroups.remove(sportId);
    }
}
