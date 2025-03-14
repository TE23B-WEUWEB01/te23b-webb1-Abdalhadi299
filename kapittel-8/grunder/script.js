// var dag = "fredag";
// alert(dag);
// console.log("idag är det" + dag);

// var är du född?
// var stad = prompt("var är du född?");
// console.log("Du är född i " + stad);

// // vi gör en enkel captcha 
// var gissning = prompt ("Är det ok att fuska under Karims lekioner?");
// if (gissning == 68) {
//     alert("du är en människa");
// }
// else{
//     alert("Du är rn robot");
// }

// spamcheck med två slumpade tal
// var Slumptal1 = Math.random(Math.random() * 100);
// var Slumptal2 = Math.random(Math.random() * 100);

// // fråga användare vad är ?? + ?? 
// var gissning = prompt("vad är " + Slumptal1 + " + " + Slumptal2 + "?");
// if (condition){
//     dokument.writeln("<h1>Du är en människa! </h1>");
// } 
// else{
//     dokument.writeln("<h1>Du är en Robot! </h1>");
// }


// uppgift: skapa en miniräknare 
// läs in två tal
// skriv ut vilfri matematisk op

// var tal1 = prompt("Ange ett tal1");
// var tal2 = prompt("Ange ett tal2");
// var summa = Number(tal1) + Number(tal2);
// document.writeln("summa är " + summa);

// Uppgift: saktteuträkning
// läs in: inkomst, tex 30.000:-
// läs in: skatt, tex 30%
// skriv ut:"din inkomst efter skatt är xxx med yy% i skatt."

var brutto = prompt("vad är dein inkomst innan skatt?");
var skatt = prompt("vad är din satt?")
var inkomst = Number(brutto) * (100 - Number(skatt)) / 100;
document.writeln("Din inkomst efter skatt är " + inkomst + " med " + skatt + "% i skatt.");