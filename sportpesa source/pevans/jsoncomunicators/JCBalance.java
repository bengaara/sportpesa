package com.pevans.jsoncomunicators;

import com.pevans.dataloaders.AsynkTaskResultReader;
import com.pevans.urls.PlayerURLs;
import org.json.JSONObject;

public class JCBalance extends UserJsonComunicator {
    public JCBalance(JSONObject json, AsynkTaskResultReader resultReader) {
        super(json, PlayerURLs.BALANCE, resultReader, JsonComunicator.POST);
    }
}
