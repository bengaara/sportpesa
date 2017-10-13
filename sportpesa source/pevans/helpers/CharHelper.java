package com.pevans.helpers;

public class CharHelper {
    private static final char[] ALLOWED_CHARACTERS;

    static {
        ALLOWED_CHARACTERS = new char[]{'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '\u00c1', '\u00c9', '\u00cd', '\u00d3', '\u00da', '\u00c4', '\u00cb', '\u00cf', '\u00d6', '\u00dc'};
    }

    public static boolean stringContainsChar(String password, char[] chars) {
        boolean result = false;
        for (int i = 0; i < password.length(); i++) {
            for (char c : chars) {
                if (password.charAt(i) == c) {
                    result = true;
                    break;
                }
            }
            if (result) {
                break;
            }
        }
        return result;
    }

    public static boolean stringContainsOnlyLetters(String string) {
        boolean result = true;
        int i = 0;
        while (i < string.toString().length()) {
            boolean contains = false;
            for (char c : ALLOWED_CHARACTERS) {
                if (string.charAt(i) == Character.toUpperCase(c) || string.charAt(i) == Character.toLowerCase(c)) {
                    contains = true;
                    break;
                }
            }
            if (result && contains) {
                result = true;
            } else {
                result = false;
            }
            i++;
        }
        return result;
    }
}
