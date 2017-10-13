function getPath() {
    var e;
    return e = "msite" === window.location.host || "memsite" === window.location.host ? "http://" + window.location.host : "21.20.20.247" === window.location.host || "40.40.40.30" === window.location.host ? $("#base_url").val() : "40.40.40.29:8181" === window.location.host ? "http://" + window.location.host : window.location.host.indexOf("ngrok.io") > -1 ? "http://" + window.location.host + "/www-development" : "https://" + window.location.host
}

function show_roadBlock() {
    var e = new Date,
        t = new Date(e.getFullYear(), 4, 24),
        a = 864e5,
        n = Math.ceil((t.getTime() - e.getTime()) / a);
    n >= 1 && $(document).ready(function() {
        $("#rb_body").html($("#road_block").html()), $("#rb_modal").modal(), $("#rb_modal").modal("show")
    })
}

function GetClock() {
    d = new Date, nhour = d.getHours(), nmin = d.getMinutes(), nsec = d.getSeconds(), 0 == nhour ? (ap = " AM", nhour = 12) : nhour <= 11 ? ap = " AM" : 12 == nhour ? ap = " PM" : nhour >= 13 && (ap = " PM", nhour -= 12), nmin <= 9 && (nmin = "0" + nmin), nsec <= 9 && (nsec = "0" + nsec), document.getElementById("clockbox").innerHTML = " " + nhour + ":" + nmin + ":" + nsec + " " + ap + " ", setTimeout("GetClock()", 1e3)
}

function cancel_action(e, t) {
    new_data = "", $("#" + e).html(new_data), $("#" + t).html(new_data)
}

function check_timeout() {
    return localStorage.last_activity && (new Date).getTime() - localStorage.last_activity > 18e5 ? (localStorage.clear(), localStorage.last_activity = (new Date).getTime(), void window.location.reload()) : void(localStorage.last_activity = (new Date).getTime())
}

function logout() {
    localStorage.clear()
}

function check_timeout_slip() {
    return localStorage.last_activity ? (new Date).getTime() - localStorage.last_activity > 18e5 ? (localStorage.clear(), localStorage.last_activity = (new Date).getTime(), window.location.reload(), !1) : !0 : (localStorage.last_activity = (new Date).getTime(), !0)
}

function hasClass(e, t) {
    return (" " + e.className + " ").indexOf(" " + t + " ") > -1
}

function removeClass(e, t) {
    e.className = e.className.replace(new RegExp("(?:^|\\s)" + t + "(?!\\S)"), "")
}

function addToSlip(e, t, a, n) {
    if ($("#ajax_loading_slip").show(), !check_timeout_slip()) return !1;
    var i = e.substring(0, 1);
    if ("h" == i) {
        var o = e,
            e = o.substring(2),
            l = t.substring(2),
            s = a.substring(2),
            r = document.getElementById(o).className;
        if ("active" == r) {
            var c = e;
            removeGame(c)
        } else bet_point(e), multi_bet_counter(e, o, t, a, n);
        change_class(l, '""'), change_class(s, '""')
    } else {
        var o = "h^" + e,
            d = "h^" + t,
            m = "h^" + a;
        document.getElementById(d) && (change_class(d, '""'), change_class(m, '""'));
        var r = document.getElementById(e).className;
        if ("active" == r) {
            var c = e.split("^");
            removeGame(c[1])
        } else bet_point(e), multi_bet_counter(e, o, t, a, n)
    }
    change_class(t, '""'), change_class(a, '""')
}

function change_class(e, t) {
    document.getElementById(e) && (document.getElementById(e).className = t)
}

function multi_bet_counter(e, t, a, n, i) {
    var o = document.getElementById(i),
        l = parseInt($("#betCount").val()),
        s = $("#max_multi_games").val(),
        s = s - 1;
    if ((s >= l || isNaN(l)) && (document.getElementById(e) && (document.getElementById(e).className = "active"), document.getElementById(t) && (document.getElementById(t).className = "active")), l == s + 1)
        if (document.getElementById(a) && "active" == document.getElementById(a).className || document.getElementById(n) && "active" == document.getElementById(n).className || o && "active" == o.className) document.getElementById(e) && (document.getElementById(e).className = "active"), document.getElementById(t) && (document.getElementById(t).className = "active");
        else {
            alert("You have reached the maximum number of picks in your multibet.\nPlease place your bet with the current selections or unselect the undesired picks.");
            var r = '<div class="alert alert-success" >You have reached the maximum number of picks in your multibet.\nPlease place your bet with the current selections or unselect the undesired picks.</div>';
            $("#bet_detail_notify").html(r)
        }
    o && hasClass(o, "active") && removeClass(o, "active")
}

function bet_point(e) {
    var t = $("#query_string").val();
    t = t.substr(1), "tournament_matches/wcmatches" == t ? $(document).ready(function(t) {
        $.get(defaultPath + "/tournament/right/" + e, function(e) {
            $("#bet-slip-content").html(e)
        })
    }) : $(document).ready(function(t) {
        $.get(defaultPath + "/bets/right/" + e, function(e) {
            $("#bet-slip-content").html(e), (document.URL === defaultPath + "/" || document.URL === defaultPath + "/bets/index/todaymatches" || document.URL === defaultPath + "/bets/index/allmatches" || document.URL.indexOf("/bets/index/") > -1 || document.URL.indexOf("/games/sport") > -1 || document.URL.indexOf("/games/allgames") > -1 || document.URL.indexOf("games/highlights") > -1) && current_score_init(), $("#ajax_loading_slip").hide()
        })
    })
}

function jackpot_choice(e, t, a) {
    $("#ajax_loading_slip").show(), check_timeout();
    var n = $("#max_comb").val(),
        i = $("#max_double_predict").val();
    $("#max_tripl_predict").val();
    if (parseInt(n) <= 1) return void jackpot_choice_working(e, t, a);
    var o = ($("#total_triples").val(), $("#total_combs").val(), $("#total_doubles").val()),
        l = document.getElementById(e).className,
        s = document.getElementById(t).className,
        r = document.getElementById(a).className,
        c = $("#notif_mx_double").val();
    if (c = parseFloat(c), parseInt(o) >= parseInt(i) && -1 === l.indexOf("active") && (-1 !== s.indexOf("active") || -1 !== r.indexOf("active")) && 0 === c) {
        if ($("#notif_mx_double").val("1"), i > 0) var d = "Maximum Double Combination for a Jackpot allowed is " + i;
        else var d = "Double Combination for a Jackpot is not allowed";
        var m = "Sorry!!";
        $.growl({
            title: m,
            message: d
        }), $("#ajax_loading_slip").hide()
    }
    var u = document.getElementById(e).className;
    parseInt($("#betCount").val());
    $.get(defaultPath + "/bets/right_jackpot/" + e, function(t) {
        $("#bet-slip-content").html(t), $("#ajax_loading_slip").hide(), processChoice(u, e)
    })
}

function processChoice(e, t) {
    promise = removeAllActive().then(addOnlyActive(e, t))
}

function addOnlyActive(e, t) {
    if (d = new $.Deferred, -1 !== e.indexOf("active")) {
        var a = document.getElementById(t).className;
        a = a.replace("active", ""), a = a.replace(" ", ""), document.getElementById(t).className = a
    }
    for (var n = $("#all_jp_str").val(), i = n.split(","), o = 0; o < i.length; o++) document.getElementsByClassName("btnjp" + i[o]) && $(".btnjp" + i[o]).addClass("active");
    return d.promise()
}

function removeAllActive() {
    d = new $.Deferred;
    for (var e = $('*[class*="btnjp"]').filter(function() {
            return this.className.match(/(?:^|\s)btnjp/)
        }), t = 0; t < e.length; t++) {
        var a = e[t].id,
            n = document.getElementById(a).className;
        n = n.replace("active", ""), n = n.replace(" ", ""), document.getElementById(a).className = n
    }
    return d.promise()
}

function jackpot_choice_working(e, t, a) {
    $("#ajax_loading_slip").show(), check_timeout();
    var n = document.getElementById(e).className;
    parseInt($("#betCount").val());
    $.get(defaultPath + "/bets/right_jackpot/" + e, function(t) {
        $("#bet-slip-content").html(t), $("#ajax_loading_slip").hide(), processChoice(n, e)
    })
}

function jackpot_choice1(e, t, a) {
    var n = document.getElementById(e).className;
    parseInt($("#betCount").val());
    $.get(defaultPath + "/bets/right_jackpot/" + e, function(e) {
        $("#bet-slip-content").html(e)
    }), "active" == n ? document.getElementById(e).className = "" : document.getElementById(e).className = "active"
}

function set_bet_amount(e) {
    var e = Math.floor(parseFloat(e));
    if (isNaN(e)) var e = 0;
    var t = getPath();
    $.get(t + "/bets/set_bet_amount/" + e, function(e) {})
}

function handle_amount(e, t, a, n, i, o, l) {
    var s = $("#bet_type_handler").val(),
        r = ($("#betCount").val(), Math.floor(parseFloat($("#bet_amount").val()))),
        c = $("#pos_win").val();
    "single" == s ? single_handle_amount(r, c, e, a, i) : multi_handle_amount(r, c, t, n, o, l)
}

function single_handle_amount(e, t, a, n, i) {
    var o = $("#max_single_win").val();
    $("#max_single_bet_amt").val();
    isNaN(e) ? (msg = '<div class="alert alert-success" >Only Numbers are allowed for bet amount.</div>', $("#bet_detail_notify").html(msg)) : a > e ? (msg = '<div class="alert alert-success" >The minimum bet amount is Ksh. ' + a + ".</div>", $("#bet_detail_notify").html(msg)) : t > i ? (msg = '<div class="alert alert-success" >The maximum possible win  is  Ksh. ' + i + ".</div>", $("#bet_detail_notify").html(msg), document.getElementById("pos_win").value = o) : e > n ? (msg = '<div class="alert alert-success" >The maximum single bet amount  is  Ksh. ' + n + ".</div>", $("#bet_detail_notify").html(msg), $("#bet_amount").val(n), calculate_multi_win()) : e >= a ? (document.getElementById("bet_detail_notify").innerHTML = "", calculate_multi_win(), set_bet_amount(e)) : (calculate_multi_win(), set_bet_amount(e))
}

function multi_handle_amount(e, t, a, n, i, o) {
    isNaN(e) ? (msg = '<div class="alert alert-success" >Only Numbers are allowed for bet amount.</div>', $("#bet_detail_notify").html(msg)) : a > e ? (msg = '<div class="alert alert-success" >The minimum multi bet amount is  Ksh. ' + a + ".</div>", $("#bet_detail_notify").html(msg)) : e > n ? (msg = '<div class="alert alert-success" >The maximum multi bet amount  is  Ksh. ' + n + ".</div>", $("#bet_detail_notify").html(msg), $("#bet_amount").val(n), calculate_multi_win()) : e >= a ? (document.getElementById("bet_detail_notify").innerHTML = "", calculate_multi_win(), set_bet_amount(e)) : t > i ? (msg = '<div class="alert alert-success" >The maximum possible win  is  Ksh. ' + i + ".</div>", $("#bet_detail_notify").html(msg)) : betCount > o ? (msg = '<div class="alert alert-success" >The maximum games per multi bet  is   ' + o + ".</div>", $("#bet_detail_notify").html(msg)) : (calculate_multi_win(), set_bet_amount(e))
}

function odd_handler(e, t) {
    oddlist !== t && (alert("not equal"), document.getElementById(e).className = "")
}

function removeGame(e) {
    var t = e;
    $.get(defaultPath + "/bets/removeGame/" + e, function(e) {
        $.get(defaultPath + "/bets/right", function(e) {
            current_score_init(), $("#bet-slip-content").html(e), $("#ajax_loading_slip").hide()
        })
    });
    var a = "h^" + t;
    document.getElementById(t) && (document.getElementById(t).className = ""), document.getElementById(a) && (document.getElementById(a).className = ""), check_timeout()
}

function removeJackpot(e) {
    var t = "td^" + e;
    $.get(defaultPath + "/bets/removeJackpot/" + e, function(e) {
        $.get(defaultPath + "/bets/right_jackpot", function(e) {
            $("#bet-slip-content").html(e)
        })
    }), document.getElementById(t).className = "", check_timeout()
}

function getAccountDetails() {
    var e = getPath();
    $.get(e + "/bets/get_user_profile/", function(e) {})
}

