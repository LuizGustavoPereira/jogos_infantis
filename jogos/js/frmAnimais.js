var resp = "",
	array_index=[]
	sorteados = [],
	animal = "",
	pontuacao = 0,
	vidas = 3;	
	audio = "";

audioAguia = document.getElementById('audio-aguia');
audioGato = document.getElementById('audio-gato');
audioElefante = document.getElementById('audio-elefante');
audioCachorro = document.getElementById('audio-cachorro');
audioLeao = document.getElementById('audio-leao');
audioBode = document.getElementById('audio-bode');
audioTouro = document.getElementById('audio-touro');
audioTigre = document.getElementById('audio-tigre');
audioMacaco = document.getElementById('audio-macaco');
perdeu = document.getElementById('perdeu');
ganhou = document.getElementById('ganhou');

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
			$("#imagemAnimal").html("<img class='width-70' src='imagens/animais/aguiac.png'>");			
			audioAguia.play();
			audio = audioAguia
		break;
		case 2:
			resp = 50;		
			$("#imagemAnimal").html("<img class='width-70' src='imagens/animais/gatoc.png'>");			
			audioGato.play();
			audio = audioGato;
		break;
		case 3:
			resp = 51;	
			$("#imagemAnimal").html("<img class='width-70' src='imagens/animais/elefantec.png'>");			
			audioElefante.play();
			audio = audioElefante;
		break;
		case 4:
			resp = 52;		
			$("#imagemAnimal").html("<img class='width-70' src='imagens/animais/cachorroc.png'>");			
			audioCachorro.play();
			audio = audioCachorro;
		break;
		case 5:
			resp = 53;		
			$("#imagemAnimal").html("<img class='width-70' src='imagens/animais/leaoc.png'>");			
			audioLeao.play();
			audio = audioLeao;
		break;
		case 6:
			resp = 54;	
			$("#imagemAnimal").html("<img class='width-70' src='imagens/animais/bodec.png'>");			
			audioBode.play();
			audio = audioBode;
		break;
		case 7:
			resp = 55;		
			$("#imagemAnimal").html("<img class='width-70' src='imagens/animais/touroc.png'>");			
			audioTouro.play();
			audio = audioTouro;
		break;
		case 8:
			resp = 56;	
			$("#imagemAnimal").html("<img class='width-70' src='imagens/animais/tigrec.png'>");			
			audioTigre.play();
			audio = audioTigre;
		break;
		case 9:
			resp = 57;	
			$("#imagemAnimal").html("<img class='width-70' src='imagens/animais/macacoc.png'>");			
			audioMacaco.play();
			audio = audioMacaco;
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