<?php 
    header("Content-type: text/html; charset=utf-8");
    // mysql_query("SET NAMES UTF8");
    $id = $_POST["num"];
    // $arr = array();
    $link = mysqli_connect('localhost','root','','jiaxiao');
    $link->query("SET NAMES 'UTF8'");
    if(!$link) {
        echo "链接失败";
    }
    else {
        $result = mysqli_query($link,"SELECT * FROM questions WHERE id=$id");
        // echo $result;
        while($row = mysqli_fetch_assoc($result)) {
            $arr[] = $row;
        }
    }
        // print_r($arr);
        // mysql_close($link);

    //     $data1 = array(
    //         'name'=>'zuoq',
    //         'age'=>22
    //     );
    // $data2 = array(
    //         'name'=>'dayang',
    //         'age'=>22
    //     );
    // echo $data1;


    // if($id==1) {
    //     $data = $data1;
    // } else {
    //     $data = $data2;
    // }
    echo json_encode($arr);
    // }  
 ?>