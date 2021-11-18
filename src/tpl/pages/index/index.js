window.onload = function () {
    /****
     * detect mobile device
     * ****/

    let isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (
                isMobile.Android()
                || isMobile.BlackBerry()
                || isMobile.iOS()
                || isMobile.Opera()
                || isMobile.Windows()
            );
        }
    };

    /****
     * toggle mobile menu
     * ****/

    if(window.innerWidth < 840) {
        let menuToggle = document.querySelector('.menu-toggle');

        menuToggle.addEventListener('click', (e) => {
            e.preventDefault();

            menuToggle.classList.toggle('menu-toggle--opened')

            document.querySelector('.menu').classList.toggle('menu--visible')
        });
    }

    /****
     *  fixed menu
     * ****/

    function fixMenu() {
        if(window.innerWidth > 840 && !isMobile.any()) {
            let menu = document.querySelector('.menu');
            let menuOffset = menu.offsetTop;

            window.addEventListener('scroll', function (e) {
                if (window.pageYOffset >= menuOffset + 30) {
                    menu.classList.add('fixed')
                } else {
                    menu.classList.remove('fixed')
                }
            });
        }
    }

    fixMenu();
    window.addEventListener('resize', fixMenu);


    /***
     * copy donation id to clipboard
     * ****/

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