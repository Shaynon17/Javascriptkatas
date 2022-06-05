//make a budget 
//categories: misc, ambers fun money, my fun money, groceries, eating out, 

//? how can i plug in my category numbers and get the remainder of all of the variables?
/* JavaScript doesn't support functions that return multiple values. 
However, you can wrap multiple values into an array 
or an object and return the array or the object.
Use destructuring assignment syntax to unpack values from the array,
 or properties from objects. */

let netWorth = 1000
let misc = 80
let ambersFunMoney = 25
let myFunMoney = 25
let groceries = 100



function bankBalance(netWorth) {
    return (netWorth - misc - ambersFunMoney - myFunMoney - groceries)
}

/* function myFunMoneyBalance(myFunMoney) {

}
*/

console.log(bankBalance(1000))