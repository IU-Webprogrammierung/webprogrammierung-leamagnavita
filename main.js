//hier wird das Absenden des Formulars abgefangen, um eine Buchungsbestätigung zu simulieren, ohne die Seite neu zu laden
document.forms[0].addEventListener("submit", function (event) {
    event.preventDefault();

    let eingabe = document.getElementById("checkbox").checked;
    let zahl = document.getElementById("number").value;
    //checkbox ist angeklickt = absenden möglich oder Zahlenfeld enthält Wert = absenden möglich, ansonsten Fehlermeldung
    if (eingabe) {
        //Formularinhalt für Buchungsbestätigung ausblenden
        let verstecktElement = document.querySelector(".formularinhalt");
        verstecktElement.classList.add("versteckt");
        let buchungElement = document.getElementById("buchung");
        buchungElement.classList.add("sichtbar");
    }
    else if (zahl !== '') {
        let verstecktElement = document.querySelector(".formularinhalt");
        verstecktElement.classList.add("versteckt");
        let buchungElement = document.getElementById("buchung");
        buchungElement.classList.add("sichtbar");
    }
    else {
        alert("Bitte Bedarf angeben");
    }
});












