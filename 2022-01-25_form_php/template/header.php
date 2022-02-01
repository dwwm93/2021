<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice formulaire</title>
    <link rel="stylesheet" href="./css/style.css">
    <script src="./js/script.js" defer></script>
</head>

<body>
    <nav>
        <ul>
            <?php
            foreach ($menu as $key => $value) {
                echo ("<li><a href='index.php?page={$value['url']}'>{$value['nom']}</a></li>");
            }
            ?>
        </ul>
    </nav>
    <div id="errors"></div>
    <div><?php
            $connected = @$_SESSION["connected"];
            if ($connected) {
                echo ("VOUS ETES CONNECTES");
                echo ("<a href='index.php?page=logout'>Deconnexion</a>");
            }
            ?> </div>
    <main>