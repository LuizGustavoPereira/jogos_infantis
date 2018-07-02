var resp = "",
	sorteados = [],
	pergunta = "",
	pontuacao = 0,
	vidas = 3,
	count = 0,
	letras = 0,
	posInput = 2,
	resposta = "",
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
	$("#fim-do-jogo").hide();
	$("#ganhou-jogo").hide();
	$("#resposta").focus();
	$("#jogarNovamente").hide();
	sorteiaPerguntas();
}

function sorteiaPerguntas(){
	$("#divResp").html("");
	resposta = [];
	posInput = 2;
	verificaSorteados();
	// pergunta = 10;	
	switch (pergunta){
		case 1:
			resp = "BONECA";			
			letras = resp.length;
			$("#pergunta").html("<h5>Tem pernas mas nao caminha.<br> Tem olhos mas nunca vê.<br> Tem braços mas nao abraça.<br> Tem boca não sei pra que.</h5>");
			for(var i=0; i < letras; i++){
				$("#divResp").append("<input type=\"text\" name=\"resposta\" id=\"resposta"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\" data-next=\"#resposta"+(i+1)+"\" >");			
			}
			$("#dica").html("DICA: "+letras+" letras");
		break;
		case 2:
			resp = "VENTO";
			letras = resp.length;
			$("#pergunta").html("<h5>Voa, voa não tem asa leva a vida a assobiar.<br> Sopra, sobra não tem boca.<br> Tem pé e vive no ar.</h5>");
			for(var i=0; i < letras; i++){
				$("#divResp").append("<input type=\"text\" name=\"resposta\" id=\"resposta"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\">");			
			}
			$("#dica").html("DICA: "+letras+" letras");
		break;
		case 3:
			resp = "MEIA";
			letras = resp.length;
			$("#pergunta").html("<h5>Pode ser grossa ou bem fina<br> Anda sempre passo a passo<br> Existe de corpo inteiro, mas tem nome de pedaco.</h5>");
			for(var i=0; i < letras; i++){
				$("#divResp").append("<input type=\"text\" name=\"resposta\" id=\"resposta"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\">");			
			}
			$("#dica").html("DICA: "+letras+" letras");
		break;
		case 4:
			resp = "SAPATO";
			letras = resp.length;
			$("#pergunta").html("<h5>Não consegue andar sozinho. <br>Corre até quando não quer. <br>Pode ser grande ou pequeno. <br>Mas tem o tamanho do pé.</h5>");
			for(var i=0; i < letras; i++){
				$("#divResp").append("<input type=\"text\" name=\"resposta\" id=\"resposta"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\">");			
			}
			$("#dica").html("DICA: "+letras+" letras");
		break;
		case 5:
			resp = "PRATO";
			letras = resp.length;
			$("#pergunta").html("<h5>Vive em cima da mesa. <br>Costuma matar a fome. <br>Compra-se para comer. <br>Ninguém mastiga nem come</h5>");
			for(var i=0; i < letras; i++){
				$("#divResp").append("<input type=\"text\" name=\"resposta\" id=\"resposta"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\">");			
			}
			$("#dica").html("DICA: "+letras+" letras");
		break;
		case 6:
			resp = "LIVRO";
			letras = resp.length;
			$("#pergunta").html("<h5>Entre os vivos, vive morto <br>Conta histórias sendo mudo <br>Nunca estudou na escola<br> Mas sabe um pouco de tudo.</h5>");
			for(var i=0; i < letras; i++){
				$("#divResp").append("<input type=\"text\" name=\"resposta\" id=\"resposta"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\">");			
			}
			$("#dica").html("DICA: "+letras+" letras");
		break;
		case 7:
			resp = "PERNA";
			letras = resp.length;
			$("#pergunta").html("<h5>Quando parte uma parte outra <br>Quando chega uma chega outra.</h5>");
			for(var i=0; i < letras; i++){
				$("#divResp").append("<input type=\"text\" name=\"resposta\" id=\"resposta"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\">");			
			}
			$("#dica").html("DICA: "+letras+" letras");
		break;
		case 8:
			resp = "FEIJOADA";
			letras = resp.length;
			$("#pergunta").html("<h5>Tem lombo de porco <br>Tem orelha de porco <br>Tem costela de porco <br>Mas mesmo assim não é porco.</h5>");
			for(var i=0; i < letras; i++){
				$("#divResp").append("<input type=\"text\" name=\"resposta\" id=\"resposta"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\">");			
			}
			$("#dica").html("DICA: "+letras+" letras");
		break;
		case 9:
			resp = "LINGUA";
			letras = resp.length;
			$("#pergunta").html("<h5>Mesmo pertinho do céu.<br>Em casa vive trancada.<br>Quer chova, quer faça sol vive sozinha e molhada.</h5>");
			for(var i=0; i < letras; i++){
				$("#divResp").append("<input type=\"text\" name=\"resposta\" id=\"resposta"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\">");			
			}
			$("#dica").html("DICA: "+letras+" letras");
		break;
		case 10:
			resp = "CEBOLA";
			letras = resp.length;
			$("#pergunta").html("<h5>Tenho capa sobre capa, mas quem as quiser tirar, não se escapa sem chorar</h5>");
			for(var i=0; i < letras; i++){
				$("#divResp").append("<input type=\"text\" name=\"resposta\" id=\"resposta"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\">");			
			}
			$("#dica").html("DICA: "+letras+" letras");
		break;
	}
	$("#resposta0").val(resp[0]);
	$("#resposta1").focus();
	$("input[type='text']").bind('keyup',function(e) {
		resposta = [];				
		if(e.keyCode == '13'){
			for(var i = 0; i<letras; i++){
				resposta += $("#resposta"+i).val() ;
			}
			verificaResposta(resposta);
		}else{
			if(posInput <= letras){				
				$("#resposta"+posInput).focus();
				posInput++;
			}
		}
	});
		
	
}

function verificaSorteados(){
	if(sorteados.length >= 10){
		clearTimeout(tempo);
		$("#ganhou-jogo").show();
		$("#jogo").hide();
		$("#resposta").prop('disabled', true);
		$("#jogarNovamente").hide();

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
		clearTimeout(tempo);
		tempo = setInterval("atualizaTempo()", 10000);
		$("#countTempo").html("&nbsp;");
		sorteiaPerguntas();
	}else{
		vidas-=1;
		$("#vidas").html(vidas);
		verificaVidas();
		alert("ERROU");
	}

}
function verificaVidas(){
	if (vidas < 0){
		$("#fim-do-jogo").show();
		$("#jogo").hide();
		$("#resposta").prop('disabled', true);
	}
}
function jogarNovamente(){		
	$("#jogarNovamente").hide();
	$("#resposta").prop('disabled', false);
	comecarJogo();
}
function voltar(){
	$("#jogarNovamente").hide();
	$("#resposta").prop('disabled', false);
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
		$("#resposta").prop('disabled', true);
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
	$("#fim-do-jogo").hide();
	$("#ganhou-jogo").hide();
});