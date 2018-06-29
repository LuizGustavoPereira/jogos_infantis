var resp = "",
	sorteados = [],
	pergunta = "",
	pontuacao = 0,
	vidas = 3,
	count = 0,
	letras = 0,
	posInput = 2,
	index = 0,
	tempo = 0;
	resposta = "";

function comecarJogo(){
	vidas = 3;
	pontuacao = 0;
	sorteados = [];	
	count = 0;
	$("#min").html("<p>inicio</p>");
	$("#pontuacao").html(pontuacao);
	$("#jogo").show();
	$("#vidas").html(vidas);
	$("#telaInicial").hide();
	$("#resposta").focus();
	$("#fim-do-jogo").hide();
	$("#ganhou-jogo").hide();
	sorteiaPerguntas();
}

function sorteiaPerguntas(){
	clearTimeout(tempo);
	$("#divResp").html("");
	resposta = [];
	posInput = 2;
	verificaSorteados();
	index = 0;
	switch (pergunta){
		case 1:
			resp = "POLEGAR";	
			$("#pergunta").html("<img src='imagens/times/escudo-do-corinthians.png'>");
			for(var i=0; i < resp.length; i++){
				$("#divResp").append("<input type=\"text\" name=\"resposta\" id=\"resposta"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\" data-next=\"#resposta"+(i+1)+"\" >");			
			}						
		break;
		case 2:			
			resp = "PORCO";
			$("#pergunta").html("<img src='imagens/times/escudo-do-corinthians.png'>");
			for(var i=0; i < resp.length; i++){
				$("#divResp").append("<input type=\"text\" name=\"resposta\" id=\"resposta"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\">");			
			}			
		break;
		case 3:
			resp = "PINGO";
			$("#pergunta").html("<img src='imagens/times/escudo-do-corinthians.png'>");
			for(var i=0; i < resp.length; i++){
				$("#divResp").append("<input type=\"text\" name=\"resposta\" id=\"resposta"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\">");			
			}			
		break;
		case 4:
			resp = "BERINJELA";
			$("#pergunta").html("<img src='imagens/times/escudo-do-corinthians.png'>");
			for(var i=0; i < resp.length; i++){
				$("#divResp").append("<input type=\"text\" name=\"resposta\" id=\"resposta"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\">");			
			}			
		break;
		case 5:
			resp = "BOLA";
			$("#pergunta").html("<img src='imagens/times/escudo-do-corinthians.png'>");
			for(var i=0; i < resp.length; i++){
				$("#divResp").append("<input type=\"text\" name=\"resposta\" id=\"resposta"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\">");			
			}			
		break;
		case 6:
			resp = "PIPA";
			$("#pergunta").html("<img src='imagens/times/escudo-do-corinthians.png'>");
			for(var i=0; i < resp.length; i++){
				$("#divResp").append("<input type=\"text\" name=\"resposta\" id=\"resposta"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\">");			
			}			
		break;
		case 7:
			resp = "BANANA";
			$("#pergunta").html("<img src='imagens/times/escudo-do-corinthians.png'>");
			for(var i=0; i < resp.length; i++){
				$("#divResp").append("<input type=\"text\" name=\"resposta\" id=\"resposta"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\">");			
			}			
		break;
		case 8:
			resp = "BOLO";
			$("#pergunta").html("<img src='imagens/times/escudo-do-corinthians.png'>");
			for(var i=0; i < resp.length; i++){
				$("#divResp").append("<input type=\"text\" name=\"resposta\" id=\"resposta"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\">");			
			}			
		break;
		case 9:
			resp = "PEIXE";
			$("#pergunta").html("<img src='imagens/times/escudo-do-corinthians.png'>");
			for(var i=0; i < resp.length; i++){
				$("#divResp").append("<input type=\"text\" name=\"resposta\" id=\"resposta"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\">");			
			}			
		break;
		case 10:
			resp = "PENA";
			$("#pergunta").html("<img src='imagens/times/escudo-do-corinthians.png'>");
			for(var i=0; i < resp.length; i++){
				$("#divResp").append("<input type=\"text\" name=\"resposta\" id=\"resposta"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\">");						
			}			
		break;
	}
	letras = resp.length;	
	$("#resposta1").focus();
	opcoes();
	for(var i = 0; i< letras; i++){
		if(i != 1){			
			$("#resposta"+i).val(resp[i]);
			$("#resposta"+i).prop('readonly', true);
		}
	}			
	$("input[type='text']").bind('keyup',function(e) {
		resposta = [];
		if(e.keyCode == '13'){
			for(var i = 0; i<letras; i++){
				resposta += $("#resposta"+i).val() ;
			}
			verificaResposta(resposta);
		}
	});
		
	
}

function verificaSorteados(){
	if(sorteados.length >= 10){		
		$("#ganhou-jogo").show();
		$("#jogo").hide();
		$("#resposta").prop('disabled', true);

	}else{		
		pergunta = Math.floor((Math.random() * 10) + 1);
		if(sorteados.indexOf(pergunta) > -1){
			verificaSorteados();
		}else{	
			sorteados.push(pergunta);			
		}
	}
}

function verificaResposta(resposta){
	var resposta  = resposta.toUpperCase();
	$("#resposta").val("");
	if( resposta == resp ){
		pontuacao += 10;
		$("#pontuacao").html(pontuacao)
		alert("VOCÊ ACERTOU");						
		sorteiaPerguntas();
	}else{
		vidas-=1;
		$("#vidas").html(vidas);
		verificaVidas();
		alert("ERROU");
	}

}

function opcoes(){
	var opcoes = ["A", "E", "I", "O", "U"];
	if(index < opcoes.length){
		$("#resposta1").val(opcoes[index]);
		index +=1;
	}else{
		index = 0;
		$("#resposta1").val(opcoes[index]);
	}
	tempo = setTimeout( "opcoes()", 2500 );
}
function verificaVidas(){
	if (vidas < 0){
		$("#fim-do-jogo").show();
		$("#jogo").hide();
		$("#resposta").prop('disabled', true);
	}
}
function jogarNovamente(){
	$("#resposta").prop('disabled', false);
	comecarJogo();
}
function voltar(){
	$("#resposta").prop('disabled', false);
	$("#jogo").hide();
	$("#telaInicial").show();
}

$(document).ready(function(){
	$("#jogo").hide();
	$("#fim-do-jogo").hide();
	$("#ganhou-jogo").hide();
});