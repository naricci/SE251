<?php
require('db.php');

$data = json_decode($_POST['data'],true);

$id = $data["id"];
$firstName = $data["firstName"];
$lastName = $data["lastName"];
$DOB = $data["DOB"];
$gender = $data["gender"];
$genre = serialize($data["genre"]);
echo $id;

try {
    $stmt = $db ->prepare("UPDATE actor SET firstName=:firstName, lastName=:lastName, DOB=:DOB, gender=:gender, genre=:genre WHERE id=:id");
    $stmt->bindParam(':id', $id, PDO::PARAM_STR);
    $stmt->bindParam('firstName', $firstName, PDO::PARAM_STR);
    $stmt->bindParam('lastName', $lastName, PDO::PARAM_STR);
    $stmt->bindParam('DOB', $DOB, PDO::PARAM_STR);
    $stmt->bindParam('gender', $gender, PDO::PARAM_STR);
    $stmt->bindParam('genre', $genre, PDO::PARAM_STR);

    $stmt->execute();
} catch (PDOException $e) {
    echo "Error.";
}