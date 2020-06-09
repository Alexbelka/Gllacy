
(function() {
    let search = document.querySelector('.main-header__search');
    let PopupSearch = document.querySelector('.search');
    let enter = document.querySelector('.main-header__enter');
    let entrance = document.querySelector('.entrance');


    search.addEventListener('mouseover', function (e) {
        e.preventDefault();
        PopupSearch.classList.add('popup--appear');
        if (PopupSearch.classList.contains('popup--appear')) {
            enter.style.pointerEvents = "none";
        }
    });

    PopupSearch.addEventListener('mouseover', function (e) {
        e.preventDefault();
        PopupSearch.classList.add('popup--appear');
    });

    window.addEventListener('keydown', function (e) {
        if (e.keyCode === 27) {
            e.preventDefault();
            PopupSearch.classList.remove('popup--appear');
            enter.style.pointerEvents = 'auto';
        }
    });

    enter.addEventListener('mouseover', function (e) {
        e.preventDefault();
        entrance.classList.add('popup--appear');
        if (entrance.classList.contains('popup--appear')) {
            search.style.pointerEvents = "none";
        }
    });

    entrance.addEventListener('mouseover', function (e) {
        e.preventDefault();
        entrance.classList.add('popup--appear');
    });

    window.addEventListener('keydown', function (e) {
        if (e.keyCode === 27) {
            e.preventDefault();
            entrance.classList.remove('popup--appear');
            search.style.pointerEvents = 'auto';
        }
    });



}());