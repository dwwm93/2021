<?php

require_once('../bdd.php');

$sql = "CREATE TABLE `article` (
    `id_article` int(5) NOT NULL,
    `titre_article` varchar(255) NOT NULL,
    `contenu_article` text NOT NULL,
    `img_article` varchar(100) NOT NULL,
    `date_article` date NOT NULL,
    `id_categorie` int(11) NOT NULL,
    `id_user` int(11) NOT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=latin1;
  
--
-- Structure de la table `categorie`
--
CREATE TABLE `categorie` (
  `id_categorie` int(5) NOT NULL,
  `nom_categorie` varchar(100) NOT NULL,
  `id_parent` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Structure de la table `posseder`
--
CREATE TABLE `posseder` (
  `id_role` int(11) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Structure de la table `role`
--

CREATE TABLE `role` (
  `id_role` int(5) NOT NULL,
  `nom_role` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id_user` int(5) NOT NULL,
  `nom_user` varchar(30) NOT NULL,
  `prenom_user` varchar(30) NOT NULL,
  `tel_user` varchar(10) NOT NULL,
  `email_user` varchar(100) NOT NULL,
  `password_user` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Index pour la table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id_article`),
  ADD KEY `id_categorie` (`id_categorie`),
  ADD KEY `id_user` (`id_user`);

--
-- Index pour la table `categorie`
--
ALTER TABLE `categorie`
  ADD PRIMARY KEY (`id_categorie`),
  ADD KEY `id_parent` (`id_parent`);

--
-- Index pour la table `posseder`
--
ALTER TABLE `posseder`
  ADD PRIMARY KEY (`id_role`,`id_user`),
  ADD KEY `id_user` (`id_user`);

--
-- Index pour la table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id_role`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `article`
--
ALTER TABLE `article`
  MODIFY `id_article` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT pour la table `categorie`
--
ALTER TABLE `categorie`
  MODIFY `id_categorie` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT pour la table `role`
--
ALTER TABLE `role`
  MODIFY `id_role` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `article`
--
ALTER TABLE `article`
  ADD CONSTRAINT `article_ibfk_1` FOREIGN KEY (`id_categorie`) REFERENCES `categorie` (`id_categorie`),
  ADD CONSTRAINT `article_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`);

--
-- Contraintes pour la table `categorie`
--
ALTER TABLE `categorie`
  ADD CONSTRAINT `categorie_ibfk_1` FOREIGN KEY (`id_parent`) REFERENCES `categorie` (`id_categorie`);

--
-- Contraintes pour la table `posseder`
--
ALTER TABLE `posseder`
  ADD CONSTRAINT `posseder_ibfk_1` FOREIGN KEY (`id_role`) REFERENCES `role` (`id_role`),
  ADD CONSTRAINT `posseder_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`);

  ";

/* 
$res = $bdd->prepare();
$res->execute() */

echo ("<ol><li>Création des tables.</li>");

try {
    $bdd->exec($sql);
    echo ('<li>table créée OK</li>');
} catch (\Throwable $th) {
    echo ("<li>{$th->getMessage()}</li>");
}
echo ("</ol>");
