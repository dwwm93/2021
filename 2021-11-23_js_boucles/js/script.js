/** Version 1 */
const username = prompt("Quel votre nom ?", "bel.le inconnu.e");

const elementH1 = document.querySelector('h1');
const greeting = elementH1.innerHTML; // -> "Bonjour"

const result = greeting + " " + username; // -> "Bonjour bel.le inconnu.e"

elementH1.innerHTML = result;

/** Version 2 */
const username_V2 = prompt("Quel votre nom ?", "bel.le inconnu.e");

const elementH1_V2 = document.querySelector('h1');
// On simplifie la syntaxe pour la V2 :
// on se sert de l'équivalence de notation :
// x = x + "test"   ====>    x += "test"
elementH1_V2.innerHTML += " " + username_V2;

const showNumbers = () => {
    const ul = document.querySelector('ul#numeros');

    const limit = parseInt(prompt("Jusqu'à combien on compte ?", "10"));

    for (let i = 0; i <= limit; i++) {
        ul.innerHTML += "<li>" + i + "</li>"; //`<li>${i}</li>`
    }
}