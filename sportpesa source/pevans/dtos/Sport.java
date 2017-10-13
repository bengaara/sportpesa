package com.pevans.dtos;

import com.j256.ormlite.field.DataType;
import com.j256.ormlite.field.DatabaseField;
import com.j256.ormlite.table.DatabaseTable;
import java.io.Serializable;

@DatabaseTable(tableName = "sports")
public class Sport implements Serializable {
    private static final long serialVersionUID = -2061383689159904350L;
    @DatabaseField(dataType = DataType.BOOLEAN)
    private boolean hasMatches;
    @DatabaseField(dataType = DataType.INTEGER, id = true)
    private int id;
    @DatabaseField(dataType = DataType.STRING)
    private String name;
    @DatabaseField(dataType = DataType.INTEGER)
    private int order;

    public Integer getId() {
        return Integer.valueOf(this.id);
    }

    public void setId(Integer id) {
        this.id = id.intValue();
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getOrder() {
        return Integer.valueOf(this.order);
    }

    public void setOrder(Integer order) {
        this.order = order.intValue();
    }

    public boolean isHasMatches() {
        return this.hasMatches;
    }

    public void setHasMatches(boolean hasMatches) {
        this.hasMatches = hasMatches;
    }
}
