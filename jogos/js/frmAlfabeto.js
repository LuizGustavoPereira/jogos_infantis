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
	letra = "";

audioErrou = document.getElementById('audio-errou');
audioAcertou = document.getElementById('audio-acertou');

audioGanhou = document.getElementById('audio-ganhou');

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
	$("#jogarNovamente").hide();
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
			letra = "O";	
			$("#pergunta").html("<img class='width-50 alfabeto-img-height ' src='imagens/alfabeto/polegar.png'>");
			for(var i=0; i < resp.length; i++){
				$("#divResp").append("<input type=\"text\" name=\"resposta\" id=\"resposta"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\" data-next=\"#resposta"+(i+1)+"\" >");			
			}						
		break;
		case 2:			
			resp = "PORCO";
			letra = "O";	
			$("#pergunta").html("<img class='width-50 alfabeto-img-height' src='imagens/alfabeto/porco.png'>");
			for(var i=0; i < resp.length; i++){
				$("#divResp").append("<input type=\"text\" name=\"resposta\" id=\"resposta"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\">");			
			}			
		break;
		case 3:
			resp = "BOCA";
			letra = "O";	
			$("#pergunta").html("<img class='width-50 alfabeto-img-height' src='imagens/alfabeto/boca.png'>");
			for(var i=0; i < resp.length; i++){
				$("#divResp").append("<input type=\"text\" name=\"resposta\" id=\"resposta"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\">");			
			}			
		break;
		case 4:
			resp = "TOMATE";
			letra = "O";	
			$("#pergunta").html("<img class='width-50 alfabeto-img-height' src='imagens/alfabeto/tomate.png'>");
			for(var i=0; i < resp.length; i++){
				$("#divResp").append("<input type=\"text\" name=\"resposta\" id=\"resposta"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\">");			
			}			
		break;
		case 5:
			resp = "BOLA";
			letra = "O";	
			$("#pergunta").html("<img class='width-50 alfabeto-img-height' src='imagens/alfabeto/bola.png'>");
			for(var i=0; i < resp.length; i++){
				$("#divResp").append("<input type=\"text\" name=\"resposta\" id=\"resposta"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\">");			
			}			
		break;
		case 6:
			resp = "PIPA";
			letra = "I";	
			$("#pergunta").html("<img class='width-50 alfabeto-img-height' src='imagens/alfabeto/pipa.png'>");
			for(var i=0; i < resp.length; i++){
				$("#divResp").append("<input type=\"text\" name=\"resposta\" id=\"resposta"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\">");			
			}			
		break;
		case 7:
			resp = "BANANA";
			letra = "A";	
			$("#pergunta").html("<img class='width-50 alfabeto-img-height' src='imagens/alfabeto/banana.png'>");
			for(var i=0; i < resp.length; i++){
				$("#divResp").append("<input type=\"text\" name=\"resposta\" id=\"resposta"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\">");			
			}			
		break;
		case 8:
			resp = "BOLO";
			letra = "O";	
			$("#pergunta").html("<img class='width-50 alfabeto-img-height' src='imagens/alfabeto/bolo.png'>");
			for(var i=0; i < resp.length; i++){
				$("#divResp").append("<input type=\"text\" name=\"resposta\" id=\"resposta"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\">");			
			}			
		break;
		case 9:
			resp = "PEIXE";
			letra = "E";	
			$("#pergunta").html("<img class='width-50 alfabeto-img-height' src='imagens/alfabeto/peixe.png'>");
			for(var i=0; i < resp.length; i++){
				$("#divResp").append("<input type=\"text\" name=\"resposta\" id=\"resposta"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\">");			
			}			
		break;
		case 10:
			resp = "PENA";
			letra = "E";	
			$("#pergunta").html("<img class='width-50 alfabeto-img-height' src='imagens/alfabeto/pena.png'>");
			for(var i=0; i < resp.length; i++){
				$("#divResp").append("<input type=\"text\" name=\"resposta\" id=\"resposta"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\">");						
			}			
		break;
	}

	$("input").prop('disabled', true);
	letras = resp.length;	
	$("#resposta1").focus();
	opcoes();
	for(var i = 0; i< letras; i++){
		if(i != 1){			
			$("#resposta"+i).val(resp[i]);
		}
	}			
		
	
}

function verificaSorteados(){
	if(sorteados.length >= 10){		
		$("#ganhou-jogo").show();
		audioGanhou.play();
		$("#jogo").hide();
		$("#resposta").prop('disabled', true);
		$("#jogarNovamente").show();

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
		vidas = 3;
		$("#vidas").html(vidas);
		$('td[name=resposta]').addClass("acerto");
		audioAcertou.play();
		clearTimeout(tempo);
		setTimeout("sorteiaPerguntas()", 2000);		
	}else{
		vidas-=1;
		$("#vidas").html(vidas);
		audioErrou.play();
		verificaVidas();	
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
	tempo = setTimeout( "opcoes()", 3000 );
}
function verificaVidas(){
	if (vidas < 0){
		vidas = 3;
		$("#vidas").html(vidas);
		$("#resposta1").val(letra);
		setTimeout("sorteiaPerguntas()", 1000);
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

	$("body").bind('keyup',function(e) {
		resposta = [];
		if(e.keyCode == '13'){
			for(var i = 0; i<letras; i++){
				resposta += $("#resposta"+i).val() ;
			}
			verificaResposta(resposta);
		}
	});

});