<?php
$username = "shop";
$password = "se266";
$dsn = "mysql:host=localhost;dbname=actors";
$db = new PDO($dsn, $username, $password);

try {
    $db = new PDO($dsn, $username, $password);
} catch (PDOException $e){
    exit ("<br />Error: Cannot connect to database.");
}
?>