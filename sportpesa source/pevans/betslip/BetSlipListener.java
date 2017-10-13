package com.pevans.betslip;

import com.pevans.dtos.OrdinaryBet;

public interface BetSlipListener {
    void betslipModified();

    void betslipModified(OrdinaryBet ordinaryBet);
}
