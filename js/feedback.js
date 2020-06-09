(function() {
    let btn = document.querySelector('.map__feedBack');
    let popup = document.querySelector('.popup');
    let close = popup.querySelector('.popup-form__btn');


    btn.addEventListener('click', function (e) {
        e.preventDefault();
        popup.classList.add('popup--appear');
    });

    close.addEventListener('click', function (e) {
        e.preventDefault();
        popup.classList.remove('popup--appear');
    });

    window.addEventListener('keydown',function(e){
        if(e.keyCode === 27){
            e.preventDefault();
            popup.classList.remove('popup--appear');
        }
    });

}());