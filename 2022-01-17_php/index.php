<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice php</title>
    <link rel="stylesheet" href="./css/style.css">
</head>

<body>
    <?php

    $nom = "Diallo";
    $classeCss = "";

    if ($nom === 'Esat') {
        // ce que je fais si oui
        $classeCss = "prof";
    } else {
        // ce que je fais si non
        $classeCss = "eleve";
    }
    echo ("Bonjour <span class='" . $classeCss . "'>" . $nom . "</span>");


    $personnes = ["Diallo", "Mustapha", "Esat"];

    echo ('<ul>');
    for ($i = 0; $i < count($personnes); $i++) {
        # code...
        $personne = $personnes[$i];
        echo ("<li>Bonjour " . $personne . "</li>");
    }
    echo ('</ul>');

    /**
     * Fonction pour avoir la classe Css.
     * 
     * @param string $nom Nom source pour la classe
     */
    function getClassCss(string $nom): string
    {
        $classeCss = '';
        if ($nom === 'Esat') {
            // ce que je fais si oui
            $classeCss = "prof";
        } else {
            // ce que je fais si non
            $classeCss = "eleve";
        }
        return $classeCss;
    }

    ?>

    <h2>Liste colorée</h2>
    <ul>
        <?php
        for ($i = 0; $i < count($personnes); $i++) {
            # code...
            $personne = $personnes[$i];
            $classeCss = getClassCss($personne);
            echo ("<li>Bonjour <span class='" . $classeCss . "'>" . $personne . "</span></li>");
        }
        ?>
    </ul>

    <h2>Tableaux associatifs</h2>

    <?php
    $eleves2 = [
        "diallo" => "eleve",
        "esat" => "prof",
    ];
    $eleves2["diallo"];

    /**
     * eleves2 = { diallo: "eleve" , "esat": "prof"};
     * for (cle in eleves2) {
     *  cle // diallo, puis esat etc.
     * let valeur = eleves2[cle]
     * // NON  : let valeur = eleves2.cle // => eleves2["cle"]
     * }
     * 
     */
    echo ('<ul>');
    foreach ($eleves2 as $key => $value) {
        # code...
        echo ("<li>" . $key . " => " . $value . "</li>");
    }
    echo ('</ul>');
    echo ('<h3>Si on prend le tableau "normal" (ie non associatif); ça marche aussi !!</h3><ul>');
    foreach ($personnes as $key => $value) {
        # code...
        echo ("<li>" . $key . " => " . $value . "</li>");
    }
    echo ('</ul>');

    ?>

</body>

</html>