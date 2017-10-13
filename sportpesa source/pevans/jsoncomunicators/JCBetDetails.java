package com.pevans.jsoncomunicators;

import com.pevans.dataloaders.AsynkTaskResultReader;
import com.pevans.urls.PlayerURLs;
import org.json.JSONObject;

public class JCBetDetails extends JsonComunicator {
    public JCBetDetails(JSONObject json, AsynkTaskResultReader resultReader, Integer betId, boolean isJackpot) {
        super(json, PlayerURLs.BET_DETAILS.replace(PlayerURLs.BET_ID, betId.toString()).replace(PlayerURLs.BET_TYPE, isJackpot ? "1" : "0"), resultReader, JsonComunicator.POST);
    }
}
