<?php

$article = new Article();
$article
    ->setContenu("nouveau contenu2")
    ->setTitre("nouveau titre2")
    ->setDate("2022/02/15")
    ->setImg("https://picsum.photos/400/400")
    ->setIdCategorie(1)
    ->setIdUser(1)
    ->save();

include_once('./template/articles_show.php');
