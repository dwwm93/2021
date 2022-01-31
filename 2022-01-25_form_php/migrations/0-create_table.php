<?php

require_once('../bdd.php');

$sqlCreateTable = "CREATE TABLE user (
        id INT(4) AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        lastname  VARCHAR(255) NOT NULL,
        firstname  VARCHAR(255)
    )
";

/* $sqlDepuisExport = "
--
-- Structure de la table `user`
--
CREATE TABLE `user` (
  `id` int(4) NOT NULL,
  `email` varchar(255) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Index pour la table `user`
ALTER TABLE `user` ADD PRIMARY KEY (`id`);

-- AUTO_INCREMENT pour la table `user`
ALTER TABLE `user` MODIFY `id` int(4) NOT NULL AUTO_INCREMENT;
"; */

/* 
$res = $bdd->prepare();
$res->execute() */

echo ("<ol><li>Création de la table user.</li>");

try {
    $bdd->exec($sqlCreateTable);
    echo ('<li>table créée OK</li>');
} catch (\Throwable $th) {
    echo ("<li>{$th->getMessage()}</li>");
}
echo ("</ol>");
