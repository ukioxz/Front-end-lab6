(async () => {
let response = await fetch('https://randomuser.me/api');

let text = await response.json(); // прочитать тело ответа как текст
let info1 = await text.results[0];
let infoCity = await text.results[0].location.city;
let infoPostcode = await text.results[0].location.postcode;
let infoCell = await text.results[0].cell;
let infoName = await text.results[0].name.first;
console.log(text);
console.log(info1);
console.log(infoCity);
console.log(infoPostcode);
console.log(infoCell);
console.log(infoName);
})();
