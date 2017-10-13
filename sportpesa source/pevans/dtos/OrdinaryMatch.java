package com.pevans.dtos;

import com.j256.ormlite.field.DatabaseField;
import com.j256.ormlite.field.ForeignCollectionField;
import com.j256.ormlite.table.DatabaseTable;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@DatabaseTable(tableName = "matches")
public class OrdinaryMatch implements Serializable {
    private static final long serialVersionUID = -4266809627470657820L;
    @DatabaseField
    private String country;
    @DatabaseField
    private Integer countryId;
    @DatabaseField(id = true)
    private Integer gameId;
    @DatabaseField(foreign = true)
    private League league;
    @DatabaseField
    private String leagueName;
    @DatabaseField
    private Integer longGameId;
    @DatabaseField
    private String longResult;
    @DatabaseField(foreign = true)
    private OrdinaryMarket mainMarket;
    @ForeignCollectionField(eager = false)
    private List<OrdinaryMarket> markets;
    @DatabaseField
    private Integer marketsCount;
    @DatabaseField
    private Integer order;
    @ForeignCollectionField(eager = false)
    private List<OrdinaryBet> ordinaryBets;
    @DatabaseField
    private String shorResult;
    @DatabaseField(foreign = true)
    private Sport sport;
    @DatabaseField
    private String sportName;
    @DatabaseField
    private Date startDate;
    @DatabaseField
    private String team1;
    @DatabaseField
    private Integer team1id;
    @DatabaseField
    private String team2;
    @DatabaseField
    private Integer team2id;

    public OrdinaryMatch() {
        this.markets = new ArrayList();
    }

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

    public List<OrdinaryMarket> getMarkets() {
        return this.markets;
    }

    public void setMarkets(List<OrdinaryMarket> markets) {
        this.markets = markets;
    }

    public Sport getSport() {
        return this.sport;
    }

    public void setSport(Sport sport) {
        this.sport = sport;
    }

    public String getLeagueName() {
        return this.leagueName;
    }

    public void setLeagueName(String leagueName) {
        this.leagueName = leagueName;
    }

    public OrdinaryMarket getMainMarket() {
        return this.mainMarket;
    }

    public void setMainMarket(OrdinaryMarket mainMarket) {
        this.mainMarket = mainMarket;
    }

    public Integer getOrder() {
        return this.order;
    }

    public void setOrder(Integer order) {
        this.order = order;
    }

    public List<OrdinaryBet> getOrdinaryBets() {
        return this.ordinaryBets;
    }

    public void setOrdinaryBets(List<OrdinaryBet> ordinaryBets) {
        this.ordinaryBets = ordinaryBets;
    }

    public League getLeague() {
        return this.league;
    }

    public void setLeague(League league) {
        this.league = league;
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

    public Integer getTeam1id() {
        return this.team1id;
    }

    public void setTeam1id(Integer team1id) {
        this.team1id = team1id;
    }

    public Integer getTeam2id() {
        return this.team2id;
    }

    public void setTeam2id(Integer team2id) {
        this.team2id = team2id;
    }

    public String getLongResult() {
        return this.longResult;
    }

    public void setLongResult(String longResult) {
        this.longResult = longResult;
    }

    public String getShorResult() {
        return this.shorResult;
    }

    public void setShorResult(String shorResult) {
        this.shorResult = shorResult;
    }
}
