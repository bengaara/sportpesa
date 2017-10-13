package com.pevans.jsoncomunicators;

import com.pevans.dataloaders.AsynkTaskResultReader;
import com.pevans.urls.UpdaterURLs;
import org.json.JSONObject;

public class JCAppInfo extends JsonComunicator {
    public JCAppInfo(JSONObject json, AsynkTaskResultReader resultReader) {
        super(json, UpdaterURLs.APP_INFO, resultReader, JsonComunicator.GET);
    }
}
