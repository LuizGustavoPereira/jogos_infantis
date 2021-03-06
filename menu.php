<?php	
require_once "config.php";
require_once "classes/autoload.php";
require_once "classes/Menu.Class.php";
$menu = new Menu;

$imgTexture = "img/bkg-texture-". COR . ".jpg";	
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	<title>Jogos Educacionais</title>
	<base href="<?php print INCLUDE_PATH; ?>/">
	<link href="https://fonts.googleapis.com/css?family=Boogaloo" rel="stylesheet">
	<link type="text/css" rel="stylesheet" href="css/materialize-fonts.css" media="screen,projection"/>
	<link type="text/css" rel="stylesheet" href="css/materialize-customized.css" media="screen,projection"/>
	<link type="text/css" rel="stylesheet" href="css/style.css"  media="screen,projection"/>
	<link type="text/css" rel="stylesheet" href="css/font-awesome.min.css">
	<link type="text/css" rel="stylesheet" href="css/dataTables.material.css"/>
	<link type="text/css" rel="stylesheet" href="css/buttons.dataTables.min.css"/>
	<link type="text/css" rel="stylesheet" href="css/datepicker.css"/>
	<link type="text/css" rel="stylesheet" href="css/bootstrap-tour-standalone.min.css"/>
	<link type="text/css" rel="stylesheet" href="css/jquery-confirm.css"/>
	<link href="https://fonts.googleapis.com/css?family=Paytone+One" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Indie+Flower" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Acme|Quicksand|Varela+Round" rel="stylesheet">

	<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
	<script type="text/javascript" src="js/jquery.dataTables.min.js"></script>
	<script type="text/javascript" src="js/buttons.print.min.js"></script>
	<script type="text/javascript" src="js/dataTables.buttons.min.js"></script>
	<script type="text/javascript" src="js/jquery-ui.min.js"></script>
	<script type="text/javascript" src="js/jquery.mask.js"></script>
	<script type="text/javascript" src="js/jquery-maskmoney-v3.0.2.js"></script>
	<script type="text/javascript" src="js/bootstrap-tour-standalone.min.js"  charset="utf-8" ></script> 
	<script type="text/javascript" src="js/materialize.min.js"  charset="utf-8" ></script> 
	<script type="text/javascript" src="js/route.js" ></script>
	<script src="js/jquery-confirm.js"></script>
	<style type="text/css">
		body{
			background: #fafafa;
		}
		.btntour{
			padding: 4px 6px;
		}
		.versionamento{
			position:fixed;
			bottom:10px;
			right:10px;
			font-size:1.3rem;
			color:#F00;
			font-weight: bold;
		}

	</style>
</head>


