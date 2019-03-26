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
		pontuacao += 10
		$("#pontuacao").html(pontuacao);
		$("#resp").html(valor)
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
						"<div class='col l8 offset-l4 xl8 offset-xl4 pergunta-matematica margin-top-5'>"+

		 					"<text><b> "+primeiroNumero+" </b> <span id='resp' class='center pergunta-matematica fa-blink'>&#63;</span> <b> "+segundoNumero+" = "+valorFinal+"</b> </text>"+
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

