package com.pevans.constants;

public enum Environments {
    PRODUCTION(Integer.valueOf(1)),
    PREPRODUCTION(Integer.valueOf(2)),
    DEBUG(Integer.valueOf(3));
    
    private Integer id;

    private Environments(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return this.id;
    }
}
