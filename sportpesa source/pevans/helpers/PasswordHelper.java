package com.pevans.helpers;

public class PasswordHelper {
    private static final char[] LOWERCASE;
    private static final int MAX_LENGTH = 20;
    private static final int MIN_LENGTH = 8;
    private static final char[] NUMBERS;
    private static final char[] UPPERCASE;

    static {
        NUMBERS = new char[]{'0', '1', '2', '3', '4', '5', '6', '7', '8', '9'};
        LOWERCASE = new char[]{'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'};
        UPPERCASE = new char[]{'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'};
    }

    public static boolean isPasswordSecure(String password) {
        return isSizeSecure(password) && hasANumber(password) && hasLowerCase(password) && hasUpperCase(password) && hasOnlyAllowedCharacters(password);
    }

    private static boolean isSizeSecure(String password) {
        return password.length() >= MIN_LENGTH && password.length() <= MAX_LENGTH;
    }

    private static boolean hasANumber(String password) {
        return CharHelper.stringContainsChar(password, NUMBERS);
    }

    private static boolean hasLowerCase(String password) {
        return CharHelper.stringContainsChar(password, LOWERCASE);
    }

    private static boolean hasUpperCase(String password) {
        return CharHelper.stringContainsChar(password, UPPERCASE);
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
            for (char c2 : LOWERCASE) {
                if (c2 == password.charAt(i)) {
                    allowedCharacter = true;
                    break;
                }
            }
            for (char c22 : UPPERCASE) {
                if (c22 == password.charAt(i)) {
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
