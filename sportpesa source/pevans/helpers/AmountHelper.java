package com.pevans.helpers;

public class AmountHelper {
    private static final Integer MIN_LENGHT;
    private static final char[] NUMBERS;

    static {
        MIN_LENGHT = Integer.valueOf(1);
        NUMBERS = new char[]{'0', '1', '2', '3', '4', '5', '6', '7', '8', '9'};
    }

    public static boolean isAmountValid(String amount) {
        return hasOnlyAllowedCharacters(amount) && amount.length() >= MIN_LENGHT.intValue();
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
