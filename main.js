//hier wird das Absenden des Formulars abgefangen, um eine Buchungsbestätigung zu simulieren, ohne die Seite neu zu laden
document.forms[0] .addEventListener("submit", function(event){event.preventDefault()
let buchungElement = document.getElementById("buchung")
buchungElement.classList.add("sichtbar")
//Formularinhalt für Buchungsbestätigung ausblenden
let verstecktElement = document.querySelector(".formularinhalt")
verstecktElement.classList.add("versteckt")
});