function truncate(e) {
    var t = Math.floor(parseInt(e)),
        e = t.toString(),
        a = e.length,
        a = a - 1,
        n = e.substring(0, a),
        t = n + 0;
    return t
}

function calculate_multi_win() {
    var e = parseFloat($("#total_multi_coeff_real").val()),
        t = Math.floor(parseFloat($("#bet_amount").val())),
        a = parseInt($("#max_win").val()),
        n = 0;
    n = Math.floor(Math.round(e * t * 100) / 100), n > a && (n = a + t), $("#pos_win").html(n + ".00 KSH")
}

function calculate_single_win() {
    var e = parseFloat($("#total_single_coeff").val()),
        t = parseInt($("#bet_singleamount").val()),
        a = parseInt($("#max_singlewin").val()),
        n = 0;
    n = Math.round(e * t), n > a && (n = a), $("#pos_singlewin").html(n)
}

function confJP() {
    $("html, body").animate({
        scrollTop: 0
    }, 1e3);
    var e = parseInt($("#bet_amount").val()),
        t = $("#total_combs").val(),
        a = $("#total_doubles").val(),
        n = "";
    $("#notif_mx_double").val("0"), n += parseInt(t) > 1 ? "<p>You are placing a Jackpot bet of " + a + " games with  double predictions, " + t + " combinations (2<sup>n</sup> where n is the number of double predictions).Bet amount:  Kshs " + e + ". Please confirm</p>" : "<p>Please confirm</p>", $("#jpconf-bet-body").html(n), $("#jp-modal").modal(), $("#jp-modal").modal("show")
}

function confBT() {
    $("html, body").animate({
        scrollTop: 0
    }, 1e3), $("#bt-modal").modal(), $("#bt-modal").modal("show")
}

function makeBet(e) {
    check_timeout();
    var t = 0;
    if ("multi" === e || "jackpot" === e) t = parseInt($("#bet_amount").val()), t = parseInt(t);
    else if ("single" === e && (t = parseInt($("#bet_amount").val()), t = parseInt(t), max_single_win1 = $("#max_single_win").val(), max_single_win1 < t)) return msg1 = '<div class="alert alert-success" >You have reached the maximum bets for this game.</div>', void(document.getElementById("bet_detail_notify").innerHTML = msg1);
    var a = $("#c_user_id"),
        n = $("#c_user_id").val();
    if (null !== a && "" !== n) {
        document.getElementById("bet_amount").value = t, document.getElementById("bet_amount").readOnly = !0, document.getElementById("generate_code_button") && (document.getElementById("generate_code_button").disabled = !0), document.getElementById("place_bet_button") && (document.getElementById("place_bet_button").style.visibility = "hidden");
        var i = {
            type: e,
            amount: t
        };
        i = JSON.stringify(i);
        var o = document.URL;
        $(".ajax_loading_slip").show(), $.post(defaultPath + "/bets/makebet/", i, function(a) {
            $(".ajax_loading_slip").hide(), (o.indexOf("/bets/index/") > -1 || o === defaultPath + "/" || o.indexOf("/games/sport") > -1 || o.indexOf("/games/allgames") > -1 || o.indexOf("games/highlights") > -1) && current_score_init();
            var a = JSON.parse(a),
                n = "";
            if (a.error) {
                document.getElementById("bet_amount").value = t, document.getElementById("bet_amount").readOnly = !1, document.getElementById("generate_code_button") && (document.getElementById("generate_code_button").disabled = !1), document.getElementById("place_bet_button") && (document.getElementById("place_bet_button").style.visibility = "visible"), document.getElementById("mod-bets-msg").innerHTML = "", n = '<div class="alert alert-success" >' + a.errordescription + "</div>";
                var i = "";
                document.getElementById("bet_detail_notify").innerHTML = i + n
            } else {
                document.getElementById("betCount").value = "0", n = '<div class="" >' + a.msg + "</div>";
                var i = "";
                $("html, body").animate({
                    scrollTop: 0
                }, 1e3), document.getElementById("bet-slip-content").innerHTML = i + n;
                var l = $("#query_string").val();
                "/" === l.charAt(0) && (l = l.substr(1));
                var s = l.split("/"),
                    l = s[0];
                0 === l.length ? "jackpot" === e ? $.get(defaultPath + "/bets/resetbets/" + e, function(e) {
                    remove_all_market_games_jp()
                }) : remove_all_market_games() : "jackpot" === e ? $.get(defaultPath + "/bets/resetbets/" + e, function(e) {
                    remove_all_market_games_jp()
                }) : remove_all_market_games()
            }
            get_the_balance(1)
        })
    } else msg = '<div class="alert alert-success" >Please login to be able to place a bet.</div>', $("#bet_detail_notify").html(msg)
}

function manage_attribute(e, t, a) {
    document.getElementById(e).attrib = a
}

function flip_account() {
    check_timeout();
    var e = "";
    $("#change_password").html(e), $("#create_account").hide(), $("#bet-msgs").modal("hide"), $(".site-heading").html($("#loaded_header").html()), $("#site-content").flippy({
        color_target: "#0D151C",
        verso: $("#create_account").html(),
        direction: "LEFT",
        duration: "750",
        depth: 1
    })
}

function flip_jackpot_games() {
    $(document).ready(function(e) {
        $("#jackpot_games").hide(), $("#bet-msgs").modal("hide"), $(".site-heading").html("<heading> Jackpot Games</heading>"), $("#site-content").flippy({
            color_target: "#0D151C",
            verso: $("#jackpot_games").html(),
            direction: "LEFT",
            duration: "750",
            depth: 1
        }), get_jackpot_slip()
    })
}

function flip_login() {
    $(".modal-login").hide(), $("#bet-msgs").modal("hide"), $(".site-heading").html("<heading> Login Required</heading>"), $("#site-content").flippy({
        color_target: "#0D151C",
        verso: $(".modal-login").html(),
        direction: "LEFT",
        duration: "750",
        depth: 1
    })
}

function flip_content() {
    show_highlights()
}

function term_flipper(e) {
    $(".site-heading").html("<heading> Terms and conditions</heading>"), $(".site-content").flippy({
        color_target: "#0D151C",
        verso: $("#" + e).html(),
        direction: "TOP",
        duration: "750",
        depth: 1
    })
}

function flip_terms() {
    $(".site-heading").html("<heading>  Terms and conditions</heading>"), $("#site-content").flippy({
        color_target: "#0D151C",
        verso: $("#terms").html(),
        direction: "TOP",
        duration: "750",
        depth: 1
    })
}

function flip_how_to_play() {
    $("#bet-msgs").modal("hide"), $(".site-heading").html($("#loaded_header").html()), $("#site-content").flippy({
        color_target: "#0D151C",
        verso: $("#main_page").html(),
        direction: "LEFT",
        duration: "750",
        depth: 1
    }), setTimeout('location.href="' + defaultPath + '/users/howtoplay"', 750)
}

function show_registration_div_mobile(e) {
    for (var t = ["how_to_my_account_mobile", "how_to_bet_mobile", "how_to_Registration_mobile", "how_to_withdrawal_mobile", "how_to_deposit_mobile"], a = 0; a < t.length; a++) $(document).ready(function() {
        $("#play1").hide(), $("#play2").hide(), $("#play3").hide(), $("#play4").hide(), $("#play5").hide(), $("#play6").hide(), $("#play7").hide(), $("#play8").hide(), $("#play9").hide(), $("#play10").hide(), $("#play11").hide(), $("#play12").hide(), $("#play13").hide(), $("#play14").hide(), $("#play15").hide(), $("#play16").hide(), $("#play17").hide(), $("#play18").hide(), $("#play19").hide(), $("#play20").hide(), $("#play21").hide(), $("#play22").hide(), $("#play23").hide(), $("#play24").hide(), $("#play25").hide(), $("#play26").hide(), t[a] == e ? $("#" + t[a]).show() : $("#" + t[a]).hide()
    })
}

function show_registration_div(e) {
    for (var t = ["how_to_my_account", "how_to_bet", "how_to_Registration", "how_to_withdrawal", "how_to_deposit"], a = 0; a < t.length; a++) $(document).ready(function() {
        $("#play1").hide(), $("#play2").hide(), $("#play3").hide(), $("#play4").hide(), $("#play5").hide(), $("#play6").hide(), $("#play7").hide(), $("#play8").hide(), $("#play9").hide(), $("#play10").hide(), $("#play11").hide(), $("#play12").hide(), $("#play13").hide(), $("#play14").hide(), $("#play15").hide(), $("#play16").hide(), $("#play17").hide(), $("#play18").hide(), $("#play19").hide(), $("#play20").hide(), $("#play21").hide(), $("#play22").hide(), $("#play23").hide(), $("#play24").hide(), $("#play25").hide(), $("#play26").hide(), t[a] == e ? $("#" + t[a]).show() : $("#" + t[a]).hide()
    })
}

function loginSubmit(e) {
    var t = $("#" + e + "-user_id").val(),
        a = $("#" + e + "-user_pass").val(),
        n = {
            username: t,
            password: a
        };
    n = JSON.stringify(n), $.post(defaultPath + "/bets/login/", n, function(e) {
        var e = JSON.parse(e),
            t = "";
        1 == e.error ? (t = '<div class="alert alert-success" >' + e.description + "</div>", $("#_login_notify").html(t)) : e.user_id ? location.reload() : 1e3 == e.res ? ($("#stored_f_pin").val(a), start_create_password()) : 1001 == e.res && ($("#reg_number").val(e.uid), register_view_one())
    })
}

function start_create_password() {
    var e = document.getElementById("frm-login-user_id").value,
        t = document.getElementById("stored_f_user_id").value,
        a = document.getElementById("stored_f_pin").value;
    $(document).ready(function(e) {
        new_data = "", $("#forgot").html(new_data), $("#forgot_response").html(new_data)
    }), signup_view(), $(document).ready(function(n) {
        e ? (document.getElementById("s_user_id").value = e, document.getElementById("s_pin").value = a) : (document.getElementById("s_user_id").value = t, document.getElementById("s_pin").value = a)
    })
}

function add_expl1() {
    $(document).ready(function(e) {
        $("#dynamic_slider").html($("#expl1").html())
    })
}

function add_expl2() {
    $(document).ready(function(e) {
        $("#dynamic_slider").html($("#expl2").html())
    })
}

function add_expl3() {
    $(document).ready(function(e) {
        $("#dynamic_slider").html($("#expl3").html())
    })
}

function back_to_original_Slide() {
    $(document).ready(function(e) {
        $("#dynamic_slider").html($("#Original_slider").html())
    })
}

function showChatIcon() {
    $.get(defaultPath + "/droidtvs/isskillsetinservice/", function(e) {
        e ? $("#chat_chat").show() : $("#chat_email").show()
    })
}

function pollLeftContent() {
    var e, t;
    localStorage.crnt_sprt ? t = localStorage.crnt_sprt : (t = "sport-1", localStorage.crnt_sprt = "sport-1"), e = $("#" + t).hasClass("in") ? !0 : !1, $.get(defaultPath + "/bets/left", function(a) {
        $("#left-content").html(a), e && (t = localStorage.crnt_sprt, $("#" + t).removeClass("collapse"), $("#" + t).collapse("show"), $("#" + t).css("height", "auto"))
    })
}

function removeDataSrc() {
    var e = document.getElementById("twitter-widget-0");
    if (e) {
        var t = e.contentDocument ? e.contentDocument : e.contentWindow.document,
            a = t.querySelectorAll(".avatar");
        if (a)
            for (var n = 0; n < a.length; n++) a[n].setAttribute("data-src-1x", ""), a[n].setAttribute("data-src-2x", "")
    }
}

function addPopstateEvent() {
    window.addEventListener("popstate", function(e) {
        e && location.reload()
    })
}

function loadTwitterWidget() {
    window.twttr = function(e, t, a) {
        var n, i = e.getElementsByTagName(t)[0],
            o = window.twttr || {};
        return e.getElementById(a) ? o : (n = e.createElement(t), n.id = a, n.src = "https://platform.twitter.com/widgets.js", i.parentNode.insertBefore(n, i), o._e = [], o.ready = function(e) {
            o._e.push(e)
        }, o)
    }(document, "script", "twitter-wjs")
}

function set_bet_type(e) {
    document.getElementById("bet_type_handler").value = e
}

