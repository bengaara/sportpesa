package com.pevans.helpers;

import com.pevans.dtos.OrdinaryMatch;
import java.util.List;

public class MatchListHelper {
    public static OrdinaryMatch findMatchByGameID(Integer gameId, List<OrdinaryMatch> matchList) {
        for (OrdinaryMatch m : matchList) {
            if (m.getGameId().equals(gameId)) {
                return m;
            }
        }
        return null;
    }
}
