<?php

$id_user = $_GET['id'];
/** @var PDO $bdd */
$query = $bdd->prepare("SELECT * FROM user
WHERE id_user = ?
");
$query->execute([$id_user]);
$user = $query->fetch();

include_once('template/users_show.php');
