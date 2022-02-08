<?php

/** @var PDO $bdd */
$query = $bdd->prepare("SELECT article.id_article, article.titre_article, categorie.nom_categorie FROM article JOIN categorie ON article.id_categorie = categorie.id_categorie;");
$query->execute();
$articles = $query->fetchAll();

include_once('template/articles_list.php');
