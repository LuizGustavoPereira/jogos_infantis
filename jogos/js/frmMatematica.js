var cor         	= 1,
	pergunta        = 0,	
	operacao        = "",
	primeiroNumero  = 0,
	segundoNumero   = 0,
	valorFinal		= 0,			
	pontuacao       = 0,
	perguntasFeitas = [],
	vidas           = 3;

audioErrou = document.getElementById('audio-errou');
audioAcertou = document.getElementById('audio-acertou');
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
	if(valor == "+"){
		resultado = primeiroNumero + segundoNumero
	}else if(valor == "-"){
		resultado = primeiroNumero - segundoNumero;
	}else if(valor == "/"){
		resultado = primeiroNumero / segundoNumero;
	}else{
		resultado = primeiroNumero * segundoNumero;
	}
	if(resultado == valorFinal){
		audioAcertou.play();
		$("#resp").removeClass("erro")
		$("#resp").addClass("acerto")
		$("#resp").html(valor)
		index = 1;
		setTimeout("formularPergunta()", 1000);		
	}else{
		audioErrou.play();
		$("#resp").removeClass("acerto")
		$("#resp").addClass("erro");
	}	

}

function formularPergunta(){
	sorteiaPergunta();		
	$("#perguntas").html(	
						"<div class='col l10 offset-l1  xl10 offset-xl1 center pergunta-matematica margin-top-5'>"+

		 					"<h2><b> "+primeiroNumero+" </b> <span id='resp' class='center animation-span pergunta-matematica '>&#63;</span> <b> "+segundoNumero+" = "+valorFinal+"</b> </h2>"+
		 				"</div>"+									
					 	"<div class='center col l9 offset-l3 xl9 offset-xl3 resposta-matematica'>"+
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
		audio.play();

	}else{	
			sorteiaOperacao();	
			while(Number.isInteger(valorFinal) != true || (primeiroNumero == 0 && segundoNumero==0) || valorFinal<0){
				sorteiaOperacao();
			}			
		var pergunta = primeiroNumero + operacao + segundoNumero +" = "+ valorFinal; 		
		if(perguntasFeitas.indexOf(pergunta) > -1){
			sorteiaPergunta();
		}else{	
			perguntasFeitas.push(pergunta);
		}
	}	
}

function sorteiaOperacao(){
	primeiroNumero  = parseInt( Math.floor((Math.random() * 5) + 0) );		
	segundoNumero  = parseInt( Math.floor((Math.random() * 5) + 0) );
	operacao = operacoes[Math.floor((Math.random() * 4))];
	switch (operacao){
		case "+":
			valorFinal = primeiroNumero + segundoNumero;
			valorFinal = parseFloat(valorFinal.toFixed(2));
			resp = "&#43;";
		break;
		case "-":
			valorFinal = primeiroNumero - segundoNumero;
			valorFinal = parseFloat(valorFinal.toFixed(2));
			resp = "&#8722;";
		break;
		case "/":
			valorFinal = primeiroNumero / segundoNumero;
			valorFinal = parseFloat(valorFinal.toFixed(2));
			resp = "&divide;";
		break;
		case "*":
			valorFinal = primeiroNumero * segundoNumero;
			valorFinal = parseFloat(valorFinal.toFixed(2));
			resp = "&#215;";
		break;
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

