// math abslate

var number = -5;

var babu = Math.abs(number);
// console.log(babu);


// math.ceil

var number = 6.5;

var babu = Math.ceil(number);
// console.log(babu);

// math.floor

var number = 6.5;

var babu = Math.floor(number);
// console.log(babu);



// math.round

var number = 6.45;

var babu = Math.round(number);
// console.log(babu);


var number = 6.55;

var babu = Math.round(number);
// console.log(babu);

// math.random



var babu = Math.random() * 10;
// if you need use round its optional
var kk = Math.round(babu);
// console.log(kk);


// swap
var first = 1;
var second = 2;
// console.log(first, second);

var third = first;

first = second;
second = third;
// console.log(first, second);


// maximum variable
var babu = 100;
var sogir = 200;
var shahid = 300;
var big = Math.max(babu, sogir, shahid);

// console.log(big);

// maximum function

function munna(sogir, shahid) {
    if (sogir > shahid) {
        return sogir;
    } else { return shahid }
};
var kk = munna(100, 200);
// console.log(kk);



// array sum by variable
var babu = [100, 200, 300, 400];

var sum = 0;

for (i = 0; i < babu.length; i++) {
    var munna = babu[i];

    sum = sum + munna;
}
// console.log(sum);



// array sum by function

function arap(arapat) {
    var sum = 0;
    for (i = 0; i < arapat.length; i++) {
        var munna = arapat[i];

        sum = sum + munna;
    }
    return sum;

}
var kk = [100, 200, 300, 400];
var total = arap(kk);
// console.log(total);



// big element in the array

function arap(arapat) {
    var sum = 0;
    for (i = 0; i < arapat.length; i++) {
        var munna = arapat[i];

        if (sum > munna) {
            munna = sum
        }
    }
    return munna;

}
var kk = [100, 200, 300, 400];
var big = arap(kk);
console.log(big);