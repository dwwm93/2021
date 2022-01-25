function veriForm(type, valeur) {
    let resultat = false;
    switch (type) {
        case 'nom':
        case 'prenom':
            resultat = /^[a-zA-Z '-]+$/.test(valeur);
            break;
        case "email":
            resultat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(valeur);
            break;

    }
    return resultat;

}


function sendForm() {
    var nom = document.querySelector('#nom').value;
    var email = document.querySelector('#email').value;
    var sujet = document.querySelector('#sujet').value;
    var message = document.querySelector('#message').value;

    var verifNom = false;
    var verifEmail = false;
    var verifSujet = false;
    var verifMessage = false;

    document.querySelector('.error').innerHTML = "";

    if (veriForm('nom', nom)) {
        document.querySelector('.error').innerHTML = "";
        verifNom = true;
    } else {
        document.querySelector('.error').innerHTML += "Merci de saisir le nom<br>";
    }

    if (veriForm('email', email)) {
        document.querySelector('.error').innerHTML = "";
        verifEmail = true;
    } else {
        document.querySelector('.error').innerHTML += "Merci de saisir l email<br>";
    }

    if (sujet != '') {
        document.querySelector('.error').innerHTML = "";
        verifSujet = true;
    } else {
        document.querySelector('.error').innerHTML += "Merci de saisir le sujet<br>";
    }

    if (message != '') {
        document.querySelector('.error').innerHTML = "";
        verifMessage = true;
    } else {
        document.querySelector('.error').innerHTML += "Merci de saisir le message<br>";
    }


    if (verifNom && verifEmail && verifSujet & verifMessage) {
        return true;
    } else {
        return false;
    }
}