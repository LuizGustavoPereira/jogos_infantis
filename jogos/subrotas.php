<?php

$routerContent = new AltoRouter();
$routerContent->setBasePath( BASE_ROUTE ."/jogos" );

$routerContent->addRoutes(array(
	
	array('GET','/tabuada/',    '/tabuada.php', 'tabuada'),
	array('GET','/tabuada',     '/tabuada.php', ''),
	array('GET','/tabuada/[*]', '/tabuada.php', ''),

	array('GET','/brasileiro/',    '/brasileiro.php', 'brasileiro'),
	array('GET','/brasileiro',     '/brasileiro.php', ''),
	array('GET','/brasileiro/[*]', '/brasileiro.php', ''),

	array('GET', '/times', 		'/times.php', 'times'),
	array('GET', '/times/', 	'/times.php', ''),
	array('GET', '/times/[*]', 	'/times.php', ''),

	array('GET','/menu-principal',  	'/paginaInicial.php', 'menu'),
	array('GET','/menu-principal/',  	'/paginaInicial.php', ''),
	array('GET','/menu-principal/[*]',  '/paginaInicial.php', ''),

));	

$matchContent = $routerContent->match();

if( is_array($matchContent)  ) {
	require __DIR__. $matchContent['target'];

}else{
	require "bloqueio.php";
}