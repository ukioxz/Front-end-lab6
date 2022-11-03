let containerUsers = document.getElementById('container');
let btnClick = document.querySelector('.container2');

btnClick.addEventListener('click', () => {
	containerUsers.style.visibility = 'visible';
	user1();
	user2();
	user3();
	user4();
	user5();
});

async function user1() {
	let response = await fetch('https://randomuser.me/api');

	let text = await response.json();
	let info1 = await text.results[0];
	let infoImg = await text.results[0].picture.large;
	let infoCity = await text.results[0].location.city;
	let infoPostcode = await text.results[0].location.postcode;
	let infoEmail = await text.results[0].email;
	let infoCoor = await text.results[0].location.coordinates.latitude;

	let elImg = document.getElementById('imgAva_1').src = infoImg;
	let elCity = document.getElementById('city_1').innerHTML = infoCity;
	let elPostcode = document.getElementById('postcode_1').innerHTML = infoPostcode;
	let elEmail = document.getElementById('email_1').innerHTML = infoEmail;
	let elCoor = document.getElementById('coor_1').innerHTML = infoCoor;
}

async function user2() {
	let response = await fetch('https://randomuser.me/api');

	let text = await response.json();
	let info1 = await text.results[0];
	let infoImg = await text.results[0].picture.large;
	let infoCity = await text.results[0].location.city;
	let infoPostcode = await text.results[0].location.postcode;
	let infoEmail = await text.results[0].email;
	let infoCoor = await text.results[0].location.coordinates.latitude;

	let elImg = document.getElementById('imgAva_2').src = infoImg;
	let elCity = document.getElementById('city_2').innerHTML = infoCity;
	let elPostcode = document.getElementById('postcode_2').innerHTML = infoPostcode;
	let elEmail = document.getElementById('email_2').innerHTML = infoEmail;
	let elCoor = document.getElementById('coor_2').innerHTML = infoCoor;
}

async function user3() {
	let response = await fetch('https://randomuser.me/api');

	let text = await response.json();
	let info1 = await text.results[0];
	let infoImg = await text.results[0].picture.large;
	let infoCity = await text.results[0].location.city;
	let infoPostcode = await text.results[0].location.postcode;
	let infoEmail = await text.results[0].email;
	let infoCoor = await text.results[0].location.coordinates.latitude;

	let elImg = document.getElementById('imgAva_3').src = infoImg;
	let elCity = document.getElementById('city_3').innerHTML = infoCity;
	let elPostcode = document.getElementById('postcode_3').innerHTML = infoPostcode;
	let elEmail = document.getElementById('email_3').innerHTML = infoEmail;
	let elCoor = document.getElementById('coor_3').innerHTML = infoCoor;
}

async function user4() {
	let response = await fetch('https://randomuser.me/api');

	let text = await response.json();
	let info1 = await text.results[0];
	let infoImg = await text.results[0].picture.large;
	let infoCity = await text.results[0].location.city;
	let infoPostcode = await text.results[0].location.postcode;
	let infoEmail = await text.results[0].email;
	let infoCoor = await text.results[0].location.coordinates.latitude;

	let elImg = document.getElementById('imgAva_4').src = infoImg;
	let elCity = document.getElementById('city_4').innerHTML = infoCity;
	let elPostcode = document.getElementById('postcode_4').innerHTML = infoPostcode;
	let elEmail = document.getElementById('email_4').innerHTML = infoEmail;
	let elCoor = document.getElementById('coor_4').innerHTML = infoCoor;
}

async function user5() {
	let response = await fetch('https://randomuser.me/api');

	let text = await response.json();
	let info1 = await text.results[0];
	let infoImg = await text.results[0].picture.large;
	let infoCity = await text.results[0].location.city;
	let infoPostcode = await text.results[0].location.postcode;
	let infoEmail = await text.results[0].email;
	let infoCoor = await text.results[0].location.coordinates.latitude;

	let elImg = document.getElementById('imgAva_5').src = infoImg;
	let elCity = document.getElementById('city_5').innerHTML = infoCity;
	let elPostcode = document.getElementById('postcode_5').innerHTML = infoPostcode;
	let elEmail = document.getElementById('email_5').innerHTML = infoEmail;
	let elCoor = document.getElementById('coor_5').innerHTML = infoCoor;
}
