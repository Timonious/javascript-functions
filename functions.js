/* Opdracht 1 */
// Schrijf een functie die drie parameters verwacht en deze drie getallen bij elkaar optelt en teruggeeft.
// ---- Verwachte uitkomsten:
// 3, 4, 5 geeft 12
// 11, 3, 9 geeft 23


function plusSumThree (first, second, third) {
    return (first+second+third);
}
const twelve = plusSumThree(3, 4, 5);
const twentyThree = plusSumThree(11, 3, 9);

console.log(twelve);
console.log(twentyThree)



/* Opdracht 2 */
// Schrijf een functie die twee strings verwacht en deze aan elkaar geplakt teruggeeft.
// Je mag hier geen String Object methoden voor gebruiken.
// ---- Verwachte uitkomsten:
// "abra", "cadabra" geeft "abracadabra"

function hocusPocus (hocus, pocus) {
    return hocus + pocus
}
const abraCadabra = hocusPocus("abra", "cadabra");

console.log(abraCadabra);

/* Opdracht 3 */
// Schrijf een functie die twee parameters verwacht: een woord en een karakter
// De functie omwikkelt het woord met het karakter en geeft dit terug
// ---- Verwachte uitkomsten:
// "bril", "*" geeft "*bril*"
// "beep", "_" geeft "_beep_"
// "kaas", "Q" geeft "QkaasQ"

function spangled (word, character) {
    return character+word+character
}
const wow = spangled("bril","*");

console.log(wow);

/* Opdracht 4 */
// Schrijf een functie die een array van strings verwacht. De functie geeft
// alle strings aan elkaar geplakt terug. Je mag hier geen array- of string methoden
// voor gebruiken.
// ---- Verwachte uitkomsten:
// ["abra", "cadabra"] geeft "abracadabra"
// ["a", "b", "c"] geeft "abc"

function sumAll() {
    let i;
    let sum = "";
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
const wow2 = sumAll("abra", "cadabra", "hopplakee");

console.log(wow2);
/* Opdracht 5 */
// Schrijf een functie die een array van strings verwacht en een gezamelijke groet teruggeeft
// ---- Verwachte uitkomsten:
// ["Nick", "Nova", "Mitchel", "Arjen"] geeft "Hoi Nick, Nova, Mitchel en Arjen!"
// ["Piet", "Henk"] geeft "Hoi Piet en Henk!"
// ["A", "B", "C", "D", "E", "F"] geeft "Hoi A, B, C, D, E en F!"

function sumAllPlus() {
    let i;
    let sum = " ";
    let firstName = arguments[0];
    let allmostLastname = arguments[arguments.length - 2];
    let lastName = arguments[arguments.length - 1];
    if (arguments.length === 2) {
        for (i = 1; i < arguments.length - 2; i++) {
            sum += arguments[i] + ", ";
        }
        return "Hallo " + firstName + " en " + lastName + ".";
    }
    if (arguments.length === 1) {
        for (i = 1; i < arguments.length - 2; i++) {
            sum += arguments[i] + ", ";
        }
        return "Hallo " + firstName + ".";
    }
    if (arguments.length === 0) {
        for (i = 1; i < arguments.length - 2; i++) {
            sum += arguments[i] + ", ";
        }
        return "Hallo, Geen na(a)m(en) ingevoerd";
    }
    else
        {
            for (i = 1; i < arguments.length - 2; i++) {
                sum += arguments[i] + ", ";
            }
        }
        return "Hallo " + firstName + "," + sum + allmostLastname + " en " + lastName + ".";
}
    const wow3 = sumAllPlus("Johan", "Dirk", "Ginny", "frans", "Joe", "Tooske");
    const wow4 = sumAllPlus("Harry", "Timon")
    const wow5 = sumAllPlus("Lily")
    const wow6 = sumAllPlus()

    console.log(wow3);
    console.log(wow4);
    console.log(wow5);
    console.log(wow6);
