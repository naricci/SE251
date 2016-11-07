<?php
header("Content-type: application/json");
$username = 'shop';
$password = 'se266';
$dsn = "mysql:host=localhost;dbname=my_guitar_shop1";

try {
    $db = new PDO($dsn, $username, $password);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die ("There was a problem connecting to the database.");
}

try {
    $stmt = $db->prepare("SELECT categoryID, categoryName FROM categories");
    $stmt->execute();
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($results);
} catch (PDOException $e) {
    die ("There was a problem running the query.");
}
?>