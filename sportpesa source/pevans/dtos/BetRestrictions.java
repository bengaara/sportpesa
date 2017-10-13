package com.pevans.dtos;

public class BetRestrictions {
    private Integer maxBetMulti;
    private Integer maxBetNum;
    private Integer maxBetSingle;
    private Integer minBetMulti;
    private Integer minBetSingle;
    private Integer posWinMaxMulti;
    private Integer posWinMaxSingle;

    public Integer getMaxBetNum() {
        return this.maxBetNum;
    }

    public void setMaxBetNum(Integer maxBetNum) {
        this.maxBetNum = maxBetNum;
    }

    public Integer getMinBetSingle() {
        return this.minBetSingle;
    }

    public void setMinBetSingle(Integer minBetSingle) {
        this.minBetSingle = minBetSingle;
    }

    public Integer getMaxBetSingle() {
        return this.maxBetSingle;
    }

    public void setMaxBetSingle(Integer maxBetSingle) {
        this.maxBetSingle = maxBetSingle;
    }

    public Integer getPosWinMaxSingle() {
        return this.posWinMaxSingle;
    }

    public void setPosWinMaxSingle(Integer posWinMaxSingle) {
        this.posWinMaxSingle = posWinMaxSingle;
    }

    public Integer getMinBetMulti() {
        return this.minBetMulti;
    }

    public void setMinBetMulti(Integer minBetMulti) {
        this.minBetMulti = minBetMulti;
    }

    public Integer getMaxBetMulti() {
        return this.maxBetMulti;
    }

    public void setMaxBetMulti(Integer maxBetMulti) {
        this.maxBetMulti = maxBetMulti;
    }

    public Integer getPosWinMaxMulti() {
        return this.posWinMaxMulti;
    }

    public void setPosWinMaxMulti(Integer posWinMaxMulti) {
        this.posWinMaxMulti = posWinMaxMulti;
    }
}
