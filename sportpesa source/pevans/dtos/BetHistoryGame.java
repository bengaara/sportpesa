package com.pevans.dtos;

public class BetHistoryGame {
    private String coeff;
    private String dateTime;
    private String forecast;
    private Integer gameId;
    private String marketType;
    private String name;
    private Integer number;
    private String result;
    private Integer sportId;

    public Integer getNumber() {
        return this.number;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }

    public Integer getGameId() {
        return this.gameId;
    }

    public void setGameId(Integer gameId) {
        this.gameId = gameId;
    }

    public String getDateTime() {
        return this.dateTime;
    }

    public void setDateTime(String dateTime) {
        this.dateTime = dateTime;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCoeff() {
        return this.coeff;
    }

    public void setCoeff(String coeff) {
        this.coeff = coeff;
    }

    public String getMarketType() {
        return this.marketType;
    }

    public void setMarketType(String marketType) {
        this.marketType = marketType;
    }

    public String getForecast() {
        return this.forecast;
    }

    public void setForecast(String forecast) {
        this.forecast = forecast;
    }

    public Integer getSportId() {
        return this.sportId;
    }

    public void setSportId(Integer sportId) {
        this.sportId = sportId;
    }

    public String getResult() {
        return this.result;
    }

    public void setResult(String result) {
        this.result = result;
    }
}
