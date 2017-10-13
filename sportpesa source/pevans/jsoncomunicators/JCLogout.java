package com.pevans.jsoncomunicators;

import com.pevans.dataloaders.AsynkTaskResultReader;
import com.pevans.urls.PlayerURLs;
import org.json.JSONObject;

public class JCLogout extends JsonComunicator {
    public JCLogout(JSONObject json, AsynkTaskResultReader resultReader) {
        super(json, PlayerURLs.LOGOUT, resultReader, JsonComunicator.POST);
    }
}