function add_favorite_team() {
    check_timeout(), $(".overlay-chart-container").show();
    var e = getPath(),
        t = document.getElementById("fav_team").value,
        a = document.getElementById("s_user").value;
    $(function() {
        $.getJSON(e + "/bets/addFav/" + a + "/" + t, function(t) {
            if (t.error) {
                var a = '<div class="alert alert-success" style="margin-top:5px!important; margin-left:5px; margin-right: 5px; padding: 2px auto;" >' + t.errordescription + "</div>";
                $("#fav_notify").html(a)
            } else document.getElementById("fav_notify").innerHTML = "", $.get(e + "/games/user_favorite/", function(e) {
                $("#favourite_game").html(e);
                var t = {
                    ".chosen-select": {}
                };
                for (var a in t) $(a).chosen(t[a])
            }).fail(function() {
                $(".overlay-chart-container").hide()
            });
            $(".overlay-chart-container").hide()
        })
    })
}

function removeFavoriteTeam(e) {
    check_timeout(), $(".overlay-chart-container").show();
    var t = getPath();
    $(function() {
        $.get(t + "/bets/removeFav/" + e, function(e) {
            $.get(t + "/games/user_favorite/", function(e) {
                $("#favourite_game").html(e);
                var t = {
                    ".chosen-select": {}
                };
                for (var a in t) $(a).chosen(t[a])
            }).fail(function() {
                $(".overlay-chart-container").hide()
            }), $(".overlay-chart-container").hide()
        })
    })
}

function flip_favorite_games() {
    $("#favourite_game").hide(), $("#bet-msgs").modal("hide"), $(".site-heading").html("<heading>  My Favourites</heading>"), $("#site-content").flippy({
        color_target: "#0D151C",
        verso: $("#favourite_game").html(),
        direction: "LEFT",
        duration: "750",
        depth: 1
    })
}

function get_jp_games() {
    $(document).ready(function(e) {
        $.get(defaultPath + "/bets/reload_jp_games", function(e) {
            $("#site-content").html(e)
        })
    })
}

function flip_update_account() {
    $(".site-heading").html("<heading>  Update your account to login:</heading>"), $("#site-content").flippy({
        color_target: "#0D151C",
        verso: $("#signup").html(),
        direction: "LEFT",
        duration: "750",
        depth: 1
    })
}

function getFavData(e) {
    var t = getPath();
    $.get(t + "/bets/favData/1", function(e) {
        $("#favourite_game").html(e)
    })
}

function manage_account() {
    check_timeout();
    var e = getPath(),
        t = $("#user_email").val(),
        a = $("#user_tel").val(),
        n = $("#user_add").val(),
        i = 99,
        o = $("#user_town").val(),
        l = $("#user_fname").val(),
        s = $("#user_mname").val(),
        r = $("#user_lname").val(),
        c = $("#user_dob").val();
    t = assignValue(t), a = assignValue(a), n = assignValue(n), i = assignValue(i), o = assignValue(o), l = assignValue(l), s = assignValue(s), r = assignValue(r), c = assignValue(c);
    var d = "en";
    $.getJSON(e + "/users/users/" + a + "/" + n + "/" + i + "/" + o + "/" + l + "/" + s + "/" + r + "/" + c + "/" + d + "/" + t + "/", function(e) {
        e.description ? msg = '<div class="alert alert-success" style="margin-left:5px; margin-right: 5px; padding: 2px auto;" >' + e.description + "</div>" : msg = '<div class="alert alert-success" style="margin-left:5px; margin-right: 5px; padding: 2px auto;" >' + e.errordescription + "</div>", $("#manage_account_message").html(msg)
    })
}

function assignValue(e) {
    if (!e) var e = " ";
    return e
}

function view_bet_detail(e, t) {
    $.get(defaultPath + "/users/view_bet_detail/" + e + "/" + t, function(e) {
        $("#bet_detail").html(e), $("#bet_det").modal("show")
    })
}

function view_bet_dt(e, t) {
    var a = $("#bd_state" + e).val();
    1 == a ? document.getElementById(e).innerHTML = "" : $.get(defaultPath + "/users/view_bet_detail/" + e + "/" + t, function(t) {
        $("#" + e).html(t)
    })
}

function checkType(e) {
    var t = $("#" + e).val();
    isNaN(t)
}

function show_country(e) {
    var t = "country_state_" + e,
        a = $("#" + t).val();
    1 == a ? ($("#" + e).hide(), document.getElementById(t).value = "") : ($("#" + e).show(), document.getElementById(t).value = 1)
}

function check_country_state(e, t) {
    var a = localStorage.getItem("country_state_" + e);
    "on" === a ? show_league(e, t) : localStorage.setItem("country_state_" + e, "off")
}

function show_league(e, t) {
    var a = "nav_count_" + t + "_" + e,
        n = document.getElementById(a);
    $("#" + a).removeAttr("class");
    var i = "country_" + e + "_" + t,
        o = $("#" + i).val(),
        l = "con_lig_" + t + "_" + e;
    o == e ? (1 == t ? n.className = "icon-chevron-right text-right" : n.className = "icon-chevron-right text-left", document.getElementById(l).innerHTML = "", localStorage.country_item = "", localStorage.setItem("country_state_" + e, "off")) : (localStorage.country_item = e, localStorage.setItem("country_state_" + e, "on"), $.get(defaultPath + "/games/showactiveleague/" + e + "/" + t, function(e) {
        $("#" + l).html(e), 1 == t ? n.className = "icon-chevron-down text-right" : n.className = "icon-chevron-down text-left"
    }))
}

function check_country_lig_session(e) {
    var t = parseInt($("#s_lig_link").val());
    parseInt(localStorage.country_item) !== parseInt(e) || isNaN(t) || show_league(e)
}

function show_crnt_sprt() {
    var e;
    localStorage.crnt_sprt ? (e = localStorage.crnt_sprt, $("#" + e).collapse("show")) : (localStorage.crnt_sprt = "sport-1", $("#sport-1").collapse("show"))
}

function s_data(e) {
    $(document).ready(function() {
        var t = document.getElementById("ajax_loading"),
            a = document.getElementById("ajax_loading2");
        t && a && (t.innerHTML = '<div id="temp_div"  class="span6">&nbsp;&nbsp;Loading...<img src=' + defaultPath + "/public/img/heart_beat.gif  />&nbsp;</div>", a.innerHTML = '<div id="temp_div2"  class="span6">&nbsp;&nbsp;Loading...<img src=' + defaultPath + "/public/img/heart_beat.gif  />&nbsp;</div>");
        var n = defaultPath + "/games/sport/" + e + "/1";
        $.get(n, function() {}).done(function(t) {
            $("#site-content").html(t), live_score_game(), $(".carousel").carousel(), $("#temp_div").remove(), $("#temp_div2").remove(), bslp();
            var a = defaultPath + "/games/sport/" + e;
            window.history.pushState({
                state: "new"
            }, "", a), $("#query_string").val("games/sport/" + e);
            var n = '<a style="cursor: pointer"  onclick="javascript: show_filtered_games_sports(' + e + ',0,0,0,0,1);">All Upcoming Matches</a>';
            $("#all_upcoming_matches_footer_link").html(n)
        })
    })
}

function bslp() {
    var e = document.URL;
    e.indexOf("jackpot_games") > -1 ? $.get(defaultPath + "/bets/right_jackpot", function(e) {
        $("#bet-slip-content").html(e)
    }).done(function() {}).fail(function() {}) : $.get(defaultPath + "/bets/right", function(e) {
        $("#bet-slip-content").html(e)
    }).done(function() {}).fail(function() {})
}

function collpaseOtherSports(e) {
    for (var t = ["sport-1", "sport-2", "sport-5", "sport-12", "sport-21"], a = 0; a < t.length; a++)
        if (t[a] !== e) {
            localStorage.crnt_sprt = e;
            var n = document.getElementById(t[a]);
            n && $("#" + t[a]).hasClass("in") && ($("#" + t[a]).collapse("hide"), $("#" + t[a]).on("hidden.bs.collapse", function() {
                $("html, body").animate({
                    scrollTop: 0
                }, 700)
            }))
        }
}

function sport_details(e) {
    if (check_timeout(), collpaseOtherSports(e), !$("#" + e).hasClass("in")) {
        var t = e.split("-").slice(-1)[0];
        s_data(t)
    }
}

function other_country(e) {
    var t = e + "_other_country_data",
        a = $("#" + e + "_other_country").val();
    1 == a ? (localStorage.setItem("other_country_" + e, "off"), document.getElementById(t).innerHTML = "") : (localStorage.setItem("other_country_" + e, "on"), $.get(defaultPath + "/bets/otherCountry/" + e, function(e) {
        $("#" + t).html(e)
    }))
}

function hasChildElement(e) {
    var t, a;
    if (e.children) a = 0 !== e.children.length;
    else
        for (a = !1, t = element.firstChild; !a && t; t = t.nextSibling) 1 == t.nodeType && (a = !0);
    return a
}

function favorite_data() {
    var e = document.getElementById("s_user");
    if (e) {
        var t = document.getElementById("favourite_game");
        hasChildElement(t) ? $("#favourite_game").is(":visible") ? $("#favourite_game").hide() : $("#favourite_game").show() : ($("#favourite_game").show(), $(".overlay-chart-container").show(), $.get(defaultPath + "/games/user_favorite/", function(e) {
            $("#favourite_game").html(e);
            var t = {
                ".chosen-select": {}
            };
            for (var a in t) $(a).chosen(t[a]);
            $(".overlay-chart-container").hide()
        }).fail(function() {
            $(".overlay-chart-container").hide()
        }))
    } else $("#favourite_game").is(":visible") ? $("#favourite_game").hide() : $("#favourite_game").show()
}

function change_page_filtered_games(e) {
    var t = $("#query_string").val();
    t = t.substr(1);
    var a = t.split("/"),
        t = a[0];
    $.get(defaultPath + "/bets/change_filtered_page/" + e, function(e) {
        0 === t.length ? show_filtered_games(0, 0, 0, 0) : "todaymatches" === t ? show_filtered_games(0, 0, 0, 1) : show_filtered_games(0, 0, 0, 0)
    })
}

function change_page_filtered_games_search(e) {
    $.get(defaultPath + "/bets/change_filtered_page_search/" + e, function(e) {
        search_game_item()
    })
}

function search_game_item() {
    $(document).ready(function() {
        var e = $("#search_item").val();
        if (e.length >= 3 || 0 == e.length) {
            $("#countryAll").val("0"), $("#leagueCountry").val("0"), $("#teamLeague").val("0");
            var t = document.getElementById("ajax_loading"),
                a = document.getElementById("ajax_loading2");
            t.innerHTML = '<div id="temp_div"  class="span6">&nbsp;&nbsp;Loading...<img src=' + defaultPath + "/public/img/heart_beat.gif  />&nbsp;</div>", a.innerHTML = '<div id="temp_div2"  class="span6">&nbsp;&nbsp;Loading...<img src=' + defaultPath + "/public/img/heart_beat.gif  />&nbsp;</div>";
            var n = defaultPath + "/bets/search_results/" + e;
            $.get(n, function(e) {
                $("#games_table").html(e), $("#temp_div").remove(), $("#temp_div2").remove()
            })
        }
    })
}

function show_filtered_wc_game(e, t, a, n) {
    var i = document.getElementById("site-content");
    i.innerHTML = '<div id="temp_div"  class="span6">&nbsp;&nbsp;Loading...<img src=' + defaultPath + "/public/img/heart_beat.gif  />&nbsp;</div>";
    var o = '<div id="ajax_loading" class="row-fluid" style="background-color: #0D151C!important;"></div>',
        l = '<div id="ajax_loading2" class="row-fluid" style="background-color: #0D151C!important;"></div>',
        s = '<div class="row-fluid"><div class="text-right"><ul class="top-links" style="margin:0px;"><li class=""><a href="' + defaultPath + '/downloads/" target="_blank" class=""><span class="text-left"><img src="' + defaultPath + '/public/img/slider/rafikibonus/match_schedule.png" height="25" width="25"/></span><span class="text-right"> Match Schedule</span></a></li><li class=""><a href="http://www.fifa.com/worldcup/news/index.html" target="_blank" class=""><span class="text-left"><img src="' + defaultPath + '/public/img/slider/rafikibonus/news.png" height="25" width="25"/></span><span class="text-right"> News</span></a></li></ul></div></div><span class="clearfix"></span>',
        r = defaultPath + "/bets/filter_teams/" + e + "/" + t + "/" + a + "/" + n;
    $.get(r, function(e) {
        $("#site-content").html(o + s + e + l);
        var t = {
            ".chosen-select": {}
        };
        for (var a in t) $(a).chosen(t[a]);
        $("#temp_div").remove(), $("#temp_div2").remove()
    })
}

