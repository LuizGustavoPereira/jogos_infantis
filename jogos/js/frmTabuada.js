var numero = 0,
	multiplicador = 2,
	valor = 0,
	pontuacao = 0,
	entradaTec = "",
	valTabuada = 0,
	tempo;	

function comecarJogo(){
	$("#jogarNovamente").hide();
	$("#inicio").hide();
	$("#jogo").show();

	var entrada = $("input[name=entrada]:checked").val();
	var tabuada = $("input[name=tabuada]:checked").val();
	entradaTec = entrada;
	valTabuada = tabuada;

	$("#tituloJogo").html("<h3>Tabuada do "+valTabuada+"</h3>");
	if(valTabuada == 2){
		$("#enunciado").html("<h4>Uma <img src='imagens/tabuada/bicicleta.png' class='img-tabuada-bicicleta'> tem 2 rodas</h4>");
	}else if(valTabuada == 4){
		$("#enunciado").html("<h4>Uma <img src='imagens/tabuada/girafa.png' class='img-tabuada-girafa'> tem 4 patas</h4>");
	}

	

	$("#priResultados").html(
							"<p> 		 "+valTabuada+" x 0 	= 	0 </p>"+
							"<p> 		 "+valTabuada+" x 1 	= 	"+(valTabuada*1)+ "</p>"+
							"<p id='0' > "+valTabuada+" x 2 	= 	?	</p>"+
							"<p id='1' > "+valTabuada+" x 3 	= 	?	</p>"+
							"<p id='2' > "+valTabuada+" x 4 	= 	?	</p>"+
							"<p id='3' > "+valTabuada+" x 5 	= 	?	</p>"+
							"<p id='4' > "+valTabuada+" x 6 	= 	?	</p>"+
							"<p id='5' > "+valTabuada+" x 7 	= 	?	</p>"+
							"<p id='6' > "+valTabuada+" x 8 	= 	?	</p>"+
							"<p id='7' > "+valTabuada+" x 9 	= 	?	</p>"+
							"<p id='8' > "+valTabuada+" x 10 	= 	?	</p>"
							);	

		calculaTabuada();			
}

function calculaTabuada(valor = ""){
	$("#pontuacao").html(pontuacao);
	var vetNumeros = ["Duas", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove", "Dez"];
	var opcao = $("input[name=entrada]:checked").val();
	if(numero < vetNumeros.length){
		if(valTabuada == 2){
			$("#respJogo").html(
								"<div class='col l8 center-align'>"+
									"<h3> "+vetNumeros[numero]+" BICICLETAS tem "+
										"<input class='input-tabuada resposta' type='text' value='"+valor+"' data-tabuada = "+valTabuada+"> rodas</h3>"+
								"</div>"
								);
		}
		else if(valTabuada == 4){
			$("#respJogo").html(
								"<div class='col l8 center-align'>"+
									"<h3> "+vetNumeros[numero]+" GIRAFAS tem "+
										"<input class='input-tabuada resposta' type='text' value='"+valor+"' data-tabuada = "+valTabuada+"> patas</h3>"+
								"</div>"
								);
		}
		$("input[type='text']").bind('keydown',function(e) {
			if(e.keyCode == '13'){
				verificaResposta( $(this).data('tabuada')) ;
			}
		});
		if(entradaTec == "enter"){
			tempo = setTimeout( "incrementaValor()", 2500 );
		}
	}

	$(".resposta").focus();

}

function incrementaValor(){
	if( valor >= ( valTabuada*10 ) ){
		valor = 0;
		calculaTabuada(valor);
	}else{
		valor += parseInt(valTabuada);
		calculaTabuada(valor);
	}
}

function verificaResposta(){
	var resp = $(".resposta").val();
	var correto = valTabuada * multiplicador;
	var chave = 0;

	if(resp == correto){	
		$("#"+numero).html(valTabuada+" x 2 = "+correto);	
		pontuacao += 10;			
		numero+=1;
		multiplicador+=1;
		chave = 1;
		valor = 0;
		clearTimeout(tempo);
		calculaTabuada();
	}else{
		valor = 0;
		alert("Você errou, tente novamente.");
		$(".resposta").val("");
		chave = 0;
	}
	if(multiplicador > 10 && chave == 1){
		alert("Parabéns! Você conseguiu.");
		clearTimeout(tempo);
		$("#jogarNovamente").show();		
		numero = 0;
		multiplicador = 2;
		pontuacao = 0;
	}
}

function voltar(){
	numero = 0;
	multiplicador = 2;	
	pontuacao = 0;
	valor = 0;
	clearTimeout(tempo);
	$("#pontuacao").html(0);
	$("#inicio").show();
	$("#jogo").hide();
}

$(document).ready(function(){
	$("#jogo").hide();
	$("#jogarNovamente").hide();

	$("input[type='text']").bind('keydown',function(e) {
		if(e.keyCode == '13'){
			verificaResposta( $($(this).data('tabuada')) );
		}
	});
});