var numero = 0,
	multiplicador = 2,
	pontuacao = 0;
function comecarJogo(){
	$("#inicio").hide();
	$("#jogo").show();

	var tabuada = $("input[name=tabuada]:checked").val();
	

	$("#tituloJogo").html("<h3>Tabuada do "+tabuada+"</h3>");
	if(tabuada == 2){
		$("#enunciado").html("<h4>Uma <img src='imagens/bicicleta.png' class='img-tabuada-bicicleta'> tem 2 rodas</h4>");
	}else if(tabuada == 4){
		$("#enunciado").html("<h4>Uma <img src='imagens/girafa.png' class='img-tabuada-girafa'> tem 4 patas</h4>");
	}

	

	$("#priResultados").html(
							"<p> "+tabuada+" x 0 = 0 </p>"+
							"<p> "+tabuada+" x 1 = "+(tabuada*1)+ "</p>"
							);

	calculaTabuada(tabuada);
}
function voltar(){
	numero = 0;
	multiplicador = 2;
	pontuacao = 0;
	$("#pontuacao").html(0);
	$("#inicio").show();
	$("#jogo").hide();
}

function calculaTabuada(tabuada){

	var vetNumeros = ["Duas", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove", "Dez"];
	var opcao = $("input[name=entrada]:checked").val();
	if(numero < vetNumeros.length){
		if(tabuada == 2){
			$("#respJogo").html(
								"<div class='col l12'>"+
									"<h3> "+vetNumeros[numero]+" BICICLETAS tem "+
										"<input class='input-tabuada resposta' type='text' value='' data-tabuada = "+tabuada+"> rodas</h3>"+
								"</div>"
								);
		}
		else if(tabuada == 4){
			$("#respJogo").html(
								"<div class='col l12'>"+
									"<h3> "+vetNumeros[numero]+" GIRAFAS tem "+
										"<input class='input-tabuada resposta' type='text' value='' data-tabuada = "+tabuada+"> patas</h3>"+
								"</div>"
								);
		}
		if(opcao == "enter"){
			setInterval(comecarJogo, 1000);
			$('.resposta').val();
		}
		$("input[type='text']").bind('keydown',function(e) {
			if(e.keyCode == '13'){
				verificaResposta( $(this).data('tabuada')) ;
			}
		});
	}else{
		alert("Parabéns! Você conseguiu.");
	}

	$(".resposta").focus();

}

function verificaResposta(tabuada){
	var resp = $(".resposta").val();
	var correto = tabuada * multiplicador;

	if(resp == correto){		
		pontuacao += 10;
		$("#pontuacao").html(pontuacao)
		$("#priResultados").append("<p>"+tabuada+" x "+multiplicador+" = "+resp+"</p>");
		numero+=1;
		multiplicador+=1;
		calculaTabuada(tabuada);
	}else{
		alert("Você errou, tente novamente.");
		$(".resposta").val("");
	}
}
$(document).ready(function(){
	$("#jogo").hide();

	$("input[type='text']").bind('keydown',function(e) {
		console.log(e.keyCode)  
		if(e.keyCode == '13'){
			verificaResposta( $($(this).data('tabuada')) );
		}
	});
});