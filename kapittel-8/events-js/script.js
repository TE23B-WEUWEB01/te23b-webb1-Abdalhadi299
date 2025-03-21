// while (true){
//     let namn = prompt("Ange ditt namn:");
//     let Lösenord = prompt("Ange ditt lösenord:");

//     if (namn == "Abdalhadi" && Lösenord == "12345") {
//         document.writeln("Hej Abdalhadi du är inloggad!");
//         break;
        
//     } else {
//         document.writeln("fel uppgifter. vg försök igen!");

//     }
// }
// let ålder = prompt("Hur gammal är du?");
// document.writeln(`Hej ${namn} du är ${ålder}`);

let heltal = parseInt(prompt("Skriv in ett heltal 5-10:"));

for (let i = 1; i <= heltal; i++) {
    document.writeln(`rad ${i}<br>`);
    
}
