package com.pevans.jsoncomunicators;

import com.pevans.dataloaders.AsynkTaskResultReader;
import com.pevans.dtos.Sport;
import com.pevans.urls.DataURLs;
import org.json.JSONObject;

public class JCHighlightMatches extends JsonComunicator {
    private Sport sport;

    public JCHighlightMatches(JSONObject json, AsynkTaskResultReader resultReader, Sport sport) {
        super(json, DataURLs.HIGHLIGHTS.replace(DataURLs.SPORT_ID, sport.getId().toString()), resultReader, JsonComunicator.GET);
        this.sport = sport;
    }

    public Sport getSport() {
        return this.sport;
    }
}
