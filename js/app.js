// Меню бургер ====================================================================
const menuBurger = document.querySelector('.icon-menu'),
	menuBody = document.querySelector('.menu__body'),
	body = document.querySelector('body');


if (menuBurger) {
	menuBurger.addEventListener("click", function (e) {
		menuBurger.classList.toggle('_active-menu');
		if (menuBurger.classList.contains('_active-menu')) {
			menuBody.classList.add('_active-menu__body');
			body.style.overflow = 'hidden';
		} else {
			menuBody.classList.remove('_active-menu__body');
			body.style.overflow = 'visible';
		}
	});
}

// Плавный скролл к якорю =========================================================
const header = document.querySelector('.header').offsetHeight;

document.querySelectorAll('a[href^="#"').forEach(link => {

	link.addEventListener('click', function (e) {
		e.preventDefault();

		let href = this.getAttribute('href').substring(1);

		const scrollTarget = document.getElementById(href);

		const topOffset = (header);
		const elementPosition = scrollTarget.getBoundingClientRect().top;
		const offsetPosition = elementPosition - topOffset;

		window.scrollBy({
			top: offsetPosition,
			behavior: 'smooth'
		});
	});
});

// Изменение порядков элементов DOM при определенной ширине экрана ================
const headerBtn = document.querySelector('.header__btn'),
	firstItem = document.querySelector('.first-item'),
	secondItem = document.querySelector('.second-item');

if (window.innerWidth <= 991.98) {
	secondItem.prepend(firstItem);
	firstItem.classList.add('footer__col', 'item-footer__col');
	firstItem.classList.remove('footer__item');
}

if (window.innerWidth <= 649) {
	menuBody.append(headerBtn);
}

// Аккордеон ======================================================================
const questions = document.querySelectorAll('.accordion');

const closeQuestion = (el) => {
	const content = el.querySelector('.accordion__text');
	el.classList.remove('_active-acc');
	content.style.maxHeight = null;
};

const openQuestion = (el) => {
	const content = el.querySelector('.accordion__text');
	el.classList.add('_active-acc');
	content.style.maxHeight = content.scrollHeight + 'px';
};

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
});

//Swiper slider ===================================================================
const swiper = new Swiper('.swiper', {
	longSwipesMs: 400,
	longSwipesRatio: 0.3,
	direction: 'horizontal',
	loop: true,
	speed: 1500,
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
	autoplay: {
		delay: 10000,
	},
});

//Preloader =======================================================================
window.onload = function () {
	document.body.classList.add('loaded__hiding');
	window.setTimeout(function () {
		document.body.classList.add('loaded');
		document.body.classList.remove('loaded__hiding');
	}, 1000);
};

// Class for benefits section & his instances======================================
class BenefitCard {
	constructor(src, alt, title, text, parentSelector) {
		this.src = src;
		this.alt = alt;
		this.title = title;
		this.text = text;
		this.parent = document.querySelector(parentSelector);
	}

	render() {
		const el = document.createElement('div');
		el.classList.add('benefits__item');

		el.innerHTML = `
			<div class="benefits__col col-benefits">
				<img src=${this.src} alt=${this.alt} class="col-benefits__img">
			</div>
			<div class="benefits__col benefits__col_text">
				<h2 class="benefits__title section__title">${this.title}</h2>
				<p class="benefits__text section__text">${this.text}</p>
			</div>
		`;

		this.parent.append(el);
	}
}

new BenefitCard(
	'img/benefits/01.jpg',
	'feast',
	'Cabin Activities',
	'Don’t worry to get bored easily in our cabin. We have so many cabin activities for you to do it alone or with group. Maybe this is the best chance for you to make new friends or even a lover.',
	'.benefits__content'
).render();

new BenefitCard(
	'img/benefits/02.jpg',
	'food',
	'100% Organic Food',
	'We served 100% organic, low process and delicious food. We allow our guest to have breakfast or dinner request.What ever made your taste buds happy.',
	'.benefits__content'
).render();

// Class for reservation section & his instances===================================
class ReservationCard {
	constructor(src, alt, title, text, link, parentSelector) {
		this.src = src;
		this.alt = alt;
		this.title = title;
		this.text = text;
		this.link = link;
		this.parent = document.querySelector(parentSelector);
	}

	render() {
		const el = document.createElement('div');
		el.classList.add('reservation__col', 'col-reservation');

		el.innerHTML = `
			<div class="reservation__img">
			<img src=${this.src} alt=${this.alt}>
			</div>
			<h3 class="reservation__sub-title section__title">${this.title}</h3>
			<p class="reservation__text col-reservation__text section__text">${this.text}</p>
			<a href=${this.link} class="reservation__link col-reservation__link">Learn more <span class="_icon-arrow-link"></span></a>
		`;

		this.parent.append(el);
	}
}

new ReservationCard(
	'img/reservation/01.jpg',
	'reservation',
	'Single Room',
	'Best for a brave lone wolf who need comfort and quiet quality time, but you still have a chance to meet others.',
	'#',
	'.reservation__item_bottom'
).render();

new ReservationCard(
	'img/reservation/02.jpg',
	'reservation',
	'Double Room',
	'Best for couple, seek happiness in intimacy without worry of being disturbed. Feel the whole world just for you two.',
	'#',
	'.reservation__item_bottom'
).render();

new ReservationCard(
	'img/reservation/03.jpg',
	'reservation',
	'Cootage',
	'Best for family or group. One cootage can fit up to 5 people. Made stronger bond with your family or friends.',
	'#',
	'.reservation__item_bottom'
).render();