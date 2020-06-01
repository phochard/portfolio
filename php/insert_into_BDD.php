<?php

/* echo ("<pre>");
var_dump($_POST);
echo ("<pre>"); */

$servername = 'localhost';
$dbname = 'contactForm_Portfolio';
$username = 'pow';
$password = 'ZgQpJm8a.';

$First_Name = $_POST['First_Name'];
$Last_Name = $_POST['Last_Name'];
$Email = $_POST['Email'];
$Phone = $_POST['Phone'];
$Message = $_POST['Message'];

try {
    $dbco = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $dbco->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = "INSERT INTO contacts VALUES(NULL,'$First_Name','$Last_Name','$Email','$Phone','$Message')";
    $sent = $dbco->exec($sql);
} catch (PDOException $e) {
    echo "Erreur : " . $e->getMessage();
}
/* if ($sent) {
echo("<script> alert('Votre message a bien été transmis.')</script>");
} */
header('Location:/portfolio/#contact');
