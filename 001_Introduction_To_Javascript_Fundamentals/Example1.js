//Here JS does 1 + "2" which is "12", and then does "12" + 3 which is "123"
console.log("JS Type Coersion : " , 1 + "2" + 3);

//Here since both are numbers, there is no type coersion and we get the output as 4 as expected
console.log("JS No Type Coersion : " , 2 + 2);

//Here is one more example of type coersion. Both values are different, one is a number and other is a string, but still type coersion, makes both a string, and then JS equates them
console.log("JS Type Coersion again : " , 5 == "5");

//Another example of type coersion
console.log("Hello" + "World!");

console.log(typeof NaN); //outputs number

//The significance of == operator for equality
console.log("The significance of == operator for equality");
console.log("10" == 10); //true, because of type coersion
console.log("10" === 10); //false, because types are different, using the strict equality operator

//The Return value of typeof null
console.log("The Return Value of typeof null");
//null is an object in JS which is considered a bug from early days of javascript
console.log(typeof null); //This prints object
console.log(typeof undefined); //This prints undefined

let notDefined;
console.log(notDefined); //prints undefined
console.log(null === undefined); //prints false
console.log(null == undefined); //prints true due to type coersion

//Distinguishing between null and undefined
//null is an assignment value that means "no value", while undefined means a variable has been declared but not assigned a value yet
console.log("Distinguishing between null and undefined")
let a;
console.log(a); //prints undefined
console.log(null); //prints null

//Spreading a Set into an Array
console.log("Spreading a Set into an Array");
const mySet = new Set([1,2,3]);
const myArray = [...mySet];
console.log(myArray); //output: [1,2,3]

//Example1: Basic Spreading of a Set
console.log("Example1: Basic Spreading of a Set")
const numberSet = new Set([1,2,3,4,5]);
const numberArray = [...numberSet];
console.log(numberArray); //Output: [1,2,3,4,5]

//Example2: Combining Two Sets into One Array
console.log("Example2: Combining Two Sets into One Array")
const set1 = new Set([1,2,3]);
const set2 = new Set([3,4,5]);
const combinedArray = [...set1, ...set2];
console.log(combinedArray);

//Example3: Using Set to Remove Duplicates from an Array then Spreading into a New Array
console.log("Example3: Using Set to Remove Duplicates from an Array then Spreading into a New Array");
const arrayWithDuplicates = [1,2,2,3,4,4,5];
const uniqueArray = [...new Set(arrayWithDuplicates)]; //creating a Set, removes the duplicates, and then spreading it back will give me 
//an array of unique elements
console.log(uniqueArray); //Output: [1,2,3,4,5]

//Concept of Hoisting in Javascript
console.log("Concept of Hoisting in Javascript");
//The concept of hoisting in Javascript refers to the behaviour where variable and function declarations are moved to the top of their
//containing scope before code execution. This means that variables and functions can be referenced before they are declared in the code.
//It's important to note that only declarations are hoisted, not initializations.
console.log(x); //output: undefined due to hoisting of variable declaration to the top and then using that in the console.log
var x = 5;

//Example1: Function hoisting
console.log("Example1: Function hoisting");
//In this example, the greet function is called before it is declared. Due to function hoisting,
//JS moves the declaration to the top during the compilation phase, making this call valid

//calling the function before its declaration
greet();

//function declaration
function greet(){
    console.log("Hello, world!");
}
//Output: Hello, world!

//Example2: Variable hoisting with var
console.log("Example2: Variable hoisting with var");
//Variable declarations(but not initializations) using var are hoisted to the top of their scope, which can lead to
//unexpected results.
console.log(message); //Output: undefined

var message = "Hoisting is here!";
//The above code behaves as if written like this:
//var message;
//console.log(message);
//message = "Hoisting is here!";

//Example3: Hoisting limitations with let and const
console.log("Example3: Hoisting limitations with let and const");
//Even though let and const declarations are hoisted, trying to access name before its declaration throws a ReferenceError
//because let and const variables are in a TDZ(Temporal Dead Zone) until their declaration is evaluated
//console.log(name);
//let name = 'Javascript';

//The role of the void operator
console.log("The role of the void operator");
//The void operator evaluates an expression and then returns undefined. This can be useful in scenarios
//where you need to ensure no value is returned

void function(){
    console.log("This will run, but return undefined");
}

console.log(void(0)); //This will output undefined

console.log("Rounding a Number to two decimal places");
console.log("Example1: Using toFixed() to round a number");

const number = 2.34567;
const rounded = number.toFixed(2);
console.log(rounded); //Output: 2.35

//Rounding the above string back to a number
const roundedNumber1 = parseFloat(number.toFixed(2));
console.log(roundedNumber1); //Output: 2.35

const roundedNumber2 = Number(number.toFixed(2));
console.log(roundedNumber2); //Output: 2.35

