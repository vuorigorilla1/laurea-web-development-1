console.log("Moi");
alert("Moi");

const nimi = "Elias";
let ika = 22;
const lempielain = "kissa";
console.log(nimi);
console.log(ika);
console.log(lempielain);
console.log("Moi, nimeni on " + nimi + ", olen " + ika + "-vuotias ja lempieläimeni on " + lempielain + ".");


alert("tervetuloa maailman hyvimmälle nettisivulle");

const visitorName = prompt("Kerro nimesi");
console.log(visitorName);
console.log("Moi " + visitorName + "! Tervetuloa javascript sivustolleni."); 

const visitorFavAnimal = prompt("Kerro lempieläimesi");
console.log("Moi " + visitorName + "! Lempieläimesi on " + visitorFavAnimal + ".");

const visitorAge = prompt("Kerro ikäsi");
if (visitorAge<18) {
    console.log("Olet alle 18-vuotias.")
} else {
    console.log("Olet 18-vuotias tai yli.")
}

function sanomoi(nimi2) {console.log("Moi " + nimi2 + "!");}
sanomoi("pasi");

const nabbula = document.getElementById("nappula");

        nabbula.addEventListener("click", function() {
            alert("Painoit nappulasta!");
        }); 