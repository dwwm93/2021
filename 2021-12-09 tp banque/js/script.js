/**
 * Fonction qui récupère les données nécessaires
 * au calcul des revenus.
 * 
 * @returns {Array} Tableau des informations [total, salaire, duree]
 */
function getCalculInfos(cible) {
    var total = document.querySelector(
        "main>article#" + cible + ">section:first-of-type>h3>span"
    ).innerHTML;
    // parse float transforme une chaine de caractère en number
    // si la chaine a une "virgule" (nombre décimal)
    total = parseFloat(total);

    var salaire = document.querySelector(
        "article#" + cible + " form.calcul>input#salaire"
    ).value;
    salaire = parseFloat(salaire);

    var duree = document.querySelector(
        "article#" + cible + " form.calcul>input#duree"
    ).value;
    duree = parseInt(duree);

    return [total, salaire, duree];
}

/**
 * Fonction qui affiche le montant prévisionnel
 * dans le code html
 * 
 * @param {number} montantPrevisionnel 
 */
function affichePrevision(montantPrevisionnel, cible) {
    champResultat = document.querySelector(
        "article#" + cible + " form.calcul+h3>span"
    ).innerHTML = montantPrevisionnel;
}

/**
 * Ajoute le salaire donné sur le compte donné.
 * 
 * @param {number} compte 
 * @param {number} salaire 
 * @returns {number}
 */
function paieSalaire(compte, salaire) {
    return compte + salaire;
}

/**
 * Paie le salaire donné sur le compte donné, 
 * durant "duree" mois.
 * 
 * @param {number} compte Montant sur le compte
 * @param {number} salaire 
 * @param {number} duree Nombre, en mois, où le salaire est versé
 */
function paieSalairePendantDuree(compte, salaire, duree) {
    for (t = 0; t < duree; t++) {
        compte = paieSalaire(compte, salaire);
    }
    return compte;
}

/**
 * Fonction qui calcule le montant prévisionnel
 * disponible sur le compte, en fonction des
 * informations entrées par l'utilisateur dans le
 * formulaire.
 */
function calculePrevision(event, cible) {
    if (event) event.preventDefault();

    var infos = getCalculInfos(cible);
    var total = infos[0];
    var salaire = infos[1];
    var duree = infos[2];

    var compte = paieSalairePendantDuree(total, salaire, duree);

    affichePrevision(compte, cible);
}

/**
 * Fonction qui permet d'ajouter une transaction dans le 
 * tableau.
 * 
 * @param {*} event 
 * @param {string} cible 
 */
function ajouteTransaction(event, cible) {
    if (event) event.preventDefault();

    var transaction = getTransactionInfos(cible);
    var date = transaction[0];
    var libelle = transaction[1];
    var montant = transaction[2];

    ajouteLigneTransaction(cible, date, libelle, montant);

}

/**
 * Renvoie un tableau des données nécessaires à la transaction.
 * 
 * @param {string} cible 
 * @returns {Array} Tableau qui contient [date, libelle, montant]
 */
function getTransactionInfos(cible) {
    var date = document.querySelector("article#" + cible + " form>input#date").value;

    var libelle = document.querySelector("article#" + cible + " form>input#libelle").value;

    var montant = document.querySelector("article#" + cible + " form>input#montant").value;
    montant = parseFloat(montant);

    return [date, libelle, montant];
}

/**
 * Ajoute une ligne dans le tableau des transactions de la cible.
 * 
 * @param {string} cible 
 * @param {string} date 
 * @param {string} libelle 
 * @param {number} montant 
 */
function ajouteLigneTransaction(cible, date, libelle, montant) {
    var ligne = "<tr><td>" + date + "</td><td>" + libelle + "</td><td class='euro'>" + montant + "</td></tr>";
    var table = document.querySelector("article#" + cible + ">section>table.transaction");
    table.innerHTML += ligne;
}