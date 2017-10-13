package com.pevans.helpers;

import android.util.Log;
import com.j256.ormlite.dao.Dao;
import com.pevans.dtos.OrdinaryBet;
import com.pevans.locks.NormalBetSlipLock;
import com.pevans.ormlite.DatabaseHelper;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class BetHelper {
    public static com.pevans.dtos.OrdinaryBet findBetFromGameID(java.lang.Integer r7) {
        /* JADX: method processing error */
/*
        Error: java.lang.NullPointerException
	at jadx.core.dex.visitors.ssa.SSATransform.placePhi(SSATransform.java:82)
	at jadx.core.dex.visitors.ssa.SSATransform.process(SSATransform.java:50)
	at jadx.core.dex.visitors.ssa.SSATransform.visit(SSATransform.java:42)
	at jadx.core.dex.visitors.DepthTraversal.visit(DepthTraversal.java:31)
	at jadx.core.dex.visitors.DepthTraversal.visit(DepthTraversal.java:17)
	at jadx.core.ProcessClass.process(ProcessClass.java:37)
	at jadx.core.ProcessClass.processDependencies(ProcessClass.java:59)
	at jadx.core.ProcessClass.process(ProcessClass.java:42)
	at jadx.api.JadxDecompiler.processClass(JadxDecompiler.java:281)
	at jadx.api.JavaClass.decompile(JavaClass.java:59)
	at jadx.api.JadxDecompiler$1.run(JadxDecompiler.java:161)
*/
        /*
        r5 = com.pevans.locks.NormalBetSlipLock.getInstance();
        r5.lock();
        r5 = getDao();	 Catch:{ SQLException -> 0x003c, all -> 0x0046 }
        r1 = r5.queryBuilder();	 Catch:{ SQLException -> 0x003c, all -> 0x0046 }
        r4 = r1.where();	 Catch:{ SQLException -> 0x003c, all -> 0x0046 }
        r5 = "gameId";	 Catch:{ SQLException -> 0x003c, all -> 0x0046 }
        r4.eq(r5, r7);	 Catch:{ SQLException -> 0x003c, all -> 0x0046 }
        r5 = getDao();	 Catch:{ SQLException -> 0x003c, all -> 0x0046 }
        r6 = r1.prepare();	 Catch:{ SQLException -> 0x003c, all -> 0x0046 }
        r2 = r5.query(r6);	 Catch:{ SQLException -> 0x003c, all -> 0x0046 }
        r5 = r2.isEmpty();	 Catch:{ SQLException -> 0x003c, all -> 0x0046 }
        if (r5 == 0) goto L_0x0033;
    L_0x002a:
        r3 = 0;
    L_0x002b:
        r5 = com.pevans.locks.NormalBetSlipLock.getInstance();
        r5.unlock();
    L_0x0032:
        return r3;
    L_0x0033:
        r5 = 0;
        r5 = r2.get(r5);	 Catch:{ SQLException -> 0x003c, all -> 0x0046 }
        r5 = (com.pevans.dtos.OrdinaryBet) r5;	 Catch:{ SQLException -> 0x003c, all -> 0x0046 }
        r3 = r5;
        goto L_0x002b;
    L_0x003c:
        r0 = move-exception;
        r3 = 0;
        r5 = com.pevans.locks.NormalBetSlipLock.getInstance();
        r5.unlock();
        goto L_0x0032;
    L_0x0046:
        r5 = move-exception;
        r6 = com.pevans.locks.NormalBetSlipLock.getInstance();
        r6.unlock();
        throw r5;
        */
        throw new UnsupportedOperationException("Method not decompiled: com.pevans.helpers.BetHelper.findBetFromGameID(java.lang.Integer):com.pevans.dtos.OrdinaryBet");
    }

    public static List<OrdinaryBet> findBetsInDatabase() {
        try {
            return getDao().queryForAll();
        } catch (SQLException e) {
            return null;
        }
    }

    public static void removeBet(OrdinaryBet bet) {
        NormalBetSlipLock.getInstance().lock();
        try {
            getDao().delete((Object) bet);
        } catch (SQLException e) {
            Log.e(DatabaseHelper.class.getName(), "Can't remove bet from database");
        } finally {
            NormalBetSlipLock.getInstance().unlock();
        }
    }

    public static void modifyBet(OrdinaryBet bet) {
        NormalBetSlipLock.getInstance().lock();
        try {
            getDao().update((Object) bet);
        } catch (SQLException e) {
            Log.e(DatabaseHelper.class.getName(), "Can't modify bet in database");
        } finally {
            NormalBetSlipLock.getInstance().unlock();
        }
    }

    public static void addBet(OrdinaryBet bet) {
        NormalBetSlipLock.getInstance().lock();
        try {
            getDao().create(bet);
        } catch (SQLException e) {
            Log.e(DatabaseHelper.class.getName(), "Can't add bet to database");
        } finally {
            NormalBetSlipLock.getInstance().unlock();
        }
    }

    private static Dao getDao() {
        return DatabaseHelper.getInstance().getBetDao();
    }

    public static List<OrdinaryBet> findAll() {
        NormalBetSlipLock.getInstance().lock();
        List<OrdinaryBet> list = new ArrayList();
        List<OrdinaryBet> listToRemove = new ArrayList();
        try {
            for (OrdinaryBet b : getDao().queryForAll()) {
                if (b.getMatchDate() == null || b.getMatchDate().compareTo(new Date()) <= 0) {
                    listToRemove.add(b);
                } else {
                    list.add(b);
                }
            }
        } catch (SQLException e) {
            Log.e(DatabaseHelper.class.getName(), "Can't load bets from database");
        } finally {
            NormalBetSlipLock.getInstance().unlock();
        }
        for (OrdinaryBet b2 : listToRemove) {
            removeBet(b2);
        }
        return list;
    }
}
