import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/home.scss';
import '../lib/font-awesome/css/font-awesome.min.css';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';

import { formValid } from './form-validation';

let Index = (function () {

    let init = function () {
        setListener();
    };

    let setListener = function () {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 50,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });
        $(window).on('load', function () {
            coordinateMenu = $('.navigation').offset();
        });
        $(window).resize(function () {
            let menu = $('.navigation'),
                menuItem = $('.navigation-container');

            if($(window).width() > 670) {
                menu.removeClass('navigation-fixed');
                menuItem.show();
            }
        });
        $('.contacts-form').submit(formSubmit);
        $(window).scroll(scrollWindow);
        $('.navigation-hamburger').click(hamburgerClick);
    };

    let coordinateMenu;

    let hamburgerClick = function (event) {
        let menu = $('.navigation-container');

        if(menu.is(':visible')) {
            menu.slideUp(200);
        }
        if(menu.is(':hidden')){
            menu.slideDown(200);
        }
    };

    let scrollWindow = function (event) {
        let menu = $('.navigation'),
            coordinateWindow = $(window).scrollTop();

        if($(window).width() <= 670) {
            if (coordinateWindow > coordinateMenu.top) {
                menu.addClass('navigation-fixed');
            } else {
                menu.removeClass('navigation-fixed');
            }
        }
    };

    let formSubmit = function (event) {
        let valid = formValid(event.target),
            trueForm = $('.contacts-form__success');

        if(valid) {
            trueForm.show(100);

            setTimeout(function () {
                trueForm.hide(100);
            }, 3000);

            document.querySelector('.contacts-form').reset();
        }

        return false;
    };

    return {
        init: init
    }
})();

Index.init();
