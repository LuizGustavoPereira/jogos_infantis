var resp = "",
	sorteados = [],
	time = "",
	pontuacao = 0,
	vidas = 3,
	count = 0,
	tempo;

function comecarJogo(){
	vidas = 3;
	pontuacao = 0;
	sorteados = [];	
	clearTimeout(tempo);
	count = 0;
	tempo = setInterval("atualizaTempo()", 10000);
	$("#min").html("<p>inicio</p>");
	$("#pontuacao").html(pontuacao);
	$("#jogo").show();
	$("#vidas").html(vidas);
	$("#countTempo").html("&nbsp;");
	$("#telaInicial").hide();
	$("#nomeTime").focus();
	sorteiaTime();
}

function sorteiaTime(){
	verificaTimes()	
	switch (time){
		case 1:
			$("#logoTime").html("<img src='imagens/times/escudo-do-botafogo.png'>");
			$("#dica").html("DICA: 8 letras");
			resp = "BOTAFOGO";
		break;
		case 2:
			$("#logoTime").html("<img src='imagens/times/escudo-do-corinthians.png'>");
			$("#dica").html("DICA: 12 letras");
			resp = "CORINTHIANS";
		break;
		case 3:
			$("#logoTime").html("<img src='imagens/times/escudo-do-flamengo.png'>");
			$("#dica").html("DICA: 8 letras");
			resp = "FLAMENGO";
		break;
		case 4:
			$("#logoTime").html("<img src='imagens/times/escudo-do-fluminense.png'>");
			$("#dica").html("DICA: 10 letras");
			resp = "FLUMINENSE";
		break;
		case 5:
			$("#logoTime").html("<img src='imagens/times/escudo-do-gremio.png'>");
			$("#dica").html("DICA: 6 letras");
			resp = "GRÊMIO";
		break;
		case 6:
			$("#logoTime").html("<img src='imagens/times/escudo-do-internacional.png'>");
			$("#dica").html("DICA: 13 letras");
			resp = "INTERNACIONAL";
		break;
		case 7:
			$("#logoTime").html("<img src='imagens/times/escudo-do-palmeiras.png'>");
			$("#dica").html("DICA: 9 letras");
			resp = "PALMEIRAS";
		break;
		case 8:
			$("#logoTime").html("<img src='imagens/times/escudo-do-santos.png'>");
			$("#dica").html("DICA: 6 letras");
			resp = "SANTOS";
		break;
		case 9:
			$("#logoTime").html("<img src='imagens/times/escudo-do-sao-paulo.png'>");
			$("#dica").html("DICA: 8 letras");
			resp = "SÃO PAULO";
		break;
		case 10:
			$("#logoTime").html("<img src='imagens/times/escudo-do-vasco.png'>");
			$("#dica").html("DICA: 5 letras");
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
	$("#jogarNovamente").hide();
	$("#nomeTime").prop('disabled', false);
	comecarJogo();
}
function voltar(){
	$("#jogarNovamente").hide();
	$("#nomeTime").prop('disabled', false);
	$("#jogo").hide();
	$("#telaInicial").show();
}

function atualizaTempo(){
	if(count < 6 ){
		color = "green";
	}else if(count < 12){
		color = "blue";
	}else if (count < 17){
		color = "red";
	}
	else{
		$("#nomeTime").prop('disabled', true);
		$("#jogarNovamente").show();
		clearTimeout(tempo);
	}
	if(count == 6){
		$("#min").append("&nbsp;&nbsp;&nbsp;<p>1 min</p>");
	}
	else if(count == 12){
		$("#min").append("&nbsp;&nbsp;&nbsp;<p>2 min</p>");
	}
	else if(count == 17){
		$("#min").append("&nbsp;&nbsp;&nbsp;<p>3 min</p>");
	}
	$("#countTempo").append("<div style='background-color:"+color+"'></div>");
	count ++;	
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