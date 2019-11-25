var resp = "",
	sorteados = [],
	pergunta = "",
	pontuacao = 0,
	count = 1,
	letras = 0,
	posInput = 1,
	resposta = "",
	tempo;

audioErrou = document.getElementById('audio-errou');
audioAcertou = document.getElementById('audio-acertou');

function comecarJogo(){
	pontuacao = 0;
	sorteados = [];	
	clearTimeout(tempo);
	count = 1;
	tempo = setInterval("atualizaTempo()", 10000);
	$("#min").html("<p>inicio</p>");
	$("#pontuacao").html(pontuacao);
	$("#jogo").show();
	$("#countTempo").html("&nbsp;");
	$("#telaInicial").hide();
	$("#fim-do-jogo").hide();
	$("#ganhou-jogo").hide();
	$("#resposta").focus();
	$("#jogarNovamente").hide();
	$("#passarPalavra").hide();
	sorteiaPerguntas();
}

function sorteiaPerguntas(perguntaRepetida){
	count = 1;
	$("#divResp").html("");
	resposta = [];
	posInput = 1;	
	if(perguntaRepetida == null){
		verificaSorteados();
	}	
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
			resp = "LÍNGUA";
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
	$("#resposta0").prop('readonly', true);
	$("#resposta0").val(resp[0]);
	$("#resposta1").focus();
	$("input[type='text']").bind('keyup',function(e) {
		console.log(posInput)
		if(resp=="LÍNGUA"){
			var letraInserida = ($("#resposta"+(posInput-1)).val())	
			if((posInput-1)==1 && letraInserida.toUpperCase() == "I"){
				$("#resposta"+(posInput-1)).val("Í")
			}
		}
		resposta = [];				
		if(e.keyCode == '13'){
			for(var i = 0; i<letras; i++){
				resposta += $("#resposta"+i).val() ;
			}
			$("#resposta1").focus();
			verificaResposta(resposta);
		}else{
			if(e.keyCode != 8){
				if(posInput <= letras){								
					posInput++;
					$("#resposta"+posInput).focus();
				}
			}else{
				if(posInput > 1){
					posInput--;
				}
				$("#resposta"+posInput).focus();

			}			
		}
	});
		
	
}

function verificaSorteados(){
	if(sorteados.length >= 10){
		clearTimeout(tempo);
		audioGanhou.play();
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
		audioAcertou.play();
		pontuacao += 10;
		$("#pontuacao").html(pontuacao)
		passarPalavra();
	}else{
		audioErrou.play();
		for(i = 1; i < resposta.length; i ++){
			$("#resposta"+i).val("")
		}
		sorteiaPerguntas(pergunta)		
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
	if(count < 4 ){
		color = "green";
		$("#countTempo").append("<div style='background-color:"+color+"'></div>");
	}else if(count < 8){
		color = "blue";
		$("#countTempo").append("<div style='background-color:"+color+"'></div>");
	}else if (count < 12){
		color = "red";
		$("#countTempo").append("<div style='background-color:"+color+"'></div>");
	}

	if(count == 6){
		$("#min").append("&nbsp;&nbsp;&nbsp;<p>1 min</p>");
	}
	else if(count == 12){
		$("#min").append("&nbsp;&nbsp;&nbsp;<p>2 min</p>");
		for(i = 1; i < resp.length; i ++){
			$("#resposta"+i).val(resp[i]);
			$("#resposta"+i).prop('readonly', true);
		}
		$('#passarPalavra').show();
	}
	count ++;	
}

function passarPalavra(){
	sorteiaPerguntas();
	$("#passarPalavra").hide();
	clearTimeout(tempo);
	$("#countTempo").html("&nbsp;");
	tempo = setInterval("atualizaTempo()", 6000);
	$("#min").html("<p>inicio</p>");
}

$(document).ready(function(){
	$("#jogo").hide();
	$("#fim-do-jogo").hide();
	$("#ganhou-jogo").hide();
});