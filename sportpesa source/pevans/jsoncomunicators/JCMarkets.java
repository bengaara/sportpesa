package com.pevans.jsoncomunicators;

import com.pevans.dataloaders.AsynkTaskResultReader;
import com.pevans.dtos.OrdinaryMatch;
import com.pevans.urls.DataURLs;
import org.json.JSONObject;

public class JCMarkets extends JsonComunicator {
    public JCMarkets(JSONObject json, AsynkTaskResultReader resultReader, OrdinaryMatch m) {
        super(json, DataURLs.MARKETS.replace(DataURLs.MATCH_ID, m.getLongGameId().toString()), resultReader, JsonComunicator.GET);
    }
}
