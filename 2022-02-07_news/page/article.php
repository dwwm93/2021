<?php

$id = $_GET['id'];
/** @var PDO $bdd */
$query = $bdd->prepare("SELECT 
    article.*, 
    user.nom_user, 
    user.prenom_user 
FROM article
JOIN user ON article.id_user = user.id_user
WHERE id_article = ?");
$query->bindParam(1, $id);
$query->execute();
$article = $query->fetch();

include_once('template/articles_show.php');
