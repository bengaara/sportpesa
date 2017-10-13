package com.pevans.jsoncomunicators;

import com.pevans.dataloaders.AsynkTaskResultReader;
import com.pevans.urls.DataURLs;
import org.json.JSONObject;

public class JCJackpotSummary extends JsonComunicator {
    public JCJackpotSummary(JSONObject json, AsynkTaskResultReader resultReader) {
        super(json, DataURLs.JACKPOT_SUMMARY, resultReader, JsonComunicator.GET);
    }
}
