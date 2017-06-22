<?php
header("Access-Control-Allow-Origin:*");
header("Content-Type:text/plain;charset=UTF-8");
include '0_config.php';

$email = $_POST[uEmail];
$name = $_POST[uName];
$pwd = $_POST[uPwd];

$mysqli = new mysqli($db_url, $db_user, $db_pwd, $db_name, $db_port);
if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
}
$mysqli->set_charset('utf8');
$result = $mysqli->query("INSERT INTO user (uEmail, uName, uPwd) VALUES ('$email', '$name', '$pwd')");

if ($result === TRUE) {
    echo "success";
} else {
    echo "Error: "  . $mysqli->error;
}


$mysqli->close();

?>
