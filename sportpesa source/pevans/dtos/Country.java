package com.pevans.dtos;

import com.j256.ormlite.dao.ForeignCollection;
import com.j256.ormlite.field.DatabaseField;
import com.j256.ormlite.field.ForeignCollectionField;
import com.j256.ormlite.table.DatabaseTable;
import java.io.Serializable;

@DatabaseTable(tableName = "countries")
public class Country implements Serializable {
    private static final long serialVersionUID = 1866991409721064330L;
    @DatabaseField(id = true)
    private Integer id;
    @ForeignCollectionField(eager = true)
    private ForeignCollection<League> leagues;
    @DatabaseField
    private String name;
    @DatabaseField
    private Integer sportId;

    public Country() {
        this(null, null, null);
    }

    public Country(Integer sportId, Integer id, String name) {
        this.sportId = sportId;
        this.id = id;
        this.name = name;
    }

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getSportId() {
        return this.sportId;
    }

    public void setSportId(Integer sportId) {
        this.sportId = sportId;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ForeignCollection<League> getLeagues() {
        return this.leagues;
    }

    public void setLeagues(ForeignCollection<League> leagues) {
        this.leagues = leagues;
    }
}
