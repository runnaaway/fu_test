window.onload = function () {
    document.querySelector('.form__head-filter__status .status__lnk').onclick = function (e) {
        e.preventDefault();
        this.parentNode.classList.toggle('vis')
    }

    let menu = document.querySelector('.menu');
    let menuOffset = menu.offsetTop;

    window.addEventListener('scroll', function(e) {
        if (window.pageYOffset >= menuOffset + 30 ) {
            menu.classList.add('fixed')
        } else {
            menu.classList.remove('fixed')
        }
    });
}