package com.pevans.jsoncomunicators;

import com.pevans.dataloaders.AsynkTaskResultReader;
import com.pevans.urls.PlayerURLs;
import org.json.JSONObject;

public class JCRegisterP2 extends JsonComunicator {
    public JCRegisterP2(JSONObject json, AsynkTaskResultReader resultReader) {
        super(json, PlayerURLs.REGISTER_STEP2, resultReader, JsonComunicator.POST);
    }
}
