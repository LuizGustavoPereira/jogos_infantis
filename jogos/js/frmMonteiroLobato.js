var cor = 1,
	pergunta = 0,
	perguntasFeitas = [];



function comecarJogo(){	
	$("#jogo").show();
	$("#telaInicial").hide();
	$("#nomeCor").html("<h3 style='color: blue' >AZUL</h3>");
	formularPergunta();
}

function formularPergunta(){
	sorteiaPergunta();
	console.log(pergunta)
	switch(pergunta){
		case 1:
			$("#perguntas").html("<div style='float: left; margin-top: 10%' class='col-md-8'>"+
					 		"<p style='font-size: 3vw'>Será que o pedrinho tem medo do</p>"+
					 	"</div>"+
					 	"<img style='width: 10%; float: left;'' src='imagens/monteiro-lobato/saci.png'>"+
					 	"<div style='float: left; margin-top: 10%' class='col-md-8'>"+
					 		"<p style='font-size: 3vw'>?</p>"+
					 	"</div>"
						);			
		break;
		case 2:
			$("#perguntas").html("<div style='float: left; margin-top: 10%' class='col-md-8'>"+
				 		"<p style='font-size: 3vw'>A Tia Anastacia faz um <img style='width: 10%; float: left;'' src='imagens/monteiro-lobato/saci.png'> muito gostoso</p>"+
				 	"</div>"+
				 	"<img style='width: 10%; float: left;'' src='imagens/monteiro-lobato/saci.png'>"+
				 	"<div style='float: left; margin-top: 10%' class='col-md-8'>"+
				 		"<p style='font-size: 3vw'>?</p>"+
				 	"</div>"
					);	
		break;
		case 3:
			$("#perguntas").html("<div style='float: left; margin-top: 10%' class='col-md-8'>"+
				 		"<p style='font-size: 3vw'>Emilia é uma de pano</p>"+
				 	"</div>"+
				 	"<img style='width: 10%; float: left;'' src='imagens/monteiro-lobato/saci.png'>"+
				 	"<div style='float: left; margin-top: 10%' class='col-md-8'>"+
				 		"<p style='font-size: 3vw'>?</p>"+
				 	"</div>"
					);	
		break;
		case 4:
			$("#perguntas").html("<div style='float: left; margin-top: 10%' class='col-md-8'>"+
				 		"<p style='font-size: 3vw'>Marquês de Rabicó é um </p>"+
				 	"</div>"+
				 	"<img style='width: 10%; float: left;'' src='imagens/monteiro-lobato/saci.png'>"+
				 	"<div style='float: left; margin-top: 10%' class='col-md-8'>"+
				 		"<p style='font-size: 3vw'>?</p>"+
				 	"</div>"
					);	
		break;
		case 5:
			$("#perguntas").html("<div style='float: left; margin-top: 10%' class='col-md-8'>"+
				 		"<p style='font-size: 3vw'>Pedrinho gosta de jogar </p>"+
				 	"</div>"+
				 	"<img style='width: 10%; float: left;'' src='imagens/monteiro-lobato/saci.png'>"+
				 	"<div style='float: left; margin-top: 10%' class='col-md-8'>"+
				 		"<p style='font-size: 3vw'>?</p>"+
				 	"</div>"
					);	
		break;
		case 6:
			$("#perguntas").html("<div style='float: left; margin-top: 10%' class='col-md-8'>"+
					 		"<p style='font-size: 3vw'>No sítio do Pica Pau Amarelo, tia Anastácia cuida dos </p>"+
					 	"</div>"+
					 	"<img style='width: 10%; float: left;'' src='imagens/monteiro-lobato/saci.png'>"+
					 	"<div style='float: left; margin-top: 10%' class='col-md-8'>"+
					 		"<p style='font-size: 3vw'>?</p>"+
					 	"</div>"
						);	
		break;
		case 7:
			$("#perguntas").html("<div style='float: left; margin-top: 10%' class='col-md-8'>"+
				 		"<p style='font-size: 3vw'>Pedrinho e Emilia brincam de </p>"+
				 	"</div>"+
				 	"<img style='width: 10%; float: left;'' src='imagens/monteiro-lobato/saci.png'>"+
				 	"<div style='float: left; margin-top: 10%' class='col-md-8'>"+
				 		"<p style='font-size: 3vw'>?</p>"+
				 	"</div>"
					);	
		break;
		case 8:
			$("#perguntas").html("<div style='float: left; margin-top: 10%' class='col-md-8'>"+
					 		"<p style='font-size: 3vw'>Visconde de Sabugosa é uma espiga de </p>"+
					 	"</div>"+
					 	"<img style='width: 10%; float: left;'' src='imagens/monteiro-lobato/saci.png'>"+
					 	"<div style='float: left; margin-top: 10%' class='col-md-8'>"+
					 		"<p style='font-size: 3vw'>?</p>"+
					 	"</div>"
						);	
		break;
		case 9:
			$("#perguntas").html("<div style='float: left; margin-top: 10%' class='col-md-8'>"+
					 		"<p style='font-size: 3vw'>Dona Benta usa </p>"+
					 	"</div>"+
					 	"<img style='width: 10%; float: left;'' src='imagens/monteiro-lobato/saci.png'>"+
					 	"<div style='float: left; margin-top: 10%' class='col-md-8'>"+
					 		"<p style='font-size: 3vw'>?</p>"+
					 	"</div>"
						);	
		break;
		case 10:
			$("#perguntas").html("<div style='float: left; margin-top: 10%' class='col-md-8'>"+
					 		"<p style='font-size: 3vw'>Pedrinho e Narizinho pediram pra tia Anastácia fazer </p>"+
					 	"</div>"+
					 	"<img style='width: 10%; float: left;'' src='imagens/monteiro-lobato/saci.png'>"+
					 	"<div style='float: left; margin-top: 10%' class='col-md-8'>"+
					 		"<p style='font-size: 3vw'>?</p>"+
					 	"</div>"
						);	
		break;
	}

}

function sorteiaPergunta(){	
	if(perguntasFeitas.length >= 10){
		alert("show");
	}else{
		pergunta = Math.floor((Math.random() * 10) + 1);		
		if(perguntasFeitas.indexOf(pergunta) > -1){
			sorteiaPergunta();
		}else{	
			perguntasFeitas.push(pergunta);
		}
	}	
}

function voltar(){
	perguntasFeitas = [];
	$("#jogo").hide();
	$("#telaInicial").show();
}

$(document).ready(function(){
	$("#jogo").hide();
});