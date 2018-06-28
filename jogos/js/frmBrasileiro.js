var cor = 1;

audio = document.getElementById('audio');
var music = true

function musica(){	
	if(music == true){
		$(".icone-musica").html("<i class='material-icons'>volume_off</i>")
		audio.pause();
		music = false
	}
	else{
		$(".icone-musica").html("<i class='material-icons'>volume_up</i>")
		audio.play();
		music = true
	}
}


function comecarJogo(){
	cor = 1;
	audio.play()
	$("#jogo").show();
	$("#telaInicial").hide();
	$("#ganhou-jogo").hide();
	$("#nomeCor").html("<h3 style='color: blue' >AZUL</h3>");
	$("#bandeira").html("<img src='imagens/brasileiro/bandeira-preta-branca.png' class='img-brasileiro-bandeira'>")

}

function voltar(){
	cor = 1;
	$("#bandeira").html("<img src='imagens/brasileiro/bandeira-preta-branca.png' class='img-brasileiro-bandeira'>")
	$("#jogo").hide();
	$("#telaInicial").show();
}

function pintaBandeira(){		
	switch(cor){
		case 1:
			$("#bandeira").html("<a><img src='imagens/brasileiro/bandeira-sem-amarelo.png' class='img-brasileiro-bandeira'></a>");
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
}

function verificaResposta(resp){
	if(resp == cor){		
		pintaBandeira();
		cor += 1;
	}else{
		alert("VOCÊ ERROU, TENTE NOVAMENTE.")
	}

	if(cor > 3){
		setTimeout("terminaJogo()", 700);	
	}
}

function terminaJogo(){
	$("#jogo").hide();
	$("#ganhou-jogo").show();
}

$(document).ready(function(){
	$("#jogo").hide();
	$("#ganhou-jogo").hide();
});