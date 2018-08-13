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

$(document).ready(function(){
	$("#jogo").hide();
	$("#jogarNovamente").hide();
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
}

function clicaSilaba(id) {
	if(idAtual!=""){
		$("#"+idAtual).removeClass("input-descubra-palavra-clique");
	}	
	$("#"+id).addClass("input-descubra-palavra-clique");
	idAtual = id
	silaba = $("#"+id).val();
}

function verificaSilaba(id) {
	if(id == silaba){
		$("#"+idAtual).removeClass("input-descubra-palavra-clique");
		$("#"+id).val(id)
	}
}