function comecarJogo(){
	$("#jogo").show();
	$("#telaInicial").hide();
}

function voltar(){
	$("#jogo").hide();
	$("#telaInicial").show();
}

$(document).ready(function(){
	$("#jogo").hide();	
	$("#ganhou-jogo").hide();
	$("#fim-do-jogo").hide();
});