package com.pevans.dtos;

import com.j256.ormlite.field.DatabaseField;
import com.j256.ormlite.table.DatabaseTable;

@DatabaseTable(tableName = "jackpotbets")
public class JackpotBet {
    public static final String GAME_ID = "gameId";
    public static final String SELECTED_ODD = "selectedOdd";
    @DatabaseField
    private int gameId;
    @DatabaseField(generatedId = true)
    private int id;
    @DatabaseField
    private String oddsId;
    @DatabaseField
    private int order;
    @DatabaseField
    private String selectedOdd;

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getGameId() {
        return this.gameId;
    }

    public void setGameId(int gameId) {
        this.gameId = gameId;
    }

    public String getSelectedOdd() {
        return this.selectedOdd;
    }

    public void setSelectedOdd(String selectedOdd) {
        this.selectedOdd = selectedOdd;
    }

    public String getOddsId() {
        return this.oddsId;
    }

    public void setOddsId(String oddsId) {
        this.oddsId = oddsId;
    }

    public int getOrder() {
        return this.order;
    }

    public void setOrder(int order) {
        this.order = order;
    }
}
