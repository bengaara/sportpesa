package com.pevans.helpers;

public class OTPHelper {
    private static final int OTP_SIZE = 6;

    public static boolean isOTPFormatOk(String otp) {
        return otp.length() == OTP_SIZE;
    }
}
