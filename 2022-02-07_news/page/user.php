<?php

$id_user = $_GET['id'];
$user = User::getUser($id_user);

include_once('template/users_show.php');
