package com.pevans.helpers;

public class PinHelper {
    private static final Integer LENGHT;
    private static final char[] NUMBERS;

    static {
        LENGHT = Integer.valueOf(4);
        NUMBERS = new char[]{'0', '1', '2', '3', '4', '5', '6', '7', '8', '9'};
    }

    public static boolean isPinOk(String pin) {
        return hasOnlyAllowedCharacters(pin) && pin.length() == 4;
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