function search_s_game_item(e) {
    $(document).ready(function() {
        var t = $("#crrnt_s_id").val(),
            a = $("#search_item").val();
        if (a.length >= 3 || 0 == a.length) {
            $("#countryAll").val("0"), $("#leagueCountry").val("0"), $("#teamLeague").val("0");
            var n = document.getElementById("ajax_loading"),
                i = document.getElementById("ajax_loading2");
            n.innerHTML = '<div id="temp_div"  class="span6">&nbsp;&nbsp;Loading...<img src=' + defaultPath + "/public/img/heart_beat.gif  />&nbsp;</div>", i.innerHTML = '<div id="temp_div2"  class="span6">&nbsp;&nbsp;Loading...<img src=' + defaultPath + "/public/img/heart_beat.gif  />&nbsp;</div>";
            var o = defaultPath + "/games/search_results/" + t + "/" + e + "/" + a;
            $.get(o, function(e) {
                $("#games_table").html(e), live_score_game(), $(".carousel").carousel();
                var t = {
                    ".chosen-select": {}
                };
                for (var a in t) $(a).chosen(t[a]);
                $("#temp_div").remove(), $("#temp_div2").remove()
            })
        }
    })
}

function change_page_filtered_games_sport(e) {
    var t = $("#crrnt_s_id").val(),
        a = $("#is_today_page").val(),
        n = $("#countryAll").val(),
        i = $("#leagueCountry").val(),
        o = $("#teamLeague").val();
    show_filtered_games_sports(t, n, i, o, a, e)
}

function show_filtered_games_sports(e, t, a, n, i, o) {
    localStorage.last_activity = (new Date).getTime(), $(document).ready(function() {
        var l = document.getElementById("ajax_loading"),
            s = document.getElementById("ajax_loading2");
        l && s && (l.innerHTML = '<div id="temp_div"  class="span6">&nbsp;&nbsp;Loading...<img src=' + defaultPath + "/public/img/heart_beat.gif  />&nbsp;</div>", s.innerHTML = '<div id="temp_div2"  class="span6">&nbsp;&nbsp;Loading...<img src=' + defaultPath + "/public/img/heart_beat.gif  />&nbsp;</div>");
        var r, c, d, m;
        r = t ? $("#countryAll").val() : 0, c = a ? $("#leagueCountry").val() : 0, d = n ? $("#teamLeague").val() : 0, m = $("#filterByHour").is(":checked"), m ? (m = 1, i = 1) : m = 0;
        var u = 1,
            g = defaultPath + "/games/allgames/" + e + "/" + r + "/" + c + "/" + d + "/" + i + "/" + m + "/" + o + "/" + u;
        $.get(g, function(t) {
            $("#site-content").html(t), live_score_game(), $("html, body").animate({
                scrollTop: 0
            }, 1e3), $(".carousel").carousel();
            var a = {
                ".chosen-select": {}
            };
            for (var n in a) $(n).chosen(a[n]);
            l && s && ($("#temp_div").remove(), $("#temp_div2").remove());
            var u = 0,
                g = defaultPath + "/games/allgames/" + e + "/" + r + "/" + c + "/" + d + "/" + i + "/" + m + "/" + o + "/" + u;
            window.history.pushState({
                state: "new"
            }, "", g), $("#query_string").val("games/allgames/" + e + "/" + r + "/" + c + "/" + d + "/" + i + "/" + m + "/" + o + "/" + u), bslp()
        })
    })
}

function show_filtered_games(e, t, a, n) {
    check_timeout(), $(document).ready(function() {
        localStorage.last_activity = (new Date).getTime();
        var i = document.getElementById("ajax_loading"),
            o = document.getElementById("ajax_loading2");
        if (i) {
            i.innerHTML = '<div id="temp_div"  class="span6">&nbsp;&nbsp;Loading...<img src=' + defaultPath + "/public/img/heart_beat.gif  />&nbsp;</div>", o.innerHTML = '<div id="temp_div2"  class="span6">&nbsp;&nbsp;Loading...<img src=' + defaultPath + "/public/img/heart_beat.gif  />&nbsp;</div>";
            var l, s, r, c;
            l = e ? $("#countryAll").val() : 0, s = t ? $("#leagueCountry").val() : 0, r = a ? $("#teamLeague").val() : 0, c = $("#filterByHour").is(":checked"), c ? (c = 1, n = 1) : c = 0;
            var d = defaultPath + "/bets/filter_teams/" + l + "/" + s + "/" + r + "/" + n + "/" + c;
            $("#games_filter").remove(), $.get(d, function(e) {
                $("#sorted-games").html(e);
                var t = {
                    ".chosen-select": {}
                };
                for (var a in t) $(a).chosen(t[a]);
                $("#temp_div").remove(), $("#temp_div2").remove()
            })
        } else remove_all_market_games()
    })
}

function show_loaded_leage_match(e, t) {
    check_timeout(), $(document).ready(function() {
        localStorage.last_activity = (new Date).getTime();
        var a = document.getElementById("ajax_loading"),
            n = document.getElementById("ajax_loading2");
        a && n && (a.innerHTML = '<div id="temp_div"  class="span6">&nbsp;&nbsp;Loading...<img src=' + defaultPath + "/public/img/heart_beat.gif  />&nbsp;</div>", n.innerHTML = '<div id="temp_div2"  class="span6">&nbsp;&nbsp;Loading...<img src=' + defaultPath + "/public/img/heart_beat.gif  />&nbsp;</div>"), $("html, body").animate({
            scrollTop: 0
        }, 1e3);
        var i = defaultPath + "/games/league_games/" + e + "/" + t + "/1";
        $.get(i, function(a) {
            $("#site-content").html(a), live_score_game(), $("html, body").animate({
                scrollTop: 0
            }, 1e3), $(".carousel").carousel(), $("#temp_div").remove(), $("#temp_div2").remove();
            var n = 0,
                i = defaultPath + "/games/league_games/" + e + "/" + t;
            window.history.pushState({
                state: "new"
            }, "", i), $("#query_string").val("/games/league_games/" + e + "/" + t + "/" + n), bslp()
        })
    })
}

function games_for_favorite(e) {
    check_timeout(), $(document).ready(function() {
        localStorage.last_activity = (new Date).getTime(), $(".overlay-chart-container").show(), $("html, body").animate({
            scrollTop: 0
        }, 1e3);
        var t = defaultPath + "/games/favorite_games/" + e + "/1";
        $.get(t, function(t) {
            $("#site-content").html(t), live_score_game(), $("html, body").animate({
                scrollTop: 0
            }, 1e3), $(".carousel").carousel(), $(".overlay-chart-container").hide();
            var a = defaultPath + "/games/favorite_games/" + e;
            window.history.pushState({
                state: "new"
            }, "", a), $("#query_string").val("/games/favorite_games/" + e), bslp()
        })
    })
}

function market_games(e) {
    check_timeout(), $(document).ready(function() {
        localStorage.last_activity = (new Date).getTime(), $(".overlay-chart-container").show(), $("html, body").animate({
            scrollTop: 0
        }, 1e3);
        var t = defaultPath + "/games/market_games/" + e + "/1";
        $.get(t, function(t) {
            $("#site-content").html(t), $(".markets-tooltip").tooltip({
                trigger: "hover",
                placement: "left"
            }), live_score_game(), $("html, body").animate({
                scrollTop: 0
            }, 1e3), $(".carousel").carousel(), $(".overlay-chart-container").hide();
            var a = defaultPath + "/games/market_games/" + e;
            window.history.pushState({
                state: "new"
            }, "", a), $("#query_string").val("/games/market_games/" + e), bslp()
        })
    })
}

function show_terms_n_conditions(e) {
    check_timeout(), $(document).ready(function() {
        localStorage.last_activity = (new Date).getTime();
        var t = document.getElementById("ajax_loading"),
            a = document.getElementById("ajax_loading2");
        t && a && (t.innerHTML = '<div id="temp_div"  class="span6">&nbsp;&nbsp;Loading...<img src=' + defaultPath + "/public/img/heart_beat.gif  />&nbsp;</div>", a.innerHTML = '<div id="temp_div2"  class="span6">&nbsp;&nbsp;Loading...<img src=' + defaultPath + "/public/img/heart_beat.gif  />&nbsp;</div>");
        var n = 1,
            i = defaultPath + "/terms/terms/" + e + "/" + n;
        $.get(i, function(n) {
            $("#site-content").replaceWith(n), live_score_game(), $("html, body").animate({
                scrollTop: 0
            }, 1e3), t && a && ($("#temp_div").remove(), $("#temp_div2").remove());
            var i = 0,
                o = defaultPath + "/terms/terms/" + e;
            window.history.pushState({
                state: "new"
            }, "", o), $("#query_string").val("/terms/terms/" + e + "/" + i), bslp()
        })
    })
}

function show_terms_n_conditions_rafiki() {
    check_timeout(), $(document).ready(function() {
        localStorage.last_activity = (new Date).getTime();
        var e = document.getElementById("ajax_loading"),
            t = document.getElementById("ajax_loading2");
        e && t && (e.innerHTML = '<div id="temp_div"  class="span6">&nbsp;&nbsp;Loading...<img src=' + defaultPath + "/public/img/heart_beat.gif  />&nbsp;</div>", t.innerHTML = '<div id="temp_div2"  class="span6">&nbsp;&nbsp;Loading...<img src=' + defaultPath + "/public/img/heart_beat.gif  />&nbsp;</div>");
        var a = 1,
            n = defaultPath + "/terms/term_rafiki_bonus/" + a;
        $.get(n, function(a) {
            $("#site-content").replaceWith(a), live_score_game(), $("html, body").animate({
                scrollTop: 0
            }, 1e3), e && t && ($("#temp_div").remove(), $("#temp_div2").remove());
            var n = 0,
                i = defaultPath + "/terms/terms_rafiki_bonus/";
            window.history.pushState({
                state: "new"
            }, "", i), $("#query_string").val("/terms/terms_rafiki_bonus/" + n), bslp()
        })
    })
}

function show_rafiki_bonus() {
    check_timeout(), $(document).ready(function() {
        localStorage.last_activity = (new Date).getTime();
        var e = document.getElementById("ajax_loading"),
            t = document.getElementById("ajax_loading2");
        e && t && (e.innerHTML = '<div id="temp_div"  class="span6">&nbsp;&nbsp;Loading...<img src=' + defaultPath + "/public/img/heart_beat.gif  />&nbsp;</div>", t.innerHTML = '<div id="temp_div2"  class="span6">&nbsp;&nbsp;Loading...<img src=' + defaultPath + "/public/img/heart_beat.gif  />&nbsp;</div>");
        var a = 1,
            n = defaultPath + "/bets/rafiki_bonus/" + a;
        $.get(n, function(a) {
            $("#site-content").replaceWith(a), live_score_game(), $("html, body").animate({
                scrollTop: 0
            }, 1e3), e && t && ($("#temp_div").remove(), $("#temp_div2").remove());
            var n = 0,
                i = defaultPath + "/bets/rafiki_bonus/";
            window.history.pushState({
                state: "new"
            }, "", i), $("#query_string").val("/bets/rafiki_bonus/" + n), bslp()
        })
    })
}

function show_howtoplay() {
    check_timeout(), $(document).ready(function() {
        localStorage.last_activity = (new Date).getTime();
        var e = document.getElementById("ajax_loading"),
            t = document.getElementById("ajax_loading2");
        e && t && (e.innerHTML = '<div id="temp_div"  class="span6">&nbsp;&nbsp;Loading...<img src=' + defaultPath + "/public/img/heart_beat.gif  />&nbsp;</div>", t.innerHTML = '<div id="temp_div2"  class="span6">&nbsp;&nbsp;Loading...<img src=' + defaultPath + "/public/img/heart_beat.gif  />&nbsp;</div>");
        var a = 1,
            n = defaultPath + "/users/howtoplay/" + a;
        $.get(n, function(a) {
            $("#site-content").replaceWith(a), live_score_game(), $("html, body").animate({
                scrollTop: 0
            }, 1e3), e && t && ($("#temp_div").remove(), $("#temp_div2").remove());
            var n = 0,
                i = defaultPath + "/users/howtoplay/";
            window.history.pushState({
                state: "new"
            }, "", i), $("#query_string").val("/users/howtoplay/" + n), bslp()
        })
    })
}

