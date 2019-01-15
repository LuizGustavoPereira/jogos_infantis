var resp = "",
	sorteados = [],
	pontuacao = 0,
	vidas = 3,
	count = 0,
	letras = 0,
	posInput = 1,
	tempo;	
	silaba = "";
	idAtual = "";
	grupoAtual = "";
	acertos = 0;

$(document).ready(function(){
	$("#jogo").hide();
	$("#jogarNovamente").hide();
	$("#ganhou-jogo").hide();
	$("#fim-do-jogo").hide();
});


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
	$("#telaInicial").hide();
	$(".input-resposta-descubra-palavra").val("");
	if(idAtual != ""){
		$("#"+idAtual).removeClass("input-descubra-palavra-clique");	
	}	
}

function clicaSilaba(grupo, numero) {
	if(idAtual!=""){
		$("#"+idAtual).removeClass("input-descubra-palavra-clique");
	}	
	grupoAtual = grupo;
	idAtual = grupo+numero
	$("#"+idAtual).addClass("input-descubra-palavra-clique");
	silaba = $("#"+idAtual).val();
}

function verificaSilaba(id,grupo) {
	if(acertos<=10){
		if(id == silaba && grupoAtual == grupo){
			$("#"+idAtual).removeClass("input-descubra-palavra-clique");
			$("#"+id+grupo).val(id);
			$("#"+idAtual).prop("disabled", true);
			$("#"+id+grupo).prop("disabled", true);
			acertos+=1;
		}else{
			if(vidas>0){
				vidas-=1;
				$("#vidas").html(vidas);
			}else{
				$("#jogo").hide();
				$("#fim-do-jogo").show();
			}		
		}
	}else{
		$("#jogo").hide();
		$("#ganhou-jogo").show();
	}	
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
		$("#jogo").hide();
		$("#fim-do-jogo").show();
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


function tecla(){
    window.alert("O código da tecla pressionada foi: " + event.keyCode);
}
  
document.body.onkeypress = tecla;