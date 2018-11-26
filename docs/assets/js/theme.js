$( document ).ready(function() {

  // Get started!

    $('[data-toggle=search-form]').click(function() {
        $('.search-form-wrapper').toggleClass('open');
        $('.btn-search').toggleClass('open');
        $('.search-form-wrapper .search').focus();
        $('html').toggleClass('search-form-open');
    });
    $('[data-toggle=search-form-close]').click(function() {
        $('.search-form-wrapper').removeClass('open');
        $('html').removeClass('search-form-open');
    });
    $('.search-form-wrapper .search').keypress(function( event ) {
        if($(this).val() == "Search") $(this).val("");
    });

    $('.search-close').click(function(event) {
        $('.search-form-wrapper').removeClass('open');
        $('html').removeClass('search-form-open');
    });

    // Megamenu
    // breakpoint and up
    $(window).resize(function(){
        if ($(window).width() >= 992){

            // when you hover a toggle show its dropdown menu
            $(".navbar .dropdown-toggle").click(function () {
                $(this).parent().toggleClass("show");
                $(this).parent().find(".dropdown-menu").toggleClass("show");
            });

            // hide the menu when the mouse leaves the dropdown
            $( ".navbar .dropdown-menu" ).click(function() {
                $(this).removeClass("show");
            });

            // do something here
        }
    });

});

// Cookies
(function () {
    "use strict";

    var cookieAlert = document.querySelector(".cookiealert");
    var acceptCookies = document.querySelector(".acceptcookies");

    cookieAlert.offsetHeight; // Force browser to trigger reflow (https://stackoverflow.com/a/39451131)

    if (!getCookie("acceptCookies")) {
        cookieAlert.classList.add("show");
    }

    acceptCookies.addEventListener("click", function () {
        setCookie("acceptCookies", true, 60);
        cookieAlert.classList.remove("show");
    });
})();

// Cookie functions stolen from w3schools
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}