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
	$("#pergunta").html("");
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

