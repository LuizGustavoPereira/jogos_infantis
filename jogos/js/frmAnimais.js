var resp = "",
	array_index=[]
	sorteados = [],
	animal = "",
	pontuacao = 0,
	vidas = 3;	
	audio = "";
	tempo = 0;

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
	clearTimeout(tempo);
	tempo = setInterval("atualizaTempo()", 10000);
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
			$("#imagemAnimal").attr('src', 'imagens/animais/aguiac.png');			
			audioAguia.play();
			audio = audioAguia
		break;
		case 2:
			resp = 50;		
			$("#imagemAnimal").attr('src','imagens/animais/gatoc.png');
			audioGato.play();
			audio = audioGato;
		break;
		case 3:
			resp = 51;	
			$("#imagemAnimal").attr('src','imagens/animais/elefantec.png');			
			audioElefante.play();
			audio = audioElefante;
		break;
		case 4:
			resp = 52;		
			$("#imagemAnimal").attr('src','imagens/animais/cachorroc.png');			
			audioCachorro.play();
			audio = audioCachorro;
		break;
		case 5:
			resp = 53;		
			$("#imagemAnimal").attr('src','imagens/animais/leaoc.png');			
			audioLeao.play();
			audio = audioLeao;
		break;
		case 6:
			resp = 54;	
			$("#imagemAnimal").attr('src','imagens/animais/bodec.png');
			audioBode.play();
			audio = audioBode;
		break;
		case 7:
			resp = 55;		
			$("#imagemAnimal").attr('src','imagens/animais/touroc.png');
			audioTouro.play();
			audio = audioTouro;
		break;
		case 8:
			resp = 56;	
			$("#imagemAnimal").attr('src','imagens/animais/tigrec.png');
			audioTigre.play();
			audio = audioTigre;
		break;
		case 9:
			resp = 57;	
			$("#imagemAnimal").attr('src','imagens/animais/macacoc.png');			
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
		}else{
			$("#jogarNovamente").show();
			$("#fim-do-jogo").show();
			$("#jogo").hide();
			perdeu.play();
			audio = perdeu;
			clearTimeout(tempo);
		}
	}    
}

function verificaAnimais(){
	if(sorteados.length >= 9){
		audio.pause();
		pontuacao = 0,
		sorteados = [],
		vidas = 3;
		$("#jogo").hide();
		$("#ganhou-jogo").show();
		ganhou.play();
		audio = ganhou;
	}else{		
		animal = Math.floor((Math.random() * 9) + 1);
		if(sorteados.indexOf(animal) > -1){
			verificaAnimais();

		}else{	
			sorteados.push(animal);			
		}
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
		$("#jogarNovamente").show();
		clearTimeout(tempo);
	}
	if(count == 5){
		$("#min").append("&nbsp;&nbsp;&nbsp;<p>1 min</p>");
	}
	else if(count == 11){
		$("#min").append("&nbsp;&nbsp;&nbsp;<p>2 min</p>");
	}
	else if(count == 17){
		$("#min").append("&nbsp;&nbsp;&nbsp;<p>3 min</p>");
	}
	$("#countTempo").append("<div style='background-color:"+color+"'></div>");
	count ++;	
}



function jogarNovamente(){
	ganhou.pause();	
	perdeu.pause();
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