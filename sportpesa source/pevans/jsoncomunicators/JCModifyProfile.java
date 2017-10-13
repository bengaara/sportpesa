package com.pevans.jsoncomunicators;

import com.pevans.dataloaders.AsynkTaskResultReader;
import com.pevans.urls.PlayerURLs;
import org.json.JSONObject;

public class JCModifyProfile extends UserJsonComunicator {
    public JCModifyProfile(JSONObject json, AsynkTaskResultReader resultReader) {
        super(json, PlayerURLs.MODIFY_PROFILE, resultReader, JsonComunicator.POST);
    }
}
