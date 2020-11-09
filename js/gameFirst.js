let themes = document.querySelectorAll(".theme");
let time = document.querySelector(".game__first__time");
let currentTheme;
let arrTheme;

let items = document.querySelectorAll('.item');
let images = document.querySelectorAll(".items img");
let textEng = document.querySelectorAll(".items .text__eng");
let textRus = document.querySelectorAll(".items .text__rus");
let curs = document.querySelectorAll(".items .curs");

let result = document.querySelector(".result");


// !Объекты типа Medicine
class Medicine {
	constructor(eng, rus, img, arr) {
		this.eng = eng;
		this.rus = rus;
		this.img = img;
		this.arr = arr;
	}
}

let med__obj1 = new Medicine("ambulance", "Скорая", "img/gameFirst/medicine/ambulance.jpg", ["Лечение", "Гепатит", "Скорая", "Больница", "Приемная"]);
let med__obj2 = new Medicine("Heart", "Cердце", "img/gameFirst/medicine/heart.jpg", ["Cердце", "Легкие", "Сосуд", "Прививка", "Глаз"]);
let med__obj3 = new Medicine("patient", "Пациент", "img/gameFirst/medicine/patient.png", ["Врач", "Работник", "Терпеливый", "Заботливый", "Пациент"]);
let med__obj4 = new Medicine("Pill", "Таблетка", "img/gameFirst/medicine/pill.jpg", ["Подушка", "Таблетка", "Заболевание", "Вирус", "Очки"]);
let med__obj5 = new Medicine("Surgery", "Операция", "img/gameFirst/medicine/Surgery.jpg", ["Стол", "Скорая помощь", "Бедро", "Операция", "Кость"]);
let medArr = [med__obj1, med__obj2, med__obj3, med__obj4, med__obj5]

// !Объекты типа Education
class Education {
	constructor(eng, rus, img, arr) {
		this.eng = eng;
		this.rus = rus;
		this.img = img;
		this.arr = arr;
	}
}

let educ__obj1 = new Education("Notebook", "Тетрадь", "img/gameFirst/education/notebook.jpg", ["Книга", "Тетрадь", "Замечание", "Объект", "Кисточка"]);
let educ__obj2 = new Education("Eraser", "Ластик", "img/gameFirst/education/eraser.jpg", ["Карандаш", "Ручка", "Наушник", "Доска", "Ластик"]);
let educ__obj3 = new Education("Desk", "Стол", "img/gameFirst/education/desk.jpg", ["Стул", "Стол", "Черчение", "Декорация", "Зал"]);
let educ__obj4 = new Education("Map", "Карта", "img/gameFirst/education/map.jpg", ["Кабинет", "Глобус", "Карта", "География", "Пенал"]);
let educ__obj5 = new Education("Paint", "Краска", "img/gameFirst/education/paint.png", ["Урок", "Черчение", "Ввод", "Краска", "Деление"]);
let educArr = [educ__obj1, educ__obj2, educ__obj3, educ__obj4, educ__obj5]

class Work {
	constructor(eng, rus, img, arr) {
		this.eng = eng;
		this.rus = rus;
		this.img = img;
		this.arr = arr;
	}
}

let work__obj1 = new Work("Employer", "Работодатель", "img/gameFirst/work/employer.jpg", ["Занятой", "Фрилансер", "Налог", "Работодатель", "Свободный агент"]);
let work__obj2 = new Work("Salary", "Зарплата", "img/gameFirst/work/salary.jpg", ["Зарплата", "Вакансия", "Принятие", "Налог", "Деньги"]);
let work__obj3 = new Work("Trainee", "Стажер", "img/gameFirst/work/Trainee.jpg", ["Отдел", "Тренировка", "Стажер", "Поезд", "Легкий"]);
let work__obj4 = new Work("Opportunity", "Возможность", "img/gameFirst/work/Opportunity.jpg", ["Звонок", "Глобус", "Попытка", "Отделение", "Возможность"]);
let work__obj5 = new Work("Department ", "Отдел", "img/gameFirst/work/department.jpg", ["Отдел", "Усилие", "Действие", "Отчет", "Объект"]);
let workArr = [work__obj1, work__obj2, work__obj3, work__obj4, work__obj5]

class Transport {
	constructor(eng, rus, img, arr) {
		this.eng = eng;
		this.rus = rus;
		this.img = img;
		this.arr = arr;
	}
}

let tran__obj1 = new Transport("Balloon", "Воздушный шар", "img/gameFirst/transport/Balloon.png", ["Паром", "Воздушный шар", "Трамвай", "Средство передвижения", "Машина"]);
let tran__obj2 = new Transport("Helicopter", "Вертолет", "img/gameFirst/transport/Helicopter.png", ["Самолет", "Вертолет", "Летчик", "Вылет", "Локомотив"]);
let tran__obj3 = new Transport("Underground", "Метро", "img/gameFirst/transport/Underground.png", ["Метро", "Машинист", "Яхта", "Судно", "Машина"]);
let tran__obj4 = new Transport("Submarine", "Подводная лодка", "img/gameFirst/transport/Submarine.jpg", ["Поезд", "Велосипедист", "Автобус", "Подводная лодка", "Фургон"]);
let tran__obj5 = new Transport("Pedestrian", "Пешеход", "img/gameFirst/transport/pedestrian.png", ["Грузовик", "Пассажир", "Водитель", "Мотоциклист", "Пешеход"]);
let tranArr = [tran__obj1, tran__obj2, tran__obj3, tran__obj4, tran__obj5]

