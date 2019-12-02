const btn = document.getElementById("basic-btn");
const data = 100; 
btn.addEventListener = ('click') () => {
   console.log(data)
}
//   localStorage.setItem("data", data);
//  window.document.location = "./HTML/faktura.html";
// // });

// //Andra js fil: (koppla den till andra sida till ex.till tillexfaktura.html sidan)
// function ShowData() {
//     const div = document.querySelector(".divfaktura")

//     div.innerHTML = localStorage.getItem("data");
// }

// //DOMContentLoaded event väntar tills documentet laddas upp helt sedan anropar //functionen inuti den
// document.addEventListener("DOMContentLoaded", function () {
//     ShowData();
// })



// --KNAPP SOM RÄKNAR -- //

// <input type="number" name="" id="produkt" placeholder="Ange produktpris">
// <input type="number" name="" id="moms" placeholder="Ange moms procent">
// <button class="rakna">Räkna</button> 









// //gör en funktion som räknar moms
// function räknaMoms(varupris) {
//     let totalt = varupris + (varupris * .25);
//     console.log(totalt);
//     return totalt;
// }

// function () {
//     const orderBasic = document.getElementById('basic-btn');
//     orderBasic.forEach(function (btn)){
//         btn.addEventListener('click', event) {

//         });

/*
const selectService = document.selectElementById('basic-btn');
        btn.addEventListener('click', basicWebb);
{

function addToCart() {
    let node = document.createElement("LI");
    let textnode = document.createTextNode("Webbhotel Bas" "3 webbsidor", "20GB lagring", "2 e-postadresser"
   "1 domännamn", "Veckovis backup");
    node.appendChild(textnode);
    document.getElementById("orderlist").appendChild(node);



 */

// (function () {

//     const cartInfo = document.getElementById('cart-info');
//     const cart = document.getElementById('cart');

//     cartInfo.addEventListener('click', function () {
//         cart.cartList.toggle('show-cart');
//     });
// }

// // Lägg till varor i korgen
// function () {
//     const cartBtn = document.querySelectorAll('.orderbutton');
//     cartBtn.forEach(function (btn)){
//         btn.addEventListener('click', event) {
//             if (event.target.parentElement.classList.contains('orderbutton')) { let fullpath; }
//             items.forEach(function (item)){
//                 total.push(parseInt(item, textContent));

//             }
//         };
//         const totalPrice = total.reduce(function (total, item)){
//             total += item;
//         return total;
//     }

//     //skriv ut den totala kostnaden kolla klasser och id
// }
// const finalMoney = totalMoney.toFixed(2);
// document.getElementById('cart-total').textContent = finalMoney;
// document.getElementById('.item-total').textContent = finalMoney;

// document.getElementById('item-count').textContent = total.length;

// // visa totala priset
// function showTotals() {
//     const total = [];
//     const items = document.querySelectorAll('cart-item-price');

// }

// //Navbar toggle//

// function classToggle() {
//     const navs = document.querySelectorAll('.Navbar__Items')

//     navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
// }

// document.querySelector('.Navbar__Link-toggle')
//     .addEventListener('click', classToggle);

// }

// //Diverse använbart
// window.document.location = "./HTML/faktura.html";

// //Passera data till olika html och js filer:
// //Första js fil: Koppla den till index.html sidan
// const btn = document.querySelector(".rakna");
// const data = 100;

// btn.addEventListener("click", () => {
//     console.log(data)
//     localStorage.setItem("data", data);
//     window.document.location = "./HTML/faktura.html";
// })

// //Andra js fil: (koppla den till andra sida till ex.till tillexfaktura.html sidan)
// function ShowData() {
//     const div = document.querySelector(".divfaktura")

//     div.innerHTML = localStorage.getItem("data");
// }

// //DOMContentLoaded event väntar tills documentet laddas upp helt sedan anropar //functionen inuti den
// document.addEventListener("DOMContentLoaded", function () {
//     ShowData();
// })

// //gör en funktion som räknar moms
// function räknaMoms(varupris) {
//     let totalt = varupris + (varupris * .25);
//     console.log(totalt);
//     return totalt;
// }

// let firstProdut = räknaMoms(2000);
// let secondProdukt = räknaMoms(3000);

// console.log("totalt kontnaden blir " + (firstProdut + secondProdukt))
//     //visa totalt kostnad dvs lägg till momsen i priset av varan

// //Öppna sida med varor
// function showChoices() {
//     window.open("/HTML/kassa.html");
