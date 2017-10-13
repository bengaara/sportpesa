package com.pevans.components;

import android.content.Context;
import android.graphics.Typeface;
import android.util.AttributeSet;
import android.widget.TextView;
import com.pevans.constants.Strings;

public class RobotoBoldTextView extends TextView {
    public RobotoBoldTextView(Context context) {
        this(context, null);
    }

    public RobotoBoldTextView(Context context, AttributeSet attrs) {
        super(context, attrs);
        setTypeface(Typeface.createFromAsset(context.getAssets(), Strings.ROBOTO_BOLD));
    }

    public RobotoBoldTextView(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        setTypeface(Typeface.createFromAsset(context.getAssets(), Strings.ROBOTO_BOLD));
    }

    public RobotoBoldTextView(Context context, AttributeSet attrs, int defStyleAttr, int defStyleRes) {
        super(context, attrs, defStyleAttr, defStyleRes);
        setTypeface(Typeface.createFromAsset(context.getAssets(), Strings.ROBOTO_BOLD));
    }
}
