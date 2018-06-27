var cor = 1,
	pergunta = 0,
	index = 1,
	respostaAntes = "",	
	respostaDepois = "",	
	pontuacao = 0,
	perguntasFeitas = [],
	vidas = 3;


audio = document.getElementById('audio');
var bool = true


function comecarJogo(){
	vidas = 3;
	pontuacao = 0;
	$("#jogo").show();
	$("#ganhou-jogo").hide();
	$("#fim-do-jogo").hide();
	$("#telaInicial").hide();
	$("#jogarNovamente").hide();
	$("#pontuacao").html(pontuacao);
	$("#vidas").html(vidas);
	formularPergunta();
}

function verificaResposta(resposta) {
	if(index == 1){
		if(resposta == respostaAntes){
			$("#antes").val(resposta)
			index = 2;
		}else{
			vidas-=1;
			$("#vidas").html(vidas);
			alert("resposta errada");
		}
	}else{
		if(resposta == respostaDepois){
			pontuacao += 10
			$("#pontuacao").html(pontuacao);
			$("#depois").val(resposta)
			index = 1;
			setTimeout("formularPergunta()", 1000);
			
		}else{
			vidas-=1;
			$("#vidas").html(vidas);
			alert("resposta errada");
		}
	}

	if( vidas < 0 ){
		$("#jogo").hide();
		$("#fim-do-jogo").show();
	}
}

