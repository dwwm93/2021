<?php

/** @var PDO $bdd */
$query = $bdd->prepare("SELECT * FROM article");
$query->execute();
$articles = $query->fetchAll();

include_once('template/articles_list.php');
