<?php

declare(strict_types=1);

ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);

require_once('template/header.php');

/** @todo transformer en fonction */
require_once('./bdd.php');

require_once('router.php');

include_once('template/footer.php');
