package com.pevans.helpers;

import android.app.Activity;
import android.content.Context;
import android.view.View;
import android.view.animation.Animation;
import android.view.animation.Animation.AnimationListener;
import android.view.animation.AnimationUtils;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;
import android.widget.TextView;
import android.widget.Toast;
import com.pevans.betslip.BetSlip;
import com.pevans.datarepositories.jackpot.JackpotSummaryRepository;
import com.pevans.dtos.OrdinaryBet;
import com.pevans.dtos.OrdinaryMatch;
import com.pevans.dtos.Sport;
import com.pevans.singletons.BetslipRestrictions;
import com.pevans.sportpesa.C0332R;
import com.pevans.util.GameDrawer;
import com.pevans.util.OddsHelper;
import cz.msebera.httpclient.android.BuildConfig;
import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.util.List;

public class BetSlipHelper {
    public static final Integer DESELECTED;
    public static final Integer SELECTED;

    /* renamed from: com.pevans.helpers.BetSlipHelper.1 */
    static class C02761 implements AnimationListener {
        final /* synthetic */ RelativeLayout val$betslipLayout;
        final /* synthetic */ Context val$context;

        C02761(Context context, RelativeLayout relativeLayout) {
            this.val$context = context;
            this.val$betslipLayout = relativeLayout;
        }

        public void onAnimationStart(Animation animation) {
        }

        public void onAnimationEnd(Animation animation) {
            this.val$betslipLayout.startAnimation(AnimationUtils.loadAnimation(this.val$context, C0332R.anim.soft_slide_out));
        }

        public void onAnimationRepeat(Animation animation) {
        }
    }

    static {
        SELECTED = Integer.valueOf(C0332R.drawable.game_button_central_background_selected);
        DESELECTED = Integer.valueOf(C0332R.drawable.game_button_central_background_deselected);
    }

