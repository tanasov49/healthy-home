import './index.scss';
import { linksNavPages, toolsNavPage, advantagesColors, asideMenu } from '../data/data';
import { colors, roomColors } from '../data/colors';
import $ from "jquery";
import validate from "jquery-validation"
// Перебор данных для nav
$.map(linksNavPages, (item) => {
    $('.nav-pages').append( `<li class="page-item"><a class="page-item__link" href="${item.url}">${item.title}</a></li>` )
})
$.map(toolsNavPage, (item) => {
    $('.nav-tools').append( `<li class="tool-item"><button type="button" class="tool-item__btn">${item.title}</button></li>` )
})
// Перебор данных преимуществ для section-drops 
$.map(advantagesColors, (item) => {
    $('.descriptions').append(`<li class="description-item"><p class="description-item__number">${item.id}</p><p class="description-item__text description-item__text_title">${item.title}</p><p class="description-item__text description-item__text_subtitle">${item.subtitle}</p></li>`)
})
// Перебор данных colors для section-drops
$.map(colors, (item) => {
    $('.colors-items').append(`<li class="color-item"><img class="color-item__image" src=${item.src} alt="${item.title}" /><h4 class="color-item__title">${item.title}</h4><p class="color-item__price">${item.price}</p></li>`)
})
$.map(roomColors, (item) => {
    $('.description-images').append(`<a href="${item.href}" class="description-image"><img class="description-image__image" src="${item.room}" alt="${item.altRoom}" /><img class="description-image__hover" src="${item.color}" alt="${item.altColor}" /></a>`)
})
// Валидация формы
$(document).ready(() => {
    let validEmail = false;
    const btnSubmit = $('.form-about-input__button').prop('disabled', true)
    const validateEmail = () => {
        const emailValue = $('.form-about-input__input').val();
        const regexEmail = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        const errorEmail = $('.form-about-input__error');
        if (!emailValue) {
            errorEmail.text('Field is not empty');
            validEmail = false;
            btnSubmit.prop('disabled', true)
            return false;
        } else if(!regexEmail.test(emailValue)) {
            errorEmail.text('Please enter a valid email address is correct.');
            validEmail = false;
            btnSubmit.prop('disabled', true)
            return false;
        }   else  {
            validEmail = true;
            btnSubmit.prop('disabled', false)
            errorEmail.text('');
            return true
        }
    }
    $('.form-about-input__input').on('input', () => {
        validateEmail()
    })
    $('.form-about').on('submit', (e) => {
        if (validEmail === true) {
            e.preventDefault()
            const emailValue = $('.form-about-input__input');
            console.log(emailValue.val())
            emailValue.val('');
        } else {
            return false
        }
    })
})
// Переоб массива для aside menu
$.map(asideMenu, (item) => {
    let linksHtml = '';
    $.map(item.linksTitleMenu, (link) => {
        linksHtml += `<li class="aside-menu-item__item">
        <a href="${link.href}">${link.link}</a>
        </li>`
    })
    $('.aside-menu').append(
        `<ul class="aside-menu-item">
        <li class="aside-menu-item__item">${item.titleMenu}</li>
        ${linksHtml}
        </ul>`)
}
)
// Раскрытие меню языков
$('.language-menu__button').on('click', (e) => {
    $('.language-menu-links').toggleClass('language-menu-links_active');
    $('.language-menu__button').toggleClass('language-menu__button_active');
})




