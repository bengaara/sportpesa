package com.pevans.betslip;

import android.annotation.SuppressLint;
import com.pevans.dtos.OrdinaryBet;
import com.pevans.helpers.BetHelper;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@SuppressLint({"UseSparseArrays"})
public class BetSlip {
    private static BetSlip instance;
    private ArrayList<OrdinaryBet> todayHighlightsBetSlip;

    private BetSlip() {
        this.todayHighlightsBetSlip = new ArrayList();
    }

    public static BetSlip getInstance() {
        if (instance == null) {
            instance = new BetSlip();
        }
        return instance;
    }

    public OrdinaryBet findBetByGameId(Integer gameId, List<OrdinaryBet> betList) {
        for (OrdinaryBet bet : betList) {
            if (bet.getGameId().equals(gameId)) {
                return bet;
            }
        }
        return null;
    }

    public void addBet(OrdinaryBet bet) {
        OrdinaryBet b = findBetByGameId(bet.getGameId());
        if (b == null) {
            this.todayHighlightsBetSlip.add(bet);
            BetHelper.addBet(bet);
            return;
        }
        b.setSelectedOdd(bet.getSelectedOdd());
        BetHelper.modifyBet(bet);
    }

    public OrdinaryBet getBet(Integer i) {
        return (OrdinaryBet) this.todayHighlightsBetSlip.get(i.intValue());
    }

    public void removeBet(OrdinaryBet bet) {
        this.todayHighlightsBetSlip.remove(bet);
        BetHelper.removeBet(bet);
    }

    public void removeBets() {
        Iterator it = this.todayHighlightsBetSlip.iterator();
        while (it.hasNext()) {
            BetHelper.removeBet((OrdinaryBet) it.next());
        }
        this.todayHighlightsBetSlip.clear();
    }

    public OrdinaryBet findBetByGameId(Integer gameId) {
        OrdinaryBet result = null;
        Iterator it = this.todayHighlightsBetSlip.iterator();
        while (it.hasNext()) {
            OrdinaryBet bet = (OrdinaryBet) it.next();
            if (bet.getGameId().equals(gameId)) {
                result = bet;
                break;
            }
        }
        if (result == null) {
            result = BetHelper.findBetFromGameID(gameId);
            if (result != null) {
                this.todayHighlightsBetSlip.add(result);
            }
        }
        return result;
    }

    public Integer calculateBetSlipSize() {
        if (this.todayHighlightsBetSlip.isEmpty()) {
            this.todayHighlightsBetSlip.addAll(BetHelper.findAll());
        }
        return Integer.valueOf(this.todayHighlightsBetSlip.size());
    }

    public void modifyBet(OrdinaryBet bet) {
        BetHelper.modifyBet(bet);
    }
}
