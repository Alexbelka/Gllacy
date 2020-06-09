let basket = document.querySelector('.basket-goods');
let basketButton = document.querySelector('.main-header__empty');
let buttonClose = document.querySelector('.basket-goods__buttonClose');

(function() {
    basketButton.addEventListener('click', function (e) {
        e.preventDefault();
        basket.classList.add('basket-appear');
    });
    buttonClose.addEventListener('click', function (e) {
        e.preventDefault();
        basket.classList.remove('basket-appear');
    })
}());