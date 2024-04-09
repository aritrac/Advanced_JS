//Here JS does 1 + "2" which is "12", and then does "12" + 3 which is "123"
console.log("JS Type Coersion : " , 1 + "2" + 3);

//Here since both are numbers, there is no type coersion and we get the output as 4 as expected
console.log("JS No Type Coersion : " , 2 + 2);

//Here is one more example of type coersion. Both values are different, one is a number and other is a string, but still type coersion, makes both a string, and then JS equates them
console.log("JS Type Coersion again : " , 5 == "5");

