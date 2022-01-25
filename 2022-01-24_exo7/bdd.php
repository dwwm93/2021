<?php
try {
    // PDO = PHP Data Object
    // $bdd = new PDO("mysql:host=localhost;dbname=sibel", "login",  "mdp");
    //mysql

    $bdd = new PDO("mysql:host=localhost;dbname=fatime", "root",  "");
    /* 
    //maria db
    $bdd = new PDO("mysql:host=localhost;port=3307;dbname=test", "root",  "");
       */
    // echo "connexion bdd ok";
    // return $bdd;
} catch (Exception $e) {
    die("erreur de connexion à la bdd <br> $e");
}
