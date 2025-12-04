//Text auf Startseite automatisch eingeklappt unter 768px
let closeAnschreiben = document.getElementById("text");
let bildschirmBreite = window.innerWidth;
if (bildschirmBreite < 768) {
    closeAnschreiben.removeAttribute("open");
}

//hier wird das Absenden des Formulars abgefangen, um eine Buchungsbestätigung zu simulieren, ohne die Seite neu zu laden
document.forms[0].addEventListener("submit", function (event) {
    event.preventDefault();

    let eingabe = document.getElementById("checkbox").checked;
    let zahl = document.getElementById("number").value;
    //checkbox ist angeklickt = absenden möglich oder Zahlenfeld enthält Wert = absenden möglich, ansonsten Fehlermeldung
    if (eingabe || zahl !== '') {
        //Formularinhalt für Buchungsbestätigung ausblenden
        let verstecktElement = document.querySelector(".formularinhalt");
        verstecktElement.classList.add("versteckt");
        //Buchungsbestätigung einbelenden
        let buchungElement = document.querySelector(".buchungsbestätigung");
        buchungElement.classList.add("sichtbar");
        //Buchungs-icon einblenden
        let buchungIcon = document.getElementById("buchungicon");
        buchungIcon.classList.add("sichtbar");
        //Button für Wiederherstellung des Formulars einblenden
        let neuButton = document.getElementById("neu");
        neuButton.classList.add("sichtbar");
    }
    //Fehlermeldung
    else {
        alert("Bitte Bedarf angeben");
    }});
//Button, um nach Absenden das Formular wieder einzublenden
let neuButton = document.getElementById("neu");
neuButton.addEventListener("click", function () {
    let verstecktElement = document.querySelector(".formularinhalt");
    verstecktElement.classList.remove("versteckt");

    let buchungElement = document.querySelector(".buchungsbestätigung");
    buchungElement.classList.remove("sichtbar");

    let neuButton = document.getElementById("neu");
    neuButton.classList.remove("sichtbar");
    document.forms[0].reset();});










