<?php

require_once('../bdd.php');
$sql = "INSERT INTO `categorie` (`id_categorie`, `nom_categorie`, `id_parent`) VALUES
(1, 'SPORT', NULL),
(2, 'ECONOMIE', NULL),
(3, 'PLANETE', NULL),
(4, 'BASKET', 1),
(5, 'FOOT', 1),
(6, 'TENNIS', 1),
(7, 'Euroleague', 4),
(8, 'NBA', 4);


--
-- Contenu de la table `user`
--

INSERT INTO `user` (`id_user`, `nom_user`, `prenom_user`, `tel_user`, `email_user`, `password_user`) VALUES
(1, 'WEMMERT', 'XAVIER', '0644250789', 'wemmert-xavier@greta.com', '123456789'),
(2, 'BOUHARIRA', 'DJAMEL', '0644250587', 'bouharira-djamel@greta.com', '123456789'),
(3, 'DISSI', 'ALEXANDRE', '0644250523', 'dissi-alexandre@greta.com', '123456789');

-- Contenu article

INSERT INTO `article` (`id_article`, `titre_article`, `contenu_article`, `img_article`, `date_article`, `id_categorie`, `id_user`) VALUES
(1, 'titre basket', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quae numquam, modi esse debitis mollitia obcaecati qui, autem ipsa voluptatibus odit perspiciatis corporis nulla quia consequatur fugiat quos dolorum vel!', 'https://img.le-dictionnaire.com/basket-3.jpg', '2022-02-01', 4, 2),
(2, 'titre economie', 'contenue economie', 'image economie', '2022-02-05', 2, 2),
(3, 'titre planete', 'contenue planete', 'image planete', '2022-02-06', 3, 2),
(4, 'titre tennis', 'contenue tennis', 'image tennis', '2022-02-07', 6, 2);


--
-- Contenu de la table `role`
--

INSERT INTO `role` (`id_role`, `nom_role`) VALUES
(1, 'admin'),
(2, 'moderateur'),
(3, 'utilisateur');

--
-- Contenu de la table `posseder`
--

INSERT INTO `posseder` (`id_role`, `id_user`) VALUES
(1, 1),
(3, 2),
(2, 3);
";

echo ("<ol><li>Insertion dans les tables.</li>");

try {
    $bdd->exec($sql);
    echo ('<li>insertions OK</li>');
} catch (\Throwable $th) {
    echo ("<li>{$th->getMessage()}</li>");
}
echo ("</ol>");
