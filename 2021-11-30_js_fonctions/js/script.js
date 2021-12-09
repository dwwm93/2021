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
login(); // ici on exécute la fonction !!

/**
 * Amélioration n°1
 * 
 * Fonction déclarée ici, et exécutée lorsqu'on clique sur le bouton dans le html.
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
 * Permet de recevoir de l'info depuis l'extérieur : la fonction est bien "portable", 
 * on peut la passer à son camarade facilement.
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
 * Amélioration plus compliquée, qui consiste à séparer la fonction précédente en petits
 * traitements indépendants, pour faciliter la maintenance et la portabilité.
 * C'est plus facile de détecter les bugs puisqu'on peut tester les fonctions unes par unes.
 * De plus on comprend bien ce qui se passe, puisque les appels successifs ont des noms clairs
 * et rien qu'en les lisant on a "une sorte de phrase en anglais".
 * 
 * On y gagne la possibilité d'externaliser les données auxquelles comparer, ce qui sera
 * important quand on aura un back.
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
    /* 
    const inputUser = prompt('Nom d\'utilisateur ?');
    const inputPwd = prompt('Mot de passe ?'); 
    */
    const inputUser = document.querySelector('form#login > input[name="user"]').value;
    const inputPwd = document.querySelector('form#login > input[name="pwd"]').value;

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
 * Fonction à appeler dans le html et qui appelle toutes les autres.
 * ATTENTION il faut bien lui passer les credentials "back" en paramètre lors de l'appel.
 * CF dans le html
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

    let message = "Ici la fonction prend l'user et le pwd en entrée pour être paramétrable ! youpi !";
    message += "<video style=\"width: 500px; height: 313.75px; left: 0px; top: 0px;\" alt=\"Happy Big Lebowski GIF\" src=\"https://media2.giphy.com/media/tyxovVLbfZdok/giphy.mp4?cid=ecf05e47ws8uw72w1j28tij0d5urucrn9uawtc2fr43241b1&amp;rid=giphy.mp4&amp;ct=g\" poster=\"https://media2.giphy.com/media/tyxovVLbfZdok/giphy_s.gif?cid=ecf05e47ws8uw72w1j28tij0d5urucrn9uawtc2fr43241b1&amp;rid=giphy_s.gif&amp;ct=g\" autoplay=\"\" loop=\"\" playsinline=\"\"></video>";
    notifyUser(message, "button#login3 + p.message");
}


/**
 ***********
 * EXERCICE
 ***********
 */


const studentsDWWM = [
    ["léponge", "bob", "5", "https://i.pravatar.cc/100?u=léponge"],
    ["létoiledemer", "patrick", "25", "https://i.pravatar.cc/100?u=létoiledemer"],
    ["z", "dragonball", "105", "https://i.pravatar.cc/100?u=z"],
    ["han", "sango", "12", "https://i.pravatar.cc/100?u=han"],
    ["seagall", "steven", "?", "https://www.stevensegallery.com/100/100"],
    ["émorti", "rik", "99", "https://www.stevensegallery.com/100/100"],
];

/**
 * 
 * @param {Array} students Tableau de tableaux [ [nom, prenom, age, avatar], ]
 * @returns {string} Le html de toutes les cards de tous les étudiants
 */
function genCards(students) {
    let cards = "";
    for (let i = 0; i < students.length; i++) {
        let currentStudent = students[i];
        const card = genCard(currentStudent);
        cards += card;
    }
    return cards;
}

/**
 * 
 * @param {Array} student [nom, prenom, age, avatar]
 * @returns {string} La card html pour un étudiant
 */
function genCard(student) {
    const infos = getStudentInfos(student);

    return genHtmlCard("Elève", infos.avatar, infos.lastname + " " + infos.firstname, infos.age)
}

/**
 * Sert d'interface pour renvoyer des données propres.
 * 
 * @param {Array} student 
 * @returns {{firstname: string, lastname: string, avatar: string, age: string}}  Objet Elève
 */
function getStudentInfos(student) {
    return {
        lastname: student[0],
        firstname: student[1],
        age: student[2],
        avatar: student[3],
    };
}

/**
 * @todo rajouter des tests sur la présence ou non du header / footer ??
 * 
 * @param {string} header 
 * @param {*} image 
 * @param {*} content 
 * @param {*} footer 
 * @returns 
 */
function genHtmlCard(header, image, content, footer) {
    return `
<div class="card" style="width: 18rem;">
    <div class="card-header">
        ${header}
    </div>
    <img class="card-img-top" src="${image}" alt="Card image cap"/>
    <div class="card-body">
        <p class="card-text">${content}</p>
    </div>
    <div class="card-footer text-muted">
        ${footer}
    </div>
</div>`;
}
document.querySelector("div#students").innerHTML = genCards(studentsDWWM);

// Affichage des avatars dans la page 
// for (let i = 0; i < studentsDWWM.length; i++) {
//    document.querySelector("#avatars").innerHTML += "<img src='" + studentsDWWM[i][3] + "'/>";
//}