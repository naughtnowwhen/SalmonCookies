// 1st and Pike	23	65	6.3
// SeaTac Airport	3	24	1.2
// Seattle Center	11	38	3.7
// Capitol Hill	20	38	2.3
// Alki	2	16	4.6

var pike = {
    minCustomer : 23,
    maxCustomer : 65,
    avgEat : 6.3,
};

var pikeRand = function pikeRandom (min, max){
    // we want to be able to pass the lower and upper bounds into our function so that random number that's returned is between our bounds.
   return Math.random() * (max - min)) + min;
}

pikeRandom(23,75);
