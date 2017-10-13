package com.pevans.datarepositories.jackpot;

import android.content.SharedPreferences;
import android.content.SharedPreferences.Editor;
import com.pevans.SportpesaApplication;
import cz.msebera.httpclient.android.BuildConfig;
import java.io.Serializable;
import java.math.BigDecimal;

public class JackpotSummaryRepository implements Serializable {
    private static final String AMOUNT = "amount";
    private static final String BET_AMOUNT = "betAmount";
    private static final String END_DATE = "end_date";
    private static final String ID = "id";
    private static final String MAX_DOUBLE_PREDICT = "maxDoublePredict";
    private static final String START_DATE = "start_date";
    private static final String STATUS = "status";
    private static JackpotSummaryRepository instance = null;
    private static final long serialVersionUID = 3531757215384814979L;
    private BigDecimal amount;
    private BigDecimal betAmount;
    private String endDate;
    private Integer id;
    private SharedPreferences jackpotPreferences;
    private Integer maxDoublePredict;
    private String startDate;
    private Integer status;

    private JackpotSummaryRepository() {
        this.jackpotPreferences = SportpesaApplication.getAppContext().getSharedPreferences("jackpot", 0);
    }

    public static JackpotSummaryRepository getInstance() {
        if (instance == null) {
            instance = new JackpotSummaryRepository();
        }
        return instance;
    }

    public BigDecimal getAmount() {
        if (this.amount == null) {
            this.amount = new BigDecimal(this.jackpotPreferences.getLong(AMOUNT, 0));
        }
        return this.amount;
    }

    public void setAmount(BigDecimal amount) {
        Editor editor = this.jackpotPreferences.edit();
        editor.putLong(AMOUNT, amount.longValue());
        editor.commit();
        this.amount = amount;
    }

    public BigDecimal getBetAmount() {
        if (this.betAmount == null) {
            this.betAmount = new BigDecimal(this.jackpotPreferences.getLong(BET_AMOUNT, 0));
        }
        return this.betAmount;
    }

    public void setBetAmount(BigDecimal betAmount) {
        Editor editor = this.jackpotPreferences.edit();
        editor.putLong(BET_AMOUNT, betAmount.longValue());
        editor.commit();
        this.betAmount = betAmount;
    }

    public Integer getMaxDoublePredict() {
        if (this.maxDoublePredict == null) {
            this.maxDoublePredict = Integer.valueOf(this.jackpotPreferences.getInt(MAX_DOUBLE_PREDICT, 0));
        }
        return this.maxDoublePredict;
    }

    public void setMaxDoublePredict(Integer maxDoublePredict) {
        Editor editor = this.jackpotPreferences.edit();
        editor.putInt(MAX_DOUBLE_PREDICT, maxDoublePredict.intValue());
        editor.commit();
        this.maxDoublePredict = maxDoublePredict;
    }

    public Integer getId() {
        if (this.id == null) {
            this.id = Integer.valueOf(this.jackpotPreferences.getInt(ID, 0));
        }
        return this.id;
    }

    public void setId(Integer id) {
        Editor editor = this.jackpotPreferences.edit();
        editor.putInt(ID, id.intValue());
        editor.commit();
        this.id = id;
    }

    public Integer getStatus() {
        if (this.status == null) {
            this.status = Integer.valueOf(this.jackpotPreferences.getInt(STATUS, 0));
        }
        return this.status;
    }

    public void setStatus(Integer status) {
        Editor editor = this.jackpotPreferences.edit();
        editor.putInt(STATUS, status.intValue());
        editor.apply();
        this.status = status;
    }

    public String getStartDate() {
        if (this.startDate == null) {
            this.startDate = this.jackpotPreferences.getString(START_DATE, BuildConfig.VERSION_NAME);
        }
        return this.startDate;
    }

    public void setStartDate(String startDate) {
        Editor editor = this.jackpotPreferences.edit();
        editor.putString(START_DATE, startDate);
        editor.apply();
        this.startDate = startDate;
    }

    public String getEndDate() {
        if (this.endDate == null) {
            this.endDate = this.jackpotPreferences.getString(END_DATE, BuildConfig.VERSION_NAME);
        }
        return this.endDate;
    }

    public void setEndDate(String endDate) {
        Editor editor = this.jackpotPreferences.edit();
        editor.putString(END_DATE, endDate);
        editor.apply();
        this.endDate = endDate;
    }
}
