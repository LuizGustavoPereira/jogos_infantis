var cor         	= 1,
	pergunta        = 0,	
	operacao        = "",
	primeiroNumero  = 0,
	segundoNumero   = 0,
	valorFinal		= 0,			
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
	
	if(valor == operacao){
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
						"<div class='margin-top-5 col l8 offset-l2 center'>"+
		 					"<h4><b>"+primeiroNumero+"</b> <input type='text' disabled id='resp' class='center pergunta-matematica'> <b> "+segundoNumero+" = "+valorFinal+"</b> </h4>"+
		 				"</div>"+									
					 	"<div class='center col l10 offset-l1 xl7 offset-xl4 resposta-matematica'>"+
						 	"<p onClick=\"verificaResposta('+')\">&#43;</p>"+
						 	"<p onClick=\"verificaResposta('-')\">&#8722;</p>"+
						 	"<p onClick=\"verificaResposta('/')\">&divide;</p>"+
						 	"<p onClick=\"verificaResposta('*')\">&#215;</p>"+									 	
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
		primeiroNumero  = parseInt( Math.floor((Math.random() * 10) + 1) );		
		segundoNumero  = parseInt( Math.floor((Math.random() * 10) + 1) );
		operacao = operacoes[Math.floor((Math.random() * 4))];
		switch (operacao){
			case "+":
				valorFinal = primeiroNumero + segundoNumero;
				valorFinal = parseFloat(valorFinal.toFixed(2));
			break;
			case "-":
				valorFinal = primeiroNumero - segundoNumero;
				valorFinal = parseFloat(valorFinal.toFixed(2));
			break;
			case "/":
				valorFinal = primeiroNumero / segundoNumero;
				valorFinal = parseFloat(valorFinal.toFixed(2));
			break;
			case "*":
				valorFinal = primeiroNumero * segundoNumero;
				valorFinal = parseFloat(valorFinal.toFixed(2));
			break;

		}
		var pergunta = primeiroNumero + operacao + segundoNumero +" = "+ valorFinal; 		
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

