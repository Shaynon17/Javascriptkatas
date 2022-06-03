function add(x, y) {
    return x + y;
}


test('add will sum together two numbers', function (assert) {
    let result = add(1, 2)
    assert.equal(result, 3);
});

function sub(x, y) {
    return x - y;
}

test('sub will subtract a from b', function (assert) {
    let result = sub(4, 2)
    assert.equal(result, 2);
});

test('sub will subtract a from b with different numbers', function (assert) {
    let result = sub(15, 2)
    assert.equal(result, 13);
});

function helloThere(name) {
    return "hello " + name;
}

test('helloThere will prepend hello to the name', function (assert) {
    let result = helloThere("steve")
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


//test('fizzbuzz(1) will return 1', function (assert) {
//let result = fizzbuzz(1)
//assert.equal(result, 1);
//});

let f = 2
console.log(f)