<?php
/**
 * Created by PhpStorm.
 * User: Daniel
 * Date: 14.01.14
 * Time: 22:23
 */ 
$params = (!isset($_GET['params'])) ? array() : mysql_real_escape_string($_GET['params']);
// Or whatever you do here....

$yourArray = array("ErsteGehversucheundrasante", 
    "Webentwicklung",
    "Website",
    "HTML",
    "undFlashfür«steinexch»die",
    "brachte",
    "Quellcode",
    "natürlich",
    "veraltet",
    "Erstellen",
    "PHPKlassen",
    "paar",
    "sind",
    "noch",
    "Gebrauch",
    "Schatt",
    "8374",
    "bedurfte",
    "Reparaturen",
    "nicht",
    "läuft",
    "solide",
    "Firma",
    "gefunden",
    "Unterdessen",
    "Webmaster",
    "bestem",
    "rückgängig",
    "eines",
    "kann",
    "hart");

echo json_encode($yourArray);