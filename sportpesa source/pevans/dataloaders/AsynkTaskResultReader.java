package com.pevans.dataloaders;

import com.pevans.jsoncomunicators.JsonComunicator;

public interface AsynkTaskResultReader {
    boolean saveResult(Integer num, Object obj, JsonComunicator jsonComunicator);
}
