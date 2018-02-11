import func from "./main";
import $ from 'jquery';
import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/home.scss';

console.log($);

var main = $('h1');
main.on('click', function () {
    $(this).hide(500);
});