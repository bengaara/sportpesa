package com.pevans.headerlistview;

import android.content.Context;
import android.util.AttributeSet;
import android.util.TypedValue;
import android.view.View;
import android.view.View.MeasureSpec;
import android.view.animation.AlphaAnimation;
import android.widget.AbsListView;
import android.widget.AbsListView.OnScrollListener;
import android.widget.AdapterView;
import android.widget.AdapterView.OnItemClickListener;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.ImageView.ScaleType;
import android.widget.ListView;
import android.widget.RelativeLayout;
import android.widget.RelativeLayout.LayoutParams;
import org.apache.tools.ant.util.FileUtils;

public class HeaderListView extends RelativeLayout {
    private static final int FADE_DELAY = 1000;
    private static final int FADE_DURATION = 2000;
    private SectionAdapter mAdapter;
    private OnScrollListener mExternalOnScrollListener;
    private RelativeLayout mHeader;
    private View mHeaderConvertView;
    private InternalListView mListView;
    private FrameLayout mScrollView;

    /* renamed from: com.pevans.headerlistview.HeaderListView.1 */
    class C02731 implements OnItemClickListener {
        C02731() {
        }

        public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
            if (HeaderListView.this.mAdapter != null) {
                HeaderListView.this.mAdapter.onItemClick(parent, view, position, id);
            }
        }
    }

    private class HeaderListViewOnScrollListener implements OnScrollListener {
        private int actualSection;
        private boolean didScroll;
        private int direction;
        private boolean doneMeasuring;
        private AlphaAnimation fadeOut;
        private int lastResetSection;
        private View next;
        private int nextH;
        private boolean noHeaderUpToHeader;
        private int prevH;
        private View previous;
        private int previousFirstVisibleItem;
        private boolean scrollingStart;

        private HeaderListViewOnScrollListener() {
            this.previousFirstVisibleItem = -1;
            this.direction = 0;
            this.actualSection = 0;
            this.scrollingStart = false;
            this.doneMeasuring = false;
            this.lastResetSection = -1;
            this.fadeOut = new AlphaAnimation(1.0f, 0.0f);
            this.noHeaderUpToHeader = false;
            this.didScroll = false;
        }

        public void onScrollStateChanged(AbsListView view, int scrollState) {
            if (HeaderListView.this.mExternalOnScrollListener != null) {
                HeaderListView.this.mExternalOnScrollListener.onScrollStateChanged(view, scrollState);
            }
            this.didScroll = true;
        }

        public void onScroll(AbsListView view, int firstVisibleItem, int visibleItemCount, int totalItemCount) {
            if (HeaderListView.this.mExternalOnScrollListener != null) {
                HeaderListView.this.mExternalOnScrollListener.onScroll(view, firstVisibleItem, visibleItemCount, totalItemCount);
            }
            if (this.didScroll) {
                firstVisibleItem -= HeaderListView.this.mListView.getHeaderViewsCount();
                if (firstVisibleItem < 0) {
                    HeaderListView.this.mHeader.removeAllViews();
                    return;
                }
                int i;
                updateScrollBar();
                if (visibleItemCount > 0 && firstVisibleItem == 0) {
                    if (HeaderListView.this.mHeader.getChildAt(0) == null) {
                        addSectionHeader(0);
                        this.lastResetSection = 0;
                    }
                }
                int realFirstVisibleItem = getRealFirstVisibleItem(firstVisibleItem, visibleItemCount);
                if (totalItemCount > 0) {
                    i = this.previousFirstVisibleItem;
                    if (r0 != realFirstVisibleItem) {
                        boolean needNoHeaderUpToHeader;
                        this.direction = realFirstVisibleItem - this.previousFirstVisibleItem;
                        this.actualSection = HeaderListView.this.mAdapter.getSection(realFirstVisibleItem);
                        boolean currIsHeader = HeaderListView.this.mAdapter.isSectionHeader(realFirstVisibleItem);
                        boolean prevHasHeader = HeaderListView.this.mAdapter.hasSectionHeaderView(this.actualSection - 1);
                        boolean nextHasHeader = HeaderListView.this.mAdapter.hasSectionHeaderView(this.actualSection + 1);
                        boolean currHasHeader = HeaderListView.this.mAdapter.hasSectionHeaderView(this.actualSection);
                        boolean currIsLast = HeaderListView.this.mAdapter.getRowInSection(realFirstVisibleItem) == HeaderListView.this.mAdapter.numberOfRows(this.actualSection) + -1;
                        boolean prevHasRows = HeaderListView.this.mAdapter.numberOfRows(this.actualSection + -1) > 0;
                        boolean needScrolling = (HeaderListView.this.mAdapter.getRowInSection(realFirstVisibleItem) == 0) && !currHasHeader && prevHasHeader && realFirstVisibleItem != firstVisibleItem;
                        if (currIsLast && currHasHeader && !nextHasHeader && realFirstVisibleItem == firstVisibleItem) {
                            if (Math.abs(HeaderListView.this.mListView.getChildAt(0).getTop()) >= HeaderListView.this.mListView.getChildAt(0).getHeight() / 2) {
                                needNoHeaderUpToHeader = true;
                                this.noHeaderUpToHeader = false;
                                if (!currIsHeader && !prevHasHeader && firstVisibleItem >= 0) {
                                    if (this.direction < 0) {
                                        i = this.actualSection - 1;
                                    } else {
                                        i = this.actualSection;
                                    }
                                    resetHeader(i);
                                } else if ((!currIsHeader && firstVisibleItem > 0) || needScrolling) {
                                    if (!prevHasRows) {
                                        resetHeader(this.actualSection - 1);
                                    }
                                    startScrolling();
                                } else if (needNoHeaderUpToHeader) {
                                    if (this.lastResetSection != this.actualSection) {
                                        resetHeader(this.actualSection);
                                    }
                                } else {
                                    this.noHeaderUpToHeader = true;
                                }
                                this.previousFirstVisibleItem = realFirstVisibleItem;
                            }
                        }
                        needNoHeaderUpToHeader = false;
                        this.noHeaderUpToHeader = false;
                        if (!currIsHeader) {
                        }
                        if (!currIsHeader) {
                        }
                        if (needNoHeaderUpToHeader) {
                            if (this.lastResetSection != this.actualSection) {
                                resetHeader(this.actualSection);
                            }
                        } else {
                            this.noHeaderUpToHeader = true;
                        }
                        this.previousFirstVisibleItem = realFirstVisibleItem;
                    }
                }
                if (this.scrollingStart) {
                    int headerH;
                    int scrolled = realFirstVisibleItem >= firstVisibleItem ? HeaderListView.this.mListView.getChildAt(realFirstVisibleItem - firstVisibleItem).getTop() : 0;
                    if (!this.doneMeasuring) {
                        setMeasurements(realFirstVisibleItem, firstVisibleItem);
                    }
                    if (this.doneMeasuring) {
                        headerH = ((Math.abs(scrolled) * ((this.prevH - this.nextH) * this.direction)) / (this.direction < 0 ? this.nextH : this.prevH)) + (this.direction > 0 ? this.nextH : this.prevH);
                    } else {
                        headerH = 0;
                    }
                    HeaderListView.this.mHeader.scrollTo(0, -Math.min(0, scrolled - headerH));
                    if (this.doneMeasuring) {
                        i = HeaderListView.this.mHeader.getLayoutParams().height;
                        if (headerH != r0) {
                            LayoutParams p = (LayoutParams) (this.direction < 0 ? this.next.getLayoutParams() : this.previous.getLayoutParams());
                            p.topMargin = headerH - p.height;
                            HeaderListView.this.mHeader.getLayoutParams().height = headerH;
                            HeaderListView.this.mHeader.requestLayout();
                        }
                    }
                }
                if (this.noHeaderUpToHeader) {
                    if (this.lastResetSection != this.actualSection) {
                        addSectionHeader(this.actualSection);
                        this.lastResetSection = this.actualSection + 1;
                    }
                    HeaderListView.this.mHeader.scrollTo(0, HeaderListView.this.mHeader.getLayoutParams().height - (HeaderListView.this.mListView.getChildAt(0).getHeight() + HeaderListView.this.mListView.getChildAt(0).getTop()));
                }
            }
        }

        private void startScrolling() {
            this.scrollingStart = true;
            this.doneMeasuring = false;
            this.lastResetSection = -1;
        }

        private void resetHeader(int section) {
            this.scrollingStart = false;
            addSectionHeader(section);
            HeaderListView.this.mHeader.requestLayout();
            this.lastResetSection = section;
        }

        private void setMeasurements(int realFirstVisibleItem, int firstVisibleItem) {
            boolean z = false;
            if (this.direction > 0) {
                this.nextH = realFirstVisibleItem >= firstVisibleItem ? HeaderListView.this.mListView.getChildAt(realFirstVisibleItem - firstVisibleItem).getMeasuredHeight() : 0;
            }
            this.previous = HeaderListView.this.mHeader.getChildAt(0);
            this.prevH = this.previous != null ? this.previous.getMeasuredHeight() : HeaderListView.this.mHeader.getHeight();
            if (this.direction < 0) {
                int measuredHeight;
                if (this.lastResetSection != this.actualSection - 1) {
                    addSectionHeader(Math.max(0, this.actualSection - 1));
                    this.next = HeaderListView.this.mHeader.getChildAt(0);
                }
                if (HeaderListView.this.mHeader.getChildCount() > 0) {
                    measuredHeight = HeaderListView.this.mHeader.getChildAt(0).getMeasuredHeight();
                } else {
                    measuredHeight = 0;
                }
                this.nextH = measuredHeight;
                HeaderListView.this.mHeader.scrollTo(0, this.prevH);
            }
            if (this.previous != null && this.prevH > 0 && this.nextH > 0) {
                z = true;
            }
            this.doneMeasuring = z;
        }

        private void updateScrollBar() {
            if (HeaderListView.this.mHeader != null && HeaderListView.this.mListView != null && HeaderListView.this.mScrollView != null) {
                int i;
                int offset = HeaderListView.this.mListView.computeVerticalScrollOffset();
                int range = HeaderListView.this.mListView.computeVerticalScrollRange();
                int extent = HeaderListView.this.mListView.computeVerticalScrollExtent();
                FrameLayout access$500 = HeaderListView.this.mScrollView;
                if (extent >= range) {
                    i = 4;
                } else {
                    i = 0;
                }
                access$500.setVisibility(i);
                if (extent < range) {
                    HeaderListView.this.mScrollView.setPadding(0, range == 0 ? HeaderListView.this.mListView.getHeight() : (HeaderListView.this.mListView.getHeight() * offset) / range, 0, range == 0 ? 0 : HeaderListView.this.mListView.getHeight() - ((HeaderListView.this.mListView.getHeight() * (offset + extent)) / range));
                    this.fadeOut.reset();
                    this.fadeOut.setFillBefore(true);
                    this.fadeOut.setFillAfter(true);
                    this.fadeOut.setStartOffset(1000);
                    this.fadeOut.setDuration(FileUtils.FAT_FILE_TIMESTAMP_GRANULARITY);
                    HeaderListView.this.mScrollView.clearAnimation();
                    HeaderListView.this.mScrollView.startAnimation(this.fadeOut);
                }
            }
        }

        private void addSectionHeader(int actualSection) {
            if (HeaderListView.this.mHeader.getChildAt(0) != null) {
                HeaderListView.this.mHeader.removeViewAt(0);
            }
            if (HeaderListView.this.mAdapter.hasSectionHeaderView(actualSection)) {
                HeaderListView.this.mHeaderConvertView = HeaderListView.this.mAdapter.getSectionHeaderView(actualSection, HeaderListView.this.mHeaderConvertView, HeaderListView.this.mHeader);
                HeaderListView.this.mHeaderConvertView.setLayoutParams(new LayoutParams(-1, -2));
                HeaderListView.this.mHeaderConvertView.measure(MeasureSpec.makeMeasureSpec(HeaderListView.this.mHeader.getWidth(), 1073741824), MeasureSpec.makeMeasureSpec(0, 0));
                HeaderListView.this.mHeader.getLayoutParams().height = HeaderListView.this.mHeaderConvertView.getMeasuredHeight();
                HeaderListView.this.mHeaderConvertView.scrollTo(0, 0);
                HeaderListView.this.mHeader.scrollTo(0, 0);
                HeaderListView.this.mHeader.addView(HeaderListView.this.mHeaderConvertView, 0);
            } else {
                HeaderListView.this.mHeader.getLayoutParams().height = 0;
                HeaderListView.this.mHeader.scrollTo(0, 0);
            }
            HeaderListView.this.mScrollView.bringToFront();
        }

        private int getRealFirstVisibleItem(int firstVisibleItem, int visibleItemCount) {
            if (visibleItemCount == 0) {
                return -1;
            }
            int totalHeight = HeaderListView.this.mListView.getChildAt(0).getTop();
            int relativeIndex = 0;
            while (relativeIndex < visibleItemCount && totalHeight < HeaderListView.this.mHeader.getHeight()) {
                totalHeight += HeaderListView.this.mListView.getChildAt(relativeIndex).getHeight();
                relativeIndex++;
            }
            return Math.max(firstVisibleItem, (firstVisibleItem + relativeIndex) - 1);
        }
    }

    protected class InternalListView extends ListView {
        public InternalListView(Context context, AttributeSet attrs) {
            super(context, attrs);
        }

        protected int computeVerticalScrollExtent() {
            return super.computeVerticalScrollExtent();
        }

        protected int computeVerticalScrollOffset() {
            return super.computeVerticalScrollOffset();
        }

        protected int computeVerticalScrollRange() {
            return super.computeVerticalScrollRange();
        }
    }

    public HeaderListView(Context context) {
        super(context);
        init(context, null);
    }

    public HeaderListView(Context context, AttributeSet attrs) {
        super(context, attrs);
        init(context, attrs);
    }

    private void init(Context context, AttributeSet attrs) {
        this.mListView = new InternalListView(getContext(), attrs);
        LayoutParams listParams = new LayoutParams(-1, -1);
        listParams.addRule(10);
        this.mListView.setLayoutParams(listParams);
        this.mListView.setOnScrollListener(new HeaderListViewOnScrollListener());
        this.mListView.setVerticalScrollBarEnabled(false);
        this.mListView.setOnItemClickListener(new C02731());
        addView(this.mListView);
        this.mHeader = new RelativeLayout(getContext());
        LayoutParams headerParams = new LayoutParams(-1, -2);
        headerParams.addRule(10);
        this.mHeader.setLayoutParams(headerParams);
        this.mHeader.setGravity(80);
        addView(this.mHeader);
        this.mScrollView = new FrameLayout(getContext());
        LayoutParams scrollParams = new LayoutParams(-1, -1);
        scrollParams.addRule(11);
        scrollParams.rightMargin = (int) dpToPx(2.0f);
        this.mScrollView.setLayoutParams(scrollParams);
        ImageView scrollIndicator = new ImageView(context);
        scrollIndicator.setLayoutParams(new LayoutParams(-1, -1));
        scrollIndicator.setScaleType(ScaleType.FIT_XY);
        this.mScrollView.addView(scrollIndicator);
        this.mScrollView.setVisibility(4);
        addView(this.mScrollView);
    }

    public void setAdapter(SectionAdapter adapter) {
        this.mAdapter = adapter;
        this.mListView.setAdapter(adapter);
    }

    public void setOnScrollListener(OnScrollListener l) {
        this.mExternalOnScrollListener = l;
    }

    public ListView getListView() {
        return this.mListView;
    }

    public void addHeaderView(View v) {
        this.mListView.addHeaderView(v);
    }

    private float dpToPx(float dp) {
        return TypedValue.applyDimension(1, dp, getContext().getResources().getDisplayMetrics());
    }
}
