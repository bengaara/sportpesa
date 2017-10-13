package com.pevans.dtos;

public class TermCondition {
    private Integer section;
    private String text;
    private String title;
    private Integer version;

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getText() {
        return this.text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Integer getVersion() {
        return this.version;
    }

    public void setVersion(Integer version) {
        this.version = version;
    }

    public Integer getSection() {
        return this.section;
    }

    public void setSection(Integer section) {
        this.section = section;
    }
}
