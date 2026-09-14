/******************************************************************************
Funksjoner og metoder oppgave

Les oppgaveteksten NØYE. Vis noen eksempler i koden din som tester
funksjonene og metodene dine. Bruk en variasjon av pilfunksjoner (arrow functions)
og funksjoner laget med nøkkelordet `function`.

Legg til kommentarer i koden din som kort forklarer hva den gjør.

******************************************************************************/

/******************************************************************************
1.

Lag følgende funksjon:

Funksjonen skal ta inn et tall som parameter og returnere
"Oddetall" hvis tallet er et oddetall og "Partall" hvis tallet er et partall.
(PS: Funksjonen skal bruke return, du skal ikke bruke console log inni
funksjonen) */




// ******************************************************************************/

function sjekkOddetall(tall) {
    // Sjekker om tallet er et partall eller oddetall
    return tall % 2 === 0 ? "Partall" : "Oddetall";
}

/******************************************************************************
2.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter og returnere stringen
i STORE BOKSTAVER med et utropstegn på slutten.

Eksempel: "Dette er kult" skal returnere "DETTE ER KULT!"

******************************************************************************/

// Konverterer en string til store bokstaver og legger til utropstegn. Denne gangen bruker jeg en pilfunksjon for å variere, fordi jeg er bedt om å gjøre det. 
const tilStoreBokstaver = (tekst) => tekst.toUpperCase() + "!";

/******************************************************************************
3.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere:

 - Et navn (string)
 - En time på døgnet (nummer)

Funksjonen skal returnere:
"Ugyldig tid" hvis timeverdien er mindre enn 0.
"God natt (mottatt navn)" hvis timeverdien er mellom 0 og 5.
"God morgen (mottatt navn)" hvis timeverdien er mellom 6 og 11.
"God dag (mottatt navn)" hvis timeverdien er mellom 12 og 17.
"God kveld (mottatt navn)" hvis timeverdien er mellom 18 og 23.
"Ugyldig tid" hvis timeverdien er større enn 23.

Hvis ingen timeverdi mottas, skal funksjonen returnere en feilmelding.

******************************************************************************/

function hilsen(navn, time) {
    // Sjekker om time mangler
    if (time === undefined) {
        return "Feil: Timeverdi mangler";
    }

    // Sjekker om time er ugyldig
    if (time < 0 || time > 23) {
        return "Ugyldig tid";
    }

    // Returnerer hilsen basert på tidspunktet
    if (time >= 0 && time <= 5) {
        return `God natt ${navn}`;
    } else if (time >= 6 && time <= 11) {
        return `God morgen ${navn}`;
    } else if (time >= 12 && time <= 17) {
        return `God dag ${navn}`;
    } else {
        return `God kveld ${navn}`;
    }
}
/******************************************************************************
4.

Lag følgende funksjon:

Funksjonen skal ta inn en array som parameter og returnere arrayen
med første og siste indeks fjernet.

Eksempel 1: ["Rød", "Grønn", "Blå", "Gul"] skal returnere ["Grønn", "Blå"].

Eksempel 2: ["En", "To", "Tre", "Fire", "Fem", "Seks"] skal returnere
["To", "Tre", "Fire", "Fem"].

******************************************************************************/

// Fjerner første og siste element fra en array
function fjernForsteOgSiste(arr) {
    return arr.slice(1, -1);
}

// Eksempler for å teste funksjonen
console.log(fjernForsteOgSiste(["Rød", "Grønn", "Blå", "Gul"])); // Output: ["Grønn", "Blå"]
console.log(fjernForsteOgSiste(["En", "To", "Tre", "Fire", "Fem", "Seks"])); // Output: ["To", "Tre", "Fire", "Fem"]

/******************************************************************************
5.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter.

Bruk stringmetoder på stringen for å gjøre følgende:
 - Erstatt ordet "vanskelig" med "gøy".
 - Fjern mellomrom fra starten og slutten av stringen.

Returner deretter den oppdaterte stringen.

Eksempel 1: "  Javascript er vanskelig   " skal returnere "Javascript er gøy".
Eksempel 2: " Det er vanskelig å bruke metoder " skal returnere "Det er gøy å bruke metoder".
Eksempel 3: "   vanskelig        " skal returnere "gøy".

******************************************************************************/

// Erstatter "vanskelig" med "gøy" og fjerner mellomrom fra starten og slutten
function oppdaterString(tekst) {
    return tekst.replace("vanskelig", "gøy").trim();
}

// Eksempler for å teste funksjonen
console.log(oppdaterString("  Javascript er vanskelig   ")); // Output: "Javascript er gøy"
console.log(oppdaterString(" Det er vanskelig å bruke metoder ")); // Output: "Det er gøy å bruke metoder"
console.log(oppdaterString("   vanskelig        ")); // Output: "gøy"

