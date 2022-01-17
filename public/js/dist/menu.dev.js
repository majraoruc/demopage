"use strict";

$(document).ready(function () {
  //Menu button on click event
  $('.mobile-nav-button').click(function () {
    // Toggles a class on the menu button to transform the burger menu into a cross
    $(".mobile-nav-button .mobile-nav-button__line:nth-of-type(1)").toggleClass("mobile-nav-button__line--1");
    $(".mobile-nav-button .mobile-nav-button__line:nth-of-type(2)").toggleClass("mobile-nav-button__line--2");
    $(".mobile-nav-button .mobile-nav-button__line:nth-of-type(3)").toggleClass("mobile-nav-button__line--3"); // Toggles a class that slides the menu into view on the screen

    $('.mobile-menu').toggleClass('mobile-menu--open');

    if ('.mobile-menu mobile-menu--open') {
      $('.mobile-menu').css("display", "unset");
      $('body').css("opacity", "0.85");
    } else {
      $('.mobile-menu').css("display", "none");
      $('body').css("opacity", "1");
      $('.mobile-menu').toggleClass('mobile-menu--open');
    }

    return false;
  }); //if clicked outside of menu to close the menu

  $('.mobile-nav-button').click(function (e) {
    $('body').click(function (e) {
      if ($(e.target).closest('.mobile-menu').length) {
        return;
      }

      $('.mobile-nav-button').click();
      $('.mobile-menu').css("display", "none");
      $('body').css("opacity", "1");
    });
  });
});