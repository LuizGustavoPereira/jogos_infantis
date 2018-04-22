<?php

	if (phpversion() < 7.0) {
    	echo "<p>Ops, sua versão do PHP não é compatível com esse sistema. Por favor, utilize a versão 7.0 ou maior do PHP.</p>";
    	exit;
	}

	$cfg = [
		"IP_SERVER" => "localhost",
		"COR"       => "branco",
		"TIPO_SERVICO"	=> "jogos"
	];

	if(!defined("DEBUG")) define( "DEBUG", true);
	if(!DEBUG){
		ini_set("display_errors", 0);
		ini_set("log_errors", true);
		ini_set("error_log", "logs/error.log");
		
	}else{

		$portServer = ":80";
		$cfg["BASE_ROUTE"] = "/jogos_infantis";
		$cfg["AMBIENTE"]   = "Ambiente de Desenvolvimento";
		$cfg["VERSION"]    = " - 1.0";		
	}
	
	if(!defined("_BASE_PATH_"))  define( "_BASE_PATH_",  dirname(__DIR__) . DIRECTORY_SEPARATOR);
	if(!defined("_LOG_PATH_"))   define( "_LOG_PATH_",   _BASE_PATH_ . 'logs'. DIRECTORY_SEPARATOR);
	if(!defined("REQUIRE_PATH")) define( "REQUIRE_PATH", str_replace("\\", "/", __DIR__));
	if(!defined("INCLUDE_PATH")) define( "INCLUDE_PATH", "http://". $_SERVER["SERVER_NAME"] ."$portServer". $cfg["BASE_ROUTE"]);
	if(!defined("BASE_ROUTE"))   define( "BASE_ROUTE" ,  $cfg["BASE_ROUTE"]);
	if(!defined("IP_SERVER"))    define( "IP_SERVER",    $cfg["IP_SERVER"]);
	if(!defined("COR"))          define( "COR",          $cfg["COR"]);
	if(!defined("PORT"))         define( "PORT",         $portServer );
	if(!defined("AMBIENTE"))     define( "AMBIENTE",     $cfg["AMBIENTE"] );
	if(!defined("VERSION"))      define( "VERSION",      $cfg["VERSION"] );
	if(!defined("TIPO_SERVICO"))      define( "TIPO_SERVICO", $cfg["TIPO_SERVICO"] );
	
	ini_set("soap.wsdl_cache_enabled", 0);
	$constant = 'constant';
	

	function getToken( $db = array() ){
		if(!session_id()){
			session_start();
		}
		require_once __DIR__ . "/classes/Token.Class.php";
		$jwt = new Token;
		return $jwt->generate(@$_SESSION["usuario"]["usuLogin"], $db);	
	}

