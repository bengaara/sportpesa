package com.pevans.jsoncomunicators;

import com.pevans.dataloaders.AsynkTaskResultReader;
import com.pevans.urls.PlayerURLs;
import org.json.JSONObject;

public class JCLogin extends UserJsonComunicator {
    public JCLogin(JSONObject json, AsynkTaskResultReader resultReader) {
        super(json, PlayerURLs.LOGIN, resultReader, JsonComunicator.POST);
    }
}
