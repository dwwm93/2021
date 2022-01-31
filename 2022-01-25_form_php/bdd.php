<?php
try {
    // PDO = PHP Data Object
    $bdd = new PDO("mysql:host=localhost;port=3306;dbname=2022_exo_inscription", "root",  "root");
    $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    /* 
    //maria db
    $bdd = new PDO("mysql:host=localhost;dbname=test", "root",  "");
    */
    echo ("connexion bdd ok");
    // return $bdd;
} catch (Exception $e) {
    die("erreur de connexion à la bdd <br /> $e");
}