function show_highlights() {
    check_timeout(), $(document).ready(function() {
        localStorage.last_activity = (new Date).getTime(), collpaseOtherSports("sport-1"), $("#sport-1").collapse("show");
        var e = document.getElementById("ajax_loading"),
            t = document.getElementById("ajax_loading2");
        e && t && (e.innerHTML = '<div id="temp_div"  class="span6">&nbsp;&nbsp;Loading...<img src=' + defaultPath + "/public/img/heart_beat.gif  />&nbsp;</div>", t.innerHTML = '<div id="temp_div2"  class="span6">&nbsp;&nbsp;Loading...<img src=' + defaultPath + "/public/img/heart_beat.gif  />&nbsp;</div>");
        var a = 1,
            n = defaultPath + "/games/highlights/" + a;
        $.get(n, function(a) {
            $("#site-content").html(a), live_score_game(), $("html, body").animate({
                scrollTop: 0
            }, 1e3), $(".carousel").carousel();
            var n = {
                ".chosen-select": {}
            };
            for (var i in n) $(i).chosen(n[i]);
            e && t && ($("#temp_div").remove(), $("#temp_div2").remove());
            var o = 0,
                l = defaultPath + "/games/highlights";
            window.history.pushState({
                state: "new"
            }, "", l), $("#query_string").val("/games/highlights/" + o), bslp()
        })
    })
}

function show_jackpot() {
    check_timeout(), $(document).ready(function() {
        localStorage.last_activity = (new Date).getTime();
        var e = document.getElementById("ajax_loading"),
            t = document.getElementById("ajax_loading2");
        e && t && (e.innerHTML = '<div id="temp_div"  class="span6">&nbsp;&nbsp;Loading...<img src=' + defaultPath + "/public/img/heart_beat.gif  />&nbsp;</div>", t.innerHTML = '<div id="temp_div2"  class="span6">&nbsp;&nbsp;Loading...<img src=' + defaultPath + "/public/img/heart_beat.gif  />&nbsp;</div>");
        var a = 1,
            n = defaultPath + "/games/jackpot_games/1/" + a;
        $.get(n, function(a) {
            $("#site-content").replaceWith(a), live_score_game(), $("html, body").animate({
                scrollTop: 0
            }, 1e3), $(".carousel").carousel();
            var n = {
                ".chosen-select": {}
            };
            for (var i in n) $(i).chosen(n[i]);
            e && t && ($("#temp_div").remove(), $("#temp_div2").remove());
            var o = 0,
                l = defaultPath + "/games/jackpot_games/";
            window.history.pushState({
                state: "new"
            }, "", l), $("#query_string").val("/games/highlights/1/" + o), bslp()
        })
    })
}

function show_filtered_highlights(e) {
    $(document).ready(function() {
        var t = document.getElementById("ajax_loading");
        if (t) {
            t.innerHTML = '<div id="temp_div"  class="span6">&nbsp;&nbsp;Loading...<img src=' + defaultPath + "/public/img/heart_beat.gif  />&nbsp;</div>";
            var a = defaultPath + "/bets/reload_highlights/" + e;
            $.get(a, function(e) {
                $("#highlight_div").html(e);
                var t = {
                    ".chosen-select": {}
                };
                for (var a in t) $(a).chosen(t[a]);
                $("#temp_div").remove(), $("#temp_div2").remove()
            })
        } else remove_all_market_games()
    })
}

function show_games_for_league() {
    $(document).ready(function() {
        var e = $("#leagueCountry").val();
        window.location.href = defaultPath + "/bets/index/" + e
    })
}

function show_result(e, t, a) {
    check_timeout(), $(document).ready(function() {
        localStorage.last_activity = (new Date).getTime();
        var n = document.getElementById("ajax_loading"),
            i = document.getElementById("ajax_loading2");
        n && i && (n.innerHTML = '<div id="temp_div"  class="span6">&nbsp;&nbsp;Loading...<img src=' + defaultPath + "/public/img/heart_beat.gif  />&nbsp;</div>", i.innerHTML = '<div id="temp_div2"  class="span6">&nbsp;&nbsp;Loading...<img src=' + defaultPath + "/public/img/heart_beat.gif  />&nbsp;</div>");
        var o, l, s;
        if (o = e ? $("#country1").val() : 0, l = t ? $("#leag1").val() : 0, s = a ? $("#team1").val() : 0, document.getElementById("limit1")) var r = $("#limit1").val();
        else {
            var c = new Date,
                d = c.getDate(),
                m = c.getMonth() + 1,
                u = c.getFullYear();
            10 > d && (d = "0" + d), 10 > m && (m = "0" + m);
            var r = u + "-" + m + "-" + d
        }
        var g = {
            ".chosen-select": {}
        };
        for (var _ in g) $(_).chosen(g[_]);
        var h = 1,
            p = 1,
            v = defaultPath + "/results/results/" + o + "/" + l + "/" + s + "/" + encodeURI(r) + "/" + p + "/" + h;
        $.get(v, function(e) {
            $("#site-content").html(e), $("html, body").animate({
                scrollTop: 0
            }, 1e3), n && i && ($("#temp_div").remove(), $("#temp_div2").remove());
            var t = defaultPath + "/results/results/" + o + "/" + l + "/" + s + "/" + encodeURI(r) + "/0/" + h;
            window.history.pushState({
                state: "new"
            }, "", t), $("#query_string").val("/results/results/" + o + "/" + l + "/" + s + "/" + encodeURI(r) + "/0/" + h), bslp()
        })
    })
}

function search_result_item() {
    var e = $("#result_pager").val();
    if ("undefined" == typeof e) var e = 1;
    var t = $("#limit1").val(),
        a = $("#search_item").val();
    if (a.trim().length > 3 || 0 === a.trim().length) {
        if (0 === a.trim().length) return void show_result(1, 1, 1);
        var n = document.getElementById("ajax_loading");
        n.innerHTML = '<div id="temp_div"  class="span6">&nbsp;&nbsp;Loading...<img src=' + defaultPath + "/public/img/heart_beat.gif  />&nbsp;</div>";
        var i = defaultPath + "/results/search_result/" + t + "/" + encodeURI(a) + "/" + e;
        $.get(i, function(e) {
            $("#rezolt1").html(e), $("#temp_div").remove()
        })
    }
}

function result_pager(e, t) {
    $(document).ready(function() {
        var a = $("#country1").val(),
            n = $("#leag1").val(),
            i = $("#team1").val(),
            o = $("#limit1").val(),
            l = ($("#search_item").val(), 1);
        if (1 == t) search_result_item();
        else {
            var s = defaultPath + "/results/results/" + a + "/" + n + "/" + i + "/" + o + "/" + l + "/" + e;
            $.get(s, function(t) {
                $("#site-content").html(t), $("html, body").animate({
                    scrollTop: 0
                }, 1e3);
                var l = defaultPath + "/results/results/" + a + "/" + n + "/" + i + "/" + encodeURI(o) + "/0/" + e;
                window.history.pushState({
                    state: "new"
                }, "", l), $("#query_string").val("/results/results/" + a + "/" + n + "/" + i + "/" + encodeURI(o) + "/0/" + e)
            })
        }
    })
}

function result_pager1(e, t) {
    var a = $("#limit1").val(),
        n = $("#search_item").val();
    if (n.length > 3) {
        var i = defaultPath + "/results/search_result/" + a + "/" + n + "/" + e;
        $.get(i, function(e) {
            $("#rezolt1").html(e)
        })
    }
}

function checkBetLogin(e) {
    "undefined" == typeof e && (msg = '<div class="alert alert-success" >Please login to be able to place a bet.</div>', $("#bet_detail_notify").html(msg))
}

function how_to_play(e) {
    var t = "how" + e,
        a = "play" + e;
    if (1 == $("#" + t).val()) {
        var n = '<img src="' + defaultPath + '/public/img/call_us_closed.png" height="15" width="15"/>';
        document.getElementById(t).value = 0, $("#" + a).hide(), $("#closed_open_sprite").html(n)
    } else {
        var i = '<img src="' + defaultPath + '/public/img/call_us_open.png" height="15" width="15"/>';
        document.getElementById(t).value = 1, $("#" + a).show(), $("#closed_open_sprite").html(i)
    }
}

function change_page(e) {
    $(document).ready(function() {
        $.get(defaultPath + "/bets/change_page/" + e, function(e) {
            window.location.href = window.location.href
        })
    })
}

function simple_submit(e, t) {
    if (t && 13 == t.keyCode)
        if ("signup" == e) set_password();
        else if ("f1_view" == e) send_reset_code();
    else if ("f2_view" == e) reset_password();
    else if ("change_password" == e) change_password();
    else if ("r1_view" == e) get_registration_code();
    else if ("r2_view" == e) finish_registration();
    else if ("spesa_betting" == e) return makeBet(document.getElementById("bet_type_handler").value), !1
}

function checkSubmit(e) {
    e && 13 == e.keyCode && loginSubmit("frm-login")
}

function signup_view() {
    var e = document.getElementById("signup_content").innerHTML;
    $(document).ready(function(t) {
        $("#signup").html(e)
    })
}

function close_update_account() {
    $(document).ready(function(e) {
        $("#update_account_field").remove()
    })
}

function forgot_view() {
    var e = document.getElementById("forgot_content").innerHTML;
    $(document).ready(function(t) {
        var a = $("#forgot_state").val(),
            n = $("#r_state").val();
        if (1 == a) {
            new_data = "";
            var i = "forgot",
                o = "forgot_response";
            cancel_action(i, o), $("#forgot").html(new_data)
        } else if (1 == n) new_data = "", $("#forgot").html(new_data), $("#r_state").val(2);
        else if (2 == n) {
            var l = document.getElementById("reset_code_view").innerHTML;
            $("#forgot").html(l), $("#r_state").val(1)
        } else $("#forgot").html(e), $("#forgot_state").val(1)
    })
}

function set_password() {
    $(document).ready(function(e) {
        var t = $("#s_user_id").val(),
            a = $("#s_password").val(),
            n = $("#s_confirm_password").val(),
            i = $("#s_fname").val(),
            o = $("#s_lname").val(),
            l = $("#s_pin").val(),
            s = $("#s_email").val(),
            r = $("#s_dob").val(),
            c = $("#s_town").val(),
            d = $("#s_mname").val();
        i = check_value(i), o = check_value(o), d = check_value(d), c = check_value(c), s = check_value(s);
        var m = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (a != n) {
            var e = "The passwords do not match",
                u = '<div class="alert alert-success" style="margin-top:5px!important; margin-left:5px; margin-right: 5px; padding: 2px auto;" >' + e + "</div>";
            $("#signup_response").html(u)
        } else if (t && a && n && l)
            if ("sportpesa_null" != s)
                if (s.match(m)) $.getJSON(defaultPath + "/bets/set_password/" + t + "/" + a + "/" + i + "/" + d + "/" + o + "/" + s + "/" + c + "/" + r + "/" + l, function(e) {
                    var t = '<div class="alert alert-success" style="margin-top:5px!important; margin-left:5px; margin-right: 5px; padding: 2px auto;" >' + e.description + "</div>";
                    $("#signup_response").html(t), 49 == e.res && (new_data = "", $("#signup").html(new_data))
                });
                else {
                    var e = "Invalid Email format.",
                        u = '<div class="alert alert-success" style="margin-top:5px!important; margin-left:5px; margin-right: 5px; padding: 2px auto;" >' + e + "</div>";
                    $("#signup_response").html(u)
                }
        else $.getJSON(defaultPath + "/bets/set_password/" + t + "/" + a + "/" + i + "/" + d + "/" + o + "/" + s + "/" + c + "/" + r + "/" + l, function(e) {
            var t = '<div class="alert alert-success" style="margin-top:5px!important; margin-left:5px; margin-right: 5px; padding: 2px auto;" >' + e.description + "</div>";
            $("#signup_response").html(t), 49 == e.res && (new_data = "", $("#signup").html(new_data))
        });
        else {
            var e = "Please fill up all the fields.",
                u = '<div class="alert alert-success" style="margin-top:5px!important; margin-left:5px; margin-right: 5px; padding: 2px auto;" >' + e + "</div>";
            $("#signup_response").html(u)
        }
    })
}

