package com.pevans.jsoncomunicators;

import com.pevans.dataloaders.AsynkTaskResultReader;
import com.pevans.urls.PlayerURLs;
import org.json.JSONObject;

public class JCPendingWithdraws extends UserJsonComunicator {
    public JCPendingWithdraws(JSONObject json, AsynkTaskResultReader resultReader) {
        super(json, PlayerURLs.PENDING_WITHDRAWS, resultReader, JsonComunicator.POST);
    }
}
