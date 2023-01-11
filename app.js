document.write(` <h1> Arrays & Loop </h1>`);
let array = [
    [0,1,2,0 ],
    [1,0,1,2],
    [2,1,0,1],
   
];
document.write(array);

document.write(` <h1> next question </h1>`);

for (var input = 1; input <= 10; input++) {
    document.write( '<br>',input);
   }

   document.write(` <h1>  question 4 </h1>`);
   
   var num = prompt("Enter the number for multiplication table:");
   var len = prompt("Enter the length of the multiplication table:");
   
   document.write("Multiplication table of " + num + "<br>");
   document.write("Length " + len + "<br>");
   for (var i = 1; i <= len; i++) {
       document.write(num + " x " + i + " = " + (num * i) + "<br>");
   }
   
   document.write(` <h1>  question 5 </h1>`);
   fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
}


document.write(` <h1>  question 6 </h1>`);
document.write("Counting: ");
for (var i = 1; i <= 15; i++) {
    document.write(i + ", " );
}
document.write(' <br>Reverse counting: ');
for (var i = 10; i >= 1; i--) {
    document.write(i + ", ");
}
document.write('<br>Even: ');
for (var i = 0; i <= 20; i+=2) {
    document.write(i + ", ");
}
document.write('<br>Odd:'  );
for (var i = 1; i <= 19; i+=2) {
    document.write(i + ", ");
}
document.write('<br>Series: ');
for (var i = 2; i <= 20; i+=2) {
    document.write(i + "k, ");
}

document.write(` <h1>  question 7 </h1>`);
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var item = prompt("Welcome to ABC Bakery.What do you want to order sir/mam :");
var found = false;

for (var i = 0; i < A.length; i++) {
    if (A[i] == item) {
        found = true;
        break;
    }
}

if (found) {
    document.write("Cookie " + item + " is available in the list");
} else {
    document.write("Cookie " + item + " is not available in the list");
}

document.write(` <h1>  question 8 </h1>`);
var A = [24, 53, 78, 91, 12];
var largest = A[0];

for (var i = 1; i < A.length; i++) {
    if (A[i] > largest) {
        largest = A[i];
    }
}

document.write("The largest number in the array A is: " + largest);

document.write(` <h1>  question 9 </h1>`);
var A = [24, 53, 78, 91, 12];
var smallest = A[0];

for (var i = 1; i < A.length; i++) {
    if (A[i] < smallest) {
        smallest = A[i];
    }
}

document.write("The smallest number in the array A is: " + smallest);

document.write(` <h1>  question 10 </h1>`);
for (let i = 5; i <= 100; i += 5) {
    document.write(i + "<br>");
}

