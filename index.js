(async () => {
let response = await fetch('https://randomuser.me/api');

let text = await response.json();
let info1 = await text.results[0];
let infoImg = await text.results[0].picture.large;
let infoCity = await text.results[0].location.city;
let infoPostcode = await text.results[0].location.postcode;
let infoCell = await text.results[0].cell;
let infoName = await text.results[0].name.first;
console.log(text);
console.log(info1);
console.log(infoImg);
console.log(infoCity);
console.log(infoPostcode);
console.log(infoCell);
console.log(infoName);

let elImg = document.getElementById('imgAva').src = infoImg;
let elCity = document.getElementById('city').innerHTML = infoCity;
let elPostcode = document.getElementById('postcode').innerHTML = infoPostcode;
let elCell = document.getElementById('cell').innerHTML = infoCell;
let elName = document.getElementById('name').innerHTML = infoName;
})();
