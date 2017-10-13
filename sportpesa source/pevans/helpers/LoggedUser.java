package com.pevans.helpers;

import com.pevans.dtos.Favourite;
import java.util.List;

public class LoggedUser {
    private Double balance;
    private boolean favouritesModified;
    private String lastLogin;
    private Integer operatorId;
    private Integer playerState;
    private String token;
    private String username;

    public LoggedUser() {
        this.favouritesModified = false;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Double getBalance() {
        return this.balance;
    }

    public void setBalance(Double balance) {
        this.balance = balance;
    }

    public boolean isFavouritesModified() {
        return this.favouritesModified;
    }

    public void setFavouritesModified(boolean favouritesModified) {
        this.favouritesModified = favouritesModified;
    }

    public List<Favourite> getFavouriteList() {
        return FavouritesHelper.loadFavourites();
    }

    public void setFavouriteList(List<Favourite> favouriteList) {
        FavouritesHelper.saveFavourites(favouriteList);
    }

    public Integer getPlayerState() {
        return this.playerState;
    }

    public void setPlayerState(Integer playerState) {
        this.playerState = playerState;
    }

    public String getLastLogin() {
        return this.lastLogin;
    }

    public void setLastLogin(String lastLogin) {
        this.lastLogin = lastLogin;
    }

    public String getToken() {
        return this.token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Integer getOperatorId() {
        return this.operatorId;
    }

    public void setOperatorId(Integer operatorId) {
        this.operatorId = operatorId;
    }
}
