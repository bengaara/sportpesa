package com.pevans.dtos;

import com.j256.ormlite.field.DatabaseField;
import com.j256.ormlite.table.DatabaseTable;

@DatabaseTable(tableName = "jackpot_selections")
public class JackpotSelection {
    @DatabaseField
    private String coeff;
    @DatabaseField(generatedId = true)
    private Integer id;
    @DatabaseField(foreign = true)
    private JackpotMarket jackpotMarket;
    @DatabaseField
    private String oddsId;
    @DatabaseField
    private String resultType;

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCoeff() {
        return this.coeff;
    }

    public void setCoeff(String coeff) {
        this.coeff = coeff;
    }

    public String getResultType() {
        return this.resultType;
    }

    public void setResultType(String resultType) {
        this.resultType = resultType;
    }

    public String getOddsId() {
        return this.oddsId;
    }

    public void setOddsId(String oddsId) {
        this.oddsId = oddsId;
    }

    public JackpotMarket getJackpotMarket() {
        return this.jackpotMarket;
    }

    public void setJackpotMarket(JackpotMarket jackpotMarket) {
        this.jackpotMarket = jackpotMarket;
    }
}
