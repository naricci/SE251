<?php
require('db.php');
$data = json_decode($_POST['data'],true);

$firstName = $data["firstName"];
$lastName = $data["lastName"];
echo $firstName;
echo $lastName;

try {
    $stmt = $db->prepare("DELETE FROM actor WHERE firstName=:firstName AND lastName=:lastName");
    $stmt ->bindParam(':firstName',$firstName, PDO::PARAM_STR);
    $stmt ->bindParam(':lastName',$lastName, PDO::PARAM_STR);
    $stmt->execute();
} catch(PDOException $e) {
    echo "Error";
}
?>