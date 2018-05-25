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

<<<<<<< HEAD
	array('GET', '/monteiro-lobato', 		'/monteiroLobato.php', 'monteiroLobato'),
	array('GET', '/monteiro-lobato/', 		'/monteiroLobato.php', ''),
	array('GET', '/monteiro-lobato/[*]', 	'/monteiroLobato.php', ''),
=======
	array('GET', '/rosto', 		'/rosto.php', 'rosto'),
	array('GET', '/rosto/', 	'/rosto.php', ''),
	array('GET', '/rosto/[*]', 	'/rosto.php', ''),
>>>>>>> 08b19785c2516806ff823c9292b0a106b32dd615

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