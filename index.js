(async () => {
let response = await fetch('https://randomuser.me/api');

let text = await response.json();
let info1 = await text.results[0];
let infoImg = await text.results[0].picture.large;
let infoCity = await text.results[0].location.city;
let infoPostcode = await text.results[0].location.postcode;
let infoCell = await text.results[0].cell;
let infoName = await text.results[0].name.first;
/*console.log(text);
console.log(info1);
console.log(infoImg);
console.log(infoCity);
console.log(infoPostcode);
console.log(infoCell);
console.log(infoName);*/

let elImg = document.getElementById('imgAva_1').src = infoImg;
let elCity = document.getElementById('city_1').innerHTML = infoCity;
let elPostcode = document.getElementById('postcode_1').innerHTML = infoPostcode;
let elCell = document.getElementById('cell_1').innerHTML = infoCell;
let elName = document.getElementById('name_1').innerHTML = infoName;
})();

(async () => {
let response = await fetch('https://randomuser.me/api');

let text = await response.json();
let info1 = await text.results[0];
let infoImg = await text.results[0].picture.large;
let infoCity = await text.results[0].location.city;
let infoPostcode = await text.results[0].location.postcode;
let infoCell = await text.results[0].cell;
let infoName = await text.results[0].name.first;

let elImg = document.getElementById('imgAva_2').src = infoImg;
let elCity = document.getElementById('city_2').innerHTML = infoCity;
let elPostcode = document.getElementById('postcode_2').innerHTML = infoPostcode;
let elCell = document.getElementById('cell_2').innerHTML = infoCell;
let elName = document.getElementById('name_2').innerHTML = infoName;
})();

(async () => {
let response = await fetch('https://randomuser.me/api');

let text = await response.json();
let info1 = await text.results[0];
let infoImg = await text.results[0].picture.large;
let infoCity = await text.results[0].location.city;
let infoPostcode = await text.results[0].location.postcode;
let infoCell = await text.results[0].cell;
let infoName = await text.results[0].name.first;

let elImg = document.getElementById('imgAva_3').src = infoImg;
let elCity = document.getElementById('city_3').innerHTML = infoCity;
let elPostcode = document.getElementById('postcode_3').innerHTML = infoPostcode;
let elCell = document.getElementById('cell_3').innerHTML = infoCell;
let elName = document.getElementById('name_3').innerHTML = infoName;
})();

(async () => {
let response = await fetch('https://randomuser.me/api');

let text = await response.json();
let info1 = await text.results[0];
let infoImg = await text.results[0].picture.large;
let infoCity = await text.results[0].location.city;
let infoPostcode = await text.results[0].location.postcode;
let infoCell = await text.results[0].cell;
let infoName = await text.results[0].name.first;

let elImg = document.getElementById('imgAva_4').src = infoImg;
let elCity = document.getElementById('city_4').innerHTML = infoCity;
let elPostcode = document.getElementById('postcode_4').innerHTML = infoPostcode;
let elCell = document.getElementById('cell_4').innerHTML = infoCell;
let elName = document.getElementById('name_4').innerHTML = infoName;
})();

(async () => {
let response = await fetch('https://randomuser.me/api');

let text = await response.json();
let info1 = await text.results[0];
let infoImg = await text.results[0].picture.large;
let infoCity = await text.results[0].location.city;
let infoPostcode = await text.results[0].location.postcode;
let infoCell = await text.results[0].cell;
let infoName = await text.results[0].name.first;

let elImg = document.getElementById('imgAva_5').src = infoImg;
let elCity = document.getElementById('city_5').innerHTML = infoCity;
let elPostcode = document.getElementById('postcode_5').innerHTML = infoPostcode;
let elCell = document.getElementById('cell_5').innerHTML = infoCell;
let elName = document.getElementById('name_5').innerHTML = infoName;
})();
