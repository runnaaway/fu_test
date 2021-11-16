window.onload = function () {
    let formHeadFilterStatus = document.querySelector('.form__head-filter__status');

    document.querySelector('.form__head-filter__status .status__lnk').addEventListener('click', function (e) {
        e.preventDefault();
        formHeadFilterStatus.classList.toggle('vis')
    });

    window.addEventListener('click', function () {
        formHeadFilterStatus.classList.remove('vis');
    });

    formHeadFilterStatus.addEventListener('click', function (e) {
        e.stopPropagation();
    });

    /********/

    let menu = document.querySelector('.menu');
    let menuOffset = menu.offsetTop;

    window.addEventListener('scroll', function(e) {
        if (window.pageYOffset >= menuOffset + 30 ) {
            menu.classList.add('fixed')
        } else {
            menu.classList.remove('fixed')
        }
    });

    /*******/

    let copyDonationIDLnk = document.querySelector('.donation__id-copy');
    let copyDonationTooltip = document.querySelector('.donation__id-copy-tooltip');
    let donationID = document.querySelector('.donation__id-val').textContent;

    copyDonationIDLnk.addEventListener('click', function (e) {
        e.preventDefault();
        this.classList.add('copied');
        navigator.clipboard.writeText(donationID);
        copyDonationTooltip.textContent = 'Copied!';
    });

    copyDonationIDLnk.addEventListener('mouseout', function () {
        let _this = this;
        setTimeout(function () {
            _this.classList.remove('copied');
            copyDonationTooltip.textContent = 'Copy to clipboard';
        }, 1000)
    })
}