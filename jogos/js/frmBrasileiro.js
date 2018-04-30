var cor = 1;

function comecarJogo(){
	$("#jogo").show();
	$("#telaInicial").hide();

}

function voltar(){
	cor = 1;
	$("#bandeira").html("<img src='imagens/brasileiro/bandeira-preta-branca.png' class='img-brasileiro-bandeira'>")
	$("#jogo").hide();
	$("#telaInicial").show();
}

function pintaBandeira(chave){
	if(chave == cor){
		switch(cor){
			case 1:
				$("#bandeira").html("<img src='imagens/brasileiro/bandeira-sem-amarelo.png' class='img-brasileiro-bandeira'>")
			break;
			case 2:
				$("#bandeira").html("<img src='imagens/brasileiro/bandeira-sem-verde.png' class='img-brasileiro-bandeira'>")
			break;
			case 3:
				$("#bandeira").html("<img src='imagens/brasileiro/bandeira_colorida.png' class='img-brasileiro-bandeira'>")
			break;
		}
		cor+=1;		
	}
	if(cor > 3){
		alert("PARABÉNS! VOCÊ CONSEGUIU.");
	}
}

$(document).ready(function(){
	$("#jogo").hide();
});