package com.pevans.datarepositories.matches;

import com.pevans.dataloaders.AsynkTaskResultReader;
import com.pevans.dtos.OrdinaryMatch;
import com.pevans.dtos.Sport;
import com.pevans.jsoncomunicators.JCFindMatches;
import com.pevans.jsoncomunicators.JCHighlightMatches;
import com.pevans.jsoncomunicators.JCTodayHighligths;
import com.pevans.jsoncomunicators.JCTodayMatches;
import com.pevans.jsoncomunicators.JsonComunicator;
import com.pevans.jsondecoders.MatchesJsonDecoder;
import java.util.ArrayList;
import java.util.Iterator;
import org.apache.http.HttpStatus;

public class MatchRepository implements AsynkTaskResultReader {
    private static final Integer MAX;
    private static final long OBSOLESCENSE_TIME = 180000;
    private static MatchRepository instance;
    private ArrayList<GamesObserver> gamesObservers;
    private ArrayList<HighlightsObserver> highlightObservers;
    private ArrayList<TodayHighlightsObserver> todayHighlightsObservers;
    private ArrayList<TodayObserver> todayObservers;

    /* renamed from: com.pevans.datarepositories.matches.MatchRepository.1 */
    class C02691 implements Runnable {
        final /* synthetic */ Sport val$sport;

        C02691(Sport sport) {
            this.val$sport = sport;
        }

        public void run() {
            MatchGroup matchGroup = MatchContainer.getInstance().findMatchGroupFromSportId(this.val$sport.getId());
            if (matchGroup == null || matchGroup.getTodayCreationMark() == null || matchGroup.getTodayCreationMark().longValue() + MatchRepository.OBSOLESCENSE_TIME < System.currentTimeMillis()) {
                new JCTodayMatches(null, MatchRepository.this, this.val$sport).execute(new Void[0]);
            } else {
                MatchRepository.this.notifyTodayObservers(matchGroup);
            }
        }
    }

    /* renamed from: com.pevans.datarepositories.matches.MatchRepository.2 */
    class C02702 implements Runnable {
        final /* synthetic */ Sport val$sport;

        C02702(Sport sport) {
            this.val$sport = sport;
        }

        public void run() {
            MatchGroup matchGroup = MatchContainer.getInstance().findMatchGroupFromSportId(this.val$sport.getId());
            if (matchGroup == null || matchGroup.getHighlightsCreationMark() == null || matchGroup.getHighlightsCreationMark().longValue() + MatchRepository.OBSOLESCENSE_TIME < System.currentTimeMillis()) {
                new JCHighlightMatches(null, MatchRepository.this, this.val$sport).execute(new Void[0]);
            } else {
                MatchRepository.this.notifyHighlightObservers(matchGroup);
            }
        }
    }

    /* renamed from: com.pevans.datarepositories.matches.MatchRepository.3 */
    class C02713 implements Runnable {
        final /* synthetic */ Sport val$sport;

        C02713(Sport sport) {
            this.val$sport = sport;
        }

        public void run() {
            MatchGroup matchGroup = MatchContainer.getInstance().findMatchGroupFromSportId(this.val$sport.getId());
            if (matchGroup == null || matchGroup.getTodayHighlightsCreationMark() == null || matchGroup.getTodayHighlightsCreationMark().longValue() + MatchRepository.OBSOLESCENSE_TIME < System.currentTimeMillis()) {
                new JCTodayHighligths(null, MatchRepository.this, this.val$sport).execute(new Void[0]);
            } else {
                MatchRepository.this.notifyTodayHighlightObservers(matchGroup);
            }
        }
    }

    /* renamed from: com.pevans.datarepositories.matches.MatchRepository.4 */
    class C02724 implements Runnable {
        C02724() {
        }

        public void run() {
        }
    }

    static {
        MAX = Integer.valueOf(50);
    }

    private MatchRepository() {
        this.todayObservers = new ArrayList();
        this.highlightObservers = new ArrayList();
        this.gamesObservers = new ArrayList();
        this.todayHighlightsObservers = new ArrayList();
    }

    public static MatchRepository getInstance() {
        if (instance == null) {
            instance = new MatchRepository();
        }
        return instance;
    }

    public void addTodayObserver(TodayObserver todayObserver) {
        if (!this.todayObservers.contains(todayObserver)) {
            this.todayObservers.add(todayObserver);
        }
    }

    public void removeTodayObserver(TodayObserver todayObserver) {
        if (this.todayObservers.contains(todayObserver)) {
            this.todayObservers.remove(todayObserver);
        }
    }

    public void addHighlightsObserver(HighlightsObserver highlightsObserver) {
        if (!this.highlightObservers.contains(highlightsObserver)) {
            this.highlightObservers.add(highlightsObserver);
        }
    }

    public void removeHighlightObserver(HighlightsObserver highlightsObserver) {
        if (this.highlightObservers.contains(highlightsObserver)) {
            this.highlightObservers.remove(highlightsObserver);
        }
    }

    public void addGamesObserver(GamesObserver gamesObserver) {
        if (!this.gamesObservers.contains(gamesObserver)) {
            this.gamesObservers.add(gamesObserver);
        }
    }

    public void removeGamesObserver(GamesObserver gamesObserver) {
        if (this.gamesObservers.contains(gamesObserver)) {
            this.gamesObservers.remove(gamesObserver);
        }
    }

