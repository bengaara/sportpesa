package com.pevans.helpers;

import android.view.View;
import android.view.animation.Animation;
import android.view.animation.Transformation;

public class AnimationsHelper {

    /* renamed from: com.pevans.helpers.AnimationsHelper.1 */
    static class C02741 extends Animation {
        final /* synthetic */ int val$targetHeight;
        final /* synthetic */ View val$v;

        C02741(View view, int i) {
            this.val$v = view;
            this.val$targetHeight = i;
        }

        protected void applyTransformation(float interpolatedTime, Transformation t) {
            this.val$v.getLayoutParams().height = interpolatedTime == 1.0f ? -2 : (int) (((float) this.val$targetHeight) * interpolatedTime);
            this.val$v.requestLayout();
        }

        public boolean willChangeBounds() {
            return true;
        }
    }

    /* renamed from: com.pevans.helpers.AnimationsHelper.2 */
    static class C02752 extends Animation {
        final /* synthetic */ int val$initialHeight;
        final /* synthetic */ View val$v;

        C02752(View view, int i) {
            this.val$v = view;
            this.val$initialHeight = i;
        }

        protected void applyTransformation(float interpolatedTime, Transformation t) {
            if (interpolatedTime == 1.0f) {
                this.val$v.setVisibility(8);
                return;
            }
            this.val$v.getLayoutParams().height = this.val$initialHeight - ((int) (((float) this.val$initialHeight) * interpolatedTime));
            this.val$v.requestLayout();
        }

        public boolean willChangeBounds() {
            return true;
        }
    }

    public static void expand(View v) {
        v.measure(-1, -2);
        int targetHeight = v.getMeasuredHeight();
        v.getLayoutParams().height = 1;
        v.setVisibility(0);
        Animation a = new C02741(v, targetHeight);
        a.setDuration((long) ((int) (((float) targetHeight) / v.getContext().getResources().getDisplayMetrics().density)));
        v.startAnimation(a);
    }

    public static void collapse(View v) {
        int initialHeight = v.getMeasuredHeight();
        Animation a = new C02752(v, initialHeight);
        a.setDuration((long) ((int) (((float) initialHeight) / v.getContext().getResources().getDisplayMetrics().density)));
        v.startAnimation(a);
    }
}