    public static void oddButtonClicked(View view, List<OrdinaryMatch> matchList, Context context, Sport sport, OrdinaryMatch m) {
        if (view instanceof LinearLayout) {
            Integer gameId;
            LinearLayout linearLayout = (LinearLayout) view;
            View gameView = (View) linearLayout.getParent().getParent();
            ((View) gameView.findViewById(C0332R.id.game_odd1).getParent().getParent()).setBackgroundResource(DESELECTED.intValue());
            ((View) gameView.findViewById(C0332R.id.game_oddx).getParent().getParent()).setBackgroundResource(DESELECTED.intValue());
            ((View) gameView.findViewById(C0332R.id.game_odd2).getParent().getParent()).setBackgroundResource(DESELECTED.intValue());
            Button marketsButton = (Button) gameView.findViewById(C0332R.id.game_markets_button);
            TextView textView = (TextView) gameView.findViewById(C0332R.id.game_game_id);
            if (textView != null) {
                gameId = Integer.valueOf(Integer.parseInt(textView.getText().toString()));
            } else {
                gameId = m.getGameId();
            }
            OrdinaryBet bet = BetSlip.getInstance().findBetByGameId(gameId);
            OrdinaryMatch match = MatchListHelper.findMatchByGameID(gameId, matchList);
            View o1i = view.findViewById(C0332R.id.s_odd1_id);
            View oxi = view.findViewById(C0332R.id.s_oddx_id);
            View o2i = view.findViewById(C0332R.id.s_odd2_id);
            String odd1Id = ((TextView) ((View) linearLayout.getParent()).findViewById(C0332R.id.s_odd1_id)).getText().toString();
            String oddxId = ((TextView) ((View) linearLayout.getParent()).findViewById(C0332R.id.s_oddx_id)).getText().toString();
            String odd2Id = ((TextView) ((View) linearLayout.getParent()).findViewById(C0332R.id.s_odd2_id)).getText().toString();
            if (bet != null) {
                if (oxi == null && o2i == null && !odd1Id.equals(bet.getSelectedOdd())) {
                    if (!((TextView) linearLayout.findViewById(C0332R.id.game_odd1)).getText().toString().equals(BuildConfig.VERSION_NAME)) {
                        linearLayout.setBackgroundResource(SELECTED.intValue());
                        bet.setOdd(OddsHelper.calculateTotalOddFormated(new BigDecimal(((TextView) linearLayout.findViewById(C0332R.id.game_odd1)).getText().toString())));
                        bet.setSelectedOdd(odd1Id);
                        bet.setNewOdd(BuildConfig.VERSION_NAME);
                        bet.setOddModified(false);
                        bet.setPick(((TextView) view.findViewById(C0332R.id.game_name_team1)).getText().toString());
                        bet.setMarket(((TextView) gameView.findViewById(C0332R.id.s_market_name)).getText().toString());
                        bet.setMarketId(Integer.valueOf(Integer.parseInt(((TextView) gameView.findViewById(C0332R.id.s_market_id)).getText().toString())));
                        BetSlip.getInstance().modifyBet(bet);
                    }
                } else if (o1i == null && o2i == null && !oddxId.equals(bet.getSelectedOdd())) {
                    if (!((TextView) linearLayout.findViewById(C0332R.id.game_oddx)).getText().toString().equals(BuildConfig.VERSION_NAME)) {
                        linearLayout.setBackgroundResource(SELECTED.intValue());
                        bet.setOdd(OddsHelper.calculateTotalOddFormated(new BigDecimal(((TextView) linearLayout.findViewById(C0332R.id.game_oddx)).getText().toString())));
                        bet.setSelectedOdd(oddxId);
                        bet.setNewOdd(BuildConfig.VERSION_NAME);
                        bet.setOddModified(false);
                        bet.setPick(((TextView) view.findViewById(C0332R.id.game_name_draw)).getText().toString());
                        bet.setMarket(((TextView) gameView.findViewById(C0332R.id.s_market_name)).getText().toString());
                        bet.setMarketId(Integer.valueOf(Integer.parseInt(((TextView) gameView.findViewById(C0332R.id.s_market_id)).getText().toString())));
                        BetSlip.getInstance().modifyBet(bet);
                    }
                } else if (o1i != null || oxi != null || odd2Id.equals(bet.getSelectedOdd())) {
                    linearLayout.setBackgroundResource(DESELECTED.intValue());
                    BetSlip.getInstance().removeBet(bet);
                } else if (!((TextView) linearLayout.findViewById(C0332R.id.game_odd2)).getText().toString().equals(BuildConfig.VERSION_NAME)) {
                    linearLayout.setBackgroundResource(SELECTED.intValue());
                    bet.setOdd(OddsHelper.calculateTotalOddFormated(new BigDecimal(((TextView) linearLayout.findViewById(C0332R.id.game_odd2)).getText().toString())));
                    bet.setSelectedOdd(odd2Id);
                    bet.setNewOdd(BuildConfig.VERSION_NAME);
                    bet.setOddModified(false);
                    bet.setPick(((TextView) view.findViewById(C0332R.id.game_name_team2)).getText().toString());
                    bet.setMarket(((TextView) gameView.findViewById(C0332R.id.s_market_name)).getText().toString());
                    bet.setMarketId(Integer.valueOf(Integer.parseInt(((TextView) gameView.findViewById(C0332R.id.s_market_id)).getText().toString())));
                    BetSlip.getInstance().modifyBet(bet);
                }
                GameDrawer.refreshMarketsButton(context, bet, marketsButton, null);
            } else if (BetSlip.getInstance().calculateBetSlipSize().compareTo(BetslipRestrictions.getInstance().getMaxBetNum()) < 0 && match != null && ((o1i != null && !odd1Id.equals(BuildConfig.VERSION_NAME)) || ((oxi != null && !oddxId.equals(BuildConfig.VERSION_NAME)) || (o2i != null && !odd2Id.equals(BuildConfig.VERSION_NAME))))) {
                bet = new OrdinaryBet();
                bet.setMatchDate(match.getStartDate());
                bet.setGameId(gameId);
                bet.setMarketId(Integer.valueOf(Integer.parseInt(((TextView) gameView.findViewById(C0332R.id.s_market_id)).getText().toString())));
                bet.setFixture(match.getTeam1() + " V " + match.getTeam2());
                bet.setMarket(((TextView) gameView.findViewById(C0332R.id.s_market_name)).getText().toString());
                bet.setSportId(sport == null ? null : sport.getId());
                if (o1i != null && !((TextView) linearLayout.findViewById(C0332R.id.game_odd1)).getText().toString().equals(BuildConfig.VERSION_NAME)) {
                    linearLayout.setBackgroundResource(SELECTED.intValue());
                    bet.setOdd(OddsHelper.calculateTotalOddFormated(new BigDecimal(((TextView) linearLayout.findViewById(C0332R.id.game_odd1)).getText().toString())));
                    bet.setSelectedOdd(odd1Id);
                    bet.setPick(((TextView) view.findViewById(C0332R.id.game_name_team1)).getText().toString());
                    BetSlip.getInstance().addBet(bet);
                } else if (oxi != null && !((TextView) linearLayout.findViewById(C0332R.id.game_oddx)).getText().toString().equals(BuildConfig.VERSION_NAME)) {
                    linearLayout.setBackgroundResource(SELECTED.intValue());
                    bet.setOdd(OddsHelper.calculateTotalOddFormated(new BigDecimal(((TextView) linearLayout.findViewById(C0332R.id.game_oddx)).getText().toString())));
                    bet.setSelectedOdd(oddxId);
                    bet.setPick(((TextView) view.findViewById(C0332R.id.game_name_draw)).getText().toString());
                    BetSlip.getInstance().addBet(bet);
                } else if (!(o2i == null || ((TextView) linearLayout.findViewById(C0332R.id.game_odd2)).getText().toString().equals(BuildConfig.VERSION_NAME))) {
                    linearLayout.setBackgroundResource(SELECTED.intValue());
                    bet.setOdd(OddsHelper.calculateTotalOddFormated(new BigDecimal(((TextView) linearLayout.findViewById(C0332R.id.game_odd2)).getText().toString())));
                    bet.setSelectedOdd(odd2Id);
                    bet.setPick(((TextView) view.findViewById(C0332R.id.game_name_team2)).getText().toString());
                    BetSlip.getInstance().addBet(bet);
                }
                GameDrawer.refreshMarketsButton(context, bet, marketsButton, null);
            } else if (BetSlip.getInstance().calculateBetSlipSize().compareTo(BetslipRestrictions.getInstance().getMaxBetNum()) == 0) {
                Toast.makeText(context, "You cannot bet for more than " + BetslipRestrictions.getInstance().getMaxBetNum().toString() + " matches", 0).show();
            }
        }
        refreshBetSlipLayout(context);
    }

