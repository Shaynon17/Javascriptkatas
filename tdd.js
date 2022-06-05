function add(x, y) {
    return x + y;
}


test('add will sum together two numbers', function (assert) {
    let result = add(1, 2);
    assert.equal(result, 3);
});

function sub(x, y) {
    return x - y;
}

test('sub will subtract a from b', function (assert) {
    let result = sub(4, 2);
    assert.equal(result, 2);
});

test('sub will subtract a from b with different numbers', function (assert) {
    let result = sub(15, 2);
    assert.equal(result, 13);
});

function helloThere(name) {
    return "hello " + name;
}

test('helloThere will prepend hello to the name', function (assert) {
    let result = helloThere("steve");
    assert.equal(result, "hello steve");
});

test('helloThere will prepend hello to any name', function (assert) {
    let result = helloThere("rooster")
    assert.equal(result, "hello rooster");
});

// test driven development  -> watch youtube/read articles
// RED -> test fails for the right reason (test is complete)
// GREEN -> you make test pass by fixing the code
// REFACTOR -> clean up the code

// cd  -> change directory
// cd Coding\Javascript

// kata practice

// fizzbuzz kata -> 
// replace numbers divisible by 3 with fizz
// replace numbers divisible by 5 with buzz
// replace numbers divisible by both 3 and 5 with fizzbuzz


// above here is correct

// need it divisble by 15. look at line 63 and 64. can i code 
//it to where the number can be divisble by 5 and 3 using 
// 2 statements and they both have to be true to execute?



/*test('fizzbuzz(15) will return "fizzbuzz"', function (assert) {
    let result =
        assert.equal(result, true)
})
*/

// below here is correct
test('isDivisbleBy(8, 3) will return false', function (assert) {
    let result = isDivisibleBy(8, 3);
    assert.equal(result, false);
});

test('fizzbuzz(1) will return 1', function (assert) {
    let result = fizzBuzzConvert(1);
    assert.equal(result, 1);
});

test('fizzbuzz(3) will return "fizz"', function (assert) {
    let result = fizzBuzzConvert(3);
    assert.equal(result, "fizz");
});

test('fizzbuzz(5) will return "buzz', function (assert) {
    let result = fizzBuzzConvert(5);
    assert.equal(result, "buzz");
})

test('fizzbuzz(6,9,12) will return "fizz"', function (assert) {
    assert.equal(fizzBuzzConvert(6), "fizz");
    assert.equal(fizzBuzzConvert(9), "fizz");
    assert.equal(fizzBuzzConvert(12), "fizz");
})


function isDivisibleBy(larger, smaller) {
    return (larger % smaller === 0)
}


function fizzBuzzConvert(number) {
    if (isDivisibleBy(number, 3) && isDivisibleBy(number, 5)) {
        return "fizzbuzz";
    } else if (isDivisibleBy(number, 3)) {
        return "fizz"
    } else if (isDivisibleBy(number, 5)) {
        return "buzz";
    } else {
        return number;
    }
}

test('fizzbuzz(15) will return "fizzbuzz"', function (assert) {
    assert.equal(fizzBuzzConvert(15), "fizzbuzz");
})
test('fizzbuzz(10) will return "buzz"', function (assert) {
    assert.equal(fizzBuzzConvert(10), "buzz");
})

//delete all but one test and redo the fizzbuzz kata