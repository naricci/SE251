<?php
require("db.php");

try {
    $ps = $db ->prepare("SELECT * FROM actor");
    $ps->execute();
    $results = $ps->fetchAll{PDO::FETCH_ASSOC};

    while ($row = $ps ->fetch(PDO::FETCH_ASSOC) ){
        $temp = (array('id' => $row['id'], 'firstName' => $row["firstName"], 'lastName' => $row["lastName"], 'DOB' => $row["DOB"], 'gender' => $row["gender"], 'genre' => unserialize($row["genre"]) ));
        $dbArray[] = $temp;
    }

} catch (PDOException $e) {
    echo "Error";
}
echo json_encode($dbArray, JSON_PRETTY_PRINT);
?>