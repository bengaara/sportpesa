package com.pevans.jsoncomunicators;

import com.pevans.dataloaders.AsynkTaskResultReader;
import com.pevans.urls.PlayerURLs;
import org.json.JSONObject;

public class JCBetHistory extends UserJsonComunicator {
    public JCBetHistory(JSONObject json, AsynkTaskResultReader resultReader) {
        super(json, PlayerURLs.BET_HISTORY, resultReader, JsonComunicator.POST);
    }
}
