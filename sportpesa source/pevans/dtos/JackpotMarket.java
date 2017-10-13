package com.pevans.dtos;

import com.j256.ormlite.dao.ForeignCollection;
import com.j256.ormlite.field.DatabaseField;
import com.j256.ormlite.field.ForeignCollectionField;
import com.j256.ormlite.table.DatabaseTable;

@DatabaseTable(tableName = "jackpot_markets")
public class JackpotMarket {
    @DatabaseField(generatedId = true)
    private Integer id;
    @DatabaseField
    private Integer marketId;
    @DatabaseField(foreign = true)
    private JackpotMatch match;
    @ForeignCollectionField(eager = true)
    private ForeignCollection<JackpotSelection> selections;

    public Integer getMarketId() {
        return this.marketId;
    }

    public void setMarketId(Integer marketId) {
        this.marketId = marketId;
    }

    public JackpotMatch getMatch() {
        return this.match;
    }

    public void setMatch(JackpotMatch match) {
        this.match = match;
    }

    public ForeignCollection<JackpotSelection> getSelections() {
        return this.selections;
    }

    public void setSelections(ForeignCollection<JackpotSelection> selections) {
        this.selections = selections;
    }

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}
