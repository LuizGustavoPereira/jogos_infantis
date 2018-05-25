var	pontuacao = 0,
	vidas = 3,
	count = 0,
	tempo;

function comecarJogo(){
	$("#inicio").hide();
	$("#jogo").show();
	$("#pontuacao").html(pontuacao)
	$("#vidas").html(vidas);
	$("#telaInicial").hide();
}

function verificaVidas(){
	if (vidas < 0){
		$("#jogarNovamente").show();
		$("#nomeTime").prop('disabled', true);
	}
}
function jogarNovamente(){
	vidas = 3;
	pontuacao = 0;
	sorteados = [];	
	$("#jogarNovamente").hide();	
	comecarJogo();
}
function voltar(){
	vidas = 3;
	pontuacao = 0;
	$("#jogarNovamente").hide();
	$("#jogo").hide();
	$("#telaInicial").show();
}

$(document).ready(function(){
	$("#jogo").hide();
	$("#jogarNovamente").hide();

	$("input[type='text']").bind('keydown',function(e) {
		if(e.keyCode == '13'){
			verificaResposta( );
		}
	});
});