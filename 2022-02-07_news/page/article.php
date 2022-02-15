<?php

$id = @$_GET['id'];
if (!$id) {
    Router::errorPage();
} else {
    $article = Article::getArticle($id);

    include_once('template/articles_show.php');
}
