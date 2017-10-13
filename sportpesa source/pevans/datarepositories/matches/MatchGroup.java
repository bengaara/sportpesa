package com.pevans.datarepositories.matches;

import com.pevans.dtos.OrdinaryMatch;
import java.util.ArrayList;

public class MatchGroup {
    private ArrayList<OrdinaryMatch> highlights;
    private Long highlightsCreationMark;
    private ArrayList<OrdinaryMatch> today;
    private Long todayCreationMark;
    private ArrayList<OrdinaryMatch> todayHighlights;
    private Long todayHighlightsCreationMark;

    public Long getTodayCreationMark() {
        return this.todayCreationMark;
    }

    public void setTodayCreationMark(Long todayCreationMark) {
        this.todayCreationMark = todayCreationMark;
    }

    public Long getHighlightsCreationMark() {
        return this.highlightsCreationMark;
    }

    public void setHighlightsCreationMark(Long highlightsCreationMark) {
        this.highlightsCreationMark = highlightsCreationMark;
    }

    public ArrayList<OrdinaryMatch> getHighlights() {
        return this.highlights;
    }

    public void setHighlights(ArrayList<OrdinaryMatch> highlights) {
        this.highlights = highlights;
    }

    public ArrayList<OrdinaryMatch> getToday() {
        return this.today;
    }

    public void setToday(ArrayList<OrdinaryMatch> today) {
        this.today = today;
    }

    public ArrayList<OrdinaryMatch> getTodayHighlights() {
        return this.todayHighlights;
    }

    public void setTodayHighlights(ArrayList<OrdinaryMatch> todayHighlights) {
        this.todayHighlights = todayHighlights;
    }

    public Long getTodayHighlightsCreationMark() {
        return this.todayHighlightsCreationMark;
    }

    public void setTodayHighlightsCreationMark(Long todayHighlightsCreationMark) {
        this.todayHighlightsCreationMark = todayHighlightsCreationMark;
    }
}
