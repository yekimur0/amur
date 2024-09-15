// Определение операционной системы на мобильных
import { mobileCheck } from "./functions/mobile-check";

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
import { burger } from "./functions/burger";

// Реализация остановки скролла (не забудьте вызвать функцию)
import { disableScroll } from "./functions/disable-scroll";
// Реализация включения скролла (не забудьте вызвать функцию)
import { enableScroll } from "./functions/enable-Scroll";
// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();

// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
import Swiper, { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";

Swiper.use([Navigation, Pagination, Scrollbar, Autoplay]);

const swiper_line = new Swiper('.line__swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,

    loop: true,

    autoplay: {
        delay: 500, 
        disableOnInteraction: false,
    },
    speed: 3000,     
}) 

const swiper_fond = new Swiper('.fond__swiper', {
    slidesPerView: 'auto',
    spaceBetween: 40,
    
    breakpoints: {
        320: {
            spaceBetween: 20,
        },
        768: {
            spaceBetween: 40,
        }
    },

    loop: true,
    navigation: {
        prevEl: '.prev-fond',
        nextEl: '.next-fond'
    },
    speed: 1000
})

import TransferElements from "transfer-elements";

new TransferElements({
    sourceElement: document.querySelector('.header__btn'),
    breakpoints: {
        1024: {
            targetElement: document.querySelector('.header__nav'),
            targetPosition: 1,
        }
    }
})


// Подключение анимаций по скроллу
// import AOS from "aos";

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
import SmoothScroll from "smooth-scroll";
const scroll = new SmoothScroll('a[href*="#"]', {
  header: "[data-scroll-header]",
});

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form-1', rules1, afterForm);

import { accordion } from "./functions/accordion";
import { MY_SELECT } from "./functions/my-select";
import { listener } from "./functions/listener";
import { auto } from "@popperjs/core";


// listener глобальный (перенести в отдельный компонент (listener) стоит попозже)
document.body.addEventListener('click', (e) => {
    let target = e.target;

    // открытие модалки
    if(target.hasAttribute('data-btn-modal')) openModal(target);

    // закрытие модалки
    if(target.classList.contains('modal') || target.hasAttribute('close-modal-btn')) {
        let parent = target.closest('.modal');
        
        // modal--active ? remove : null;
        if (parent.classList.contains('modal--active')) {
            parent.classList.remove('modal--active');
            return;
        }

    }
})


function openModal() {
    const modal = document.querySelector('#modal-register');

    modal.classList.add('modal--active');
}

const forms = document.querySelector('form');

forms.addEventListener('submit', (e) => {
    e.preventDefault();
    const modal = e.target.closest('.modal');
    const successModal = document.querySelector('#modal-success');


    modal.classList.remove('modal--active');
    setTimeout(() => {
        successModal.classList.add('modal--active')
    }, 1000)
})