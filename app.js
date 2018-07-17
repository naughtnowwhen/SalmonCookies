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
  pikeCookieTotal : [],

  pikeRandomCustAmount: function (){
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)
     + this.minCustomer);
  },
};


for (var i = 0; i < 14; i++) {
  pikeLocation.pikeCustomerPerHour.push(pikeLocation.pikeRandomCustAmount()) &&
  pikeLocation.pikeCookieAmountPerHour.push(Math.floor(pikeLocation.pikeRandomCustAmount() * pikeLocation.avgEat)) && pikeLocation.pikeCookieTotal.push(pikeLocation.pikeCookieAmountPerHour[i]);
}

var ulEl = document.createElement('ul');
for (i = 0; i < 14; i++) {
  var liEl = document.createElement('li');
  liEl.textContent = pikeLocation.pikeCustomerPerHour[i];
  ulEl.appendChild(liEl);

  //example from w3 that works
  var para = document.createElement("p");
  var node = document.createTextNode(pikeLocation.pikeCustomerPerHour[i]);
  para.appendChild(node);
  var element = document.getElementById("div1");
  element.appendChild(para);
  
// 
}

// var ulEl = document.createElement('ul');

// for(var i = 0; i < months.length; i++) {
//   var liEl = document.createElement('li');
//   liEl.textContent = months[i];
//   ulEl.appendChild(liEl);
// }




// for (var j = 0; j < 14; j++) {
//   pikeLocation.pikeCookieAmountPerHour.push(Math.floor(pikeLocation.pikeRandomCustAmount() * pikeLocation.avgEat))
// }




// for (var j = 0; j < pikeLocation.pikeCookieAmountPerHour; j++) {
//   pikeLocation.pikeTime[j] * pikeLocation.avgEat;
// }





// var pikeRandomCustAmount = function (minCustomer, maxCustomer){
//   return Math.floor(Math.random() * (maxCustomer - minCustomer)
//      + minCustomer);
// };
// var minCustomer = 23;
// var maxCustomer =  65;

// var x = 12;
// pikeRandomCustAmount
