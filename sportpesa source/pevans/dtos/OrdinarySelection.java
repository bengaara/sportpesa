package com.pevans.dtos;

import com.j256.ormlite.field.DatabaseField;
import com.j256.ormlite.table.DatabaseTable;
import cz.msebera.httpclient.android.BuildConfig;
import java.io.Serializable;

@DatabaseTable(tableName = "ordinary_selections")
public class OrdinarySelection implements Serializable {
    @DatabaseField
    private String coeff;
    @DatabaseField(generatedId = true)
    private Integer id;
    @DatabaseField
    private String newCoeff;
    @DatabaseField
    private String oddsId;
    @DatabaseField
    private String resultType;
    @DatabaseField
    private String secondaryResultType;

    public OrdinarySelection() {
        this.newCoeff = BuildConfig.VERSION_NAME;
    }

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

    public String getSecondaryResultType() {
        return this.secondaryResultType;
    }

    public void setSecondaryResultType(String secondaryResultType) {
        this.secondaryResultType = secondaryResultType;
    }

    public String getNewCoeff() {
        return this.newCoeff;
    }

    public void setNewCoeff(String newCoeff) {
        this.newCoeff = newCoeff;
    }
}
