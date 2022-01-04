/**
 * Objectif : créer une page pour gérer la liste des cadeaux réclamés au pauvre père Noël qui n'a pas les moyens d'acheter tout ça.

# Exercice 1

Créer un formulaire en HTML avec un seul input (name="cadeau") dans lequel l'utilisateur rentre un cadeau souhaité, 
et un bouton. 

Quand l'utilisateur clique sur le bouton, cela ajoute le cadeau dans une liste "ul" classique en html , 
positionnée en dessous du formulaire.

* contrainte : vous n'avez pas le droit de concaténer dans innerHTML existant, il faut le réécrire en entier à chaque clic
* contrainte : il faut au moins une fonction intermédiaire, qui génère le HTML sous forme de string, 
à partir des cadeaux, et ce n'est pas elle qui écrit dans le innerHTML
* indice: créer une constante "const cadeaux = []" au début du script js, et la passer en paramètre de la fonction 
que vous appelez dans le bouton (ex : <button onclick="mafonction(cadeaux)">J'ai été sage</button>


# Exercice 2 

Rajouter un input dans le formulaire avec le nom de la personne qui a demandé le cadeau, 
et afficher autant de listes différentes qu'il y a de personnes qui veulent des cadeaux. 
(par ex : <h2>Esat</h2><ul><li>une tesla</li></ul><h2>Marc</h2><ul>....)

* contrainte : faire évoluer le code précédent, ne pas tout réécrire
* indice : modifier le contenu de la constante cadeaux pour être du type : 
    const cadeaux = { 'esat' : ['tesla'], 'marc': ... } 
*/

const cadeaux = ["livre", "stylo", "sérieux", "rigueur", "persévérance"];

/**
 * Affiche la liste des cadeaux souhaités pour Noël.
 *
 * @param {Array<string>} tableau - Tableau des cadeaux
 * @returns {void} Le html est inséré dans index.html
 */
function afficheCadeaux(tableau) {
  //4. je dois récupérer la valeur de l'input et l'ajouter dans le tableau !
  const nouveauCadeau = getInputValue('form>input[name="nouveauCadeau"]');
  // const nouveauCadeau = document.forms["formAjoutCadeau"]["nouveauCadeau"].value
  if (nouveauCadeau) {
    tableau.push(nouveauCadeau);
  }

  const html = genListeHTML(tableau);
  // 3. elle doit insérer le HTML dans le index.html
  document.querySelector("article>ul#listeCadeaux").innerHTML = html;
  // Attention : fonction sans "return" !! RARE !!
}

/**
 * Génère une liste au format HTML à partir d'un tableau JS.
 *
 * @param {Array<string>} tableau - Tableau des strings à afficher sous forme de <li>
 * @returns {string} HTML généré.
 */
function genListeHTML(tableau) {
  let html = "";
  // 1. elle doit parcourir le tableau -> récupère chaque élément
  for (let i = 0; i < tableau.length; i++) {
    const element = tableau[i];
    // 2. elle doit générer le HTML à insérer
    html += `<li>${element}</li>`; // "interpolation" : équivalent à => '<li>' + element + '</li>';
  }
  return html;
}

/**
 * Renvoie la valeur de l'input associé au sélecteur CSS donné.
 *
 * @param {string} selector - Sélecteur CSS d'un input
 * @returns {string}
 */
function getInputValue(selector) {
  return document.querySelector(selector).value;
}
