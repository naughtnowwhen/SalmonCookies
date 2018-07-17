'use strict';

// 1st and Pike	23	65	6.3
// SeaTac Airport	3	24	1.2
// Seattle Center	11	38	3.7
// Capitol Hill	20	38	2.3
// Alki	2	16	4.6


//Do i define these vars globally or inside the object?
// var minEstimate = 23;


var pikeLocation = {
  minCustomer: 23,
  maxCustomer: 65,
  avgEat: 6.3,

  pikeCustomerPerHour : [],
  pikeCookieAmountPerHour : [],
  pikeCookieTotal : 0,

  pikeRandomCustAmount: function (){
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)
     + this.minCustomer);
  },
};

// example 
// function Store (storeName, customerPerHour, cookiesPerHour, totalCookies) {
//   this.storeName = storeName;
//   this.customerPerHour = customerPerHour;
//   this.cookiesPerHour = cookiesPerHour;
//   this.totalCookies = totalCookies;
//    allOf.push(this);
// }

function Store (storeName, minCustomer, maxCustomer, avgEat) {
  this.storeName = storeName;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;

  this.avgEat = avgEat;
}
Store.prototype.RandomCustAmount = function() {
  return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)
     + this.minCustomer);  
};


for (var i = 0; i < 14; i++) {
  pikeLocation.pikeCustomerPerHour.push(pikeLocation.pikeRandomCustAmount()) &&
  pikeLocation.pikeCookieAmountPerHour.push(Math.floor(pikeLocation.pikeRandomCustAmount() * pikeLocation.avgEat)) && pikeLocation.pikeCookieTotal.push(pikeLocation.pikeCookieAmountPerHour[i]);
}

// var ulEl = document.createElement('ul');
// for (i = 0; i < 14; i++) {
//   var liEl = document.createElement('li');
//   liEl.textContent = pikeLocation.pikeCustomerPerHour[i];

//   ulEl.appendChild(liEl);

//   console.log(ulEl);

var ulEl = document.createElement('ul');
var element = document.createElement('div1');

// for (var j = 0; j < 3;j++ ){
// want to iterate through j 3 times so automate this create text on html for my custperhour cookies per hour and total cookies
for (i = 0; i < 14; i++) {
  var liEl = document.createElement('li');
//   var nodePikeCustomerPerHour = document.createTextNode(pikeLocation.pikeCustomerPerHour[i]);
  ulEl.appendChild(liEl);
  liEl.appendChild(nodePikeCustomerPerHour);
  var nodePikeCookiesPerHourTextArr = [];
  var nodePikeCookiesPerHourText = document.createTextNode(pikeLocation.pikeCookieTotal[i]);
  liEl.appendChild(nodePikeCookiesPerHourText);

//   element.appendChild(liEl);
  console.log(ulEl);
}