    public static void refreshBetSlipLayout(Context context) {
        if (JackpotSummaryRepository.getInstance() != null) {
            TextView jackpotAmountTextView = (TextView) ((Activity) context).findViewById(C0332R.id.jle_jackpot_amount);
            if (jackpotAmountTextView != null) {
                jackpotAmountTextView.setText("KSH " + new DecimalFormat("#,###").format(JackpotSummaryRepository.getInstance().getAmount().doubleValue()));
            }
        }
        RelativeLayout betslipLayout = (RelativeLayout) ((Activity) context).findViewById(C0332R.id.betsliplayout);
        if (betslipLayout != null) {
            Integer betSlipSize = BetSlip.getInstance().calculateBetSlipSize();
            if (betSlipSize.intValue() > 0 && betslipLayout.getVisibility() == 8) {
                ((TextView) betslipLayout.findViewById(C0332R.id.betslip_size)).setText(betSlipSize.toString());
                betslipLayout.startAnimation(AnimationUtils.loadAnimation(context, C0332R.anim.slide_in));
                betslipLayout.setVisibility(0);
            } else if (betSlipSize.intValue() == 0 && betslipLayout.getVisibility() == 0) {
                betslipLayout.startAnimation(AnimationUtils.loadAnimation(context, C0332R.anim.slide_out));
                betslipLayout.setVisibility(8);
                ((TextView) betslipLayout.findViewById(C0332R.id.betslip_size)).setText(betSlipSize.toString());
            } else if (betSlipSize.intValue() > 0 && betslipLayout.getVisibility() == 0) {
                ((TextView) betslipLayout.findViewById(C0332R.id.betslip_size)).setText(betSlipSize.toString());
                Animation slideIn = AnimationUtils.loadAnimation(context, C0332R.anim.soft_slide_in);
                betslipLayout.startAnimation(slideIn);
                slideIn.setAnimationListener(new C02761(context, betslipLayout));
            }
        }
    }
}
