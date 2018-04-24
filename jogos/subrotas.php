<?php
print "oi";die;

$routerContent = new AltoRouter();
$routerContent->setBasePath( BASE_ROUTE ."/jogos/" );

$routerContent->addRoutes(array(
	
	array('GET','/tabuada/',    '/tabuada.php', 'tabuada'),
	array('GET','/tabuada',     '/tabuada.php', ''),
	array('GET','/tabuada/[*]', '/tabuada.php', ''),

));	

$matchContent = $routerContent->match();

if( is_array($matchContent)  ) {
	require __DIR__. $matchContent['target'];

}else{
	require "bloqueio.php";
}