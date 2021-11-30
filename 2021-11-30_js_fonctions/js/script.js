/**
 * Déclenché au chargement du script
 */
let inputUser = prompt('Nom d\'utilisateur ?');
let inputPwd = prompt('Mot de passe ?');
let user = "Marc"
let pwd = "azerty"

function login() {
    if (inputPwd == pwd && inputUser == user) {
        alert("Connecté");
    } else {
        alert("Non connecté !");
    }
}
login();

/**
 * Amélioration n°1
 */
function login_1() {
    const inputUser = prompt('Nom d\'utilisateur ?');
    const inputPwd = prompt('Mot de passe ?');
    const user = "Marc"
    const pwd = "azerty"

    if (inputPwd == pwd && inputUser == user) {
        alert("Connecté");
    } else {
        alert("Non connecté !");
    }
    const info = document.querySelector("button#login1 + p.message");
    info.innerHTML = "Bon, ici au moins la fonction ne prend plus de variables extérieures.";
}

/**
 * Amélioration n°2
 * 
 * @param {string} user Nom de l'utilisateur à tester
 * @param {string} pwd Bon mot de passe pour l'utilisateur
 */
function login_2(user = "Marc", pwd = "azerty") {
    const inputUser = prompt('Nom d\'utilisateur ?');
    const inputPwd = prompt('Mot de passe ?');

    if (inputPwd == pwd && inputUser == user) {
        alert("Connecté");
    } else {
        alert("Non connecté !");
    }
    const info = document.querySelector("button#login2 + p.message");
    info.innerHTML = "Ici la fonction prend l'user et le pwd en entrée pour être paramétrable ! youpi !";
    info.innerHTML += "<video style=\"width: 500px; height: 313.75px; left: 0px; top: 0px;\" alt=\"Happy Big Lebowski GIF\" src=\"https://media2.giphy.com/media/tyxovVLbfZdok/giphy.mp4?cid=ecf05e47ws8uw72w1j28tij0d5urucrn9uawtc2fr43241b1&amp;rid=giphy.mp4&amp;ct=g\" poster=\"https://media2.giphy.com/media/tyxovVLbfZdok/giphy_s.gif?cid=ecf05e47ws8uw72w1j28tij0d5urucrn9uawtc2fr43241b1&amp;rid=giphy_s.gif&amp;ct=g\" autoplay=\"\" loop=\"\" playsinline=\"\"></video>";
}

/**
 * 
 * 
 * 
 * Amélioration n°3
 * 
 * 
 * 
 */

const storedCredentials = [
    ["Marc", "azerty"],
    ["Fatimé", "coucou"],
]

/**
 * 
 * @returns Array les informations de connexion de l'utilisateur en cours
 */
function askUser() {
    const inputUser = prompt('Nom d\'utilisateur ?');
    const inputPwd = prompt('Mot de passe ?');

    return [inputUser, inputPwd];
}

/**
 * 
 * @param {Array} input Informations rentrées par l'utilisateur
 * @param {Array} userInfo "Informations stockées en base"
 * @returns 
 */
function isConnected(input, credentials) {
    const inputUser = input[0];
    const inputPwd = input[1];
    let res = false;

    for (let i = 0; i < credentials.length; i++) {
        const userInfo = credentials[i];
        const user = userInfo[0];
        const pwd = userInfo[1];

        // 1ere idée :
        // const res2 = (inputPwd == pwd && inputUser == user);
        // res = res == true ? res : res2;

        // 2eme idée
        res = (inputPwd == pwd && inputUser == user);
        if (res == true) {
            break;
        }
    }
    return res
}

function notifyUser(message, selector = ".alert") {
    const info = document.querySelector(selector);
    info.innerHTML = message;
}

/**
 * 
 * @param {Array} credentials Tableau des logins/mdp valides
 */
function login_3(credentials) {
    const input = askUser();

    if (isConnected(input, credentials)) {
        notifyUser("Connecté");
    } else {
        notifyUser("Non connecté !");
    }

    const message = "Ici la fonction prend l'user et le pwd en entrée pour être paramétrable ! youpi !";
    message += "<video style=\"width: 500px; height: 313.75px; left: 0px; top: 0px;\" alt=\"Happy Big Lebowski GIF\" src=\"https://media2.giphy.com/media/tyxovVLbfZdok/giphy.mp4?cid=ecf05e47ws8uw72w1j28tij0d5urucrn9uawtc2fr43241b1&amp;rid=giphy.mp4&amp;ct=g\" poster=\"https://media2.giphy.com/media/tyxovVLbfZdok/giphy_s.gif?cid=ecf05e47ws8uw72w1j28tij0d5urucrn9uawtc2fr43241b1&amp;rid=giphy_s.gif&amp;ct=g\" autoplay=\"\" loop=\"\" playsinline=\"\"></video>";
    notifyUser(message, "button#login2 + p.message");
}