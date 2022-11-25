// Changing case
var country = prompt ("Enter your country");
country = country.toUpperCase();
console.log(country);
var city = "karachi";
var firstletter = city.slice(0,1);
var otherletter = city.slice(1);
console.log(firstletter.toUpperCase() + otherletter.toLowerCase() );
// string measuring lenght and extracting part
var mobile = prompt ("Enter Your Favourite Mobile Model ");
console.log(mobile);
var cell = mobile.length;
console.log(cell);
var i = "pakistani";
var index = i.indexOf("n");
console.log(index);
document.write("<h1>Index </h1>");
document.write(7);
 var sent = "The quick brown fox jumps over the lazy dog ";
 var sen = sent.indexOf("the");
 console.log(sen);
//  finding a character at location
var i = "pakistani";
var pak = i.charAt(3);
console.log(pak);
// strings replacing characters
var hyd = "Hyderabad";
var rep = "Hyder";
var repp = hyd.replace(/Hyder/g, "Islam");
console.log(repp);
var message = "Ali and Sami are best friends. They play cricket and football together.";
var repl = "and";
var repl1 = message.replace(/and/g, "&");
console.log(repl1);
// Rounding numbers
var no = Math.round(3.45214);
console.log(no);
document.write("<br><h1>round off</h1>");
document.write("<br> 3");
var no1 = Math.floor(3.45214);
console.log(no1);
document.write("<br><h1> Floor </h1>");
document.write("<br> 3");
var no2 = Math.ceil(3.45214);
console.log(no2);
document.write("<br><h1>Ceil</h1>");
document.write("4");
var newno = Math.round(-2.678);
console.log(newno);
document.write("<br><h1>round off</h1>");
document.write("<br> -3");
var newno1 = Math.floor(-2.678);
console.log(newno1);
document.write("<br><h1> Floor </h1>");
document.write("<br> -3");
var newno2 = Math.ceil(-2.678);
console.log(newno2);
document.write("<br><h1>Ceil</h1>");
document.write(-2);
// generating random numbers
var dice = Math.random();
dice = Math.ceil(dice * 6);
console.log(dice);
document.write(1 / 2/ 3 / 4 /5 /6);
var toss = Math.random();
var to = Math.round(toss);
console.log(to);
document.write("<br> head = 0 tails = 1");
var secret = Math.random();
secret = Math.ceil(secret * 10);
console.log(secret);
// Converting strings to integers and decimals
var weight = "50";
weight = parseFloat(weight);
console.log(weight);
var weight1 = "50kgs";
weight1 = parseFloat(weight1);
console.log(weight1);
var weight2 = "50.2kgs";
weight2 = parseFloat(weight2);
console.log(weight2);
var weight3 = "50.2 kilograms";
weight3 = parseFloat(weight3);
console.log(weight3);
// Converting strings to numbers, numbers to strings

var num = "472";
num = +num;
var type = typeof(num);
console.log(num);
console.log(type);
document.write("<br> <h1>Convrting string in num</h1>");
document.write("<br> we get number 472. first we have to change string in to num by applying + to a variable then we have to apply type of tag then console both of them.")
var num1 = 35.36;
num1 = num1.toString();
console.log(num1);
document.write("<br><h1>Changing number to string</h1>");
document.write("<br>3536");
// Controlling the length of decimals
var percentage = 30 / 45 * 100 ;
percentage = percentage.toFixed(2);
console.log(percentage);
// Chapter : DATE 
var dt = new Date();
console.log(dt);
var month = ["january" , "february" , "march" , "april" , "may" , "june" , "july" , " august" , " september" , "october" , "november" , "december"];
var monh = dt.getMonth();
alert("Current Month: " + month[monh]);
var day = ["sun" , "mon" , "tues" , "wed" , "thur" , "fri" , "sat"];
var dy = dt.getDay();
alert( "Today is " + day[dy]);
var dys = ["saturday" , "sunday"];
if (dt.getDay() == dys) {
    alert("its funday");
}
var mont = prompt ("Enter today's date");
var end = 16;
if (mont < 16 ) {
    alert ("First fiftenn days of the month");
} else if (end >= 16){
    alert ("last days of the month");
}
var dtnew = new Date("1-jan-1970 22:32:23");
var dtnew1 = new Date("05-12-2015");
var newdt = dtnew.getMilliseconds();
var newdt1 = dtnew1.getMilliseconds();
var nw = dtnew1 - dtnew
console.log(nw);
alert("Millisecond since 1-jan-2015 are"+ nw );

var time = prompt("Enter time");
var time1 = ["13", "14","15","16","17","18","19","20","21","22","23","24"];
if (time <= 12 ) {
    alert("its am");
} else if (time > 13) {
    alert ("its pm");
}
var dt1time = dt.getTime();
console.log(dt1time);
var dt2time = new Date("12-oct-2000");
console.log(dt2time);
var diff = dt1time - dt2time;
var result = diff / (1000 * 60 * 60 * 24 * 365);
console.log (Math.round(result));
alert ("The birth year is 2000 and age is 22");
var customername = "abc";
var month = "Feb";
var unit = "410";
var rs = "16" ;
var billamount = unit * rs ;
console.log (billamount);
var late = 350;
var amountlate = billamount + late;
console.log(amountlate);
document.write("<br><h1>K-Electric bill</h1>");
document.write("<br> customername = abc");
document.write("<br> month = feb");
document.write("<br> unit = 410");
document.write("<br>per unit ruppees = 16");
document.write("<br>amount payable in due date = 6560");
document.write("<br> late charges = 350");
document.write("<br> amount payable after due day = 6910");

//  chapter function
function abc () {
      var nam = "sadia";
      var nam2 = "rafiq"
      var fullname = nam + nam2;
      alert("hi " + fullname);
}
function pqr () {
    var firstnum = 10;
    var secondnum = 20;
    return (firstnum + secondnum);
}
var lastnum = pqr();
console.log(lastnum);
function calculate(a , b) {
    var amount = a;
    var sec = b;
    return (a + b);
}
var ab = calculate (20, 30);
var aa = calculate (30, 10);
var cc = calculate (10, 20);
console.log(ab ,aa , cc);
document.write("<br><h1>Calculation</h1>");
document.write("<br>50");
document.write("<br>40");
document.write("<br>30");
 
 








































