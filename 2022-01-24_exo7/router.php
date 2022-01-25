<?php

$page = @$_GET['page'];

switch ($page) {

    case 'Accueil':
        include('accueil.php');
        break;
    case 'Service':
        include('service.php');
        break;
    case 'Contact':
        include('contact.php');
        break;
    case 'setForm':
        include('setForm.php');
        break;
    default:
        include('accueil.php');
}
