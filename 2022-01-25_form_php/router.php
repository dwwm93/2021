<?php

$page = @$_GET['page'];

/* switch ($page) {
    case 'inscription':
        require_once('page/inscription.php');
        break;

    default:
        include_once('page/accueil.php');
        break;
} */

if (array_key_exists($page, $menu)) {
    $fichier = $menu[$page]["fichier"];
    require_once($fichier);
} else {
    require_once('page/accueil.php');
}
