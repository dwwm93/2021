<?php

$email = @$_POST['email'];
$password = @$_POST['password'];
$lastname = @$_POST['lastname'];
$firstname = @$_POST['firstname'];
$errorMessage = '<ul>';

if ($email && !isValid('email', $email)) {
    $color = 'red';
    $errorMessage .= '<li>email invalide</li>';
} else {
    $color = 'green';
}

if ($password && !isValid('password', $password)) {
    $errorMessage .= '<li>Mot de passe pas assez sécurisé.</li>';
}
if ($firstname && !isValid('prenom', $firstname)) {
    $errorMessage .= '<li>Prénom erroné</li>';
}
if ($lastname && !isValid('prenom', $lastname)) {
    $errorMessage .= '<li>Nom erroné</li>';
}


try {
    //code...
    if (
        $email
        && $password
        && $lastname
        && $firstname
        && isValid('email', $email)
        && isValid('password', $password)
        && isValid('nom', $lastname)
        && isValid('prenom', $firstname)
    ) {

        /** @todo à commenter */
        //require_once('../bdd.php');
        $exists = $bdd->prepare('SELECT * FROM user
        WHERE email = ?');
        $exists->bindParam(1, $email);
        $exists->execute();
        $res = $exists->fetchAll(PDO::FETCH_ASSOC);
        if (count($res) > 0) {
            $errorMessage .= "<li><strong>ERROR</strong> Inscription impossible, l'utilisateur existe déjà !</li>";
        } else {
            $query = $bdd->prepare("INSERT INTO user (email, password, lastname, firstname)
    VALUE (?, ?, ?, ?)");
            $inserted = $query->execute([$email, $password, $lastname, $firstname]);
            if ($inserted) {
                $errorMessage .= "<li class='success'>User bien inséré.</li>";
            } else {
                $errorMessage .= "<li class='error'>Erreur durant l'insertion.</li>";
            }
        }
    }
} catch (\Throwable $th) {
    echo ($th->getMessage());
}

$errorMessage .= "</ul>";

include_once('template/inscriptionForm.php');
