<?php

$id = $_GET['id'];
$article = Article::getArticle($id);

include_once('template/articles_show.php');
