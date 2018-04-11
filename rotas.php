<?php
	require_once "classes/AltoRouter.php";
	require_once "config.php";
	$router = new AltoRouter();

	$router->setBasePath(BASE_ROUTE);
	$router->map('GET','/' , function(){ require __DIR__ . 'menu.php'}, 'home');
	$router->map('GET','/home' , function(){ require __DIR__ . 'menu.php'}, 'home');
	$router->map('GET','/home/' , function(){ require __DIR__ . 'menu.php'}, 'home');

	$router->map('GET', '/[*:url]', function($url){
		require __DIR__ . 'menu.php'
	});
?>