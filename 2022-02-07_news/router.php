<?php

$page = @$_GET['page'];

switch ($page) {
    case 'articles':
        if (@$_GET['id']) {
            require_once('page/article.php');
        } else {
            require_once('page/articles.php');
        }
        break;

    case 'users':
        if (@$_GET['id']) {
            require_once('page/user.php');
            break;
        }

    default:
        break;
}