function send_reset_code() {
    $(document).ready(function(e) {
        var t = $("#f_user_id").val(),
            a = $("#f_pin").val();
        $.getJSON(defaultPath + "/bets/get_reset_code/" + t + "/" + a, function(e) {
            var a = '<div class="alert alert-success" style="margin-top:5px!important; margin-left:5px; margin-right: 5px; padding: 2px auto;" >' + e.description + "</div>";
            if (e.description && $("#forgot_response").html(a), 42 == e.res) {
                var n = document.getElementById("reset_code_view").innerHTML;
                $("#forgot").html(n), $("#r_state").val(1), $("#r_user_id").val(t)
            } else if (e.no_password) {
                var i = $("#f_user_id").val(),
                    o = $("#f_pin").val();
                new_data = "", $("#forgot").html(new_data), $("#forgot_response").html(new_data);
                var l = document.getElementById("please_update_acc").innerHTML;
                $("#forgot_response").html(l), $("#stored_f_user_id").val(i), $("#stored_f_pin").val(o)
            }
        })
    })
}

function get_registration_code() {
    $(document).ready(function(e) {
        var t = $("#reg_number").val(),
            a = $("#reg_fname").val(),
            n = $("#reg_mname").val(),
            i = $("#reg_lname").val(),
            o = $("#reference_id").val(),
            l = "0000-00-00",
            s = $("#reg_password").val(),
            r = $("#reg_confirm_password").val(),
            c = $("#reg_email").val(),
            d = $("#reg_town").val();
        t = check_value(t), a = check_value(a), n = check_value(n), i = check_value(i), c = check_value(c), d = check_value(d), s = check_value(s), r = check_value(r), l = check_value(l), o = o.replace(/\W/g, ""), o = check_value(o);
        var m = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (isNaN(a) && isNaN(n) && isNaN(i))
            if ("sportpesa_null" == t || "sportpesa_null" == s || "sportpesa_null" == r) {
                var e = "<h5>Online Account Creation Failed</h5><p>There are missing or invalid data. Please verify the information entered. Invalid fields are highlighted.</p>";
                check_mandatory(t, s, r);
                var u = '<div class="register-alert" >' + e + "</div>";
                $("#msgFromDB").remove(), $("#register_response").html(u)
            } else if (s != r) {
            check_mandatory(t, s, r);
            var e = "The passwords do not match",
                u = '<div class="alert alert-success" style="margin-top:5px!important; margin-left:5px; margin-right: 5px; padding: 2px auto;" >' + e + "</div>";
            $("#register_response").html(u)
        } else if (1 != document.getElementById("accept").checked) {
            check_mandatory(t, s, r);
            var e = "Please accept our Terms &amp; Conditions to proceed",
                u = '<div class="register-alert" >' + e + "</div>";
            $("#register_response").html(u)
        } else if (1 != document.getElementById("adult").checked) {
            var e = "Please confirm your are over 18 years of age.",
                u = '<div class="register-alert" >' + e + "</div>";
            $("#register_response").html(u)
        } else if ("sportpesa_null" != c)
            if (c.match(m)) $.getJSON(defaultPath + "/bets/user_register_code/" + t + "/" + a + "/" + n + "/" + i + "/" + l + "/" + d + "/" + c + "/" + s + "/" + o, function(e) {
                var a = '<div class="alert alert-success" >' + e.description + "</div>";
                e.description && (check_mandatory(t, s, r), $("#register_response").html(a)), 52 == e.res && ($.post(defaultPath + "/users/reg_res", {
                    res_true: s
                }, function(e) {}), get_verify_code_view())
            });
            else {
                check_mandatory(t, s, r);
                var e = "Invalid Email format.",
                    u = '<div class="register-alert" >' + e + "</div>";
                $("#register_response").html(u)
            }
        else {
            var g = defaultPath + "/bets/user_register_code/" + t + "/" + a + "/" + n + "/" + i + "/" + l + "/" + d + "/" + c + "/" + s + "/" + o;
            $.getJSON(g, function(e) {
                var t = '<div class="alert alert-success" >' + e.description + "</div>";
                e.description && $("#register_response").html(t), 52 == e.res && ($.post(defaultPath + "/users/reg_res", {
                    res_true: s
                }, function(e) {}), get_verify_code_view())
            })
        } else {
            var e = "Please use alphabets for names.",
                u = '<div class="register-alert" >' + e + "</div>";
            $("#register_response").html(u)
        }
    })
}

function check_mandatory(e, t, a) {
    "sportpesa_null" == e ? document.getElementById("reg_number").style.border = "2px solid red" : document.getElementById("reg_number").style.border = "2px solid #999", "sportpesa_null" == t ? document.getElementById("reg_password").style.border = "2px solid red" : document.getElementById("reg_password").style.border = "2px solid #999", "sportpesa_null" == a ? document.getElementById("reg_confirm_password").style.border = "2px solid red" : document.getElementById("reg_confirm_password").style.border = "2px solid #999"
}

function get_verify_code_view() {
    $(document).ready(function(e) {
        var t = $("#reg_number").val(),
            a = document.getElementById("register_view").innerHTML;
        $("#register_modal_1").html(a), $("#reg_user_id").val(t), $("#reg_state").val(1)
    })
}

function check_value(e) {
    if (!e) var e = "sportpesa_null";
    return e
}

function spesaHome(e) {
    e = e.trim(), $.post(defaultPath + "/users/spesa_home/", {
        p_data: e
    }, function(e) {
        var e = JSON.parse(e),
            t = "";
        1 == e.error ? (t = '<div class="alert alert-success" >' + e.description + "</div>", $("#_login_notify").html(t)) : e.user_id ? location.reload() : 1e3 == e.res ? ($("#stored_f_pin").val(password), start_create_password()) : 1001 == e.res && ($("#reg_number").val(e.uid), register_view_one())
    }), $("#bet-msgs").modal("hide")
}

function finish_registration() {
    $(document).ready(function(e) {
        var t = $("#reg_user_id").val(),
            a = $("#reg_v_code").val();
        $.getJSON(defaultPath + "/bets/finish_registration/" + t + "/" + a, function(e) {
            var a = '<div class="alert alert-success" style="margin-top:5px!important; margin-left:5px; margin-right: 5px; padding: 2px auto;" >' + e.description + '</div><br /><br /><span class="bet-btn" onclick="javascript: spesaHome(\'' + t + "');\">LOGIN TO SPORTPESA</span>";
            $("#register_response").html(a), 0 == e.res && ($("#frm-login-user_id").val(t), document.getElementById("reg_user_id").readOnly = !0, document.getElementById("reg_v_code").readOnly = !0, document.getElementById("r2_view").style.visibility = "hidden")
        })
    })
}

function reset_password() {
    $(document).ready(function(e) {
        var t = $("#r_code").val(),
            a = $("#r_user_id").val(),
            n = $("#r_password").val(),
            i = $("#f_confirm_password").val();
        if (n || i)
            if (n != i) {
                var e = "The passwords do not match,please try again",
                    o = '<div class="alert alert-success" style="margin-top:5px!important; margin-left:5px; margin-right: 5px; padding: 2px auto;" >' + e + "</div>";
                $("#forgot_response").html(o)
            } else $.getJSON(defaultPath + "/bets/reset_password/" + a + "/" + t + "/" + n, function(e) {
                var t = '<div class="alert alert-success" style="margin-top:5px!important; margin-left:5px; margin-right: 5px; padding: 2px auto;" >' + e.description + "</div>";
                $("#forgot_response").html(t), 43 == e.res ? (new_data = "", $("#forgot").html(new_data)) : 323 == e.res && ($("#r_state").val(""), forgot_view())
            });
        else {
            var e = "Please enter the new password and repeat below to confirm.",
                o = '<div class="alert alert-success" style="margin-top:5px!important; margin-left:5px; margin-right: 5px; padding: 2px auto;" >' + e + "</div>";
            $("#forgot_response").html(o)
        }
    })
}

function change_password_view() {
    check_timeout();
    var e = document.getElementById("change_password_content").innerHTML;
    $(document).ready(function(t) {
        var a = $("#change_pass_state").val();
        if (a) {
            new_data = "";
            var n = "change_password",
                i = "change_password_response";
            cancel_action(n, i)
        } else $("#change_password").html(e), $("#change_pass_state").val(1)
    })
}

function change_password() {
    check_timeout(), $(document).ready(function(e) {
        var t = $("#c_old_password").val(),
            a = $("#c_new_password").val(),
            n = $("#c_confirm_password").val();
        if (a || n)
            if (a != n) {
                var e = "The passwords do not match,please try again",
                    i = '<div class="alert alert-success" style="margin-top:5px!important; margin-left:5px; margin-right: 5px; padding: 2px auto;" >' + e + "</div>";
                $("#change_password_response").html(i)
            } else $.getJSON(defaultPath + "/bets/change_password/" + t + "/" + a, function(e) {
                var t = '<div class="alert alert-success" style="margin-top:5px!important; margin-left:5px; margin-right: 5px; padding: 2px auto;" >' + e.description + "</div>";
                if ($("#change_password_response").html(t), 43 == e.res) {
                    var a = "";
                    $("#change_password").html(a)
                }
            });
        else {
            var e = "Please enter the new password and repeat below to confirm.",
                i = '<div class="alert alert-success" style="margin-top:5px!important; margin-left:5px; margin-right: 5px; padding: 2px auto;" >' + e + "</div>";
            $("#change_password_response").html(i)
        }
    })
}

function get_the_balance(e) {
    $(document).ready(function(t) {
        $.get(defaultPath + "/bets/getInfo/" + e, function(e) {
            $("#s_user_balance").html(e)
        })
    })
}

function deselect_all(e) {
    if ("normal" === e) {
        var t = document.URL;
        $(document).ready(function(a) {
            $.get(defaultPath + "/bets/resetbets/" + e, function(e) {
                (t.indexOf("/bets/index/") > -1 || t === defaultPath + "/" || t.indexOf("/games/sport") > -1 || t.indexOf("/games/allgames") > -1 || t.indexOf("games/highlights") > -1) && current_score_init(), $.get(defaultPath + "/bets/right", function(e) {
                    $("#bet-slip-content").html(e)
                });
                var a = $("#query_string").val();
                "/" === a.charAt(0) && (a = a.substr(1));
                var n = a.split("/"),
                    a = n[0];
                0 === a.length, remove_all_market_games()
            })
        })
    } else $("#notif_mx_double").val("0"), $(document).ready(function(t) {
        $.get(defaultPath + "/bets/resetbets/" + e, function(e) {
            $.get(defaultPath + "/bets/right_jackpot", function(e) {
                $("#bet-slip-content").html(e)
            }), remove_all_market_games_jp()
        })
    })
}

function jq(e) {
    return "#" + e.replace(/(:|\.|\[|\]|,|=)/g, "\\$1")
}

function remove_all_market_games_jp() {
    if (document.getElementById("utilities_mkt")) {
        $(".overlay-chart-container").show();
        for (var e = $("#utilities_mkt").val(), t = window.atob(e), a = t.split(","), n = 0; n < a.length; n++) document.getElementById(a[n]) && $(jq(a[n])).hasClass("active") && $(jq(a[n])).removeClass("active");
        $(".overlay-chart-container").hide()
    }
}

function get_jackpot_slip() {
    $(document).ready(function(e) {
        $.get(defaultPath + "/bets/right_jackpot", function(e) {
            $("#bet-slip-content").html(e)
        })
    })
}

function get_league_games(e) {
    $(document).ready(function(t) {
        $.get(defaultPath + "/bets/get_league_games/" + e, function(e) {
            var t = "<heading>Get in the game</heading>";
            $(".site-heading").html(t), $("#site-content").html(e)
        })
    })
}

function change_link_color(e) {
    localStorage.lig = e
}

function set_league_link_color() {
    if (localStorage.lig) {
        var e = "ligi_" + localStorage.lig;
        document.getElementById(e).className = "tapped_link"
    }
}

function get_jackpot_games() {
    $(document).ready(function(e) {
        $.get(defaultPath + "/bets/jp_games", function(e) {
            $("#jackpot_games").html(e)
        })
    })
}

