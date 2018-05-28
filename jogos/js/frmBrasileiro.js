var cor = 1;

audio = document.getElementById('audio');
var bool = true

function musica(){	
	if(bool == true){
		$("#icone-musica").html("<i class='material-icons'>volume_off</i>")
		audio.pause();
		bool = false
	}
	else{
		$("#icone-musica").html("<i class='material-icons'>volume_up</i>")
		audio.play();
		bool = true
	}
}


function comecarJogo(){
	audio.play()
	$("#jogo").show();
	$("#telaInicial").hide();
	$("#nomeCor").html("<h3 style='color: blue' >AZUL</h3>");

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
				$("#bandeira").html("<img src='imagens/brasileiro/bandeira-sem-amarelo.png' class='img-brasileiro-bandeira'>");
				$("#nomeCor").html("<h3 style='color: #ffca28 '>AMARELO</h3>");
			break;
			case 2:
				$("#bandeira").html("<img src='imagens/brasileiro/bandeira-sem-verde.png' class='img-brasileiro-bandeira'>")
				$("#nomeCor").html("<h3 style='color: green' >VERDE</h3>");
			break;
			case 3:
				$("#bandeira").html("<img src='imagens/brasileiro/bandeira_colorida.png' class='img-brasileiro-bandeira'>")
			break;			
		}
		cor+=1;		
	}else if(cor >= 3){
		alert("PARABÉNS! VOCÊ CONSEGUIU.");
	}
	else{
		alert("VOCÊ ERROU, TENTE NOVAMENTE.")
	}
	
}

$(document).ready(function(){
	$("#jogo").hide();
});