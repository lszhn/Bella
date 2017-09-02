<?php
header("Content-Type: text/html; charset=utf-8");
if(isset($_POST['routePath'])){
    $routePath = $_POST['routePath'];
    if($routePath != '#'){
        $file = fopen($routePath,'r') or die('ROUTE_ERROR');
        $data = fread($file,filesize($routePath));
        echo $data;
        fclose($file);
    }else{
        $file = fopen('indexc.html','r') or die('ROUTE_ERROR');
        $data = fread($file,filesize("indexc.html"));
        echo $data;
        fclose($file);
    }
}
