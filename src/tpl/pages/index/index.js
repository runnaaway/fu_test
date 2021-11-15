window.onload = function () {
    document.querySelector('.form__head-filter__status .status__lnk').onclick = function (e) {
        e.preventDefault();
        this.parentNode.classList.toggle('vis')
    }
}