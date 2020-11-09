// !Меняем бэкграунд body 
class Img {
	constructor(imgLink, city) {
		this.imgLink = imgLink;
		this.city = city;
	}
}
let imgObj = new Img("Edinburg.jpg", "Edinburg");
let imgObj1 = new Img("Lester.jpeg", "Lester");
let imgObj2 = new Img("Liverpool.jpg", "Liverpool");
let imgObj3 = new Img("Manchester.jpg", "Manchester");
let imgObj4 = new Img("London.jpg", "London");

let img = document.querySelector(".bgImg img");
let imgCity = document.querySelector(".bgImgCity");
let imgLinks = [imgObj, imgObj1, imgObj2, imgObj3, imgObj4];

let a = 0;

setInterval(function () {
	if (a == imgLinks.length) {
		a = 0;
	}
	img.src = "img/bgImg/" + imgLinks[a].imgLink;
	imgCity.textContent = imgLinks[a].city;
	a++;
}, 10000)