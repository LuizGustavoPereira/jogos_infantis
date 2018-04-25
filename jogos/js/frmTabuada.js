var i = 0;
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

	calculaTabuada();
}
function voltar(){
	i = 0;
	$("#inicio").show();
	$("#jogo").hide();
}

function calculaTabuada(){
	var vetNumeros = ["Duas", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove", "Dez"];

	$("#respJogo").html(
						"<div class='col l12'>"+
							"<h3> "+vetNumeros[i]+" BICICLETAS tem <input class='input-tabuada' type='text' value='4'> rodas</h3>"+
						"</div>"
						);

	i+=1;
}

$(document).ready(function(){
	$("#jogo").hide();
});