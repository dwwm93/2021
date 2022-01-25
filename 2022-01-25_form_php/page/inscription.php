<?php

$email = @$_POST['email'];
$errorMessage = '';

if ($email === 'contact@greta.com' || !verifForm('email', $email)) {
    $color = 'red';
    $errorMessage = 'email deja existant';
} else {
    $color = 'green';
}

include_once('template/inscriptionForm.php');
