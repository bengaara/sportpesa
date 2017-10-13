package com.pevans.jsoncomunicators;

import com.pevans.dataloaders.AsynkTaskResultReader;
import com.pevans.urls.PlayerURLs;
import org.json.JSONObject;

public class JCOpenProfile extends UserJsonComunicator {
    public JCOpenProfile(JSONObject json, AsynkTaskResultReader resultReader) {
        super(json, PlayerURLs.OPEN_PROFILE, resultReader, JsonComunicator.POST);
    }
}
