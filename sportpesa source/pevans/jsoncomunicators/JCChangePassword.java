package com.pevans.jsoncomunicators;

import com.pevans.dataloaders.AsynkTaskResultReader;
import com.pevans.urls.PlayerURLs;
import org.json.JSONObject;

public class JCChangePassword extends UserJsonComunicator {
    public JCChangePassword(JSONObject json, AsynkTaskResultReader resultReader) {
        super(json, PlayerURLs.CHANGE_PASSWORD_P1, resultReader, JsonComunicator.POST);
    }
}
