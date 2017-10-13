package com.pevans.helpers;

import android.content.pm.PackageManager.NameNotFoundException;
import com.pevans.SportpesaApplication;
import com.pevans.constants.Environments;
import com.pevans.sportpesa.BuildConfig;

public class VersionHelper {
    private static final Integer DEBUG;
    private static final Integer PREPRODUCTION;
    private static final Integer PRODUCTION;

    static {
        PRODUCTION = Environments.PRODUCTION.getId();
        PREPRODUCTION = Environments.PREPRODUCTION.getId();
        DEBUG = Environments.DEBUG.getId();
    }

    public static String getVersion() {
        String result = "Version: ";
        String versionName = getInternalVersion();
        if (BuildConfig.ENVIRONMENT.equals(DEBUG)) {
            return "Jacinto " + result + versionName;
        }
        if (BuildConfig.ENVIRONMENT.equals(PREPRODUCTION)) {
            return "DEV " + result + versionName;
        }
        if (BuildConfig.ENVIRONMENT.equals(PRODUCTION)) {
            return result + versionName;
        }
        return result;
    }

    public static String getInternalVersion() {
        String result = cz.msebera.httpclient.android.BuildConfig.VERSION_NAME;
        try {
            return SportpesaApplication.getAppContext().getPackageManager().getPackageInfo(SportpesaApplication.getAppContext().getPackageName(), 0).versionName;
        } catch (NameNotFoundException e) {
            return result;
        }
    }
}
