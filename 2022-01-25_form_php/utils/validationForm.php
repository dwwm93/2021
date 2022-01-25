<?php

function verifForm($type, $test)
{
    $resultat = false;
    switch ($type) {
        case 'nom':
        case 'prenom':
            $resultat = preg_match("/^[a-zA-Z '-]+$/", $test);
            break;
        case 'email':
            $resultat = preg_match("/[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{2,4}/", $test);
            break;
    }
    return $resultat;
}
