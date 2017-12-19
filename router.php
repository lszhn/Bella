<?php
header("Content-Type: text/html; charset=utf-8");
if(isset($_POST['routePath'])){
    $routePath = $_POST['routePath'];
    if($routePath != '#'){
        $file = fopen($routePath.'.cc','r') or die('ROUTE_ERROR');
        $data = fread($file,filesize($routePath.'.cc'));
        echo $data;
        fclose($file);
    }else{
        $file = fopen('indexc.cc','r') or die('ROUTE_ERROR');
        $data = fread($file,filesize("indexc.cc"));
        echo $data;
        fclose($file);
    }
}