class Programming {
	constructor(eng, rus, img, arr) {
		this.eng = eng;
		this.rus = rus;
		this.img = img;
		this.arr = arr;
	}
}

let prog__obj1 = new Programming("Folder", "Папка", "img/gameFirst/programming/Folder.jpg", ["Рабочный стол", "Программа", "Язык", "Папка", "Столбец"]);
let prog__obj2 = new Programming("Property", "Свойство", "img/gameFirst/programming/Property.png", ["Исключение", "Ссылка", "Запрос", "Свойство", "Цикл"]);
let prog__obj3 = new Programming("Useless", "Бесполезный", "img/gameFirst/programming/Useless.jpg", ["Текущий", "Бесполезный", "Простой", "Точный", "Явно"]);
let prog__obj4 = new Programming("Network", "Сеть", "img/gameFirst/programming/Network.jpg", ["Поле", "Схема", "Опыт", "Сеть", "Тема"]);
let prog__obj5 = new Programming("Benefit", "Польза", "img/gameFirst/programming/benefit.png", ["Польза", "Проблема", "Цель", "Сброс", "Пакет"]);
let progArr = [prog__obj1, prog__obj2, prog__obj3, prog__obj4, prog__obj5]



let defineTheme = {
	"education": educArr,
	"medicine": medArr,
	"work": workArr,
	"transport": tranArr,
	"programming": progArr,
};


// !Выбор темы
for (let i = 0; i < themes.length; i++) {
	themes[i].addEventListener("click", function () {
		for (let j = 0; j < themes.length; j++) {
			themes[j].classList.add("hide");
		}
		this.classList.remove("hide");

		currentTheme = this.dataset.theme;
		console.log(currentTheme)

		for (let keys in defineTheme) {
			if (keys == currentTheme) {
				arrTheme = defineTheme[keys];
			}
		}
		console.log(arrTheme);

		stop.classList.remove('hide');
		start.classList.remove('hide');
	})
}


stop.addEventListener("click", function () {
	let thText = document.querySelectorAll(".td__text");
	for (let j = 0; j < themes.length; j++) {
		themes[j].classList.remove("hide");
		thText[j].classList.remove("right__bg");
		thText[j].classList.remove("wrong__bg");
	}

	result.classList.add("hide");
	this.classList.add("hide");
	start.classList.add('hide');
	document.querySelector(".game__first__title").classList.remove("hide");

})

// !Начало игры
start.addEventListener("click", function () {
	for (let j = 0; j < themes.length; j++) {
		themes[j].classList.add("hide");
	}
	stop.classList.add('hide');
	this.classList.add('hide');
	document.querySelector(".game__first__title").classList.add("hide")



	// !Заполняем карточки

	for (let i = 0; i < items.length; i++) {
		images[i].src = arrTheme[i].img;
		textEng[i].textContent = arrTheme[i].eng;
		textRus[i].textContent = arrTheme[i].rus;
	}


	let sec = 5;
	let timer = setInterval(function () {
		if (sec == 0) {
			//! Конец игры
			time.classList.add("hide");

			partOne();
			clearInterval(timer);
		}
		time.textContent = sec;
		sec--;

	}, 1000)


	time.classList.remove("hide");
	item.classList.remove("hide");
})


function partOne() {
	let questions = document.querySelector('.questions');
	let word = document.querySelector('.word');
	let wordBlocks = document.querySelectorAll('.block');

	let num = 0;
	let answers = [];

	// !Заполнение слудующих блоков
	item.classList.add("hide");
	questions.classList.remove("hide");
	word.textContent = arrTheme[num].eng;
	for (let j = 0; j < wordBlocks.length; j++) {
		wordBlocks[j].textContent = arrTheme[num].arr[j];
		//thAnswer[j].textContent = arr[j].rus;
	}


	for (let l = 0; l < wordBlocks.length; l++) {
		wordBlocks[l].addEventListener("click", function (e) {
			e.preventDefault();

			if (num == wordBlocks.length - 1) {
				answers.push(this.textContent);
				partOneResult(answers);
				num = 0;
				answers = [];
			} else {
				answers.push(this.textContent);
				num++;
				for (let k = 0; k < wordBlocks.length; k++) {
					word.textContent = arrTheme[num].eng;
					wordBlocks[k].textContent = arrTheme[num].arr[k];
				}
			}
		})
	}
}


function partOneResult(answers) {

	let thAnswer = document.querySelectorAll('.td__answer__text');
	let thText = document.querySelectorAll(".td__text");
	let thCircle = document.querySelectorAll(".td__circle");


	//  ? Проверка Слов
	for (let k = 0; k < answers.length; k++) {

		thAnswer[k].textContent = arrTheme[k].eng;
		thText[k].textContent = arrTheme[k].rus;
		thText[k].dataset.right = arrTheme[k].eng;
		if (answers[k] === arrTheme[k].rus) {
			if (thText[k].dataset.right == arrTheme[k].eng) {
				thText[k].classList.add("right__bg");
			}
		} else {
			thText[k].classList.add("wrong__bg");
		}
	}



	result.classList.remove('hide');
	document.querySelector('.questions').classList.add("hide");
	stop.classList.remove("hide")
}













