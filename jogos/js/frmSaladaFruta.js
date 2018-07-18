var resp = "",
	sorteados = [],
	time = "",
	pontuacao = 0,
	vidas = 3,
	count = 0,
	letras = 0,
	posInput = 1,
	nomeFruta = "",
	index=1,
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
	switch (2){
		case 1:
			resp = "ABACAXI";
			input = 0;
			index = 0;
			array_index = [1,2,3,4,5,6,7];
			array_letras=["A","C","A","B","A","I","X"];
			$("#divResp").html("");
			$("#letrasFruta").html("");
			$("#imagemFruta").html("<img class='width-100' src='imagens/salada-de-frutas/abacaxi.png'>");
			for(var i=0; i < array_index.length; i++){
				if((i%2 == 0)){
					$("#letrasFruta").append("<span class='float-left letra-salada-fruta-par' id=letra1>"+array_letras[i]+"</span>");
				}else{
					$("#letrasFruta").append("<span class='float-left letra-salada-fruta-impar' id=letra1>"+array_letras[i]+"</span>");
				}
			}
			for(var i=0; i < array_index.length; i++){
				$("#divResp").append("<input type=\"text\" name=\"nome\" id=\"nomeFruta"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\" data-next=\"#nomeTime"+(i+1)+"\" >");			
			}
			
			opcoes();
		break;
		case 2:
			resp = "MELANCIA";
			input = 0;
			index = 0;
			array_index = [0,1,2,3,4,5,6,7];
			array_letras=["L","A","N","M","A","I","C","E"];
			$("#divResp").html("");
			$("#letrasFruta").html("");
			$("#imagemFruta").html("<img class='width-100' src='imagens/salada-de-frutas/melancia.png'>");
			for(var i=0; i < array_index.length; i++){
				if((i%2 == 0)){
					$("#letrasFruta").append("<span class='float-left letra-salada-fruta-par' id=letra"+i+">"+array_letras[i]+"</span>");
				}else{
					$("#letrasFruta").append("<span class='float-left letra-salada-fruta-impar' id=letra"+i+">"+array_letras[i]+"</span>");
				}
			}
			for(var i=0; i < array_index.length; i++){
				$("#divResp").append("<input type=\"text\" name=\"nome\" id=\"nomeFruta"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\" data-next=\"#nomeTime"+(i+1)+"\" >");			
			}
			
			opcoes();
		break;
	}	
	$(document).keypress(function(e) {
    	if(e.which == 13) {
    		var valor = $('#letra'+array_index[index-1]).text();
    		alert(valor);
    		
    		if(valor == resp[input]){
    			$('#letra'+array_index[index-1]).hide();
    			console.log(resp[input])    			
    			$("#nomeFruta"+input).val(valor)
    			array_index.splice(index-1, 1);
    			input+=1
    			index-=1
    		}
    	}
	});
}

function opcoes(){
	if((array_index).length > 0){
		if(array_index[index] == null){
			$("#letra"+(array_index[index-1])).removeClass("animacao-fruta");
			index = 0
		}
		$("#letra"+(array_index[index-1])).removeClass("animacao-fruta");
		$("#letra"+(array_index[index])).addClass("animacao-fruta");
		index +=1;
		tempo = setTimeout( "opcoes()", 2500 );	
	}
	else{
		sorteiaFruta();
	}
	
}

function verificaFrutas(){
	if(sorteados.length >= 1){
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