    public void addTodayHighlightsObserver(TodayHighlightsObserver todayHighlightsObserver) {
        if (!this.todayHighlightsObservers.contains(todayHighlightsObserver)) {
            this.todayHighlightsObservers.add(todayHighlightsObserver);
        }
    }

    public void removeTodayHighlightsObserver(TodayHighlightsObserver todayHighlightsObserver) {
        if (this.todayHighlightsObservers.contains(todayHighlightsObserver)) {
            this.todayHighlightsObservers.remove(todayHighlightsObserver);
        }
    }

    public void loadTodayGames(Sport sport) {
        new Thread(new C02691(sport)).start();
    }

    private void notifyTodayObservers(MatchGroup matchGroup) {
        Iterator it = this.todayObservers.iterator();
        while (it.hasNext()) {
            TodayObserver todayObserver = (TodayObserver) it.next();
            todayObserver.gamesUpated(todayObserver, matchGroup.getToday());
        }
    }

    public void loadHighligthGames(Sport sport) {
        new Thread(new C02702(sport)).start();
    }

    private void notifyHighlightObservers(MatchGroup matchGroup) {
        Iterator it = this.highlightObservers.iterator();
        while (it.hasNext()) {
            HighlightsObserver highlightsObserver = (HighlightsObserver) it.next();
            highlightsObserver.gamesUpated(highlightsObserver, matchGroup.getHighlights());
        }
    }

    public void loadTodayHightlights(Sport sport) {
        new Thread(new C02713(sport)).start();
    }

    private void notifyTodayHighlightObservers(MatchGroup matchGroup) {
        Iterator it = this.todayHighlightsObservers.iterator();
        while (it.hasNext()) {
            TodayHighlightsObserver todayHighlightsObserver = (TodayHighlightsObserver) it.next();
            todayHighlightsObserver.gamesUpated(todayHighlightsObserver, matchGroup.getTodayHighlights());
        }
    }

    public void loadAllGames(Sport sport, Integer countryId, Integer leagueId, Long from, Long to) {
        new Thread(new C02724()).start();
    }

    private void notifyAllGamesObservers(ArrayList<OrdinaryMatch> matches) {
        Iterator it = this.gamesObservers.iterator();
        while (it.hasNext()) {
            GamesObserver gamesObserver = (GamesObserver) it.next();
            gamesObserver.gamesUpated(gamesObserver, matches);
        }
    }

    public boolean saveResult(Integer httpcode, Object object, JsonComunicator jsonComunicator) {
        Sport sport;
        ArrayList<OrdinaryMatch> receivedMatches;
        MatchGroup matchGroup;
        if ((jsonComunicator instanceof JCTodayMatches) && httpcode.intValue() == HttpStatus.SC_OK && object != null) {
            sport = ((JCTodayMatches) jsonComunicator).getSport();
            receivedMatches = MatchesJsonDecoder.decode(object, sport);
            matchGroup = MatchContainer.getInstance().findMatchGroupFromSportId(sport.getId());
            if (matchGroup == null) {
                matchGroup = new MatchGroup();
                MatchContainer.getInstance().saveMatchGroup(sport.getId(), matchGroup);
            }
            matchGroup.setToday(receivedMatches);
            matchGroup.setTodayCreationMark(Long.valueOf(System.currentTimeMillis()));
            notifyTodayObservers(matchGroup);
        } else if ((jsonComunicator instanceof JCHighlightMatches) && httpcode.intValue() == HttpStatus.SC_OK && object != null) {
            sport = ((JCHighlightMatches) jsonComunicator).getSport();
            receivedMatches = MatchesJsonDecoder.decode(object, sport);
            matchGroup = MatchContainer.getInstance().findMatchGroupFromSportId(sport.getId());
            if (matchGroup == null) {
                matchGroup = new MatchGroup();
                MatchContainer.getInstance().saveMatchGroup(sport.getId(), matchGroup);
            }
            matchGroup.setHighlights(receivedMatches);
            matchGroup.setHighlightsCreationMark(Long.valueOf(System.currentTimeMillis()));
            notifyHighlightObservers(matchGroup);
        } else if ((jsonComunicator instanceof JCFindMatches) && httpcode.intValue() == HttpStatus.SC_OK && object != null) {
            notifyAllGamesObservers(MatchesJsonDecoder.decode(object, ((JCFindMatches) jsonComunicator).getSport()));
        } else if ((jsonComunicator instanceof JCTodayHighligths) && httpcode.intValue() == HttpStatus.SC_OK && object != null) {
            sport = ((JCTodayHighligths) jsonComunicator).getSport();
            receivedMatches = MatchesJsonDecoder.decode(object, sport);
            matchGroup = MatchContainer.getInstance().findMatchGroupFromSportId(sport.getId());
            if (matchGroup == null) {
                matchGroup = new MatchGroup();
                MatchContainer.getInstance().saveMatchGroup(sport.getId(), matchGroup);
            }
            matchGroup.setTodayHighlights(receivedMatches);
            matchGroup.setTodayHighlightsCreationMark(Long.valueOf(System.currentTimeMillis()));
            notifyTodayHighlightObservers(matchGroup);
        }
        return true;
    }

    public void clear() {
        MatchContainer.getInstance().clear();
    }

    public void clearSport(Integer sportId) {
        MatchContainer.getInstance().clearSport(sportId);
    }
}
