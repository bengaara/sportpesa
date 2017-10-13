package com.pevans.jsoncomunicators;

import com.pevans.dataloaders.AsynkTaskResultReader;
import com.pevans.urls.PlayerURLs;
import org.json.JSONObject;

public class JCPlaceBet extends UserJsonComunicator {
    public JCPlaceBet(JSONObject json, AsynkTaskResultReader resultReader) {
        super(json, PlayerURLs.PLACE_BET, resultReader, JsonComunicator.POST);
    }
}
