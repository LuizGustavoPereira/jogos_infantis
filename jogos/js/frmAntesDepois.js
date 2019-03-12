var cor = 1,
	pergunta = 0,
	index = 1,
	respostaAntes = "",	
	respostaDepois = "",	
	pontuacao = 0,
	perguntasFeitas = [],
	vidas = 3,
	count = 0,
	tempo;


audio = document.getElementById('audio');
var bool = true


function comecarJogo(){	
	pontuacao = 0;
	clearTimeout(tempo);
	tempo = setInterval("atualizaTempo()", 10000);
	$("#jogo").show();
	$("#ganhou-jogo").hide();
	$("#fim-do-jogo").hide();
	$("#telaInicial").hide();
	$("#countTempo").html("&nbsp;");
	$("#jogarNovamente").hide();
	$("#pontuacao").html(pontuacao);	
	formularPergunta();
}

function atualizaTempo(){
	if(count < 6 ){
		color = "green";
	}else if(count < 12){
		color = "blue";
	}else if (count < 18){
		color = "red";
	}
	else{
		$(".resposta-antes-depois").prop('disabled', true);
		$("#jogarNovamente").show();
		clearTimeout(tempo);
	}
	if(count == 6){
		$("#min").append("&nbsp;&nbsp;&nbsp;<p>1 min</p>");
	}
	else if(count == 12){
		$("#min").append("&nbsp;&nbsp;&nbsp;<p>2 min</p>");
	}
	else if(count == 18){
		$("#min").append("&nbsp;&nbsp;&nbsp;<p>3 min</p>");
	}
	$("#countTempo").append("<div style='background-color:"+color+"'></div>");
	count ++;	
}

function verificaResposta(resposta) {
	if(index == 1){
		if(resposta == respostaAntes){
			$("#antes").val(resposta)
			index = 2;
			$("#depois").addClass("animation");
			$("#antes").removeClass("animation");
		}else{						
			//alert("resposta errada");
		}
	}else{
		if(resposta == respostaDepois){
			pontuacao += 10
			$("#pontuacao").html(pontuacao);
			$("#depois").val(resposta)
			index = 1;
			setTimeout("formularPergunta()", 1000);
			
		}else{			
			//alert("resposta errada");
		}
	}

	if( vidas < 0 ){
		$("#jogo").hide();
		$("#fim-do-jogo").show();
	}
}

function formularPergunta(){
	sorteiaPergunta();	
	switch(pergunta){
		case 1:
			respostaAntes = "SABADO";
			respostaDepois = "SEGUNDA-FEIRA";
			$("#perguntas").html(	"<div class='col l4 xl4 antes-depois'>"+
					 					"<input type='text' disabled id='antes' class='center animation input-antes-depois' placeholder='ANTES'>"+
					 				"</div>"+
					 				"<div class='col l4 xl4 center'>"+
					 					"<h5><b>DOMINGO</b></h5>"+
					 				"</div>"+
					 				"<div class='col l4 xl4 antes-depois'>"+
					 					"<input type='text' disabled id='depois' class='center input-antes-depois' placeholder='DEPOIS'>"+
					 				"</div>"+
								 	"<div class='center col l9 offset-l2 xl10 offset-xl1 resposta-antes-depois'>"+
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
			$("#perguntas").html(	"<div class='col l4 xl4 antes-depois'>"+
					 					"<input type='text' disabled id='antes' class='center animation input-antes-depois' placeholder='ANTES' placeholder='ANTES'>"+
					 				"</div>"+
					 				"<div class='col l4 xl4 center'>"+
					 					"<h5><b>SEGUNDA-FEIRA</b></h5>"+
					 				"</div>"+
					 				"<div class='col l4 xl4 antes-depois'>"+
					 					"<input type='text' disabled id='depois' class='center input-antes-depois' placeholder='DEPOIS'>"+
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
			$("#perguntas").html(	"<div class='col l4 xl4 antes-depois'>"+
					 					"<input type='text' disabled id='antes' class='center animation input-antes-depois' placeholder='ANTES'>"+
					 				"</div>"+
					 				"<div class='col l4 xl4 center'>"+
					 					"<h5><b>TERÇA-FEIRA</b></h5>"+
					 				"</div>"+
					 				"<div class='col l4 xl4 antes-depois'>"+
					 					"<input type='text' disabled id='depois' class='center input-antes-depois' placeholder='DEPOIS'>"+
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
			$("#perguntas").html(	"<div class='col l4 xl4 antes-depois'>"+
					 					"<input type='text' disabled id='antes' class='center animation input-antes-depois' placeholder='ANTES'>"+
					 				"</div>"+
					 				"<div class='col l4 xl4 center'>"+
					 					"<h5><b>QUARTA-FEIRA</b></h5>"+
					 				"</div>"+
					 				"<div class='col l4 xl4 antes-depois'>"+
					 					"<input type='text' disabled id='depois' class='center input-antes-depois' placeholder='DEPOIS'>"+
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
			$("#perguntas").html(	"<div class='col l4 xl4 antes-depois'>"+
					 					"<input type='text' disabled id='antes' class='center animation input-antes-depois' placeholder='ANTES'>"+
					 				"</div>"+
					 				"<div class='col l4 xl4 center'>"+
					 					"<h5><b>QUINTA-FEIRA</b></h5>"+
					 				"</div>"+
					 				"<div class='col l4 xl4 antes-depois'>"+
					 					"<input type='text' disabled id='depois' class='center input-antes-depois' placeholder='DEPOIS'>"+
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
			$("#perguntas").html(	"<div class='col l4 xl4 antes-depois'>"+
					 					"<input type='text' disabled id='antes' class='center animation input-antes-depois' placeholder='ANTES'>"+
					 				"</div>"+
					 				"<div class='col l4 xl4 center'>"+
					 					"<h5><b>SEXTA-FEIRA</b></h5>"+
					 				"</div>"+
					 				"<div class='col l4 xl4 antes-depois'>"+
					 					"<input type='text' disabled id='depois' class='center input-antes-depois' placeholder='DEPOIS'>"+
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
			$("#perguntas").html(	"<div class='col l4 xl4 antes-depois'>"+
					 					"<input type='text' disabled id='antes' class='center animation input-antes-depois' placeholder='ANTES'>"+
					 				"</div>"+
					 				"<div class='col l4 xl4 center'>"+
					 					"<h5><b>SABADO</b></h5>"+
					 				"</div>"+
					 				"<div class='col l4 xl4 antes-depois'>"+
					 					"<input type='text' disabled id='depois' class='center input-antes-depois' placeholder='DEPOIS'>"+
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

});

