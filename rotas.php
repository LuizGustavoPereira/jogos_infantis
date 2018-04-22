<?php
	require_once "classes/AltoRouter.php";
	require_once "config.php";
	$router = new AltoRouter();

	$router->setBasePath(BASE_ROUTE);
	

	$router->map('GET','/',         function(){ require __DIR__ .'/menu.php';}, 'menu');
	$router->map('GET','/home',     function(){ require __DIR__ .'/menu.php';});
	$router->map('GET','/home/[*]',    function(){ require __DIR__ .'/menu.php';});
	
	$router->map('GET','/[*:url]',  function($url){ 
		require __DIR__ . '/menu.php';});
	
	$match = $router->match();
?>