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

$("input[type='text']").bind('keyup',function(e) {
	if($(".caixa"+posInput).val()!=""){
		posInput+=1;
		$(".caixa"+posInput).focus();
	}else{
		if(posInput>1){
			posInput-=1;	
		}		
		$(".caixa"+posInput).focus();
	}
	var idCaixa = document.getElementsByClassName('caixa'+posInput)[0].id;
	var idCaixa = idCaixa.split("-");
	var idCaixa = idCaixa[0];
	dica(idCaixa,posInput);
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
		else if(letra[1] == valor){
			$("."+i).addClass("border-casa-s-certo");
			$("."+i).prop('disabled', true);
		}
	}
	if(erro == 0){
		$("#jogo").hide();
		$("#ganhou-jogo").show();
	}
}

function dica(numero, caixa){
	if(numero == 1){
		$("#dica").html("Onde você mora.");
	}
	if(numero == 2){
		$("#dica").html("Onde coloca flores.");
	}
	if(numero == 3){
		$("#dica").html("O contrário de fundo.");
	}
	if(numero == 4){
		$("#dica").html("Atrás das grades.");
	}
	if(numero == 5){
		$("#dica").html("Demora de pagamento.");
	}
	if(numero == 6){
		$("#dica").html("Aquilo que é bom e saboro também é...");
	}
	if(numero == 7){
		$("#dica").html("Creme que se coloca no sanduiche ou na batata.");
	}
	if(numero == 8){
		$("#dica").html("Que causa tédio.");
	}
	if(numero == 9){
		$("#dica").html("Palavra derivada do mel.");
	}
	if(numero == 10){
		$("#dica").html("1ª pessoa do presente do indicativo do verbo 'pensar'.");
	}
	if(numero == 11){
		$("#dica").html("Aquilo que a balança faz.");
	}
	if(numero == 12){
		$("#dica").html("Aquilo que o cachorro gosta de roer e brincar.");
	}
	if(numero == 13){
		$("#dica").html("Material que reveste o chão.");
	}	
	posInput = caixa;
	$(".caixa"+posInput).focus();
}

function comecarJogo(){
	vidas = 3;
	pontuacao = 0;
	sorteados = [];	
	$("#jogo").show();
	$("#telaInicial").hide();	
	$(".caixa"+posInput).focus();
}











