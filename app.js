// 1st and Pike	23	65	6.3
// SeaTac Airport	3	24	1.2
// Seattle Center	11	38	3.7
// Capitol Hill	20	38	2.3
// Alki	2	16	4.6


//Do i define these vars globally or inside the object?
// var minEstimate = 23;


var pikeLocation = {
  minCustomer : 23,
  maxCustomer : 65,
  avgEat : 6.3,
  //   pikeRandomCustAmount : function (minCustomer, maxCustomer){
  //     return Math.round(Math.random() * (maxCustomer - minCustomer)
  //      + minCustomer);
  //   },
  //   pikeRandomCustAmount(23,75);

  pikeRandomCustAmount : function (){
    return Math.round(Math.random() * (this.maxCustomer - this.minCustomer)
     + this.minCustomer);
  },
  totalSalmonCookiespurchased : this.pikeRandomCustAmount() * this.avgEat,
};

pikeLocation.pikeRandomCustAmount();

