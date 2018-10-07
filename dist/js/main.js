// Select DOM Items

const menuBtn = $(".menu-btn");
const menu = $(".menu");
const menuNavbar = $(".menu-navbar");
const menuProfile = $(".menu-profile");
const navbarItem = $(".navbar-item");

// Set Initial State of Menu
let showMenu = false;

menuBtn.click(toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.addClass("close");
    menu.addClass("show");
    menuNavbar.addClass("show");
    menuProfile.addClass("show");
    navbarItem.each(function() {
      $(this).addClass("show");
    });

    showMenu = true;
  } else {
    menuBtn.removeClass("close");
    menu.removeClass("show");
    menuNavbar.removeClass("show");
    menuProfile.removeClass("show");
    navbarItem.each(function() {
      $(this).removeClass("show");
    });

    showMenu = false;
  }
}
