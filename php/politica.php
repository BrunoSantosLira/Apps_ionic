

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script></script>
</head>
<body>
    <prev>
        <?php 
        header('Access-Control-Allow-Origin: *');
        header('Content-Type: application/json');
        header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE');
        header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');
        
        
        
        $xmlString = file_get_contents('https://www.gazetadopovo.com.br/feed/rss/mundo.xml');
        $xml = simplexml_load_string($xmlString, 'SimpleXMLElement', LIBXML_NOCDATA);
        $json = json_encode($xml);
        $array = json_decode($json, true);
        // Exemplo de exibição dos dados
        echo $json;
        
        ?>
    </prev>
</body>
</html>
