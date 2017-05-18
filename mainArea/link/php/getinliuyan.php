<?php
	header('Access-Control-Allow-Origin:*');
	//打开文件
	$url = '../data/getliuyan.json';

	// 打开文件
	$file = fopen($url,'r');

	//读取文件内容
	$content = fread($file, filesize($url));

	// 关闭文件，避免资源浪费
	fclose($file);


	echo $content;
?>