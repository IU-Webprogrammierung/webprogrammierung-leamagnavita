# Projekt - Webprogrammierung
## 1. Projektbeschreibung und Ziele

**Ziel des Projekts**
* Entwicklung einer persönlichen UX-Design-Portfolio-Website
* Fokus auf klarer Struktur und der Präsentation der relevanten Inhalte und Projekte

**Verwendete Technologien**
* HTML5: Barrierefreiheit, Struktur, Semantik
* SCSS: Nesting, Flexbox und Grid, Media Queries, responsives layout
* JavaScript: Formular-Logik und dynamisches UI im Anschreiben auf der Startseite

## 2. Struktur, Aufbau und Nesting

* Die Struktur wurde Desktop-First umgesetzt, da Portfolios in Bewerbungsprozessen primär auf dem Desktop angesehen werden
* Responsive Anpassungen für kleinere Bildschirme (480px und 768px)
* Aufteilung der Inhalte in Abschnitten (Anschreiben, Lebenslauf, Skills, Projekte)

* es wurden semantische HTML-Elemente genutzt, um eine verständliche Struktur zu schaffen und die Grundlage für Barrierefreiheit zu legen
* durch SCSS-Nesting ist der Code strukturiert für jede Komponente des Portfolios dargestellt

## 3. JavaScript Features für Interaktion

**Einklappbarer Text auf der Startseite**
* Text automatisch geschlossen unterhalb von 768px Bildschirmbreite
* Umsetzung zunächst nur durch HTML mit details und open
* in der Finalisierungsphase wurde das HTML dann durch JavaScript ergänzt, um den Text unter 768px automatisch eingeklappt zu laden

**Formular für TouristBike**
* Absenden möglich nur wenn Checkbox oder Zahlenfeld ausgefüllt sind
* Absenden des Formulars simulieren durch event.preventDefault(), um eine Buchungsbstätigung anzuzeigen, ohne die Seite neuzuladen.
* Button, um nach Absenden das Formular unausgefüllt wiederherzustellen

**Herausforderungen in Bezug auf das Formular**
* erstmalige Arbeit mit JavaScript: es mussten zunächst die grundlegenden Konzepte verstanden werden
* die Logik von JavaScript zusammen mit CSS in Bezug auf das Formular zu verstehen benötigte viele Schritte und Fehler (Buchungsbestätigung verstecken/einblenden, Checkbox oder Zahlenfeld)
* außerdem war die Positionierung des Formulars über dem Mockup komplex und besonders die Ausrichtung bei den mehreren Breakpoints, da Mockup und das Formular unabhängig voneinander reagierten

## 4. Herausforderungen
* Einbinden eines Klickdummys für das Projekt "Greenroute" war schwierig, da sich der Figma-Rahmen nicht entfernen lies und visuell nicht zum Portfolio passte
* nach vielen Test und Recherche war die Lösung ein simpler Link im Text zu dem Projekt, der sich in einem neuen Tab öffnet, um das UI sauber zu halten

* über das gesamte Projekt verteilt gab es immer wieder Probleme mit dem Layout und der Platzierung von Elementen (v.a. Strahl im Lebenslauf, Overflow auf der "über mich"-Seite, TouristBike Formular)

* im SCSS führten v.a. in der letzten Phase doppelte und verstreute Regeln zu Unübersichtlichkeit
* durch viele Komponenten bestand das Risiko, das falsches Verschachteln im Refactoring das Layout zerstört
* das SCSS wurde dann anhand des HTML logisch gruppiert und Doppelungen entfernt, außerdem wurden die zusammengehörigen Komponenten auch verschachtelt

## 5. weitere Details und Errungenschaften
**Breakpoints und Responsive Design**
* Einsatz mehrerer Breakpoints (480px, 600px, 768px, 1000px, 1200px, 1600px)
* Skalierung des TouristBike-Formulars je nach Bildschirmbreite
* Anpassung des Layouts und Projekt-Darstellungen

**Eingesetzte HTML- und CSS-Features**
* Flexbox und Block für Layoutstruktur
* absolute und relative Positionierungen
* Transformationslogik
* semantische HTML-Struktur
* Nutzung von Google Fonts und Material Symbols

**Refactoring**
* entfernen doppelter oder nicht mehr benötigter SCSS-Regeln
* weiterer Ausbau des Nestings anhand der HTML-Struktur, dadurch mehr Übersichtlichkeit

**Git-Workflow**
* regelmäßige Commits während der Entwicklung
* finaler Git-Tag
* Nutzung von Git bei Fehlern

## 6. mögliche Erweiterungen
* Erweiterung des Portfolios durch zusätzliche Projekte
* kleine Animationen, z.B. bei Buttons oder dem Formular-Feedback

