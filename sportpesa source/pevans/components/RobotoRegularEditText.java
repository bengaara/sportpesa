package com.pevans.components;

import android.content.Context;
import android.graphics.Typeface;
import android.util.AttributeSet;
import com.pevans.constants.Strings;
import com.rey.material.widget.EditText;

public class RobotoRegularEditText extends EditText {
    public RobotoRegularEditText(Context context) {
        this(context, null);
    }

    public RobotoRegularEditText(Context context, AttributeSet attrs) {
        super(context, attrs);
        setTypeface(Typeface.createFromAsset(context.getAssets(), Strings.ROBOTO_REGULAR));
    }

    public RobotoRegularEditText(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        setTypeface(Typeface.createFromAsset(context.getAssets(), Strings.ROBOTO_REGULAR));
    }

    public RobotoRegularEditText(Context context, AttributeSet attrs, int defStyleAttr, int defStyleRes) {
        super(context, attrs, defStyleAttr, defStyleRes);
        setTypeface(Typeface.createFromAsset(context.getAssets(), Strings.ROBOTO_REGULAR));
    }
}
