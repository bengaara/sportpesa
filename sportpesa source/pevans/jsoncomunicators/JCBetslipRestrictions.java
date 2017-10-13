package com.pevans.jsoncomunicators;

import com.pevans.dataloaders.AsynkTaskResultReader;
import com.pevans.urls.BetURLs;
import org.json.JSONObject;

public class JCBetslipRestrictions extends JsonComunicator {
    public JCBetslipRestrictions(JSONObject json, AsynkTaskResultReader resultReader) {
        super(json, BetURLs.BETSLIP_RESTRICTIONS, resultReader, JsonComunicator.GET);
    }
}
