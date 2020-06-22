'use strict';

(function () {
    function init() {
        let router = new Router([
            new Route('home', 'home.html', true),
            new Route('about', 'about.html'),
            new Route('works', 'works.html'),
            new Route('skills', 'skills.html'),
            new Route('contact', 'contact.html')
        ]);
    }
    init();
}());

// menuChange();

function menuChange(htmlName) {
    let current = document.getElementsByClassName(" active");
    if (current.length > 0) { current[0].className = current[0].className.replace(" active", ""); }
    let name = htmlName.slice(0, -5);
    document.getElementById(name).classList.add('active');
};