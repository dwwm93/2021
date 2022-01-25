<?php
include('bdd.php');

$nom = $_POST['nom'];
$email = $_POST['email'];
$sujet = $_POST['sujet'];
$message = $_POST['message'];

$verifNom = false;
$verifEmail = false;
$verifSujet = false;
$verifMessage = false;



if (verifForm('nom', $nom)) {
    echo "<div>nom : $nom </div>";
    $verifNom = true;
} else {
    echo "<div style='color:red'>nom : incorrect </div>";
}


if (verifForm('email', $email)) {
    echo "<div>email : $email </div>";
    $verifEmail = true;
} else {
    echo "<div style='color:red'>email : incorrect </div>";
}

if ($sujet != "") {
    echo "<div>tel : $sujet </div>";
    $verifSujet = true;
} else {
    echo "<div style='color:red'>sujet : incorrect </div>";
}

if ($message != "") {
    echo "<div>message : $message </div>";
    $verifMessage = true;
} else {
    echo "<div style='color:red'>message : incorrect </div>";
}

if ($verifNom && $verifEmail && $verifSujet & $verifMessage) {
    echo "<div>message envoyé</div>";

    $insert = $bdd->prepare("INSERT INTO contact(nom,email,sujet,message) value(?,?,?,?)");
    $ajoutBdd = $insert->execute([$nom, $email, $sujet, $message]);
} else {
    echo "<div style='color:red'>message non envoyer </div>";
}
