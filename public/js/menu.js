$(document).ready(function () {
    //Menu button on click event
    $('.mobile-nav-button').click(function () {
        toggleMenuIcon()
        $('.mobile-nav-button').attr("class").indexOf("close") == "-1" ? closeMenu() : openMenu()
        return false;
    });
});
function closeMenu() {
    // $('mobile-menu--open').css("display", "none")
    // $('.mobile-menu').css("display", "none")
    $('body').css("opacity", "1")
    $('body').off("click")
}
function openMenu() {
    // $('.mobile-menu').css("display", "unset")
    $('body').css("opacity", "0.85")
    $('body').on("click", e => checkIfOutside(e))
}
function toggleMenuIcon() {
    // Toggles a class on the menu button to transform the burger menu into a cross
    $(".mobile-nav-button .mobile-nav-button__line:nth-of-type(1)").toggleClass("mobile-nav-button__line--1");
    $(".mobile-nav-button .mobile-nav-button__line:nth-of-type(2)").toggleClass("mobile-nav-button__line--2");
    $(".mobile-nav-button .mobile-nav-button__line:nth-of-type(3)").toggleClass("mobile-nav-button__line--3");
    $(".mobile-nav-button").toggleClass("mobile-nav-close-button")
    // Toggles a class that slides the menu into view on the screen
    $('.mobile-menu').toggleClass('mobile-menu--open')
}
function checkIfOutside(e) {
    if ($(e.target).closest('.mobile-menu').length || $(e.target).closest('.mobile-nav-close-button').length) {
    } else {
        toggleMenuIcon()
        closeMenu()
    }
}