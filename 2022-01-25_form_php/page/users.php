<?php

if (@$_SESSION['connected']) {
    /** @var PDOStatement $query */
    $query = $bdd->prepare("SELECT * from user");
    $query->execute();
    /** @var Array $users */
    $users = $query->fetchAll();

    include('template/users_list.php');
} else {
    echo "vous n'avez pas le droit de voir cette page.";
}
