let menuHidden = true
showMenu = function () {
    if (menuHidden) {
        document.getElementById('nav').classList.add('show-menu');
        menuHidden = false;
    } else {
        closeMenu();
    }
}
closeMenu = function () {
    document.getElementById('nav').classList.remove('show-menu');
    menuHidden = true;
}