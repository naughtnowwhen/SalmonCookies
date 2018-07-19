
'use strict';

// var tbEl;

// what about storing inside an object instead?
var StoreArray = [];

var hours = ['5am','6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm','3pm','4pm','5pm', '6pm','7pm', '8pm', '9pm'];

let x = 0;
console.log(x);

//object constructor... functions hard at work!
function Store (name, min, max, avgSold){
//store object's will takes these values being constructed here.
  this.name = name;
  this.minCustomers = min;
  this.maxCustomers = max;
  this.avgSales = avgSold;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.dailyTotal = 0;
}

new Store('first store',20,100,5);


// what prototypes do we want?


// random number generator

// want to be able to inquire about values. What's a good way?
// set up an empty array that stores the info from Store.Prototype.randomNumberGenerator output
let RndNumWatcher = [];


Store.prototype.randomNumberGenerator = function () {
let RandAnswer = Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers;    
  RndNumWatcher.push(RandAnswer); return RandAnswer;
}

// display RdnNumWatcher output
console.log(RndNumWatcher);

// customers per hour --- using random generator
// Store.prototype.customersPerHour = function () {
// let     
// }



// calculate sales

// then render

// store row

// header row

//create stores


//create table

//render each store
// with a for loop through allstores.length