/******************************************************************************
6.

Fullfør følgende steg for å manipulere "items"-arrayet. Hvert steg skal
fullføres ved å bruke passende array-metoder.

*******************************************************************************/

const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];

/*******************************************************************************
Steg 1: Fjern det første elementet ("Bok") fra arrayen ved hjelp av riktig metode.

Steg 2: Finn og erstatt "Viskelær" med "Linjal" i arrayen.

Steg 3: Bruk splice-metoden til å fjerne både "Penn" og "Notatbok", og legg til "Markeringspenn" i deres plass.

Steg 4: Kombiner alle elementene i arrayen til en enkelt string ved å bruke " | " som separator.

Ekstra utfordring: Lag et nytt array som kun inkluderer elementer som inneholder bokstaven "e".

******************************************************************************/

const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];

// --- Steg 1: Fjern det første elementet ("Bok") ---
items.shift();
console.log("Steg 1:", items); // Output: ["Penn", "Notatbok", "Viskelær", "Blyant", "Markør"]

// --- Steg 2: Finn og erstatt "Viskelær" med "Linjal" ---
const index = items.indexOf("Viskelær");
if (index !== -1) {
    items[index] = "Linjal";
}
console.log("Steg 2:", items); // Output: ["Penn", "Notatbok", "Linjal", "Blyant", "Markør"]

// --- Steg 3: Fjern "Penn" og "Notatbok", og legg til "Markeringspenn" ---
items.splice(0, 2, "Markeringspenn");
console.log("Steg 3:", items); // Output: ["Markeringspenn", "Linjal", "Blyant", "Markør"]

// --- Steg 4: Kombiner alle elementene til en string med " | " som separator ---
const kombinertString = items.join(" | ");
console.log("Steg 4:", kombinertString); // Output: "Markeringspenn | Linjal | Blyant | Markør"

// --- Ekstra utfordring: Ny array med elementer som inneholder bokstaven "e" ---
const elementerMedE = items.filter(element => element.includes("e"));
console.log("Ekstra utfordring:", elementerMedE); // Output: ["Markeringspenn"]

/******************************************************************************
7.

EKSTRA UTFORDRING #1:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere, en array og en string.

Sjekk om arrayen inneholder stringen. Hvis den gjør det, fjern elementet
fra arrayet og returner den oppdaterte arrayen.

Hvis arrayet ikke inneholder stringen, legg stringen til på slutten
av arrayet og returner det oppdaterte arrayet.

Eksempel 1: (["Rød", "Grønn"], "Blå") --> ["Rød", "Grønn", "Blå"]
Eksempel 2: (["Rød", "Grønn", "Blå"], "Grønn") --> ["Rød", "Blå"]
Eksempel 3: (["En", "To", "Tre"], "Fire") --> ["En", "To", "Tre", "Fire"]
Eksempel 4: (["En", "To", "Tre"], "To") --> ["En", "Tre"]

******************************************************************************/

function oppdaterArray(array, string) {
    // Sjekk om arrayen inneholder stringen
    const indeks = array.indexOf(string);

    if (indeks !== -1) {
        // Fjern stringen fra arrayen
        array.splice(indeks, 1);
    } else {
        // Legg stringen til på slutten av arrayen
        array.push(string);
    }

    return array;

    // Eventuelt uten mutasjon
    

    function oppdaterArray(array, string) {
    const indeks = array.indexOf(string);
    return indeks !== -1
        ? array.filter((_, i) => i !== indeks)
        : [...array, string];
}
}

/******************************************************************************
8.

EKSTRA UTFORDRING #2:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn ett parameter.

Hvis parameteret er en string:
Returner stringen med "😎" lagt til i starten og slutten.

Hvis parameteret er et tall:
Doble verdien, konverter den til en string, og returner den med "😎" lagt til i
starten og slutten.

Hvis parameteret er en boolean:
Returner "😎Ja😎" hvis parameteret er true, eller "😎Slapp av😎" hvis parameteret er false.

Hvis parameteret er en annen datatype:
Returner "😎Kun primitive verdier😎".

******************************************************************************/

// Skriv koden for oppgave 8 her
// Sjekker om parameteret er en string (tekst)
function coolify(param) {
  if (typeof param === "string") {
    return `😎${param}😎`;
  }

// Sjekker om parameteret er et tall    
  if (typeof param === "number") {
    return `😎${param * 2}😎`;
  }

  // Sjekker om parameteret er en boolean (ja eller nei)
  if (typeof param === "boolean") {
    return param ? "😎Ja😎" : "😎Slapp av😎";
  }

  // Hvis ingen av parametrene over stemmer, returner vi denne meldingen
  return "😎Kun primitive verdier😎";
}   