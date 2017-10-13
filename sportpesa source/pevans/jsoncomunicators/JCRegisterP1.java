package com.pevans.jsoncomunicators;

import com.pevans.dataloaders.AsynkTaskResultReader;
import com.pevans.urls.PlayerURLs;
import org.json.JSONObject;

public class JCRegisterP1 extends JsonComunicator {
    public JCRegisterP1(JSONObject json, AsynkTaskResultReader resultReader) {
        super(json, PlayerURLs.REGISTER_STEP1, resultReader, JsonComunicator.POST);
    }
}