function get_to_mobile() {
    $(document).ready(function(e) {
        $.get(defaultPath + "/bets/desktop/mobile", function(e) {
            window.location.href = defaultPath + "/mobile"
        })
    })
}

function check_other_country_state(e) {
    var t = localStorage.getItem("other_country_" + e);
    "on" === t && $(function() {
        $.get(defaultPath + "/bets/otherCountry/" + e, function(t) {
            $("#" + e + "_other_country_data").html(t)
        })
    })
}

function revert_other_country_state(e, t, a) {
    1 == parseInt(e) && (localStorage.other_country = "off"), show_loaded_leage_match(t, a)
}

function register_view_one() {
    var e = "";
    $.get(defaultPath + "/bets/getRegisterationHeaderMsg", function(t) {
        t && (e += t, $("#msgFromDB").html(e))
    }), $("#bet-msgs-body").html($("#register_modal").html()), $("#bet-msgs").modal(), $("#bet-msgs").modal("show")
}

function check_for_numbers(e) {
    $(document).ready(function() {
        -1 !== $.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) || 65 == e.keyCode && e.ctrlKey === !0 || e.keyCode >= 35 && e.keyCode <= 39 || (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) && e.preventDefault()
    })
}

function download_bets_per_hour() {
    $(document).ready(function(e) {
        var t = $("#from_dt_csrp").val(),
            a = $("#to_dt_csrp").val(),
            n = $("#time_csrp").val();
        n = check_value(n);
        var i = /^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)$/;
        if (n.match(i)) window.location.href = defaultPath + "/reports/csv_casino/" + t + "/" + a + "/" + n;
        else {
            var e = "Please enter time in the following format HH:MM:SS.",
                o = '<div class="alert alert-success" style="margin-top:5px!important; margin-left:5px; margin-right: 5px; padding: 2px auto;" >' + e + "</div>";
            $("#report_response").html(o)
        }
    })
}

function validate_time_form() {
    $(document).ready(function(e) {
        var t = $("#time_csrp").val();
        t = check_value(t);
        var a = /^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)$/;
        if (t.match(a)) return !0;
        var e = "Please enter time in the following format HH:MM:SS.",
            n = '<div id="alert_error" class="alert alert-success" style="margin-top:5px!important; margin-left:5px; margin-right: 5px; padding: 2px auto;" >' + e + "</div>";
        $("#report_response").html(n), document.getElementById("frm-report-casino").onsubmit = function() {
            return !1
        }, setTimeout(function() {
            $("#alert_error").remove()
        }, 5e3)
    })
}

function removeSlider(e) {
    var t = e;
    $.get(defaultPath + "/bets/removeGame/" + e, function(e) {
        $.get(defaultPath + "/bets/right", function(e) {
            current_score(), $("#bet-slip-content").html(e), $("#ajax_loading_slip").hide()
        })
    });
    var a = "l^" + t,
        n = "h^" + t;
    document.getElementById(t) && (document.getElementById(t).className = ""), document.getElementById(n) && (document.getElementById(n).className = ""), document.getElementById(a) && (document.getElementById(a).className = ""), check_timeout()
}

function multi_bet_counterSlider(e, t, a, n) {
    var i = parseInt($("#betCount").val()),
        o = $("#max_multi_games").val(),
        o = o - 1,
        l = "h^" + e;
    if ((o >= i || isNaN(i)) && (document.getElementById(e) && (document.getElementById(e).className = "active"), document.getElementById(t) && (document.getElementById(t).className = "active"), document.getElementById(l) && (document.getElementById(l).className = "active")), i == o + 1)
        if (document.getElementById(a) && "active" == document.getElementById(a).className || document.getElementById(n) && "active" == document.getElementById(n).className) document.getElementById(e) && (document.getElementById(e).className = "active"), document.getElementById(t) && (document.getElementById(t).className = "active"), document.getElementById(l) && (document.getElementById(l).className = "active");
        else {
            alert("You have reached the maximum number of picks in your multibet.\nPlease place your bet with the current selections or unselect the undesired picks.");
            var s = '<div class="alert alert-success" >You have reached the maximum number of picks in your multibet.\nPlease place your bet with the current selections or unselect the undesired picks.</div>';
            $("#bet_detail_notify").html(s)
        }
}

function addToSlipSlider(e, t, a) {
    if ($("#ajax_loading_slip").show(), !check_timeout_slip()) return !1;
    var n = e.substring(0, 1),
        i = t.substring(2),
        o = a.substring(2);
    if (i = "h^" + i, o = "h^" + o, "l" == n) {
        var l = e,
            e = l.substring(2),
            s = t.substring(2),
            r = a.substring(2),
            c = document.getElementById(l).className;
        "active" == c ? removeSlider(e) : (bet_point(e), multi_bet_counterSlider(e, l, t, a)), change_class(s, '""'), change_class(r, '""'), change_class(i, '""'), change_class(o, '""')
    }
    change_class(t, '""'), change_class(a, '""'), change_class(i, '""'), change_class(o, '""')
}

function display() {
    var e = localStorage.getItem("startTime"),
        t = new Date,
        a = Date.parse(e),
        n = t - a;
    n /= 1e3;
    var i = Math.round(n % 60);
    n = Math.floor(n / 60);
    var o = Math.round(n % 60);
    n = Math.floor(n / 60);
    Math.round(n % 24);
    n = Math.floor(n / 24);
    var l = document.getElementById("minutes"),
        s = document.getElementById("seconds"),
        r = document.getElementById("delim2");
    s && l && r && (i >= 0 && o >= 0 ? (s.innerHTML = pad(i), l.innerHTML = pad(o), r.innerHTML = ":") : (s.innerHTML = "", l.innerHTML = "", r.innerHTML = "")), timer = setTimeout(display, 1e3)
}

function display_2nd() {
    var e = localStorage.getItem("startTime"),
        t = new Date,
        a = Date.parse(e),
        n = t - a;
    n /= 1e3;
    var i = 2700;
    n += i;
    var o = Math.round(n % 60);
    n = Math.floor(n / 60);
    var l = n;
    n = Math.floor(n / 60);
    Math.round(n % 24);
    n = Math.floor(n / 24);
    var s = document.getElementById("minutes_2nd"),
        r = document.getElementById("seconds_2nd"),
        c = document.getElementById("delim2");
    s && r && c && (o >= 0 && l >= 0 ? (r.innerHTML = pad(o), s.innerHTML = pad(l), c.innerHTML = ":") : (r.innerHTML = "", s.innerHTML = "", c.innerHTML = "")), timer = setTimeout(display_2nd, 1e3)
}

function pad(e) {
    var t = e + "";
    return t.length < 2 ? "0" + t : t
}

