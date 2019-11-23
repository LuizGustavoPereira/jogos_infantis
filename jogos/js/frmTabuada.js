var numero = 0,
	multiplicador = 2,
	valor = 0,
	entradaTec = "",
	valTabuada = 0;

audioGanhou = document.getElementById('audio-ganhou');
audioErrou = document.getElementById('audio-errou');
audioAcertou = document.getElementById('audio-acertou');

function comecarJogo(){
	$("#ganhou-jogo").hide();
	$("#fim-do-jogo").hide();
	$("#inicio").hide();
	$("#jogo").show();
	var entrada = $("input[name=entrada]:checked").val();
	var tabuada = $("input[name=tabuada]:checked").val();
	entradaTec = entrada;
	valTabuada = tabuada;

	if(entradaTec == "enter"){
		tempo = setInterval( "incrementaValor()", 3000 );
	}

	$("#tituloJogo").html("<h3>TABUADA DO "+valTabuada+"</h3>");
	if(valTabuada == 2){
		$("#enunciado").html("<h4>Uma <img src='imagens/tabuada/bicicleta.png' class='img-tabuada-bicicleta'> tem 2 rodas</h4>");
	}else if(valTabuada == 4){
		$("#enunciado").html("<h4>Uma <img src='imagens/tabuada/girafa.png' class='img-tabuada-girafa'> tem 4 patas</h4>");
	}else if(valTabuada == 6){
		$("#enunciado").html("<h4>Uma <img src='imagens/tabuada/arvore.png' class='img-tabuada-girafa'> tem 6 maçãs</h4>");
	}else if(valTabuada == 8){
		$("#enunciado").html("<h4>Uma <img src='imagens/tabuada/aranha.png' class='img-tabuada-girafa'> tem 8 pernas</h4>");
	}else if(valTabuada == 10){
		$("#enunciado").html("<h4>Uma <img src='imagens/tabuada/arvore10.png' class='img-tabuada-10'> tem 10 maçãs</h4>");
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
	var vetNumeros = ["Duas", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove", "Dez"];
	var opcao = $("input[name=entrada]:checked").val();
	if(numero < vetNumeros.length){
		if(valTabuada == 2){
			$("#respJogo").html(
								"<div class='col l12 center-align'>"+
									"<h3> "+vetNumeros[numero]+" BICICLETAS tem "+
										"<input class='input-tabuada resposta' type='text' value='"+valor+"' data-tabuada = "+valTabuada+"> rodas</h3>"+
								"</div>"
								);
		}
		else if(valTabuada == 4){
			$("#respJogo").html(
								"<div class='col l12 center-align'>"+
									"<h3> "+vetNumeros[numero]+" GIRAFAS tem "+
										"<input class='input-tabuada resposta' type='text' value='"+valor+"' data-tabuada = "+valTabuada+"> patas</h3>"+
								"</div>"
								);
		}
		else if(valTabuada == 6){
			$("#respJogo").html(
								"<div class='col l12 center-align'>"+
									"<h3> "+vetNumeros[numero]+" ARVORES tem "+
										"<input class='input-tabuada resposta' type='text' value='"+valor+"' data-tabuada = "+valTabuada+"> maçãs</h3>"+
								"</div>"
								);
		}
		else if(valTabuada == 8){
			$("#respJogo").html(
								"<div class='col l12 center-align'>"+
									"<h3> "+vetNumeros[numero]+" ARANHA tem "+
										"<input class='input-tabuada resposta' type='text' value='"+valor+"' data-tabuada = "+valTabuada+"> pernas</h3>"+
								"</div>"
								);
		}
		else if(valTabuada == 10){
			$("#respJogo").html(
								"<div class='col l12 center-align'>"+
									"<h3> "+vetNumeros[numero]+" ÁRVORES tem "+
										"<input class='input-tabuada resposta' type='text' value='"+valor+"' data-tabuada = "+valTabuada+"> maçãs</h3>"+
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
		numero+=1;
		multiplicador+=1;
		chave = 1;
		valor = 0;
		audioAcertou.play()
		calculaTabuada();
	}else{
		valor = 0;
		audioErrou.play()
		$(".resposta").val("");
		chave = 0;

	}
	if(multiplicador > 10 && chave == 1){
		audioGanhou.play()
		$("#ganhou-jogo").show();
		$("#jogo").hide();		
		numero = 0;
		multiplicador = 2;
	}
}

function voltar(){
	numero = 0;
	multiplicador = 2;	
	valor = 0;
	$("#inicio").show();
	$("#jogo").hide();
}

$(document).ready(function(){
	$("#jogo").hide();	
	$("#ganhou-jogo").hide();
	$("#fim-do-jogo").hide();

	$("input[type='text']").bind('keydown',function(e) {
		if(e.keyCode == '13'){
			verificaResposta( $($(this).data('tabuada')) );
		}
	});
});