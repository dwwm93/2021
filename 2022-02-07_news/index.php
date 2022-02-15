<?php

declare(strict_types=1);

ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);

/** On importe des classes, donc pas d'effet sur le display */
require_once('router.php');
/** @todo transformer en fonction */
require_once('./bdd.php');
require_once('./model/article.php');
require_once('./model/user.php');
require_once('./model/categorie.php');

/** Déclenche l'affichage des pages */
require_once('template/header.php');
$router->showPage();
include_once('template/footer.php');
