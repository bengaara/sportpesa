package com.pevans.helpers;

import cz.msebera.httpclient.android.BuildConfig;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.GregorianCalendar;
import org.apache.tools.ant.util.DateUtils;

public class DateHelper {
    public static boolean dateIsLegal(String dob) {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(DateUtils.ISO8601_DATE_PATTERN);
        try {
            if (dob.equals(BuildConfig.VERSION_NAME)) {
                return false;
            }
            Calendar nowCalendar = new GregorianCalendar();
            Calendar userCalendar = new GregorianCalendar();
            userCalendar.setTime(simpleDateFormat.parse(dob));
            if (userCalendar.after(nowCalendar)) {
                return false;
            }
            int age = nowCalendar.get(1) - userCalendar.get(1);
            int month1 = nowCalendar.get(2);
            int month2 = userCalendar.get(2);
            if (month2 > month1) {
                age--;
            } else if (month1 == month2) {
                if (userCalendar.get(5) > nowCalendar.get(5)) {
                    age--;
                }
            }
            return age >= 18;
        } catch (ParseException e) {
            return false;
        }
    }
}
