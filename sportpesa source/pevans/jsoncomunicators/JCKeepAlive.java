package com.pevans.jsoncomunicators;

import com.pevans.dataloaders.AsynkTaskResultReader;
import com.pevans.urls.PlayerURLs;
import org.json.JSONObject;

public class JCKeepAlive extends UserJsonComunicator {
    public JCKeepAlive(JSONObject json, AsynkTaskResultReader resultReader) {
        super(json, PlayerURLs.KEEP_ALIVE, resultReader, JsonComunicator.POST);
    }
}