function loadDiv(e, t) {
    $(document).ready(function() {
        if ("1" === e.count_up) {
            var t = '<span style="padding-top:2%;">&nbsp;</span><table width="100%" style="" class="mod-table main_table" cellspacing="5"><tbody><tr>';
            t += "<td " + e.class_1 + ' id="' + e.choice_1 + '" style="height: 25px;font-size:14px;" onclick="javascript: addToSlipSlider(this.id,\'' + e.choice_x + "','" + e.choice_2 + "');\">", t += '<span class="text-left">' + e.team1 + '</span><span class="text-right">' + e.c1 + "</span></td>", t += "<td " + e.class_x + ' id="' + e.choice_x + '" style="height: 25px;font-size:14px;" onclick="javascript: addToSlipSlider(this.id,\'' + e.choice_1 + "','" + e.choice_2 + "');\">" + e.cx + "</td>", t += "<td " + e.class_2 + ' id="' + e.choice_2 + '" style="height: 25px;font-size:14px;" onclick="javascript: addToSlipSlider(this.id,\'' + e.choice_1 + "','" + e.choice_x + "');\">", t += '<span class="text-left">' + e.team2 + '</span><span class="text-right">' + e.c2 + "</span></td>", t += "</tr></tbody></table>", $(".overlay-timer-board").html(t)
        } else if ("21" === e.count_up)
            if (null !== e.first_half_start && "" !== e.first_half_start) {
                var t = '<div style="left: 60%;padding-left: 40%;padding-top: 2%;"><span id="minutes" class="timer-board text-font-size-board"></span><span id="delim2" class="text-font-size-board"></span><span id="seconds" class="timer-board text-font-size-board"></span></div>';
                $(".overlay-timer-board").html(t);
                var a = e.first_half_start,
                    n = a.split(","),
                    i = new Date(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
                localStorage.startTime = i, timer = setTimeout(display, 1e3)
            } else $(".overlay-timer-board").html("");
        else if ("22" === e.count_up)
            if (null !== e.second_half_start && "" !== e.second_half_start) {
                var t = '<div style="left: 60%;padding-left: 40%;padding-top: 2%;"><span id="minutes_2nd" class="timer-board text-font-size-board"></span><span id="delim2" class="text-font-size-board">:</span><span id="seconds_2nd" class="timer-board text-font-size-board"></span></div>';
                $(".overlay-timer-board").html(t);
                var a = e.second_half_start,
                    n = a.split(","),
                    i = new Date(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
                localStorage.startTime = i, timer = setTimeout(display_2nd, 1e3)
            } else $(".overlay-timer-board").html("");
        else $(".overlay-timer-board").html("");
        var o = '<img src="' + defaultPath + "/public/img/teams/" + e.team1_id + '.png" onerror="this.src= \'' + defaultPath + '/public/img/flags/transparent.png\';" height="70" width="70" class="img-responsive" alt="' + e.team1 + ' Logo"/>',
            l = '<img src="' + defaultPath + "/public/img/teams/" + e.team2_id + '.png" onerror="this.src= \'' + defaultPath + '/public/img/flags/transparent.png\';" height="70" width="70" class="img-responsive" alt="' + e.team2 + ' Logo"/>',
            s = e.s_id;
        "1" === s ? ($(".overlay-team-1-score").html(e.score1), $(".overlay-team-1").html(o), $(".overlay-team-2-score").html(e.score2), $(".overlay-team-2").html(l), $(".overlay-play1-board").html(e.home), $(".overlay-play2-board").html(e.away), $(".overlay-team-1-board").html(e.team1), $(".overlay-team-2-board").html(e.team2)) : ($(".overlay-team-1-score").html(""), $(".overlay-team-1").html(""), $(".overlay-team-2-score").html(""), $(".overlay-team-2").html(""), $(".overlay-play1-board").html(""), $(".overlay-play2-board").html(""), $(".overlay-team-1-board").html(""), $(".overlay-team-2-board").html("")), $(".overlay-status-board").html(e.status), $(".overlay-date-board").html(e.date), $(".overlay-time-board").html(e.time)
    })
}

function live_score_game() {
    $(document).ready(function() {
        var e = $(".live-slide").length,
            t = $(".livescore_games_set").length,
            a = localStorage.getItem("livescore_games"),
            n = localStorage.getItem("livescore_games_length");
        a = JSON.parse(a);
        var i = $("div.active").index() + 1;
        e > 0 && (0 === parseInt(t) && parseInt(e) !== parseInt(n) ? window.location.reload() : loadDiv(a[i - 1], i - 1)), $("#carousel-example-generic") && $("#carousel-example-generic").bind("slid", function() {
            var e = $(".live-slide").length,
                t = $(".livescore_games_set").length;
            n = localStorage.getItem("livescore_games_length"), parseInt(e) !== parseInt(n) && 0 !== parseInt(t) && 0 !== parseInt(n) && window.location.reload(), parseInt(e) !== parseInt(n) && 0 === parseInt(t) ? window.location.reload() : 0 !== parseInt(n) && (a = localStorage.getItem("livescore_games"), a = JSON.parse(a), i = $("div.active").index() + 1, loadDiv(a[i - 1], i - 1))
        })
    })
}

function current_score_init() {
    $(document).ready(function() {
        $.get(defaultPath + "/results/current_score", function(e) {}).done(function(e) {
            localStorage.livescore_games = e;
            var t = JSON.parse(e);
            null === t ? localStorage.livescore_games_length = 0 : localStorage.livescore_games_length = t.length;
            var a = $(".live-slide").length;
            if (1 === parseInt(a)) {
                self.setInterval(function() {
                    live_score_game()
                }, 4e3)
            } else parseInt(a) > 1 && live_score_game()
        })
    })
}

function current_score() {
    $(document).ready(function() {
        $.get(defaultPath + "/results/current_score", function(e) {}).done(function(e) {
            localStorage.livescore_games = e;
            var t = JSON.parse(e);
            if (null === t) localStorage.livescore_games_length = 0;
            else {
                localStorage.livescore_games_length = t.length;
                var a = $(".livescore_games_set").length;
                0 !== parseInt(a)
            }
        }).fail(function(e) {
            window.location.reload()
        })
    })
}

function addToMarketSlip(e, t) {
    check_timeout(), $("#ajax_loading_slip").show();
    var a = document.getElementById(e).className;
    if ("active" == a) {
        if (document.getElementById(e)) {
            var n = e;
            remove_market_game(n), document.getElementById(e).className = ""
        }
        return void $("#ajax_loading_slip").hide()
    }
    if (multi_bet_counter_market()) {
        var i = function() {
                for (var e = $.Deferred(), t = $("#utilities_mkt").val(), a = window.atob(t), n = a.split(","), i = 0; i < n.length; i++)
                    if (document.getElementById(n[i]) && "active" == document.getElementById(n[i]).className) {
                        var o = n[i].split("-");
                        remove_market_game_no_load(o[1]), document.getElementById(n[i]).className = ""
                    }
                return setTimeout(function() {
                    e.resolve()
                }, 250), e
            },
            o = function() {
                document.getElementById(e) && (document.getElementById(e).className = "active", $.get(defaultPath + "/bets/right/" + e, function(e) {
                    $("#bet-slip-content").html(e)
                }).done(function() {
                    $("#ajax_loading_slip").hide()
                }).fail(function(e) {
                    $("#ajax_loading_slip").hide()
                }))
            };
        i().done(o)
    } else {
        $("#ajax_loading_slip").hide(), alert("You have rached the maximum number of picks in your multibet.\nPlease place your bet with the current selections or unselect the undesired picks.");
        var l = '<div class="alert alert-success" >You have rached the maximum number of picks in your multibet.\nPlease place your bet with the current selections or unselect the undesired picks.</div>';
        $("#bet_detail_notify").html(l)
    }
}

function isThereGreen() {
    for (var e = !1, t = $("#utilities_mkt").val(), a = window.atob(t), n = a.split(","), i = 0; i < n.length; i++) document.getElementById(n[i]) && "active" == document.getElementById(n[i]).className && (e = !0);
    return e
}

function multi_bet_counter_market() {
    var e = parseInt($("#betCount").val()),
        t = $("#max_multi_games").val(),
        t = t - 1;
    return t >= e || isNaN(e) ? !0 : isThereGreen() ? !0 : !1
}

function remove_all_market_games() {
    if (document.getElementById("utilities_mkt")) {
        $(".overlay-chart-container").show();
        for (var e = $("#utilities_mkt").val(), t = window.atob(e), a = t.split(","), n = 0; n < a.length; n++) document.getElementById(a[n]) && "active" == document.getElementById(a[n]).className && (document.getElementById(a[n]).className = "");
        $(".overlay-chart-container").hide()
    }
}

function remove_market_game(e) {
    $(document).ready(function(t) {
        $.get(defaultPath + "/bets/removeGame/" + e, function(e) {
            $.get(defaultPath + "/bets/right", function(e) {
                $("#bet-slip-content").html(e)
            })
        })
    }), check_timeout()
}

function remove_market_game_no_load(e) {
    $(document).ready(function(t) {
        $.get(defaultPath + "/bets/removeGame/" + e, function(e) {
            $.get(defaultPath + "/bets/right", function(e) {})
        })
    }), check_timeout()
}

function show_market_sample_dialog(e) {
    $("#bet-msgs-body").html(e), $("#bet-msgs").modal("show")
}

function jpLoad() {
    $(".grow .aj-loader").show(), $.get(defaultPath + "/bets/dynamicJPBanner", function(e) {
        $("#top-jp-banner").html(e)
    }).done(function() {
        $(".aj-loader").hide()
    }).fail(function(e) {
        $(".aj-loader").hide()
    })
}
var path = window.location.pathname.split("/"),
    defaultPath = getPath();
$(document).ready(function() {
    $("#play1").hide(), $("#play2").hide(), $("#play3").hide(), $("#play4").hide(), $("#play5").hide(), $("#play6").hide(), $("#play7").hide(), $("#play8").hide(), $("#play9").hide(), $("#play10").hide(), $("#play11").hide(), $("#play12").hide(), $("#play13").hide(), $("#play14").hide(), $("#play15").hide(), $("#play16").hide(), $("#play17").hide(), $("#play18").hide(), $("#play19").hide(), $("#play20").hide(), $("#play21").hide(), $("#play22").hide(), $("#play23").hide(), $("#play24").hide(), $("#play25").hide(), $("#play26").hide(), $("#play27").hide(), $("#play28").hide()
}), $(function() {
    localStorage.last_activity ? (new Date).getTime() - localStorage.last_activity > 18e5 && (localStorage.clear(), localStorage.last_activity = (new Date).getTime()) : localStorage.last_activity = (new Date).getTime(), $(".to-top").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 2e3)
    });
    var e = getPath(),
        t = {
            ".chosen-select": {}
        };
    for (var a in t) $(a).chosen(t[a]);
    $("#myTabs a:last").tab("show"), $("#physical_address").tooltip("hide"), $("#paybill_numbers").tooltip("hide"), $(".markets-tooltip").tooltip("hide"), $(".carousel").carousel({
        interval: 6e3
    });
    var n = document.URL,
        i = n.replace("http://", ""),
        o = i.replace("https://", "");
    o.split("/");
    $(".login-alert").hide(), $("#terms").hide(), $("#main_page").hide(), $(".modal-play").hide(), $("#user_dob").datepicker({
        format: "yyyy-mm-dd",
        viewMode: 2,
        minViewMode: 0
    });
    var l, s = 0,
        r = function() {
            c(), g(), u(), d(), m()
        },
        c = function() {
            $.get(e + "/bets/left", function(e) {
                $("#left-content").html(e)
            }).done(function() {
                s++
            }).fail(function() {
                s++
            })
        },
        d = function() {
            n.indexOf("jackpot_games") > -1 ? $.get(e + "/bets/right_jackpot", function(e) {
                $("#bet-slip-content").html(e)
            }).done(function() {
                s++
            }).fail(function() {
                s++
            }) : $.get(e + "/bets/right", function(e) {
                $("#bet-slip-content").html(e)
            }).done(function() {
                s++
            }).fail(function() {
                s++
            })
        },
        m = function() {
            get_the_balance(2), s++
        },
        u = function() {
            var t = $("#query_string").val();
            t = t.substr(1);
            var a = t.split("/"),
                t = a[0],
                n = document.URL;
            (document.URL === e + "/" || document.URL === e + "/bets/index/todaymatches" || document.URL === e + "/bets/index/allmatches" || n.indexOf("/bets/index/") > -1 || n.indexOf("/games/sport") > -1 || n.indexOf("/games/allgames") > -1 || n.indexOf("games/highlights") > -1 || n.indexOf("games/league_game") > -1) && (current_score_init(), setInterval(current_score, 3e4)), s++
        },
        g = function() {
            $(".grow") && jpLoad(), s++
        },
        _ = function() {
            5 > s ? (clearInterval(l), l = setInterval(_, 1e3)) : ("complete" === document.readyState && (clearInterval(l), $("#rendering").hide(), $(".site-body").css("visibility", "visible"), GetClock(), loadTwitterWidget(), addPopstateEvent(), -1 != navigator.userAgent.indexOf("Safari") && setTimeout("removeDataSrc()", 3e3), setInterval(pollLeftContent, 18e4), showChatIcon()), show_crnt_sprt())
        },
        h = $.Deferred();
    h.done([r()]).done(_())
}), $(document).ready(function() {
    $("#favourite_game").hide()
});
var timer;
$(function() {
        var e = new Date,
            t = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0),
            a = new Date;
        a.setMonth(a.getMonth() - 1), $("#trans_from").datepicker({
            format: "yyyy-mm-dd",
            onRender: function(e) {
                return e.valueOf() > t.valueOf() ? "disabled" : ""
            }
        }), $("#trans_to").datepicker({
            format: "yyyy-mm-dd",
            onRender: function(e) {
                return e.valueOf() > t.valueOf() ? "disabled" : ""
            }
        }), $("#from_dt_csrp").datepicker({
            format: "yyyy-mm-dd",
            onRender: function(e) {
                return e.valueOf() > t.valueOf() ? "disabled" : ""
            }
        }), $("#to_dt_csrp").datepicker({
            format: "yyyy-mm-dd",
            onRender: function(e) {
                return e.valueOf() > t.valueOf() ? "disabled" : ""
            }
        }), $("#limit1").datepicker({
            format: "yyyy-mm-dd",
            onRender: function(e) {
                return e.valueOf() < a.valueOf() || e.valueOf() > t.valueOf() ? "disabled" : ""
            }
        }).on("changeDate", function() {
            $(this).datepicker("hide"), show_result(1, 1, 1)
        })
    }),
    function() {
        var e = {
                getInstance: function(e) {
                    var a = $("#" + t.dockId);
                    return (a.length < 1 || e === !0) && (a = $(t.dockTemplate).attr("id", t.dockId).css(t.dockCss).addClass(t.dockClass), t.defaultStylesheet && $("head").appendTo('<link rel="stylesheet" type="text/css" href="' + t.defaultStylesheet + '" />'), $(t.dockContainerSelector).append(a)), a
                },
                notify: function(e, a, n) {
                    var i = this.getInstance(),
                        o = $(t.noticeTemplate).hide().css(t.noticeCss).addClass(t.noticeClass);
                    switch (n || (n = "primary"), n) {
                        case "info":
                            o.addClass("panel-info");
                            break;
                        case "success":
                            o.addClass("panel-success");
                            break;
                        case "warning":
                            o.addClass("panel-warning");
                            break;
                        case "danger":
                            o.addClass("panel-danger");
                            break;
                        default:
                            o.addClass("panel-primary")
                    }
                    $(".title", o).css(t.noticeTitleCss).html(e), $(".close", o).click(function(e) {
                        e.preventDefault(), $(this).closest(".notice").remove()
                    }), $(".message", o).html(a), i.append(t.noticeDisplay(o)), t.displayTimeout > 0 && t.doNotClose.indexOf(n) < 0 && setTimeout(function() {
                        t.noticeRemove(o, function() {
                            o.remove()
                        })
                    }, t.displayTimeout)
                },
                r: function(e, t, a) {
                    for (; t.test(e);) e = e.replace(t, a);
                    return e
                }
            },
            t = {
                dockId: "jqueryGrowlDock",
                dockClass: "growl",
                dockTemplate: "<div></div>",
                dockContainerSelector: "body",
                dockCss: {
                    position: "fixed",
                    top: "50%",
                    right: "40%",
                    width: "300px",
                    zIndex: 5e4
                },
                noticeTemplate: '<div class="notice panel"><div class="panel-heading "><h3><a class="title"></a><button type="button" class="close">x</button></h3></div><div class="message panel-body active">%message%</div></div>',
                noticeCss: {
                    backgroundImage: "url(" + defaultPath + "/img/body_bg.png)",
                    backgroundRepeat: "repeat",
                    border: "1px solid transparent",
                    borderRadius: "4px",
                    marginBottom: "20px",
                    display: "block",
                    padding: "10px 15px",
                    color: "red"
                },
                noticeTitleCss: {
                    textDecoration: "none",
                    color: "red"
                },
                noticeDisplay: function(e) {
                    return e.fadeIn(t.noticeFadeTimeout)
                },
                noticeRemove: function(e, a) {
                    return e.animate({
                        opacity: "0",
                        height: "0px"
                    }, {
                        duration: t.noticeFadeTimeout,
                        complete: a
                    })
                },
                doNotClose: ["danger"],
                noticeFadeTimeout: "slow",
                displayTimeout: 1e4,
                defaultStylesheet: null,
                noticeElement: function(e) {
                    this.noticeTemplate = $(e)
                }
            };
        $.growl = function(a) {
            if ("object" == typeof a) {
                "settings" in a && (t = $.extend(t, a.settings));
                var n = "Notice",
                    i = null,
                    o = "primary";
                "title" in a && (n = a.title), "message" in a && (i = a.message), "priority" in a && (o = a.priority), null != i && e.notify(n, i, o)
            }
        }
    }();