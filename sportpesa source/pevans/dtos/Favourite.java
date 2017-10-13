package com.pevans.dtos;

import com.j256.ormlite.field.DataType;
import com.j256.ormlite.field.DatabaseField;
import com.j256.ormlite.table.DatabaseTable;
import java.io.Serializable;

@DatabaseTable(tableName = "favourites")
public class Favourite implements Serializable {
    private static final long serialVersionUID = -6553627620095031925L;
    @DatabaseField(dataType = DataType.INTEGER_OBJ)
    private Integer sportId;
    @DatabaseField(dataType = DataType.INTEGER_OBJ, id = true)
    private Integer teamId;
    @DatabaseField(dataType = DataType.STRING)
    private String teamName;

    public Favourite() {
        this(null, null, null);
    }

    public Favourite(Integer teamId, String teamName, Integer sportId) {
        this.teamId = teamId;
        this.teamName = teamName;
        this.sportId = sportId;
    }

    public Integer getTeamId() {
        return this.teamId;
    }

    public void setTeamId(Integer teamId) {
        this.teamId = teamId;
    }

    public String getTeamName() {
        return this.teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }

    public Integer getSportId() {
        return this.sportId;
    }

    public void setSportId(Integer sportId) {
        this.sportId = sportId;
    }
}
