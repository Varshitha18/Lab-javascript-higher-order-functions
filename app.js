const foods = [pizza, burger, fingerChips, donuts, springRoll];

var modifiedfoods = foods.slice(1, 3);
console.log(modifiedfoods);

modifiedfoods = foods.splice(2, 0, "noodles", "icecream");
console.log(modifiedfoods);

const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
function isEven(num) {
    return !(num & 1);
}
var even = numberArray.filter(isEven);
console.log(even);

function isPrime(num) {
    if (num == 2 || num == 3)
        return true;
    var i = 2;
    while (i * i <= num) {
        if (num % i == 0)
            return true;
        i += 1
    }
    return false;
}
var prime = numberArray.filter(isPrime);
console.log(prime);

function nonPrime(numberArray) {
    var ans = [];
    numberArray.forEach(num => {if (! isPrime(num)) 
        ans.push(num); });
    return ans;
}
console.log(nonPrime(numberArray));

isEven = (n) => n % 2 == 0;

function findSquareOfNumbers(num) {
    return num * num;
}
var myArray = [11, 34, 20, 5, 53, 16];
console.log(myArray.map(findSquareOfNumbers));

var myArray = [2, 3, 5, 10];
var mul = myArray.reduce(function(initial, num) {
    return initial * num;
});
console.log(mul);