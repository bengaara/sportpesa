package com.pevans.headerlistview;

import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.AdapterView.OnItemClickListener;
import android.widget.BaseAdapter;

public abstract class SectionAdapter extends BaseAdapter implements OnItemClickListener {
    private int mCount;

    public abstract Object getRowItem(int i, int i2);

    public abstract View getRowView(int i, int i2, View view, ViewGroup viewGroup);

    public abstract int numberOfRows(int i);

    public abstract int numberOfSections();

    public SectionAdapter() {
        this.mCount = -1;
    }

    public boolean hasSectionHeaderView(int section) {
        return false;
    }

    public View getSectionHeaderView(int section, View convertView, ViewGroup parent) {
        return null;
    }

    public Object getSectionHeaderItem(int section) {
        return null;
    }

    public int getRowViewTypeCount() {
        return 1;
    }

    public int getSectionHeaderViewTypeCount() {
        return 1;
    }

    public int getRowItemViewType(int section, int row) {
        return 0;
    }

    public int getSectionHeaderItemViewType(int section) {
        return 0;
    }

    public final void onItemClick(AdapterView<?> parent, View view, int position, long id) {
        onRowItemClick(parent, view, getSection(position), getRowInSection(position), id);
    }

    public void onRowItemClick(AdapterView<?> adapterView, View view, int section, int row, long id) {
    }

    public final int getCount() {
        if (this.mCount < 0) {
            this.mCount = numberOfCellsBeforeSection(numberOfSections());
        }
        return this.mCount;
    }

    public boolean isEmpty() {
        return getCount() == 0;
    }

    public final Object getItem(int position) {
        int section = getSection(position);
        if (!isSectionHeader(position)) {
            return getRowItem(section, getRowInSection(position));
        }
        if (hasSectionHeaderView(section)) {
            return getSectionHeaderItem(section);
        }
        return null;
    }

    public long getItemId(int position) {
        return (long) position;
    }

    public final View getView(int position, View convertView, ViewGroup parent) {
        int section = getSection(position);
        if (!isSectionHeader(position)) {
            return getRowView(section, getRowInSection(position), convertView, parent);
        }
        if (hasSectionHeaderView(section)) {
            return getSectionHeaderView(section, convertView, parent);
        }
        return null;
    }

    protected int getSection(int position) {
        int section = 0;
        int cellCounter = 0;
        while (cellCounter <= position && section <= numberOfSections()) {
            cellCounter += numberOfCellsInSection(section);
            section++;
        }
        return section - 1;
    }

    protected int getRowInSection(int position) {
        int section = getSection(position);
        int row = position - numberOfCellsBeforeSection(section);
        if (hasSectionHeaderView(section)) {
            return row - 1;
        }
        return row;
    }

    protected boolean isSectionHeader(int position) {
        int section = getSection(position);
        return hasSectionHeaderView(section) && numberOfCellsBeforeSection(section) == position;
    }

    protected int numberOfCellsBeforeSection(int section) {
        int count = 0;
        for (int i = 0; i < Math.min(numberOfSections(), section); i++) {
            count += numberOfCellsInSection(i);
        }
        return count;
    }

    private int numberOfCellsInSection(int section) {
        return (hasSectionHeaderView(section) ? 1 : 0) + numberOfRows(section);
    }

    public void notifyDataSetChanged() {
        this.mCount = numberOfCellsBeforeSection(numberOfSections());
        super.notifyDataSetChanged();
    }

    public void notifyDataSetInvalidated() {
        this.mCount = numberOfCellsBeforeSection(numberOfSections());
        super.notifyDataSetInvalidated();
    }

    public final int getItemViewType(int position) {
        int section = getSection(position);
        if (isSectionHeader(position)) {
            return getRowViewTypeCount() + getSectionHeaderItemViewType(section);
        }
        return getRowItemViewType(section, getRowInSection(position));
    }

    public final int getViewTypeCount() {
        return getRowViewTypeCount() + getSectionHeaderViewTypeCount();
    }

    public boolean isEnabled(int position) {
        return (disableHeaders() || !isSectionHeader(position)) && isRowEnabled(getSection(position), getRowInSection(position));
    }

    public boolean disableHeaders() {
        return false;
    }

    public boolean isRowEnabled(int section, int row) {
        return true;
    }
}
