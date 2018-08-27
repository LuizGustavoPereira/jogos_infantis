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

function corrigir(){
	erro = 0;
	for(i=1;i<=55;i++){
		var letra = $("."+i).attr('id').split('-');
		var valor = $("."+i).val();
		$("."+i).removeClass("border-casa-s-errado");
		if(letra[1] != valor){
			erro +=1;
			$("."+i).addClass("border-casa-s-errado");
		}
	}
	if(erro == 0){
		$("#jogo").hide();
		$("#ganhou-jogo").show();
	}
}

function dica(numero){
	if(numero == 1){
		$("#dica").val("Onde você mora.");
	}
	if(numero == 2){
		$("#dica").val("Onde coloca flores.");
	}
	if(numero == 3){
		$("#dica").val("O contrário de fundo.");
	}
	if(numero == 4){
		$("#dica").val("Atrás das grades.");
	}
	if(numero == 5){
		$("#dica").val("Demora de pagamento.");
	}
	if(numero == 6){
		$("#dica").val("Aquilo que é bom e saboro também é...");
	}
	if(numero == 7){
		$("#dica").val("Creme que se coloca no sanduiche ou na batata.");
	}
	if(numero == 8){
		$("#dica").val("Que causa tédio.");
	}
	if(numero == 9){
		$("#dica").val("Palavra derivada do mel.");
	}
	if(numero == 10){
		$("#dica").val("1ª pessoa do presente do indicativo do verbo 'pensar'.");
	}
	if(numero == 11){
		$("#dica").val("Aquilo que a balança faz.");
	}
	if(numero == 12){
		$("#dica").val("Aquilo que o cachorro gosta de roer e brincar.");
	}
	if(numero == 13){
		$("#dica").val("Material que reveste o chão.");
	}

}

function comecarJogo(){
	vidas = 3;
	pontuacao = 0;
	sorteados = [];	
	$("#jogo").show();
	$("#telaInicial").hide();
}









