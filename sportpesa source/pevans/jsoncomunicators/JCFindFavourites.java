package com.pevans.jsoncomunicators;

import com.pevans.dataloaders.AsynkTaskResultReader;
import com.pevans.urls.PlayerURLs;
import org.json.JSONObject;

public class JCFindFavourites extends UserJsonComunicator {
    public JCFindFavourites(JSONObject json, AsynkTaskResultReader resultReader) {
        super(json, PlayerURLs.FIND_FAVOURITES, resultReader, JsonComunicator.POST);
    }
}
