package com.pevans.dtos;

import com.j256.ormlite.field.DatabaseField;
import com.j256.ormlite.field.ForeignCollectionField;
import com.j256.ormlite.table.DatabaseTable;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@DatabaseTable(tableName = "ordinary_markets")
public class OrdinaryMarket implements Serializable {
    @DatabaseField
    private String eventDesc;
    @DatabaseField(id = true)
    private Integer marketId;
    @DatabaseField(foreign = true)
    private OrdinaryMatch match;
    @DatabaseField
    private Integer order;
    @ForeignCollectionField
    private List<OrdinarySelection> selections;

    public OrdinaryMarket() {
        this.selections = new ArrayList();
    }

    public Integer getMarketId() {
        return this.marketId;
    }

    public void setMarketId(Integer marketId) {
        this.marketId = marketId;
    }

    public String getEventDesc() {
        return this.eventDesc;
    }

    public void setEventDesc(String eventDesc) {
        this.eventDesc = eventDesc;
    }

    public OrdinaryMatch getMatch() {
        return this.match;
    }

    public void setMatch(OrdinaryMatch match) {
        this.match = match;
    }

    public Integer getOrder() {
        return this.order;
    }

    public void setOrder(Integer order) {
        this.order = order;
    }

    public List<OrdinarySelection> getSelections() {
        return this.selections;
    }

    public void setSelections(List<OrdinarySelection> selections) {
        this.selections = selections;
    }
}
