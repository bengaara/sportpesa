package com.pevans.constants;

import com.pevans.sportpesa.C0332R;

public enum SportIcons {
    SOCCER(Integer.valueOf(1), C0332R.drawable.icon_soccer, C0332R.drawable.betslip_soccer),
    BASKETBALL(Integer.valueOf(2), C0332R.drawable.icon_basketball, C0332R.drawable.betslip_basketball),
    TENNIS(Integer.valueOf(5), C0332R.drawable.icon_tennis, C0332R.drawable.betslip_tennis),
    RUGBY(Integer.valueOf(12), C0332R.drawable.icon_rugby, C0332R.drawable.betslip_rugby),
    CRICKET(Integer.valueOf(21), C0332R.drawable.icon_cricket, C0332R.drawable.betslip_cricket);
    
    private int blackIcon;
    private Integer sportId;
    private int whiteIcon;

    private SportIcons(Integer sportId, int whiteIcon, int blackIcon) {
        this.sportId = sportId;
        this.whiteIcon = whiteIcon;
        this.blackIcon = blackIcon;
    }

    public static Integer getWhiteIconIdFromSportId(Integer id) {
        if (id == SOCCER.sportId) {
            return Integer.valueOf(SOCCER.whiteIcon);
        }
        if (id == BASKETBALL.sportId) {
            return Integer.valueOf(BASKETBALL.whiteIcon);
        }
        if (id == TENNIS.sportId) {
            return Integer.valueOf(TENNIS.whiteIcon);
        }
        if (id == RUGBY.sportId) {
            return Integer.valueOf(RUGBY.whiteIcon);
        }
        if (id == CRICKET.sportId) {
            return Integer.valueOf(CRICKET.whiteIcon);
        }
        return Integer.valueOf(SOCCER.whiteIcon);
    }

    public static Integer getBlackIconIdFromSportId(Integer id) {
        if (id == SOCCER.sportId) {
            return Integer.valueOf(SOCCER.blackIcon);
        }
        if (id == BASKETBALL.sportId) {
            return Integer.valueOf(BASKETBALL.blackIcon);
        }
        if (id == TENNIS.sportId) {
            return Integer.valueOf(TENNIS.blackIcon);
        }
        if (id == RUGBY.sportId) {
            return Integer.valueOf(RUGBY.blackIcon);
        }
        if (id == CRICKET.sportId) {
            return Integer.valueOf(CRICKET.blackIcon);
        }
        return Integer.valueOf(SOCCER.blackIcon);
    }
}
