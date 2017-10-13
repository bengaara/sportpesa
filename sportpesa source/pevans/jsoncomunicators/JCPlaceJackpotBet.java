package com.pevans.jsoncomunicators;

import com.pevans.dataloaders.AsynkTaskResultReader;
import com.pevans.urls.PlayerURLs;
import org.json.JSONObject;

public class JCPlaceJackpotBet extends UserJsonComunicator {
    public JCPlaceJackpotBet(JSONObject json, AsynkTaskResultReader resultReader) {
        super(json, PlayerURLs.PLACE_JACKPOT_BET, resultReader, JsonComunicator.POST);
    }
}
