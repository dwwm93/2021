<?php

require_once('utils/validationForm.php');

$menu = [
    "accueil" => [
        "nom" => "Accueil",
        "url" => "accueil",
        "fichier" => "page/accueil.php"
    ],
    "inscription" => [
        "nom" => "Inscription",
        "url" => "inscription",
        "fichier" => "page/inscription.php"
    ]
];

require_once('template/header.php');

require_once('router.php');

include_once('template/footer.php');
