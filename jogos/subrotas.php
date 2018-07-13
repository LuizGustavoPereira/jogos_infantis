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

	array('GET', '/rosto', 		'/rosto.php', 'rosto'),
	array('GET', '/rosto/', 	'/rosto.php', ''),
	array('GET', '/rosto/[*]', 	'/rosto.php', ''),

	array('GET','/menu-principal',  	'/paginaInicial.php', 'menu'),
	array('GET','/menu-principal/',  	'/paginaInicial.php', ''),
	array('GET','/menu-principal/[*]',  '/paginaInicial.php', ''),

	array('GET','/monteiro-lobato',  	'/monteiroLobato.php', 'monteiroLobato'),
	array('GET','/monteiro-lobato/',  	'/monteiroLobato.php', ''),
	array('GET','/monteiro-lobato/[*]',  '/monteiroLobato.php', ''),

	array('GET','/antes-depois',  		'/antesDepois.php', 'antesDepois'),
	array('GET','/antes-depois/',  		'/antesDepois.php', ''),
	array('GET','/antes-depois/[*]',	'/antesDepois.php', ''),

	array('GET','/matematica',  		'/matematica.php', 'matematica'),
	array('GET','/matematica/',  		'/matematica.php', ''),
	array('GET','/matematica/[*]',		'/matematica.php', ''),

	array('GET','/charadas',  			'/charadas.php', 'charadas'),
	array('GET','/charadas/',  			'/charadas.php', ''),
	array('GET','/charadas/[*]',		'/charadas.php', ''),

	array('GET','/alfabeto',  			'/alfabeto.php', 'alfabeto'),
	array('GET','/alfabeto/',  			'/alfabeto.php', ''),
	array('GET','/alfabeto/[*]',		'/alfabeto.php', ''),

	array('GET','/salada-fruta',  		'/saladaFruta.php', 'saladaFruta'),
	array('GET','/salada-fruta/',  			'/saladaFruta.php', ''),
	array('GET','/salada-fruta/[*]',		'/saladaFruta.php', ''),

));	

$matchContent = $routerContent->match();

if( is_array($matchContent)  ) {
	require __DIR__. $matchContent['target'];

}else{
	require "bloqueio.php";
}