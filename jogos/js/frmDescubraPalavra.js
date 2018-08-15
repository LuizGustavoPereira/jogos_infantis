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
});


function comecarJogo(){
	vidas = 3;
	pontuacao = 0;
	sorteados = [];	
	clearTimeout(tempo);
	count = 0;
	$("#jogarNovamente").hide();
	$("#fim-do-jogo").hide();
	$("#ganhou-jogo").hide();
	$("#pontuacao").html(pontuacao);
	$("#jogo").show();
	$("#vidas").html(vidas);
	$("#telaInicial").hide();
	$(".input-resposta-descubra-palavra").val("");
	$("#"+idAtual).removeClass("input-descubra-palavra-clique");
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
	if(acertos<=1){
		if(id == silaba && grupoAtual == grupo){
			$("#"+idAtual).removeClass("input-descubra-palavra-clique");
			$("#"+id+grupo).val(id);
			$("#"+idAtual).prop("disabled", true);
			$("#"+id+grupo).prop("disabled", true);
			acertos+=1;
		}
	}else{
		$("#jogo").hide();
		$("#ganhou-jogo").show();
	}	
}