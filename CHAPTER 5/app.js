//CHAPTER 5

//1. Write a program that take two numbers & add them in a
//new variable. Show the result in your browser.

// var sum = 10;
// var add = 7;
// var additon = sum + add;
// document.write(`sum of ${sum} and ${add} is ${additon}  `);

//2. Repeat task1 for subtraction, multiplication, division & modulus.

// var sub = 10;
// var multiplication = 5;
// var division = 9;
// var moduls = 10;
// document.write(`subtraction of ${sub} and ${multiplication} is ${sub-multiplication} <br/> 
// multipilication of ${multiplication} and ${division} is ${multiplication * division} <br/> 
// division of ${division} and ${moduls} is ${division / moduls} <br/> 
// moduls of ${moduls} and ${multiplication} is ${moduls % multiplication} <br/>  `);

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

// var dec ;
// document.write(` Value after variable declaration is ${ dec }  <br/> `);
// var int = 5;
// document.write(`Initial value: ${int} <br/> `);
//  var dec = 6 ;
// document.write(`after increment is: ${dec} <br/>`);
// var add = 7
// var ans = dec + add
// document.write(`after addition is: ${ans} <br/>`);
// var DEC = ans - 1;
// document.write(`after decrement is: ${DEC} <br/>`);
// var remainder = DEC % 3;
// document.write(`the reminder is: ${remainder} <br/>`);


// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie.

// var ticket = 600;
// var cost = 5;
// document.write(`Total cost to buy ${cost} tickets to a Movie is ${ticket * cost}PKR `);


// 5. Write a script to display multiplication table of any
// number in your browser. E.g

// var table = 5;
// var series = 1;
// document.write(`${table} X ${series} = ${table * series} <br/>`);
// var series = 2;
// document.write(`${table} X ${series} = ${table * series} <br/>`);
// var series = 3;
// document.write(`${table} X ${series} = ${table * series} <br/>`);
// var series = 4;
// document.write(`${table} X ${series} = ${table * series} <br/>`);
// var series = 5;
// document.write(`${table} X ${series} = ${table * series} <br/>`);
// var series = 6;
// document.write(`${table} X ${series} = ${table * series} <br/>`);
// var series = 7;
// document.write(`${table} X ${series} = ${table * series} <br/>`);
// var series = 8;
// document.write(`${table} X ${series} = ${table * series} <br/>`);
// var series = 9;
// document.write(`${table} X ${series} = ${table * series} <br/>`);
// var series = 10;
// document.write(`${table} X ${series} = ${table * series} <br/>`);

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// var Celsius = 30;
// var  Fahrenheit  = (Celsius * 9/5 ) + 32;
// document.write(`${Celsius}°C is ${Fahrenheit}°F <br/>`);
// Fahrenheit = (38);
// Celsius = (Fahrenheit - 32) * 5/9;
// document.write(`${Fahrenheit}°F is ${Celsius}°C <br/>`);

//7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables.

// var ITEM_1 = 650;
// var ITEM_2 = 100;
// var QUANTITY_1 = 3;
// var QUANTITY_2 = 7;
// var CHARGES = 100;
// document.write(`Price of item one is ${ITEM_1} <br/>
// Quantity of item one is ${QUANTITY_1} <br/>
// Price of item 2 is ${ITEM_2} <br/>
// Quantity of item 2 is ${QUANTITY_2} <br/>
// Shipping charges is ${CHARGES} <br/>`);
// document.write(`Total cost of your Order is ${ITEM_1*QUANTITY_1+ITEM_2*QUANTITY_2+CHARGES}`);

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

// var total_marks = 980;
// var OBTAINED = 804;
// document.write(`Total marks ${total_marks}: <br/>
// Marks Obtaines ${OBTAINED}: <br/> Percentage ${OBTAINED / total_marks}`);

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

// var USDollar = 104.80;
// var Saudi_Riyal = 28;
// var Exchange = USDollar*10;
// var Exchange_2 = Saudi_Riyal*25;
// var ADD = Exchange + Exchange_2
//  document.write(`TOTAL CURRUNCY IN PKR:${Exchange + Exchange_2}`);

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

// var ADD = 5+5*10/2
// document.write(ADD);

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

// var current_year = 2016;
// var birth_date = 1992;
// document.write(`Current year: ${current_year} <br/> Birth Date:${birth_date} <br/> YOUR AGE IS ${current_year - birth_date}`);

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

// var radius = 20;
// var PI = 3.142;
// var Circumference =2 * PI * radius;
// document.write(`RADIUS OF CIRCLE:${radius} <br/> THE CIRCUMFERENCE IS ${Circumference} <br/>`);
// var AREA = PI * radius *radius;
// document.write(`THE AREA IS ${AREA}`);

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.

var favorite_snack = 'RIO';
var Current_AGE = 20;
var maximum_AGE = 32;
var PERDAY_AMOUNT = 5;
var remeaining_year = maximum_AGE - Current_AGE
var TOTAL_AMOUNT = remeaining_year * 365 * PERDAY_AMOUNT
document.write(`FAVORIE SNACK ${favorite_snack} <br/> 
CURRENT AGE ${Current_AGE} <br/>
ESTIMATE AGE ${maximum_AGE} <br/>
AMOUNT OF SNACK PER DAY ${PERDAY_AMOUNT} <br/> 
YOU WOULD EAT A TOTAL OF ${TOTAL_AMOUNT} ${favorite_snack} FOR THE REST OF YOUR LIFE`);