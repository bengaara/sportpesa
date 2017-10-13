package com.pevans.dtos;

import com.j256.ormlite.field.DatabaseField;
import com.j256.ormlite.table.DatabaseTable;
import java.util.Date;

@DatabaseTable(tableName = "jackpot_matches")
public class JackpotMatch {
    @DatabaseField
    private String country;
    @DatabaseField
    private Integer countryId;
    @DatabaseField(id = true)
    private Integer gameId;
    @DatabaseField
    private String leagueName;
    @DatabaseField
    private Integer longGameId;
    @DatabaseField
    private String longResult;
    @DatabaseField(foreign = true)
    private JackpotMarket mainMarket;
    @DatabaseField
    private Integer marketsCount;
    @DatabaseField
    private Integer order;
    @DatabaseField
    private String shortResult;
    @DatabaseField
    private String sportName;
    @DatabaseField
    private Date startDate;
    @DatabaseField
    private String team1;
    @DatabaseField
    private Integer team1Id;
    @DatabaseField
    private String team2;
    @DatabaseField
    private Integer team2Id;

    public Integer getGameId() {
        return this.gameId;
    }

    public void setGameId(Integer gameId) {
        this.gameId = gameId;
    }

    public Integer getLongGameId() {
        return this.longGameId;
    }

    public void setLongGameId(Integer longGameId) {
        this.longGameId = longGameId;
    }

    public String getTeam1() {
        return this.team1;
    }

    public void setTeam1(String team1) {
        this.team1 = team1;
    }

    public String getTeam2() {
        return this.team2;
    }

    public void setTeam2(String team2) {
        this.team2 = team2;
    }

    public Date getStartDate() {
        return this.startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Integer getMarketsCount() {
        return this.marketsCount;
    }

    public void setMarketsCount(Integer marketsCount) {
        this.marketsCount = marketsCount;
    }

    public String getSportName() {
        return this.sportName;
    }

    public void setSportName(String sportName) {
        this.sportName = sportName;
    }

    public String getLeagueName() {
        return this.leagueName;
    }

    public void setLeagueName(String leagueName) {
        this.leagueName = leagueName;
    }

    public JackpotMarket getMainMarket() {
        return this.mainMarket;
    }

    public void setMainMarket(JackpotMarket mainMarket) {
        this.mainMarket = mainMarket;
    }

    public Integer getOrder() {
        return this.order;
    }

    public void setOrder(Integer order) {
        this.order = order;
    }

    public Integer getCountryId() {
        return this.countryId;
    }

    public void setCountryId(Integer countryId) {
        this.countryId = countryId;
    }

    public String getCountry() {
        return this.country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public Integer getTeam1Id() {
        return this.team1Id;
    }

    public void setTeam1Id(Integer team1Id) {
        this.team1Id = team1Id;
    }

    public Integer getTeam2Id() {
        return this.team2Id;
    }

    public void setTeam2Id(Integer team2Id) {
        this.team2Id = team2Id;
    }

    public String getShortResult() {
        return this.shortResult;
    }

    public void setShortResult(String shortResult) {
        this.shortResult = shortResult;
    }

    public String getLongResult() {
        return this.longResult;
    }

    public void setLongResult(String longResult) {
        this.longResult = longResult;
    }
}
