var resp = "",
	sorteados = [],
	time = "",
	pontuacao = 0,
	vidas = 3,
	count = 0,
	letras = 0,
	posInput = 1,
	nomeFruta = "",
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
	sorteiaFruta();
}

function sorteiaFruta(){
	nomeFruta = [];
	posInput = 1;
	verificaFrutas()	
	switch (1){
		case 1:
			letras = 7;
			$("#divResp").html("");
			$("#logoTime").html("<img class='width-50' src='imagens/salada-de-frutas/abacaxi.png'>");
			for(var i=0; i < letras; i++){
				$("#divResp").append("<input type=\"text\" name=\"nome\" id=\"nomeFruta"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\" data-next=\"#nomeTime"+(i+1)+"\" >");			
			}
			$("#dica").html("DICA: "+letras+" letras");
			resp = "ABACAXI";
		break;

	}
	$("#nomeTime0").focus();
	$("input[type='text']").bind('keyup',function(e) {	
		nomeFruta = [];			
		if(e.keyCode == '13'){
			for(var i = 0; i<letras; i++){
				nomeFruta += $("#nomeTime"+i).val() ;
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

function verificaFrutas(){
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