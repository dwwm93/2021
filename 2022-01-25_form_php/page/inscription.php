<?php

$email = @$_POST['email'];
$password = @$_POST['password'];
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


try {
    //code...
    if (
        $email
        && $password
        && isValid('email', $email)
        && isValid('password', $password)
    ) {

        /** @todo à commenter */
        //require_once('../bdd.php');
        $exists = $bdd->prepare('SELECT * FROM user
        WHERE email = ?');
        $exists->bindParam(1, $email);
        $exists->execute();
        $res = $exists->fetchAll(PDO::FETCH_ASSOC);
        if (count($res) > 0) {
            $errorMessage .= "user existe";
        } else {
            $query = $bdd->prepare("INSERT INTO user (email, password, lastname)
    VALUE (?, ?, ?)");
            $inserted = $query->execute([$email, $password, 'TOTO']);
            if ($inserted) {
                $errorMessage .= "User bien inséré.";
            } else {
                $errorMessage .= "Erreur durant l'insertion.";
            }
        }
    }
} catch (\Throwable $th) {
    echo ($th->getMessage());
}

$errorMessage .= "</ul>";

include_once('template/inscriptionForm.php');
