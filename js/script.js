let vocabulary = {
	car: 'Машина',
	cloud: 'Облако',
	flower: 'Цветок',
	fire: 'Огонь',
	water: 'Вода',
};


let obj = {
	word: 'Hello',
	rightWord: 'Привет',
	arrayWord: ['Привет', 'Пока', 'Утро', 'Ад', 'Мозг'],
};

let obj1 = {
	word: 'Cat',
	rightWord: 'Кошка',
	arrayWord: ['Собака', 'Кролик', 'Кошка', 'Машина', 'Дом'],
};

let obj2 = {
	word: 'House',
	rightWord: 'Дом',
	arrayWord: ['Квартира', 'Книга', 'Дом', 'Эволюция', 'Объект'],
};

let obj3 = {
	word: 'Book',
	rightWord: 'Книга',
	arrayWord: ['Мешок', 'Мышь', 'Кошка', 'Книга', 'Журнал'],
};

let obj4 = {
	word: 'Game',
	rightWord: 'Игра',
	arrayWord: ['Радость', 'Веселье', 'Число', 'Проиграть', 'Игра'],
};


let buttons = document.querySelector('.nav__links');

let game1 = document.querySelector('.game__first');
let game2 = document.querySelector('.game__second');

let item = document.querySelector('.items');
let items__answer = document.querySelectorAll('.item__answer');

let start = document.querySelector('.start__btn');
let stop = document.querySelector('.exit__btn');

/*
btn1.addEventListener('click', function (evt) {
	evt.preventDefault();

	game1.classList.remove('hide');
})

let c = 0;
start.addEventListener('click', function (evt) {
	evt.preventDefault();
	if (game2.classList.contains('unvisible__block')) {

		for (var i = 0; i < items.length; i++) {
			items[i].classList.add('unvisible__block');
		}
		items__answer[c].classList.remove('unvisible__block');
	} else {

		table.classList.add('unvisible__block');
		game2.classList.remove('unvisible__block');
		questions.classList.remove('unvisible__block');
	}
	stop.classList.add('unvisible__block');
	start.classList.add('unvisible__block');
})



let itemTexts = document.querySelectorAll('.item__answer .text');
let itemInpsText = document.querySelectorAll('.item__answer .inp__text');
let itemSubmits = document.querySelectorAll('.inp__access');
let n = 0;


for (var j = 0; j < itemSubmits.length; j++) {
	itemSubmits[j].addEventListener('click', function () {
		let itemText = itemTexts[n];
		let text = itemText.getAttribute('data-answer');


		let itemInpText = itemInpsText[n].value;
		check(text, itemInpText);

	})
}

let arrayOfErrors = [];
let check = function (eng, rus) {
	if (rus == '') {
		itemInpsText[n].placeholder = 'Введите слово!';
		return 0;
	}

	if (rus == vocabulary[eng]) {
		items[c].classList.add('right');
		items__answer[c].classList.add('right');
		setTimeout(function () {
			items__answer[c].classList.remove('right');
			checkpoint();
		}, 1000);
	} else {
		arrayOfErrors.push(items[c]);
		items[c].classList.add('wrong');
		items__answer[c].classList.add('wrong');
		setTimeout(function () {
			items__answer[c].classList.remove('wrong');
			checkpoint();
		}, 1000);
	}
}

let checkpoint = function () {
	if (c < 4) {
		items__answer[c].classList.add('unvisible__block');
		c++;
		n++;
		items__answer[c].classList.remove('unvisible__block');
	} else {
		start.classList.remove('unvisible__block');
		items__answer[c].classList.add('unvisible__block');
		for (var i = 0; i < items__answer.length; i++) {
			items[i].classList.remove('unvisible__block');
			itemInpsText[i].value = '';
		}
		stop.classList.remove('unvisible__block');
		c = 0;
		n = 0;
	}

}
/*

let word = document.querySelector('.word');
let answers = document.querySelectorAll('.block');
let questions = document.querySelector('.questions');

let table = document.querySelector('table');
let th = table.querySelectorAll('th');
let td = table.querySelectorAll('td');

let arrayObj = [obj, obj1, obj2, obj3, obj4];
let count = 1;
let num = 0;


btn2.addEventListener('click', function (evt) {
	evt.preventDefault();
	if (!table.classList.contains('unvisible__block')) {
		table.classList.add('unvisible__block');
		questions.classList.remove('unvisible__block');
	}
	game2.classList.remove('unvisible__block')
	buttons.classList.add('unvisible__block');
})


for (var j = 0; j < answers.length; j++) {
	answers[j].addEventListener('click', function (evt) {
		evt.preventDefault();
		checkGame(this.textContent);
		if (count > 4) {
			questions.classList.add('unvisible__block');
			table.classList.remove('unvisible__block');
			start.classList.remove('unvisible__block');
			stop.classList.remove('unvisible__block');

			count = 0;
			num = 0;
		}
		word.textContent = arrayObj[count].word;
		for (var i = 0; i < answers.length; i++) {
			answers[i].textContent = arrayObj[count].arrayWord[i];
		}
		console.log(count);
		count++;
		return 0;
	})
}

let checkGame = function (text) {
	if (text == arrayObj[num].rightWord) {
		th[num].classList.add('right__bg');
		td[num].classList.add('right__bg');
	} else {
		th[num].classList.add('wrong__bg');
		td[num].classList.add('wrong__bg');
	}
	num++;
}


stop.addEventListener('click', function () {
	if (game1.classList.contains('unvisible__block')) {
		game2.classList.add('unvisible__block');
	} else {
		game1.classList.add('unvisible__block');
	}
	start.classList.add('unvisible__block');
	buttons.classList.remove('unvisible__block');
	stop.classList.add('unvisible__block');
})

*/


