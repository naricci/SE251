<?php
require("db.php");

$data = json_decode($_POST['data'],true);

$firstName = $data["firstName"];
$lastName = $data["lastName"];
$DOB = $data["DOB"];
$gender = $data["gender"];
$genre = serialize($data["genre"]);

try {
    $ps = $db->prepare("INSERT INTO actor (firstName, lastName, DOB, gender, genre) VALUES (:firstName, :lastName, :DOB, :gender, :genre) ");
    $ps->bindParam(':firstName', $firstName, PDO::PARAM_STR);
    $ps->bindParam(':lastName', $lastName, PDO::PARAM_STR);
    $ps->bindParam(':DOB', $DOB, PDO::PARAM_STR);
    $ps->bindParam(':gender', $gender, PDO::PARAM_STR);
    $ps->bindParam(':genre', $genre, PDO::PARAM_STR);
    $ps->execute();
    echo "Form has been submitted.";
} catch (PDOException $e) {
    echo "Error connecting to database.";
}
?>