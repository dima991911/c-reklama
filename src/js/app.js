import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/home.scss';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';

let Index = (function () {

    let init = function () {
        setListener();
    };

    let setListener = function () {
        $('.owl-carousel').owlCarousel({
            items: 5,
            loop: true,
            margin: 50
        });
    };

    return {
        init: init
    }
})();

Index.init();
