package com.pevans.jsoncomunicators;

import com.pevans.dataloaders.AsynkTaskResultReader;
import com.pevans.urls.DataURLs;
import org.json.JSONObject;

public class JCJackpotMatches extends JsonComunicator {
    public JCJackpotMatches(JSONObject json, AsynkTaskResultReader resultReader) {
        super(json, DataURLs.JACKPOT_MATCHES, resultReader, JsonComunicator.GET);
    }
}
