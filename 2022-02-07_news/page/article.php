<?php

$id = $_GET['id'];
/** @var PDO $bdd */
$query = $bdd->prepare("SELECT * FROM article
WHERE id_article = ?");
$query->bindParam(1, $id);
$query->execute();
$article = $query->fetch();

include_once('template/articles_show.php');
