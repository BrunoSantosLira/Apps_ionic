<?php 

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');


$dsn = "mysql:host=localhost;dbname=cliente_app";
$username="root";
$password="";

$email = $_GET['email'];
$senha = $_GET['senha'];


$pdo = new PDO($dsn,$username,$password);

try{
    $query= "SELECT * FROM clientes WHERE email=:email AND senha=:senha ";
    $stmt = $pdo->prepare($query);
    $stmt->bindValue(":email", $email);
    $stmt->bindValue(":senha", md5($senha));
    $stmt->execute();

    $dados = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($dados);
    

}catch(Execption $erro){

    echo json_encode($erro->getMessage());
}

?>