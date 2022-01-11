const menu = [
  {
    title: "accueil",
    url: "index.html",
  },
  {
    title: "formation",
  },
  {
    title: "contact",
  },
];

/**
 * @typedef {Object} Eleve
 * @property {string} Eleve.nom - Nom de l'élève
 * @property {string} Eleve.prenom
 * @property {string} Eleve.tel
 * @property {string} Eleve.email - Email de l'élève
 * @property {string} Eleve.description
 * @property {string} Eleve.cv
 * @property {Object<string, number>} competences - Compétences
 */

/**
 * @type {Array<Eleve>} eleves - Tableau des élèves
 */
const eleves = [
  {
    nom: "amadou",
    prenom: "diallo",
    tel: "0606060606",
    email: "diallo@greta.com",
    description: "Description de cet élève de qualité.",
    competences: {
      html: 3,
      js: 2,
      css: 4,
    },
    cv: "https://google.fr",
  },
  {
    nom: "latroch",
    prenom: "mustapha",
    tel: "0606060606",
    email: "mustapha@greta.com",
    description: "Description de cet élève de qualité.",
    competences: {
      html: 3,
      js: 2,
      css: 4,
    },
    cv: "https://google.fr",
  },
  {
    nom: "wemmert",
    prenom: "xavier",
    tel: "0606060606",
    email: "xavier@greta.com",
    description: "Description de cet élève de qualité.",
    competences: {
      html: 3,
      js: 2,
      css: 4,
    },
    cv: "https://google.fr",
  },
  {
    nom: "braganza",
    prenom: "brandon",
    tel: "0606060606",
    email: "brandon@greta.com",
    description: "Description de cet élève de qualité.",
    competences: {
      html: 3,
      js: 2,
      css: 4,
    },
    cv: "https://google.fr",
  },
  {
    nom: "galland",
    prenom: "théo",
    tel: "0606060606",
    email: "théo@greta.com",
    description: "Description de cet élève de qualité.",
    competences: {
      html: 3,
      js: 2,
      css: 4,
    },
    cv: "https://google.fr",
  },
  {
    nom: "mejbeur",
    prenom: "naceur",
    tel: "0606060606",
    email: "naceur@greta.com",
    description: "Description de cet élève de qualité.",
    competences: {
      html: 3,
      js: 2,
      css: 4,
    },
    cv: "https://google.fr",
  },
  {
    nom: "dissi",
    prenom: "alexandre",
    tel: "0606060606",
    email: "alexandre@greta.com",
    description: "Description de cet élève de qualité.",
    competences: {
      html: 3,
      js: 2,
      css: 4,
    },
    cv: "https://google.fr",
  },
  {
    nom: "diop",
    prenom: "omar",
    tel: "0606060606",
    email: "omar@greta.com",
    description: "Description de cet élève de qualité.",
    competences: {
      html: 3,
      js: 2,
      css: 4,
    },
    cv: "https://google.fr",
  },
  {
    nom: "bekhti",
    prenom: "salim",
    tel: "0606060606",
    email: "salim@greta.com",
    description: "Description de cet élève de qualité.",
    competences: {
      html: 3,
      js: 2,
      css: 4,
    },
    cv: "https://google.fr",
  },
  {
    nom: "dam",
    prenom: "fanny",
    tel: "0606060606",
    email: "fanny@greta.com",
    description: "Description de cet élève de qualité.",
    competences: {
      html: 3,
      js: 2,
      css: 4,
    },
    cv: "https://google.fr",
  },
  {
    nom: "ndiawara",
    prenom: "fatimé",
    tel: "0606060606",
    email: "fatimé@greta.com",
    description: "Description de cet élève de qualité.",
    competences: {
      html: 3,
      js: 2,
      css: 4,
    },
    cv: "https://google.fr",
  },
  {
    nom: "boujenfa",
    prenom: "habib",
    tel: "0606060606",
    email: "habib@greta.com",
    description: "Description de cet élève de qualité.",
    competences: {
      html: 3,
      js: 2,
      css: 4,
    },
    cv: "https://google.fr",
  },
  {
    nom: "bouharira",
    prenom: "djamel",
    tel: "0606060606",
    email: "djamel@greta.com",
    description: "Description de cet élève de qualité.",
    competences: {
      html: 3,
      js: 2,
      css: 4,
    },
    cv: "https://google.fr",
  },
  {
    nom: "boujenfa",
    prenom: "ismail",
    tel: "0606060606",
    email: "ismail@greta.com",
    description: "Description de cet élève de qualité.",
    competences: {
      html: 3,
      js: 2,
      css: 4,
    },
    cv: "https://google.fr",
  },
];

