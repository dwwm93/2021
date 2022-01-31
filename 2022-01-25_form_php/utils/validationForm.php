<?php

/**
 * @param 'nom'|'prenom'|'email'|'password' $type Type de la donnée à tester
 * @param string $test Variable à vérifier
 */
function isValid(string $type, ?string $test): bool
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
        case 'password':
            $resultat = preg_match("/[\w\s\d]{8,}/", $test);
            break;
    }
    return $resultat;
}
