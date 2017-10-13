package com.pevans.helpers;

import com.pevans.constants.Telephone;

public class TelephoneHelper {
    private static final char[] NUMBERS;

    static {
        NUMBERS = new char[]{'0', '1', '2', '3', '4', '5', '6', '7', '8', '9'};
    }

    public static boolean isTelephoneNumberRight(String telephoneNumber) {
        boolean isLengthOk;
        if (telephoneNumber.length() == Telephone.LENGTH_1.intValue() || telephoneNumber.length() == Telephone.LENGTH_2.intValue()) {
            isLengthOk = true;
        } else {
            isLengthOk = false;
        }
        return isLengthOk && CharHelper.stringContainsChar(telephoneNumber, NUMBERS) && hasOnlyAllowedCharacters(telephoneNumber);
    }

    private static boolean hasOnlyAllowedCharacters(String password) {
        boolean allCharactersArrAllowed = true;
        for (int i = 0; i < password.length(); i++) {
            boolean allowedCharacter = false;
            for (char c : NUMBERS) {
                if (c == password.charAt(i)) {
                    allowedCharacter = true;
                    break;
                }
            }
            if (allCharactersArrAllowed && allowedCharacter) {
                allCharactersArrAllowed = true;
            } else {
                allCharactersArrAllowed = false;
            }
        }
        return allCharactersArrAllowed;
    }
}
