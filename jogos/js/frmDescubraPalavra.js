var resp = "",
	sorteados = [],
	count = 0,
	letras = 0,
	posInput = 1,
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
	acertos = 0;
	sorteados = [];	
	count = 0;
	$("#min").html("<p>inicio</p>");	
	$("#jogo").show();
	$("#acertos").html(acertos);
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
	if(acertos < 24){
		if(id == silaba && grupoAtual == grupo){
			$("#"+idAtual).removeClass("input-descubra-palavra-clique");
			$("#"+id+grupo).val(id);
			$("#"+idAtual).prop("disabled", true);
			$("#"+id+grupo).prop("disabled", true);
			if(!$("#"+id+grupo).hasClass('erro')){
				acertos+=1;
			}

			$("#"+id+grupo).removeClass("erro");
			$("#"+id+grupo).addClass("acerto");
			
			$("#acertos").html(acertos);
		}else{
			console.log(id)
			console.log(grupo)
			console.log(silaba)
			$("#"+idAtual).removeClass("input-descubra-palavra-clique");
			$("#"+id+grupo).val(silaba);
			$("#"+id+grupo).addClass("erro");
		}
	}else{
		$("#jogo").hide();
		$("#ganhou-jogo").show();
	}	
}


function tecla(){
    window.alert("O código da tecla pressionada foi: " + event.keyCode);
}
  
document.body.onkeypress = tecla;