function formularPergunta(){
	sorteiaPergunta();
	pergunta = 1	
	switch(pergunta){
		case 1:
			respostaAntes = "SABADO";
			respostaDepois = "SEGUNDA-FEIRA";
			$("#perguntas").html(	"<div class='col l4 antes-depois'>"+
					 					"<input type='text' disabled id='antes' class='center'>"+
					 				"</div>"+
					 				"<div class='col l3 center'>"+
					 					"<h4><b>DOMINGO</b></h4>"+
					 				"</div>"+
					 				"<div class='col l4 antes-depois'>"+
					 					"<input type='text' disabled id='depois' class='center'>"+
					 				"</div>"+
								 	"<div class='center col l10 offset-l1 xl10 offset-xl1 resposta-antes-depois'>"+
									 	"<p onClick=\"verificaResposta('QUARTA-FEIRA')\">QUARTA-FEIRA</p>"+
									 	"<p onClick=\"verificaResposta('SEGUNDA-FEIRA')\">SEGUNDA-FEIRA</p>"+
									 	"<p onClick=\"verificaResposta('QUINTA-FEIRA')\">QUINTA-FEIRA</p>"+
									 	"<p onClick=\"verificaResposta('TERCA-FEIRA')\">TERÇA-FEIRA</p>"+
									 	"<p onClick=\"verificaResposta('SABADO')\">SABADO</p>"+
									 	"<p onClick=\"verificaResposta('SEXTA-FEIRA')\">SEXTA-FEIRA</p>"+
								 	"</div>"
						);			
		break;
		case 2:
			respostaAntes = "DOMINGO";
			respostaDepois = "TERCA-FEIRA";
			$("#perguntas").html(	"<div class='col l4 antes-depois'>"+
					 					"<input type='text' disabled id='antes' class='center'>"+
					 				"</div>"+
					 				"<div class='col l4 center'>"+
					 					"<h4><b>SEGUNDA-FEIRA</b></h4>"+
					 				"</div>"+
					 				"<div class='col l4 antes-depois'>"+
					 					"<input type='text' disabled id='depois' class='center'>"+
					 				"</div>"+
								 	"<div class='center col l9 offset-l2 xl10 offset-xl1 resposta-antes-depois'>"+
									 	"<p onClick=\"verificaResposta('TERCA-FEIRA')\">TERÇA-FEIRA</p>"+
									 	"<p onClick=\"verificaResposta('DOMINGO')\">DOMINGO</p>"+
									 	"<p onClick=\"verificaResposta('QUARTA-FEIRA')\">QUARTA-FEIRA</p>"+
									 	"<p onClick=\"verificaResposta('SEXTA-FEIRA')\">SEXTA-FEIRA</p>"+
									 	"<p onClick=\"verificaResposta('SABADO')\">SABADO</p>"+
									 	"<p onClick=\"verificaResposta('QUINTA-FEIRA')\">QUINTA-FEIRA</p>"+
								 	"</div>"
						);			
		break;
		case 3:
			respostaAntes = "SEGUNDA-FEIRA";
			respostaDepois = "QUARTA-FEIRA";
			$("#perguntas").html(	"<div class='col l4 antes-depois'>"+
					 					"<input type='text' disabled id='antes' class='center'>"+
					 				"</div>"+
					 				"<div class='col l4 center'>"+
					 					"<h4><b>TERÇA-FEIRA</b></h4>"+
					 				"</div>"+
					 				"<div class='col l4 antes-depois'>"+
					 					"<input type='text' disabled id='depois' class='center'>"+
					 				"</div>"+
								 	"<div class='center col l9 offset-l2 xl10 offset-xl1 resposta-antes-depois'>"+
									 	"<p onClick=\"verificaResposta('SEGUNDA-FEIRA')\">SEGUNDA-FEIRA</p>"+
									 	"<p onClick=\"verificaResposta('QUARTA-FEIRA')\">QUARTA-FEIRA</p>"+
									 	"<p onClick=\"verificaResposta('DOMINGO')\">DOMINGO</p>"+
									 	"<p onClick=\"verificaResposta('QUINTA-FEIRA')\">QUINTA-FEIRA</p>"+
									 	"<p onClick=\"verificaResposta('SABADO')\">SABADO</p>"+
									 	"<p onClick=\"verificaResposta('SEXTA-FEIRA')\">SEXTA-FEIRA</p>"+
								 	"</div>"
						);			
		break;
		case 4:
			respostaAntes = "TERCA-FEIRA";
			respostaDepois = "QUINTA-FEIRA";
			$("#perguntas").html(	"<div class='col l4 antes-depois'>"+
					 					"<input type='text' disabled id='antes' class='center'>"+
					 				"</div>"+
					 				"<div class='col l4 center'>"+
					 					"<h4><b>QUARTA-FEIRA</b></h4>"+
					 				"</div>"+
					 				"<div class='col l4 antes-depois'>"+
					 					"<input type='text' disabled id='depois' class='center'>"+
					 				"</div>"+
								 	"<div class='center col l9 offset-l2 xl10 offset-xl1 resposta-antes-depois'>"+
									 	"<p onClick=\"verificaResposta('SEGUNDA-FEIRA')\">SEGUNDA-FEIRA</p>"+
									 	"<p onClick=\"verificaResposta('TERCA-FEIRA')\">TERÇA-FEIRA</p>"+
									 	"<p onClick=\"verificaResposta('SABADO')\">SABADO</p>"+
									 	"<p onClick=\"verificaResposta('QUINTA-FEIRA')\">QUINTA-FEIRA</p>"+
									 	"<p onClick=\"verificaResposta('DOMINGO')\">DOMINGO</p>"+
									 	"<p onClick=\"verificaResposta('SEXTA-FEIRA')\">SEXTA-FEIRA</p>"+
								 	"</div>"
						);				
		break;
		case 5:
			respostaAntes = "QUARTA-FEIRA";
			respostaDepois = "SEXTA-FEIRA";
			$("#perguntas").html(	"<div class='col l4 antes-depois'>"+
					 					"<input type='text' disabled id='antes' class='center'>"+
					 				"</div>"+
					 				"<div class='col l4 center'>"+
					 					"<h4><b>QUINTA-FEIRA</b></h4>"+
					 				"</div>"+
					 				"<div class='col l4 antes-depois'>"+
					 					"<input type='text' disabled id='depois' class='center'>"+
					 				"</div>"+
								 	"<div class='center col l9 offset-l2 xl10 offset-xl1 resposta-antes-depois'>"+
									 	"<p onClick=\"verificaResposta('QUARTA-FEIRA')\">QUARTA-FEIRA</p>"+
									 	"<p onClick=\"verificaResposta('TERCA-FEIRA')\">TERÇA-FEIRA</p>"+
									 	"<p onClick=\"verificaResposta('DOMINGO')\">DOMINGO</p>"+
									 	"<p onClick=\"verificaResposta('SABADO')\">SABADO</p>"+
									 	"<p onClick=\"verificaResposta('SEXTA-FEIRA')\">SEXTA-FEIRA</p>"+
									 	"<p onClick=\"verificaResposta('SEGUNDA-FEIRA')\">SEGUNDA-FEIRA</p>"+
								 	"</div>"
						);				
		break;
		case 6:
			respostaAntes = "QUINTA-FEIRA";
			respostaDepois = "SABADO";
			$("#perguntas").html(	"<div class='col l4 antes-depois'>"+
					 					"<input type='text' disabled id='antes' class='center'>"+
					 				"</div>"+
					 				"<div class='col l4 center'>"+
					 					"<h4><b>SEXTA-FEIRA</b></h4>"+
					 				"</div>"+
					 				"<div class='col l4 antes-depois'>"+
					 					"<input type='text' disabled id='depois' class='center'>"+
					 				"</div>"+
								 	"<div class='center col l9 offset-l2 xl10 offset-xl1 resposta-antes-depois'>"+
									 	"<p onClick=\"verificaResposta('TERCA-FEIRA')\">TERÇA-FEIRA</p>"+
									 	"<p onClick=\"verificaResposta('DOMINGO')\">DOMINGO</p>"+
									 	"<p onClick=\"verificaResposta('QUINTA-FEIRA')\">QUINTA-FEIRA</p>"+
									 	"<p onClick=\"verificaResposta('QUARTA-FEIRA')\">QUARTA-FEIRA</p>"+
									 	"<p onClick=\"verificaResposta('SABADO')\">SABADO</p>"+
									 	"<p onClick=\"verificaResposta('SEGUNDA-FEIRA')\">SEGUNDA-FEIRA</p>"+
								 	"</div>"
						);				
		break;
		case 7:
			respostaAntes = "SEXTA-FEIRA";
			respostaDepois = "DOMINGO";
			$("#perguntas").html(	"<div class='col l4 antes-depois'>"+
					 					"<input type='text' disabled id='antes' class='center '>"+
					 				"</div>"+
					 				"<div class='col l2 center'>"+
					 					"<h4><b>SABADO</b></h4>"+
					 				"</div>"+
					 				"<div class='col l4 antes-depois'>"+
					 					"<input type='text' disabled id='depois' class='center'>"+
					 				"</div>"+
								 	"<div class='center col l9 offset-l2 xl10 offset-xl1 resposta-antes-depois'>"+
									 	"<p onClick=\"verificaResposta('SEGUNDA-FEIRA')\">SEGUNDA-FEIRA</p>"+
									 	"<p onClick=\"verificaResposta('TERCA-FEIRA')\">TERÇA-FEIRA</p>"+
									 	"<p onClick=\"verificaResposta('SEXTA-FEIRA')\">SEXTA-FEIRA</p>"+
									 	"<p onClick=\"verificaResposta('QUARTA-FEIRA')\">QUARTA-FEIRA</p>"+
									 	"<p onClick=\"verificaResposta('QUINTA-FEIRA')\">QUINTA-FEIRA</p>"+
									 	"<p onClick=\"verificaResposta('DOMINGO')\">DOMINGO</p>"+
								 	"</div>"
						);				
		break;		
	}

}

function sorteiaPergunta(){	
	if(perguntasFeitas.length >= 7){
		perguntasFeitas = [],		
		bool = true;
		$("#jogo").hide();
		$("#ganhou-jogo").show();

	}else{
		pergunta = Math.floor((Math.random() * 7) + 1);		
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
	$("#ganhou-jogo").hide();
	$("#fim-do-jogo").hide();
	$("#jogo").hide();
	$("#vidas").html(vidas)

});

