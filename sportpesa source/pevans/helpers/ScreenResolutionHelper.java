package com.pevans.helpers;

import android.app.Activity;
import java.util.ArrayList;
import java.util.List;

public class ScreenResolutionHelper {
    public static final ScreenResolutionHelper HDPI;
    public static final ScreenResolutionHelper LDPI;
    public static final ScreenResolutionHelper MDPI;
    public static final ScreenResolutionHelper XHDPI;
    public static final ScreenResolutionHelper XXHDPI;
    public static final ScreenResolutionHelper XXXHDPI;
    private Float density;
    private Integer height;
    private String name;
    private Integer width;

    static {
        LDPI = new ScreenResolutionHelper(Integer.valueOf(240), Integer.valueOf(432), "ldpi", Float.valueOf(0.75f));
        MDPI = new ScreenResolutionHelper(Integer.valueOf(320), Integer.valueOf(480), "mdpi", Float.valueOf(1.0f));
        HDPI = new ScreenResolutionHelper(Integer.valueOf(480), Integer.valueOf(800), "hdpi", Float.valueOf(1.5f));
        XHDPI = new ScreenResolutionHelper(Integer.valueOf(720), Integer.valueOf(1280), "xhdpi", Float.valueOf(2.0f));
        XXHDPI = new ScreenResolutionHelper(Integer.valueOf(1080), Integer.valueOf(1920), "xxhdpi", Float.valueOf(3.0f));
        XXXHDPI = new ScreenResolutionHelper(Integer.valueOf(1600), Integer.valueOf(2560), "xxxhdpi", Float.valueOf(4.0f));
    }

    private ScreenResolutionHelper(Integer width, Integer height, String name, Float density) {
        this.width = width;
        this.height = height;
        this.name = name;
        this.density = density;
    }

    public Integer getWidth() {
        return this.width;
    }

    public Integer getHeight() {
        return this.height;
    }

    public String getName() {
        return this.name;
    }

    public Float getDensity() {
        return this.density;
    }

    public static List<ScreenResolutionHelper> getValues() {
        ArrayList<ScreenResolutionHelper> result = new ArrayList();
        result.add(LDPI);
        result.add(MDPI);
        result.add(HDPI);
        result.add(XHDPI);
        result.add(XXHDPI);
        result.add(XXXHDPI);
        return result;
    }

    public static String calculateNameWithSizes(Activity activity) {
        ScreenResolutionHelper result = null;
        Float density = Float.valueOf(ScreenHelper.calculateDisplayMetrics(activity).density);
        for (ScreenResolutionHelper sr : getValues()) {
            if (density.compareTo(sr.getDensity()) == 0) {
                result = sr;
            }
        }
        return result == null ? LDPI.getName() : result.getName();
    }
}
