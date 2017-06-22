<?php
header("Access-Control-Allow-Origin:*");
header("Content-Type:text/plain;charset=UTF-8");
include '0_config.php';

$type = $_POST[type];
$price = $_POST[price];
$label = $_POST[label];
$name = $_POST[name];
$img= $_POST[img];
$stu_num = $_POST[stu_num];
$c_list = $_POST[c_list];
$introduce = $_POST[introduce];

$mysqli = new mysqli($db_url, $db_user, $db_pwd, $db_name, $db_port);
if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
}
$mysqli->set_charset('utf8');
$result = $mysqli->query("INSERT INTO course (c_type, c_price, c_label, c_name, c_img, student_num, c_list, c_introduce) VALUES ('$type', '$price', '$label', '$name', '$img', '$stu_num', '$c_list', '$introduce')");

if ($result === TRUE) {
    echo "success";
} else {
    echo "Error: "  . $mysqli->error;
}


$mysqli->close();

?>
