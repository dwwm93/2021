// *************************************************
// Définition des types personnalisés que j'utilise.
// *************************************************

/**
 * @typedef {{libelle: string, date: string, montant: number}} Ligne - Représente une transaction
 * @typedef {Array<Ligne>} Compte - Un compte contient des lignes de transactions
 * @typedef {Object.<string, Compte>} Comptes - Contient les comptes
 */

// *************************************************
// Début du code.
// *************************************************

/** 
 * Tableau associatif pour stocker les comptes.
 * @type {Comptes}
 */
const comptes = {};
// Grâce à ça on l'auto complétion !!
//comptes.compteCourant[0].date

/**
 * Génère le HTML complet pour le compteId donné.
 * 
 * @param {string} compteId - Id du compte pour lequel on génère la section complète
 * @param {Comptes} comptes - Tableau associatif des comptes stockés.
 */
function genereSection(compteId, comptes) {
    const articleElement = document.querySelector(`article#${compteId}>section:first-of-type`);
    const totalElement = document.querySelector(`article#${compteId}>h2`);

    const compte = comptes[compteId] || [];
    console.log(compte);
    const tableau = genereTableau(compte);
    const formulaire = genereFormulaire(compteId);
    const total = compte.reduce((carry, ligne) => carry + ligne.montant, 0)

    articleElement.innerHTML = tableau;
    articleElement.innerHTML += formulaire;
    totalElement.innerHTML = `Total : ${total}`
}

/**
 * 
 * @param {Compte} compte - Lignes de compte à afficher
 * @returns {string} Table HTML à afficher
 */
function genereTableau(compte) {
    const headers = `
        <tr>
            <th>Libellé</th>
            <th>Date</th>
            <th>Montant</th>
        </tr>
    `;
    const lignes = genereLignes(compte);
    return `<table>
        ${headers}
        ${lignes}
    </table>`;
}

/**
 * Renvoie le HTML pour les transactions du compte donné.
 * 
 * @param {Compte} compte 
 * @returns {string} Rows HTML du table
 */
function genereLignes(compte) {
    return compte.map(ligne => genereLigne(ligne)).join('');
}

/**
 * Génère la row HTML pour la transaction donnée.
 * 
 * @param {Ligne} ligne - Transaction à afficer en HTML
 * @returns {string} Row HTML pour la transaction.
 */
function genereLigne(ligne) {
    return `
    <tr>
        <td>${ligne.libelle}</td>
        <td>${ligne.date}</td>
        <td>${ligne.montant}</td>
    </tr>`;
}

/**
 * 
 * @param {string} compteId 
 * @returns {string} Formulaire HTML pour l'ajout de lignes dans le compte
 */
function genereFormulaire(compteId) {
    return `
    <form action="" class="ajout">
        <input type="text" name="libelle" id="libelle" placeholder="Libellé">
        <input type="text" name="date" id="date" placeholder="Date" />
        <input type="text" name="montant" id="montant" placeholder="Montant">
        <button class="calculer" onclick="ajouteTransaction(event, '${compteId}', comptes)">Ajouter <span class='fas fa-plus'></span></button>
    </form>`;
}

/**
 * Ajoute une transaction dans le tableau associatif des comptes, à partir
 * des informations rentrées dans le formulaire.
 * 
 * @param {*} event 
 * @param {string} compteId 
 * @param {Comptes} comptes 
 */
function ajouteTransaction(event, compteId, comptes) {
    if (event) event.preventDefault();

    const nouvelleTransaction = getNouvelleTransactionInfos(compteId)
    comptes[compteId].push(nouvelleTransaction);

    genereSection(compteId, comptes);
}

/**
 * Renvoie une Ligne des données nécessaires à la transaction.
 * 
 * @param {string} cible - l'id du compte
 * @returns {Ligne} Nouvelle ligne de compte
 */
function getNouvelleTransactionInfos(cible) {
    const date = document.querySelector("article#" + cible + " form>input#date").value;
    const libelle = document.querySelector("article#" + cible + " form>input#libelle").value;
    let montant = document.querySelector("article#" + cible + " form>input#montant").value;
    montant = parseFloat(montant);

    return { libelle: libelle, date: date, montant: montant };
}


// Initialise les comptes :
/**
 * @todo il faudrait une fonction pour ça, et pour
 * générer la navbar, avec titre + icone.
 */
comptes["compte-courant"] = [];
comptes["livret-a"] = [];
comptes["tirelire"] = [];

genereSection('compte-courant', comptes);
genereSection('livret-a', comptes);
genereSection('tirelire', comptes);