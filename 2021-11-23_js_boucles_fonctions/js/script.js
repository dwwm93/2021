const sayHello = () => {
    /** Version 1 */
    const username = prompt("Quel votre nom ?", "bel.le inconnu.e");
    const elementH1 = document.querySelector('h1');
    const greeting = elementH1.innerHTML; // -> "Bonjour"

    const result = greeting + " " + username; // -> "Bonjour bel.le inconnu.e"
    elementH1.innerHTML = result;

    /** Version 2 */
    const username_V2 = prompt("Quel votre prénom ?", "au teint éclatant");

    const elementH1_V2 = document.querySelector('h1');
    // On simplifie la syntaxe pour la V2 :
    // on se sert de l'équivalence de notation :
    // x = x + "test"   ====>    x += "test"
    elementH1_V2.innerHTML += " " + username_V2;
}

const showNumbers = () => {
    const ul = document.querySelector('ul#numeros');

    const limit = parseInt(prompt("Jusqu'à combien on compte ?", "10"));

    for (let i = 0; i <= limit; i++) {
        ul.innerHTML += "<li>" + i + "</li>"; //`<li>${i}</li>`
    }
}


const showStudents = () => {

    const students = [
        "diallo",
        "mustapha",
        "xavier",
        "brandon",
        "théo",
        "naceur",
        "alexandre",
        "omar",
        "salim",
        "fanny",
        "fatimé",
        "habib",
        "djamel",
        "ismail",
    ];
    const ul = document.querySelector('table#students');

    for (let i = 0; i < students.length; i++) {
        /** @var {string} studentName Nom de l'élève d'indice "i" */
        const studentName = students[i];
        /** @var {number} studentNumber Numéro de l'élève d'indice "i" */
        const studentNumber = i + 1;
        ul.innerHTML += "<tr><td>" + studentNumber + "</td><td>" + studentName + "</td></tr>";
    }

}

/**
 * Fonction qui calcule le carré d'un nombre donné.
 * 
 * @param {float} x Nombre à monter au carré
 * @returns {float} Le carré de x
 */
function square(x) {
    return x * x;
}

/**
 * Fonction qui déclenche le processus de calcul.
 */
function execNumberCalc() {
    /** @var {float} inputNumber Nombre donné par l'utilisateur */
    const inputNumber = parseFloat(prompt("Quel chiffre voulez-vous mettre au carré ?", 0));

    /** @var {Element} elem Element HTML dans lequel on va écrire le résultat */
    const elem = document.querySelector("div#calcResult");

    if (isNaN(inputNumber)) {
        alert("Attention il y a une erreur ! Donnez un *nombre* en entrée !");
        elem.innerHTML = '';
        return undefined;
    }

    elem.innerHTML = square(inputNumber);
}