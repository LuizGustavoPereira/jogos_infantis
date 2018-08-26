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
	for(i=1;i<=55;i++){
		var letra = $("."+i).attr('id').split('-');
		var valor = $("."+i).val();
		$("."+i).removeClass("border-casa-s-errado");
		if(letra[1] != valor){
			$("."+i).addClass("border-casa-s-errado");
		}
	}
	// var chars = $(".1").attr('id').split('-');
	// console.log(chars[1]);
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
	if(acertos<=1){
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



