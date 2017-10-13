package com.pevans.components;

import android.content.Context;
import android.graphics.Typeface;
import android.util.AttributeSet;
import android.widget.Button;
import com.pevans.constants.Strings;

public class RobotoLightButton extends Button {
    public RobotoLightButton(Context context) {
        this(context, null);
    }

    public RobotoLightButton(Context context, AttributeSet attrs) {
        super(context, attrs);
        setTypeface(Typeface.createFromAsset(context.getAssets(), Strings.ROBOTO_LIGHT));
    }

    public RobotoLightButton(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        setTypeface(Typeface.createFromAsset(context.getAssets(), Strings.ROBOTO_LIGHT));
    }

    public RobotoLightButton(Context context, AttributeSet attrs, int defStyleAttr, int defStyleRes) {
        super(context, attrs, defStyleAttr, defStyleRes);
        setTypeface(Typeface.createFromAsset(context.getAssets(), Strings.ROBOTO_LIGHT));
    }
}
