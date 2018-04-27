var numero = 0,
	multiplicador = 2,
	valor = 0,
	pontuacao = 0;
function comecarJogo(){
	$("#jogarNovamente").hide();
	$("#inicio").hide();
	$("#jogo").show();

	var tabuada = $("input[name=tabuada]:checked").val();
	var entrada = $("input[name=entrada]:checked").val();

	$("#tituloJogo").html("<h3>Tabuada do "+tabuada+"</h3>");
	if(tabuada == 2){
		$("#enunciado").html("<h4>Uma <img src='imagens/tabuada/bicicleta.png' class='img-tabuada-bicicleta'> tem 2 rodas</h4>");
	}else if(tabuada == 4){
		$("#enunciado").html("<h4>Uma <img src='imagens/tabuada/girafa.png' class='img-tabuada-girafa'> tem 4 patas</h4>");
	}

	

	$("#priResultados").html(
							"<p> "+tabuada+" x 0 = 0 </p>"+
							"<p> "+tabuada+" x 1 = "+(tabuada*1)+ "</p>"
							);
	if(entrada == "num"){
		calculaTabuada(tabuada);		
	}else{
		setInterval( incrementaValor(tabuada, valor), 1000 );
	}
}
function voltar(){
	numero = 0;
	multiplicador = 2;	
	pontuacao = 0;
	$("#pontuacao").html(0);
	$("#inicio").show();
	$("#jogo").hide();
}

function calculaTabuada(tabuada, valor=""){
	$("#pontuacao").html(pontuacao);
	var vetNumeros = ["Duas", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove", "Dez"];
	var opcao = $("input[name=entrada]:checked").val();
	if(numero < vetNumeros.length){
		if(tabuada == 2){
			$("#respJogo").html(
								"<div class='col l12'>"+
									"<h3> "+vetNumeros[numero]+" BICICLETAS tem "+
										"<input class='input-tabuada resposta' type='text' value='"+valor+"' data-tabuada = "+tabuada+"> rodas</h3>"+
								"</div>"
								);
		}
		else if(tabuada == 4){
			$("#respJogo").html(
								"<div class='col l12'>"+
									"<h3> "+vetNumeros[numero]+" GIRAFAS tem "+
										"<input class='input-tabuada resposta' type='text' value="+valor+" data-tabuada = "+tabuada+"> patas</h3>"+
								"</div>"
								);
		}
		$("input[type='text']").bind('keydown',function(e) {
			if(e.keyCode == '13'){
				verificaResposta( $(this).data('tabuada')) ;
			}
		});
	}

	$(".resposta").focus();

}

function incrementaValor(tabuada, valor){
	calculaTabuada(tabuada,valor);
	valor += parseInt(tabuada);
	console.log(valor);
}

function verificaResposta(tabuada){
	var resp = $(".resposta").val();
	var correto = tabuada * multiplicador;
	var chave = 0;

	if(resp == correto){		
		pontuacao += 10;			
		$("#priResultados").append("<p>"+tabuada+" x "+multiplicador+" = "+resp+"</p>");
		numero+=1;
		multiplicador+=1;
		chave = 1;
		calculaTabuada(tabuada);
	}else{
		alert("Você errou, tente novamente.");
		$(".resposta").val("");
		chave = 0;
	}
	if(multiplicador > 10 && chave == 1){
		alert("Parabéns! Você conseguiu.");
		$("#jogarNovamente").show();		
		numero = 0;
		multiplicador = 2;
		pontuacao = 0;
	}
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