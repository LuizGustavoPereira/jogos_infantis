<?php
	
	if(phpversion() , 7.0){
		echo "<p>Sua versao do php naão compativel com a necessaria</>"
		exit;
	}

	$cfg=[
		"IP_SERVER"   	=> "",
		"COR" 		  	=> "branco",
		"URL_WS"      	=>  "",
		"TIPO_SERVIco"	=>  "EDUCACIONAL",
	];

	if(!define("DEBUG")) define( "DEBUG", true );
	if(!DEBUG){
		ini_set("display_erros", 0);
		ini_set("log_erros", true);
		ini_set("error_log", "logs/error.log");
	}else{

		$portServer = "80";
		$cfg["BASE_ROUTE"] = "/jogos_infantis";
		$cfg["AMBIENTE"] = "Ambiente de Desenvolvimento";
		$cfg["VERSION"] = "-master";		
	}

	if(!defined("_BASE_PATH_"))   define( "_BASE_PATH_",  dirname(__DIR__) . DIRECTORY_SEPARATOR );
	if(!defined("_LOG_PATH_"))    define( "_LOG_PATH_", _BASE_PATH_ . 'logs' . DIRECTORY_SEPARATOR);
	if(!defined("_REQUIRE_PATH_"))    define( "_REQUIRE_PATH_", str_replace("\\", "/", __DIR__));
	if(!defined("INCLUDE_PATH")) 	define( "INCLUDE_PATH", 	"http://". $_SERVER["SERVER_NAME"] ."$portServer". $cfg["BASE_ROUTE"]);
	if(!defined("BASE_ROUTE"))   	define( "BASE_ROUTE" ,  	$cfg["BASE_ROUTE"]);
	if(!defined("IP_SERVER"))    	define( "IP_SERVER",    	$cfg["IP_SERVER"]);
	if(!defined("URL_WS"))       	define( "URL_WS",       	$cfg["URL_WS"]);
	if(!defined("COR"))          	define( "COR",          	$cfg["COR"]);
	if(!defined("URL_LOGO"))     	define( "URL_LOGO",     	INCLUDE_PATH . "/img/img001.png");
	if(!defined("PORT"))         	define( "PORT",         	$portServer );
	if(!defined("AMBIENTE"))     	define( "AMBIENTE",     	$cfg["AMBIENTE"] );
	if(!defined("VERSION"))      	define( "VERSION",      	$cfg["VERSION"] );

	if(!defined("ENDERECO"))    	define( "ENDERECO",      	'Rua Marambaia, 585 - Casa Verde - CEP 02513-000' );
	if(!defined("CIDADE"))      	define( "CIDADE",      	 	'São Paulo/SP' );
	if(!defined("EMAIL"))      		define( "EMAIL",      	 	'falecom@diretalog.com.br' );
	if(!defined("TELEFONE "))     	define( "TELEFONE",       	'(00) 00000-0000' );

	function getToken( $db = array() ){
		if(!session_id()){
			session_start();
		}
		require_once __DIR__ . "/classes/Token.Class.php";
		$jwt = new Token;
		return $jwt->generate(@$_SESSION["usuario_peloggia"]["usuLogin"], $db);	
	}
?>