<?php
header("Access-Control-Allow-Origin:*");
header("Content-Type:application/json;charset=UTF-8");
include '0_config.php';

$type = $_REQUEST['type'];

$mysqli = new mysqli($db_url, $db_user, $db_pwd, $db_name, $db_port);
if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
}
$mysqli->set_charset('utf8');
$result = $mysqli->query("select * from course where c_type = '{$type}'");
$list = array();
while($row = $result->fetch_array(MYSQLI_ASSOC)){
$list[]=$row;
}
echo json_encode($list);
$result->free();
$mysqli->close();

?>
