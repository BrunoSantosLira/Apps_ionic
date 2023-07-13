<?php 

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');



$nome = $_GET['nome'];
$email= $_GET['email'];
$telefone = $_GET['telefone'];
$senha = md5($_GET['senha']);


// Informações de conexão com o banco de dados
$dsn = 'mysql:host=localhost;dbname=cliente_app';
$username = 'root';
$password = '';

$pdo = new PDO($dsn, $username, $password);

$query ="SELECT * FROM clientes WHERE email=:email";
$stmt = $pdo->prepare($query);
$stmt->bindValue(":email", $email);
$stmt->execute();

$dados = $stmt->fetchAll(PDO::FETCH_ASSOC);

if(empty($dados)){
    try{
        $stmt = $pdo->query("insert into clientes (nome, email, telefone, senha) values ('".$nome."','".$email."','".$telefone."','".$senha."')");
        $dados = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode("Operacao concluida!");
    }catch(Execption $erro){
        echo $json_enconde($erro->getMessage());
    }
}else{
    echo json_encode("EMAIL JA REGISTRADO");
};



/*
try{
    $stmt = $pdo->query("insert into clientes (nome, email, telefone, senha) values ('".$nome."','".$email."','".$telefone."','".$senha."')");
    $dados = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode("Operação concluida!");
}catch(Execption $erro){
    echo $json_enconde($erro->getMessage());
}*/

   

?>