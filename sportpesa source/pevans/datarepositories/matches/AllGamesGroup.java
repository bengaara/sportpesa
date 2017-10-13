package com.pevans.datarepositories.matches;

import com.pevans.dtos.OrdinaryMatch;
import java.util.ArrayList;

public class AllGamesGroup {
    private ArrayList<OrdinaryMatch> games;
    private Long gamesCreationMark;

    public Long getGamesCreationMark() {
        return this.gamesCreationMark;
    }

    public void setGamesCreationMark(Long gamesCreationMark) {
        this.gamesCreationMark = gamesCreationMark;
    }

    public ArrayList<OrdinaryMatch> getGames() {
        return this.games;
    }

    public void setGames(ArrayList<OrdinaryMatch> games) {
        this.games = games;
    }
}
