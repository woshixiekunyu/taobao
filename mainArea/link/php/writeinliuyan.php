<?php
//	$username = isset($_GET['username']) ? $_GET['username'] : '';
//	$gender = isset($_GET['gender']) ? $_GET['gender'] : '';
	$content = isset($_POST['content']) ? $_POST['content'] : '';
	$title = isset($_POST['title']) ? $_POST['title'] : '';
//	$img = isset($_GET['$img']) ? $_GET['$img'] : '';


//	// 获取客户端局域网ip
//	$host_name = exec("hostname"); //获取主机名
//	$host_ip = gethostbyname($host_name); //获取本机的局域网IP 

	
	// 获取前端发送的消息
	$newMsg = array(
//		'name'=>$username,
//		'gender'=>$gender,
		'content'=>$content,
		'title'=>$title,
//		'img'=>img,
//		'ipfrom'=>$host_ip,
//		'createtime'=>time()
	);
	header('Access-Control-Allow-Origin:*');
	$url = '../data/getliuyan.json';

	// 1.打开文件
	$file = fopen($url,'r');

	//先获取原来的内容
	$content = fread($file, filesize($url));

	// 2.把内容转换成数组
	$arr = json_decode($content,true);

	array_push($arr, $newMsg);
	


	// 4.重写文件内容
	$file = fopen($url, 'w');
	fwrite($file, json_encode($arr,JSON_UNESCAPED_UNICODE));


	echo json_encode($newMsg,JSON_UNESCAPED_UNICODE);

	// 关闭文件，避免资源浪费
	fclose($file);

?>