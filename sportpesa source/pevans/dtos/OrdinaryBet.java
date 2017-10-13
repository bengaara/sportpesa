package com.pevans.dtos;

import com.j256.ormlite.field.DatabaseField;
import com.j256.ormlite.table.DatabaseTable;
import java.io.Serializable;
import java.util.Date;

@DatabaseTable(tableName = "ordinary_bets")
public class OrdinaryBet implements Serializable, Cloneable {
    public static final String GAME_ID = "gameId";
    private static final long serialVersionUID = -3381725763045010568L;
    @DatabaseField
    private String fixture;
    @DatabaseField
    private int gameId;
    @DatabaseField
    private String icon;
    @DatabaseField(generatedId = true)
    private Integer id;
    @DatabaseField
    private String market;
    @DatabaseField
    private Integer marketId;
    @DatabaseField
    private Date matchDate;
    @DatabaseField
    private String newOdd;
    @DatabaseField
    private String odd;
    @DatabaseField
    private boolean oddModified;
    @DatabaseField
    private String oddsId;
    @DatabaseField
    private int order;
    @DatabaseField
    private String pick;
    @DatabaseField
    private String selectedOdd;
    @DatabaseField
    private int sportId;

    public OrdinaryBet() {
        this.oddModified = false;
    }

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getGameId() {
        return Integer.valueOf(this.gameId);
    }

    public void setGameId(Integer gameId) {
        this.gameId = gameId.intValue();
    }

    public String getFixture() {
        return this.fixture;
    }

    public void setFixture(String fixture) {
        this.fixture = fixture;
    }

    public String getSelectedOdd() {
        return this.selectedOdd;
    }

    public void setSelectedOdd(String selectedOdd) {
        this.selectedOdd = selectedOdd;
    }

    public String getOdd() {
        return this.odd;
    }

    public void setOdd(String odd) {
        this.odd = odd;
    }

    public String getIcon() {
        return this.icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public String getPick() {
        return this.pick;
    }

    public void setPick(String pick) {
        this.pick = pick;
    }

    public String getMarket() {
        return this.market;
    }

    public void setMarket(String marketName) {
        this.market = marketName;
    }

    public boolean isOddModified() {
        return this.oddModified;
    }

    public void setOddModified(boolean oddModified) {
        this.oddModified = oddModified;
    }

    public String getNewOdd() {
        return this.newOdd;
    }

    public void setNewOdd(String newOdd) {
        this.newOdd = newOdd;
    }

    public Integer getSportId() {
        return Integer.valueOf(this.sportId);
    }

    public void setSportId(Integer sportId) {
        this.sportId = sportId.intValue();
    }

    public Integer getOrder() {
        return Integer.valueOf(this.order);
    }

    public void setOrder(Integer order) {
        this.order = order.intValue();
    }

    public String getOddsId() {
        return this.oddsId;
    }

    public void setOddsId(String oddsId) {
        this.oddsId = oddsId;
    }

    public Date getMatchDate() {
        return this.matchDate;
    }

    public void setMatchDate(Date matchDate) {
        this.matchDate = matchDate;
    }

    public Integer getMarketId() {
        return this.marketId;
    }

    public void setMarketId(Integer marketId) {
        this.marketId = marketId;
    }
}
