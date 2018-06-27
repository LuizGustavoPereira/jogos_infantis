var resp = "",
	sorteados = [],
	time = "",
	pontuacao = 0,
	vidas = 3,
	count = 0,
	letras = 0,
	posInput = 1,
	nomeTime = "",
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
	nomeTime = [];
	posInput = 1;
	verificaTimes()	
	switch (time){
		case 1:
			letras = 8;
			$("#divResp").html("");
			$("#logoTime").html("<img src='imagens/times/escudo-do-botafogo.png'>");
			for(var i=0; i < letras; i++){
				$("#divResp").append("<input type=\"text\" name=\"nomeTime\" id=\"nomeTime"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\" data-next=\"#nomeTime"+(i+1)+"\" >");			
			}
			$("#dica").html("DICA: "+letras+" letras");
			resp = "BOTAFOGO";
		break;
		case 2:
			letras = 11;
			$("#divResp").html("");
			$("#logoTime").html("<img src='imagens/times/escudo-do-corinthians.png'>");
			for(var i=0; i < letras; i++){
				$("#divResp").append("<input type=\"text\" name=\"nomeTime\" id=\"nomeTime"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\">");			
			}
			$("#dica").html("DICA: "+letras+" letras");
			resp = "CORINTHIANS";
		break;
		case 3:
			letras = 8;
			$("#divResp").html("");
			$("#logoTime").html("<img src='imagens/times/escudo-do-flamengo.png'>");
			for(var i=0; i < letras; i++){
				$("#divResp").append("<input type=\"text\" name=\"nomeTime\" id=\"nomeTime"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\">");			
			}
			$("#dica").html("DICA: "+letras+" letras");
			resp = "FLAMENGO";
		break;
		case 4:
			letras = 10;
			$("#divResp").html("");
			$("#logoTime").html("<img src='imagens/times/escudo-do-fluminense.png'>");
			for(var i=0; i < letras; i++){
				$("#divResp").append("<input type=\"text\" name=\"nomeTime\" id=\"nomeTime"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\">");			
			}
			$("#dica").html("DICA: "+letras+" letras");
			resp = "FLUMINENSE";
		break;
		case 5:
			letras = 6;
			$("#divResp").html("");
			$("#logoTime").html("<img src='imagens/times/escudo-do-gremio.png'>");
			for(var i=0; i < letras; i++){
				$("#divResp").append("<input type=\"text\" name=\"nomeTime\" id=\"nomeTime"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\">");			
			}
			$("#dica").html("DICA: "+letras+" letras");
			resp = "GRÊMIO";
		break;
		case 6:
			letras = 13;
			$("#divResp").html("");
			$("#logoTime").html("<img src='imagens/times/escudo-do-internacional.png'>");
			for(var i=0; i < letras; i++){
				$("#divResp").append("<input type=\"text\" name=\"nomeTime\" id=\"nomeTime"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\">");			
			}
			$("#dica").html("DICA: "+letras+" letras");
			resp = "INTERNACIONAL";
		break;
		case 7:
			letras = 9;
			$("#divResp").html("");
			$("#logoTime").html("<img src='imagens/times/escudo-do-palmeiras.png'>");
			for(var i=0; i < letras; i++){
				$("#divResp").append("<input type=\"text\" name=\"nomeTime\" id=\"nomeTime"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\">");			
			}
			$("#dica").html("DICA: "+letras+" letras");
			resp = "PALMEIRAS";
		break;
		case 8:
			letras = 6;
			$("#divResp").html("");
			$("#logoTime").html("<img src='imagens/times/escudo-do-santos.png'>");
			for(var i=0; i < letras; i++){
				$("#divResp").append("<input type=\"text\" name=\"nomeTime\" id=\"nomeTime"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\">");			
			}
			$("#dica").html("DICA: "+letras+" letras");
			resp = "SANTOS";
		break;
		case 9:
			letras = 8;
			$("#divResp").html("");
			$("#logoTime").html("<img src='imagens/times/escudo-do-sao-paulo.png'>");
			for(var i=0; i < letras; i++){
				$("#divResp").append("<input type=\"text\" name=\"nomeTime\" id=\"nomeTime"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\">");			
			}
			$("#dica").html("DICA: "+letras+" letras");
			resp = "SÃO PAULO";
		break;
		case 10:
			letras = 5;
			$("#divResp").html("");
			$("#logoTime").html("<img src='imagens/times/escudo-do-vasco.png'>");
			for(var i=0; i < letras; i++){
				$("#divResp").append("<input type=\"text\" name=\"nomeTime\" id=\"nomeTime"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\">");			
			}
			$("#dica").html("DICA: "+letras+" letras");
			resp = "VASCO";
		break;
	}
	$("#nomeTime0").focus();
	$("input[type='text']").bind('keyup',function(e) {	
		nomeTime = [];			
		if(e.keyCode == '13'){
			for(var i = 0; i<letras; i++){
				nomeTime += $("#nomeTime"+i).val() ;
			}
			verificaResposta(nomeTime);
		}else{
			if(posInput <= letras){				
				$("#nomeTime"+posInput).focus();
				posInput++;
			}
		}
	});
		
	
}

function verificaTimes(){
	if(sorteados.length >= 10){
		alert("PARABENS! VOCÊ CONSEGUIU");
		clearTimeout(tempo);
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

function verificaResposta(nomeTime){
	var resposta  = nomeTime.toUpperCase();
	console.log(resposta)
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

	
});