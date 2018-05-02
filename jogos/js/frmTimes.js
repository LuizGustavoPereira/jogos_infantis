var resp = "",
	sorteados = [],
	time = "",
	pontuacao = 0,
	vidas = 3;

function comecarJogo(){
	$("#pontuacao").html(pontuacao)
	$("#jogo").show();
	$("#vidas").html(vidas);
	$("#telaInicial").hide();
	$("#nomeTime").focus();
	sorteiaTime();
}

function sorteiaTime(){
	verificaTimes()	
	switch (time){
		case 1:
			$("#logoTime").html("<img src='imagens/times/escudo-do-botafogo.png'>");
			resp = "BOTAFOGO";
		break;
		case 2:
			$("#logoTime").html("<img src='imagens/times/escudo-do-corinthians.png'>");
			resp = "CORINTHIANS";
		break;
		case 3:
			$("#logoTime").html("<img src='imagens/times/escudo-do-flamengo.png'>");
			resp = "FLAMENGO";
		break;
		case 4:
			$("#logoTime").html("<img src='imagens/times/escudo-do-fluminense.png'>");
			resp = "FLUMINENSE";
		break;
		case 5:
			$("#logoTime").html("<img src='imagens/times/escudo-do-gremio.png'>");
			resp = "GREMIO";
		break;
		case 6:
			$("#logoTime").html("<img src='imagens/times/escudo-do-internacional.png'>");
			resp = "INTERNACIONAL";
		break;
		case 7:
			$("#logoTime").html("<img src='imagens/times/escudo-do-palmeiras.png'>");
			resp = "PALMEIRAS";
		break;
		case 8:
			$("#logoTime").html("<img src='imagens/times/escudo-do-santos.png'>");
			resp = "SANTOS";
		break;
		case 9:
			$("#logoTime").html("<img src='imagens/times/escudo-do-sao-paulo.png'>");
			resp = "SÃO PAULO";
		break;
		case 10:
			$("#logoTime").html("<img src='imagens/times/escudo-do-vasco.png'>");
			resp = "VASCO";
		break;
	}
		
	
}

function verificaTimes(){
	if(sorteados.length >= 10){
		alert("PARABENS! VOCÊ CONSEGUIU");
		$("#jogarNovamente").show();
		$("#nomeTime").prop('disabled', true);

	}else{		
		time = Math.floor((Math.random() * 10) + 1);
		if(sorteados.indexOf(time) > -1){
			verificaTimes();
		}else{	
			sorteados.push(time);			
		}
	}
}

function verificaResposta(){
	var resposta  = $("#nomeTime").val().toUpperCase();
	$("#nomeTime").val("");
	if( resposta == resp ){
		pontuacao += 10;
		$("#pontuacao").html(pontuacao)
		alert("VOCÊ ACERTOU");
		sorteiaTime();
	}else{
		vidas-=1;
		$("#vidas").html(vidas);
		verificaVidas();
		alert("ERROU");
	}

}
function verificaVidas(){
	if (vidas < 0){
		$("#jogarNovamente").show();
		$("#nomeTime").prop('disabled', true);
	}
}
function jogarNovamente(){
	vidas = 3;
	pontuacao = 0;
	sorteados = [];	
	$("#jogarNovamente").hide();
	$("#nomeTime").prop('disabled', false);
	comecarJogo();
}
function voltar(){
	vidas = 3;
	pontuacao = 0;
	sorteados = [];
	$("#jogarNovamente").hide();
	$("#nomeTime").prop('disabled', false);
	$("#jogo").hide();
	$("#telaInicial").show();
}

$(document).ready(function(){
	$("#jogo").hide();
	$("#jogarNovamente").hide();

	$("input[type='text']").bind('keydown',function(e) {
		if(e.keyCode == '13'){
			verificaResposta( );
		}
	});
});