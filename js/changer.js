
(function() {
    let btnFirst = document.getElementById('btn-1');
    let btnSecond = document.getElementById('btn-2');
    let btnThird = document.getElementById('btn-3');
    let page = document.querySelector(".main-page");

    btnFirst.addEventListener('change', function () {
        page.style.backgroundImage = 'url(../img/backFirst.png)';
    });

    btnSecond.addEventListener('change', function () {
        page.style.backgroundImage = 'url(../img/backSecond.png)';
    });

    btnThird.addEventListener('change', function () {
        page.style.backgroundImage = 'url(../img/backThird.png)';
    });
}());