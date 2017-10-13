package com.pevans.dtos;

import java.io.Serializable;
import java.util.List;

public class BetHistory implements Serializable {
    private String betAmount;
    private Integer betId;
    private String betStatus;
    private String betType;
    private Integer cancel;
    private String dateTime;
    private String description;
    private List<BetHistoryGame> games;
    private String id;
    private String jpId;
    private String possibleWinnings;

    public Integer getBetId() {
        return this.betId;
    }

    public void setBetId(Integer betId) {
        this.betId = betId;
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getJpId() {
        return this.jpId;
    }

    public void setJpId(String jpId) {
        this.jpId = jpId;
    }

    public String getBetStatus() {
        return this.betStatus;
    }

    public void setBetStatus(String betStatus) {
        this.betStatus = betStatus;
    }

    public String getBetAmount() {
        return this.betAmount;
    }

    public void setBetAmount(String betAmount) {
        this.betAmount = betAmount;
    }

    public String getDateTime() {
        return this.dateTime;
    }

    public void setDateTime(String dateTime) {
        this.dateTime = dateTime;
    }

    public String getBetType() {
        return this.betType;
    }

    public void setBetType(String betType) {
        this.betType = betType;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPossibleWinnings() {
        return this.possibleWinnings;
    }

    public void setPossibleWinnings(String possibleWinnings) {
        this.possibleWinnings = possibleWinnings;
    }

    public List<BetHistoryGame> getGames() {
        return this.games;
    }

    public void setGames(List<BetHistoryGame> games) {
        this.games = games;
    }

    public Integer getCancel() {
        return this.cancel;
    }

    public void setCancel(Integer cancel) {
        this.cancel = cancel;
    }
}