/**
 * Affiche le menu de la page.
 *
 * @param {Array<{title: string, url: string}>} menu Menu à afficher
 * @returns {void}
 */
function afficheMenu(menu) {
  const ul = document.querySelector("nav#menu>ul");
  let html = "";
  menu.forEach(function (item) {
    url = item.url ? item.url : item.title + ".html";
    // if (undefined) {} else { on est ici }
    // if ('test') { on est là } else {}

    /* if (item.url) {
        url = item.url;
    } else {
        url = item.title + '.html';
    } */
    html += `<li><a href="${url}">${item.title}</a></li>`;
  });
  ul.innerHTML = html;
}

afficheMenu(menu);

/**
 * Renvoie l'avatar de l'élève donné.
 *
 * @param {Eleve} eleve
 * @param {number} taille
 * @returns {string}
 */
function getAvatar(eleve, taille = 150) {
  return `https://i.pravatar.cc/${taille}?u=${eleve.email}`;
}

/**
 * Affiche le tableau des élèves.
 *
 * @param {Array<Eleve>} eleves
 * @returns {void}
 */
function afficheEleves(eleves) {
  const section = document.querySelector("#listeEleves");
  let html = "<ul>";

  for (let index = 0; index < eleves.length; index++) {
    const eleve = eleves[index];
    html += genComposantEleve(eleve);
  }

  html += "</ul>";
  section.innerHTML = html;
}

/**
 *
 * @param {Eleve} eleve
 * @returns {string} HTML correspondant au composant d'un élève
 */
function genComposantEleve(eleve) {
  let html = `
    <li>
        <img src="${getAvatar(eleve)}" alt="avatar${eleve.prenom}">
        <span>${eleve.nom} ${eleve.prenom}</span>
        <button onclick="afficheEleveParPrenom('${
          eleve.prenom
        }', eleves)">Voir</button>
    </li>`;

  return html;
}

afficheEleves(eleves);

/**
 *
 * @param {Object<string, number} competences
 * @returns {string}
 */
function genCompetences(competences) {
  let html = "<ul>";

  for (let competence in competences) {
    const niveau = competences[competence];
    html += `<li>${competence} : `;
    for (let i = 1; i <= niveau; i++) {
      html += '<i class="fas fa-star"></i>';
    }
  }

  html += "</ul>";
  return html;
}

/**
 *
 * @param {string} prenom
 * @param {Array<Eleve>} eleves
 */
function afficheEleveParPrenom(prenom, eleves) {
  /**
   * let eleveSelectionne = undefined;
   * for (let i = 0; i < eleves.length; i++){
   *    const eleve = eleves[i];
   *    if (eleve.prenom === prenom) {
   *        eleveSelectionne = eleve;
   *    }
   * }
   * */
  const eleve = eleves.reduce(function (acc, eleve) {
    return eleve.prenom === prenom ? eleve : acc;
  }, undefined);

  afficheEleve(eleve);
}

/**
 *
 * @param {Eleve} eleve
 * @returns {void}
 */
function afficheEleve(eleve) {
  // Créer le html pour un élève
  const html = `
    <section>
        <img src="${getAvatar(eleve, 200)}"/>
        <span>${eleve.nom} ${eleve.prenom}</span>
        <a href="${eleve.cv}">CV</a>
    </section>
    <section>
        <ul>
            <li>tel : ${eleve.tel}</li>
            <li>email : ${eleve.email}</li>
            <li>description : ${eleve.description}</li>
            <li>compétences : ${genCompetences(eleve.competences)}
            </li>
        </ul>
    </section>
    `;
  const content = document.querySelector("#modal>#content");
  content.innerHTML = html;
  // Afficher la modal
  const modal = document.querySelector("#modal");
  modal.style["display"] = "flex";
}
