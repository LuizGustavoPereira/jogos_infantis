var resp = "",
	array_index=[]
	sorteados = [],
	animal = "",
	pontuacao = 0,
	vidas = 3;	


perdeu = document.getElementById('perdeu');
ganhou = document.getElementById('ganhou');
audio = document.getElementById('audio');

function comecarJogo(){
	vidas = 3;
	pontuacao = 0;
	sorteados = [];	
	count = 0;
	$("#jogarNovamente").hide();
	$("#fim-do-jogo").hide();
	$("#ganhou-jogo").hide();
	$("#min").html("<p>inicio</p>");
	$("#pontuacao").html(pontuacao);
	$("#jogo").show();
	$("#vidas").html(vidas);
	$("#telaInicial").hide();
	$("#nomeTime").focus();
	sorteiaAnimais();
}

function sorteiaAnimais(){
	$("#pontuacao").html(pontuacao);	
	verificaAnimais();	
	switch (animal){
		case 1:
			resp = 49;	
			$("#audio").html("<source src='sons/animais/aguia.mp3' type='audio/mpeg'>");				
			$("#imagemAnimal").html("<img class='width-70' src='imagens/animais/aguiac.png'>");			
			audio.play();
		break;
		case 2:
			resp = 50;	
			$("#audio").html("<source src='sons/animais/gato.mp3' type='audio/mpeg'>");				
			$("#imagemAnimal").html("<img class='width-70' src='imagens/animais/gatoc.png'>");			
			audio.play();
		break;
		case 3:
			resp = 51;	
			$("#audio").html("<source src='sons/animais/elefante.mp3' type='audio/mpeg'>");				
			$("#imagemAnimal").html("<img class='width-70' src='imagens/animais/elefantec.png'>");			
			audio.play();
		break;
		case 4:
			resp = 52;	
			$("#audio").html("<source src='sons/animais/cachorro.mp3' type='audio/mpeg'>");				
			$("#imagemAnimal").html("<img class='width-70' src='imagens/animais/cachorroc.png'>");			
			audio.play();
		break;
		case 5:
			resp = 53;	
			$("#audio").html("<source src='sons/animais/leao.mp3' type='audio/mpeg'>");			
			$("#imagemAnimal").html("<img class='width-70' src='imagens/animais/leaoc.png'>");			
			audio.play();
		break;
		case 6:
			resp = 54;	
			$("#audio").html("<source src='sons/animais/bode.mp3' type='audio/mpeg'>");	
			$("#imagemAnimal").html("<img class='width-70' src='imagens/animais/bodec.png'>");			
			audio.play();
		break;
		case 7:
			resp = 55;	
			$("#audio").html("<source src='sons/animais/touro.mp3' type='audio/mpeg'>");	
			$("#imagemAnimal").html("<img class='width-70' src='imagens/animais/touroc.png'>");			
			audio.play();
		break;
		case 8:
			resp = 56;	
			$("#audio").html("<source src='sons/animais/tigre.mp3' type='audio/mpeg'>");	
			$("#imagemAnimal").html("<img class='width-70' src='imagens/animais/tigrec.png'>");			
			audio.play();
		break;
		case 9:
			resp = 57;	
			$("#audio").html("<source src='sons/animais/macaco.mp3' type='audio/mpeg'>");	
			$("#imagemAnimal").html("<img class='width-70' src='imagens/animais/macacoc.png'>");			
			audio.play();
		break;
	}
}

function tecla(){	
	audio.pause();
	if(event.keyCode == resp){
		pontuacao += 10;
		sorteiaAnimais();
	}else{
		if(vidas > 0){			
			vidas -= 1;
			$("#vidas").html(vidas);
			alert("Errou, tente novamente");
		}else{
			$("#jogarNovamente").show();
			$("#fim-do-jogo").show();
			$("#jogo").hide();
			perdeu.play();
		}
	}    
}

function verificaAnimais(){
	if(sorteados.length >= 9){
		pontuacao = 0,
		sorteados = [],
		vidas = 3;
		$("#jogo").hide();
		$("#ganhou-jogo").show();
		ganhou.play();
	}else{		
		animal = Math.floor((Math.random() * 9) + 1);
		if(sorteados.indexOf(animal) > -1){
			verificaAnimais();

		}else{	
			sorteados.push(animal);			
		}
	}
}



function jogarNovamente(){	
	$("#fim-do-jogo").show();	
	$("#jogarNovamente").hide();
	$("#nomeTime").prop('disabled', false);
	comecarJogo();
}

function voltar(){
	$("#jogarNovamente").hide();
	$("#nomeTime").prop('disabled', false);
	$("#jogo").hide();
	$("#telaInicial").show();
}

document.body.onkeypress = tecla;

$(document).ready(function(){
	$("#jogo").hide();
	$("#jogarNovamente").hide();
	$("#ganhou-jogo").hide();
	$("#fim-do-jogo").hide();
});