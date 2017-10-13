package com.pevans.helpers;

import android.app.Activity;
import android.util.DisplayMetrics;

public class ScreenHelper {
    public static DisplayMetrics calculateDisplayMetrics(Activity activity) {
        DisplayMetrics displaymetrics = new DisplayMetrics();
        activity.getWindowManager().getDefaultDisplay().getMetrics(displaymetrics);
        return displaymetrics;
    }

    public static Integer calculateRelativeHeight(Activity activity, Integer size) {
        return Integer.valueOf((size.intValue() * calculateDisplayMetrics(activity).heightPixels) / 1280);
    }
}
