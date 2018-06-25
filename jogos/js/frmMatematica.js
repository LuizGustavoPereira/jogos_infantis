var cor         	= 1,
	pergunta        = 0,	
	resposta        = "",
	primeiroNumero  = 0,
	segundoNumero   = 0, 			
	pontuacao       = 0,
	perguntasFeitas = [],
	vidas           = 3;


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

function verificaResposta(valor) {
	
	if(valor == resposta){
		pontuacao += 10
		$("#pontuacao").html(pontuacao);
		$("#resp").val(valor)
		index = 1;
		setTimeout("formularPergunta()", 1000);
		
	}else{
		vidas-=1;
		$("#vidas").html(vidas);
		alert("resposta errada");

		if( vidas < 0 ){
			$("#jogo").hide();
			$("#fim-do-jogo").show();
		}
	}	

}

function formularPergunta(){
	sorteiaPergunta();		
	$("#perguntas").html(	
						"<div class='col l8 offset-l2 center'>"+
		 					"<h4><b>3</b> <input type='text' disabled id='resp' class='center pergunta-matematica'> <b> 1 = 4</b> </h4>"+
		 				"</div>"+									
					 	"<div class='center col l10 offset-l1 xl5 offset-xl5 resposta-antes-depois'>"+
						 	"<p onClick=\"verificaResposta('+')\">+</p>"+
						 	"<p onClick=\"verificaResposta('-')\">-</p>"+
						 	"<p onClick=\"verificaResposta('/')\">/</p>"+
						 	"<p onClick=\"verificaResposta('*')\">*</p>"+									 	
					 	"</div>"
					);							

}

function sorteiaPergunta(){	
	operacoes = ["+","-","/","*"];
	if(perguntasFeitas.length >= 10){
		perguntasFeitas = [],		
		bool = true;
		$("#jogo").hide();
		$("#ganhou-jogo").show();

	}else{
		primeiroNumero  = parseInt( Math.floor((Math.random() * 20) + 1) );		
		segundoNumero  = parseInt( Math.floor((Math.random() * 20) + 1) );
		resposta = operacoes[Math.floor((Math.random() * 4))];
		switch (resposta){
			case "+":
				valorFinal = primeiroNumero + segundoNumero;
			break;
			case "-":
				valorFinal = primeiroNumero - segundoNumero;
			break;
			case "/":
				valorFinal = primeiroNumero / segundoNumero;
			break;
			case "*":
				valorFinal = primeiroNumero * segundoNumero;
			break;

		}			
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

