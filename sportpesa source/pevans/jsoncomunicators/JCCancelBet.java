package com.pevans.jsoncomunicators;

import com.pevans.dataloaders.AsynkTaskResultReader;
import com.pevans.urls.PlayerURLs;
import org.json.JSONObject;

public class JCCancelBet extends UserJsonComunicator {
    public JCCancelBet(JSONObject json, AsynkTaskResultReader resultReader) {
        super(json, PlayerURLs.CANCEL_BET, resultReader, JsonComunicator.POST);
    }
}