<body class="lighten-3">
	
			<nav>
				<div class="nav-wrapper container">
					<a href="#" data-activates="slide-out" class="button-collapse">
						<i class="material-icons">menu</i>
					</a>
										

					<ul id="slide-out" class="side-nav fixed">
						<li class='logo-li'> 
							<div class="topSideNav center-align">
								<img class="logo-img" src="imagens/unitau-logo.png">
							</div>
						</li>

						<?php
						try{
							require_once "classes/Menu.Class.php";
							$menu->renderLink('Ver Todos', './jogos/menu-principal/', 'border_all');

							$menu = new Menu('Jogos', 'games');							
							$menu->append('Alfabeto',  								'./jogos/alfabeto/');
							$menu->append('Animais', 								'./jogos/animais');
							$menu->append('Antes e Depois', 						'./jogos/antes-depois/');
							$menu->append('Brasileiro',  							'./jogos/brasileiro/');
							$menu->append('Brincando com Monteiro Lobato', 	  		'./jogos/monteiro-lobato/');
							$menu->append('Casa do S', 	  							'./jogos/casa-s/');
							$menu->append('Descubra a Palavra', 					'./jogos/descubra-palavra/');					
							$menu->append('Matemática', 							'./jogos/matematica/');
							$menu->append('O que é o que é?', 						'./jogos/charadas');
							$menu->append('Tabuada',  								'./jogos/tabuada/');
							$menu->append('Times', 	  								'./jogos/times/');
							$menu->append('Salada de Frutas', 	  					'./jogos/salada-fruta/');

							$menu->render();

							$menu->renderLink('Info', './jogos/info/', 'info');

					// $menu->renderLink('Sair', './logOut/', '');
						}catch(Excepition $e){
							print $e->getMessage();
						}
						?>
					</ul>
				</div>
			</nav>
		
		<section class="main-content">
			<?php
			try{
				$routerContent = new AltoRouter();
				$routerContent->setBasePath( BASE_ROUTE );


				$routerContent->addRoutes(array(


					array('GET','/jogos/[*]',  								  '/jogos/subrotas.php', ''),

				));	

				$matchContent = $routerContent->match();
				if( is_array($matchContent)  ) {
					require __DIR__. $matchContent['target'];

				}else{
					require "bloqueio.php";
				}
			}catch(Exception $e){
				print $e->getMessage();
			}
			?>

			<?php
			require __DIR__ ."/pages/footer.html";
			?>
		</section>
	<script>
		$(".button-collapse").sideNav();
		$(document).ready(function($) {
			$(".button-menu").sideNav();
			$( ".tooltipped" ).each(function(index) {
			// console.log($(this).text());
			$(this).tooltip({tooltip: $(this).text().replace("keyboard_arrow_right", ""), position: "right", delay: 100});
		});
			$(".collapsible-body li").children().each(function() {
				$(this).width() > $(".collapsible-body li").width() && $(this).attr("title", $(this).text().replace("keyboard_arrow_right", ""));
			});
			$(".dropdown-button").dropdown();
			$('.modal').modal();
			$('.collapsible').collapsible();

			$.extend( true, $.fn.dataTable.defaults, {
				"language":{
					"url": "lib/datatable.ptbr.json"
				}
			} );

			$(".dateFormat").datepicker().mask('00/00/0000');
			$(".horaFormat").mask('00:00');
			$('.money').mask("#.##0,00", {reverse: true});
			$(".number").mask("#");
			$('.telefone').mask(SPMaskBehavior, spOptions);
			$(".cep").mask("99999-999");
			$(".cnpj").mask("99.999.999/9999-99");

			$('select').material_select();


			$("input[type='text'],input[type='password']").bind('keydown',function(e) {  
				if($(this).data('next')){
					(e.keyCode == '13') && $($(this).data('next')).focus();
				}
				if($(this).data('btn')){
					if(e.keyCode == '13'){
						if(liberarInclusao){
							$("#btnIncluir").click();
						}else if(liberarCorrecao){
							$("#btnCorrigir").click();
						}
					}
				}
				if($(this).data('pesq')){
					(e.keyCode == '13') && $($(this).data('pesq')).click();
				} 
			});

		});

		$.fn.showAlert = function(message, type = 'orange'){
			$(this).html("<div class=\"card "+type+" darken-1 show \" >\
				<div class=\"card-content white-text\" >"+message+"</div></div>");
		}

		$.fn.loadGif = function(sMessage){

			sMessage = (sMessage !== "") ? "<div style='padding-left:10px;line-height: 32px; height:32px'>"+sMessage+"</div> ": "";
			$(this).html("<div class=\"row\">\
				<div class=\"col l12 center-align\">\
				<div class=\"preloader-wrapper big active\">\
				<div class=\"spinner-layer spinner-green-only\">\
				<div class=\"circle-clipper left\">\
				<div class=\"circle\"></div>\
				</div><div class=\"gap-patch\">\
				<div class=\"circle\"></div>\
				</div><div class=\"circle-clipper right\">\
				<div class=\"circle\"></div>\
				</div>\
				</div>\
				</div>"+sMessage+"\
				</div></div>");

		}

		$.fn.loadProgress = function(){
			$(this).html("<div class=\"progress\">\
				<div class=\"indeterminate\"></div>\
				</div>");
		}

		var SPMaskBehavior = function (val) {
			return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
		},
		spOptions = {
			onKeyPress: function(val, e, field, options) {
				field.mask(SPMaskBehavior.apply({}, arguments), options);
			}
		};

		var formatMoney = function(dinheiros, mostrarMoeda = false){
			if (dinheiros != 0 && dinheiros != null) {
				dinheiros = parseFloat(dinheiros).toFixed(2);
				dinheiros = new Intl.NumberFormat('pt-BR',{ style: 'currency', currency: 'BRL' }).format( dinheiros );
				dinheiros = (mostrarMoeda !== true)? dinheiros.replace('R$','').trim() : dinheiros;		
			}else{
				dinheiros = (mostrarMoeda !== true)? "0,00" : "R$ 0,00";
			}
			return dinheiros;
		}

		$.datepicker.setDefaults({
			dateFormat: 'dd/mm/yy',
			dayNames: ['Domingo','Segunda','Ter&ccedil;a','Quarta','Quinta','Sexta','S&aacute;bado','Domingo'],
			dayNamesMin: ['D','S','T','Q','Q','S','S','D'],
			dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','S&aacute;b','Dom'],
			monthNames: ['Janeiro','Fevereiro','Mar&ccedil;o','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
			monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez']
		});

		function post(path, params, method) {
	    method = method || "post"; // Set method to post by default if not specified.

	    var form = document.createElement("form");
	    form.setAttribute("method", method);
	    form.setAttribute("action", path);
	    form.setAttribute("target", "_blank");

	    for(var key in params) {
	    	if(params.hasOwnProperty(key)) {
	    		var hiddenField = document.createElement("input");
	    		hiddenField.setAttribute("type", "hidden");
	    		hiddenField.setAttribute("name", key);
	    		hiddenField.setAttribute("value", params[key]);

	    		form.appendChild(hiddenField);
	    	}
	    }
	    document.body.appendChild(form);
	    form.submit();
	}

	

</script>
</body>
</html>