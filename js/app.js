// Определение типа устройства ====================================================
// const isMobile = {
// 	Android: function () {
// 		return navigator.userAgent.match(/Android/i);
// 	},
// 	BlackBerry: function () {
// 		return navigator.userAgent.match(/BlackBerry/i);
// 	},
// 	iOS: function () {
// 		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
// 	},
// 	Opera: function () {
// 		return navigator.userAgent.match(/Opera Mini/i);
// 	},
// 	Windows: function () {
// 		return navigator.userAgent.match(/IEMobile/i);
// 	},
// 	any: function () {
// 		return (
// 			isMobile.Android() ||
// 			isMobile.BlackBerry() ||
// 			isMobile.iOS() ||
// 			isMobile.Opera() ||
// 			isMobile.Windows());
// 	}
// };

// Меню бургер ====================================================================

//Логика скрипта бургера:
//1. Получаем объект бургер
//2. Получаем меню, которое нужно открыть
//3. Вешаем обработчик события click на бургер (п.1)
//4. Добавляем (toggle) класс к меню (п.2)

const menuBurger = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');

if (menuBurger) {
	menuBurger.addEventListener("click", function (e) {
		menuBurger.classList.toggle('_active-menu');
		if (menuBody) {
			menuBody.classList.toggle('_active-menu__body');
		}
	})
}

// Плавный скролл к якорю =========================================================
const header = document.querySelector('.header').offsetHeight;

document.querySelectorAll('a[href^="#"').forEach(link => {

	link.addEventListener('click', function (e) {
		e.preventDefault();

		let href = this.getAttribute('href').substring(1);

		const scrollTarget = document.getElementById(href);

		// const topOffset = document.querySelector('.scrollto').offsetHeight;
		const topOffset = (header); // Отступ сверху 
		const elementPosition = scrollTarget.getBoundingClientRect().top;
		const offsetPosition = elementPosition - topOffset;

		window.scrollBy({
			top: offsetPosition,
			behavior: 'smooth'
		});
	});
});

// Изменение порядков элементов DOM при определенной ширине экрана ================
const headerBtn = document.querySelector('.header__btn');
const firstItem = document.querySelector('.first-item');
const secondItem = document.querySelector('.second-item');

if (window.innerWidth <= 991.98) {
	secondItem.prepend(firstItem)
	firstItem.classList.add('footer__col', 'item-footer__col')
	firstItem.classList.remove('footer__item')
}

if (window.innerWidth <= 649) {
	menuBody.append(headerBtn)
}

// Аккордеон ======================================================================
const questions = document.querySelectorAll('.accordion');

const closeQuestion = (el) => {
	const content = el.querySelector('.accordion__text');
	el.classList.remove('_active-acc');
	content.style.maxHeight = null;
}

const openQuestion = (el) => {
	const content = el.querySelector('.accordion__text');
	el.classList.add('_active-acc');
	content.style.maxHeight = content.scrollHeight + 'px';
}

const closeAllQuestions = () => questions.forEach(question => closeQuestion(question));

questions.forEach((el) => {
	el.addEventListener('click', () => {
		if (el.classList.contains('_active-acc')) {
			closeQuestion(el);
		} else {
			closeAllQuestions();
			openQuestion(el);
		}
	});
})

//Swiper slider ===================================================================
const swiper = new Swiper('.swiper', {
	// Optional parameters
	longSwipesMs: 400,
	longSwipesRatio: 0.3,
	direction: 'horizontal',
	loop: true,
	allowTouchMove: true,
	centeredSlides: true,
	effect: 'creative',
	creativeEffect: {
		prev: {
			translate: [-800, 0, -300],
			opacity: 0,
			scale: 0,
		},
		next: {
			translate: ['100%', 0, 0],
			opacity: 0,
			scale: 0,
		},
	},
	grabCursor: true,
	preventClicks: true,
	preventClicksPropagation: true,
	spaceBetween: 30,
	pagination: {
		el: '.swiper-pagination',
	},
	// autoplay: {
	// 	delay: 3000,
	// },
});

//Preloader =======================================================================
window.onload = function () {
	document.body.classList.add('loaded__hiding');
	window.setTimeout(function () {
		document.body.classList.add('loaded');
		document.body.classList.remove('loaded__hiding');
	}, 1000);
}