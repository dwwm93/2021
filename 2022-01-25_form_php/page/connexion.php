<?php

$email = @$_POST['email'];
$password = @$_POST['password'];
$errorMessage = '';

if ($email && $password) {
    /** @var PDO $bdd */
    $statement = $bdd->prepare("SELECT * from user
    WHERE email = :emailParam");
    $statement->bindParam('emailParam', $email);
    $statement->execute();
    $res = $statement->fetchAll();
    if (count($res) === 0) {
        $errorMessage = "User inexistant.";
    } elseif (count($res) > 1) {
        $errorMessage = "Erreur : trop d'utilisateurs.";
    } else {
        $user = $res[0];
        if ($user["password"] === $password) {
            // User connecté
            echo ("<strong>CONNECTE</strong>");
            $_SESSION["email"] = $email;
            $_SESSION["connected"] = true;
        } else {
            $errorMessage = 'Mauvais password';
        }
    }
}

include_once('template/connexionForm.php');
