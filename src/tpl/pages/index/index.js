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
    });

    /****
     * set range slider val
     * ****/

    function setRangeVal(input) {
        input.nextSibling.firstChild.textContent = input.value;
    }

    let borderSizeInput = document.querySelector('[name=border_size]')
    let borderRadiusInput = document.querySelector('[name=border_radius]')

    setRangeVal(borderSizeInput);
    setRangeVal(borderRadiusInput);

    borderSizeInput.addEventListener("input", () => setRangeVal(borderSizeInput));
    borderRadiusInput.addEventListener("input", () => setRangeVal(borderRadiusInput));


    /*****
     * change currency symbol
     * ***/

    let currencySelect = document.querySelector('select[name=currency]');

    currencySelect.addEventListener('change', function () {
        document.querySelector('.form-currency-val').textContent = this.value
    })

    /*****
     * tabs
     * *****/

    let tabLinks = document.querySelectorAll(".settings__tabs .tabs__lnk")
    let tabs = document.querySelectorAll('.settings__tabs-entry');
    for (let tabLink of tabLinks) {
        tabLink.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector('.tabs__entry--current').classList.remove('tabs__entry--current');
            tabLink.parentNode.classList.add('tabs__entry--current');
            let currentTab = this.getAttribute('href');
            for (let tab of tabs) {
                tab.style.display = 'none';
            }
            document.querySelector(currentTab).style.display = 'block';
        })
    }


}