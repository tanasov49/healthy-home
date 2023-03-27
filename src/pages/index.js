import './index.scss';
import { linksNavPages, toolsNavPage, advantagesColors } from '../data/data';
import { colors, roomColors } from '../data/colors';
import $ from "jquery";
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
