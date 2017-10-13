package com.pevans.datarepositories.matches;

import com.pevans.dtos.OrdinaryMatch;
import com.pevans.sportpesa.Observer;
import java.util.ArrayList;

public interface TodayHighlightsObserver extends Observer {
    void gamesUpated(Observer observer, ArrayList<OrdinaryMatch> arrayList);
}
