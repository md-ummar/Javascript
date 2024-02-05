// data type conversion;

let score = true;

let number = Number(score);

//console.log(typeof score);

//conversion of sstring to number examples;

number = Number(score);

console.log(number); // NaN not a number;

/* 
if the "33abc" => NaN
"hitesh"=> NaN
null=> 0

*/

//let result = 1;

//let isResult = Boolean(result);

//console.log(isResult);

//Comparisions to avoid:
//null >= 0;
//null == 0;
//null>0;

//undefined >=0;
//undefined == 0;

// NOTE: equality check operators and comparisions operators work differently;

// === strick check --> used to strick check the datatypes without converting. Datatypes should be same;


//Return type of datatypes:
/* number --> Number
boolean --> Boolean
string --> String
null --> object
function --> object function */