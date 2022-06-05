//if 3 then fizz
//if 5 then buzz
// if 15 then fizzbuzz

function fizzBuzzConverter(number) {
    if (isDivisibleBy(number, 5) && isDivisibleBy(number, 3)) {
        return "fizzbuzz"
    } else if (isDivisibleBy(number, 3)) {
        return "fizz"
    } else if (isDivisibleBy(number, 5)) {
        return "buzz"
    } else {
        return number
    }
}

function isDivisibleBy(larger, small) {
    return (larger % small === 0)
}

console.log(fizzBuzzConverter(6))
console.log(fizzBuzzConverter(10))
console.log(fizzBuzzConverter(45))