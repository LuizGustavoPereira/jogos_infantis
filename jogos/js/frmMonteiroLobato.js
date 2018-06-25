var cor = 1,
	pergunta = 0,
	resposta = "",	
	pontuacao = 0,
	perguntasFeitas = [],
	vidas = 3;


audio = document.getElementById('audio');
var bool = true


function comecarJogo(){		
	audio.play()
	$("#ganhou-jogo").hide();
	$("#fim-do-jogo").hide();
	$("#jogo").show();	
	$("#telaInicial").hide();
	$("#jogarNovamente").hide();
	formularPergunta();
}

function verificaResposta(valor) {
	console.log(valor) 
	if (valor == resposta){
		formularPergunta();
		pontuacao += 10
		$("#pontuacao").html(pontuacao);
	}
	else{
		vidas-=1;
		$("#vidas").html(vidas);
		alert("resposta errada");

		if( vidas < 0 ){
			$("#jogo").hide();
			$("#fim-do-jogo").show();
		}
	}

}

function formularPergunta(){
	sorteiaPergunta();
	switch(pergunta){
		case 1:
			resposta = "SACI"
			$("#perguntas").html("<div style='float: left; margin-top: 5%' class='col-md-8 pergunta-monteiro'>"+
					 		"<p>Será que o pedrinho tem medo do "+
					 		"<img style='width: 7%' src='imagens/monteiro-lobato/saci.png'> ?</p>"+
					 	"</div>"+
					 	"<div class='center-align col l9 offset-l2 xl10 offset-xl2 resposta-monteiro'>"+
						 	"<p onClick=\"verificaResposta('SACI')\">SACI</p>"+
						 	"<p onClick=\"verificaResposta('SACO')\">SACO</p>"+
						 	"<p onClick=\"verificaResposta('SAPO')\">SAPO</p>"+
						 	"<p onClick=\"verificaResposta('SAPATO')\">SAPATO</p>"+
					 	"</div>"
						);			
		break;
		case 2:
			resposta = "BOLO"
			$("#perguntas").html("<div style='float: left; margin-top: 10%' class='col-md-8 pergunta-monteiro'>"+
					 		"<p>A Tia Anastacia faz um "+
					 		"<img src='imagens/monteiro-lobato/bolo.png'>"+
					 		" muito gostoso.</p>"+
				 		"</div>"+
					 	"<div class='center-align col l9 offset-l2 xl11 offset-xl1 resposta-monteiro'>"+
						 	"<p onClick=\"verificaResposta('BOLA')\">BOLA</p>"+
						 	"<p onClick=\"verificaResposta('BOLO')\">BOLO</p>"+
						 	"<p onClick=\"verificaResposta('BALA')\">BALA</p>"+
						 	"<p onClick=\"verificaResposta('BONECA')\">BONECA</p>"+
					 	"</div>"
					);	
		break;
		case 3:
			resposta = "BONECA"
			$("#perguntas").html("<div style='float: left; margin-top: 10%' class='col-md-8 pergunta-monteiro'>"+
				 		"<p style='font-size: 3vw'>Emilia é uma"+
				 		"<img style='width: 10%' src='imagens/monteiro-lobato/emilia.png'>"+
				 		" de pano.</p>"+
				 	"</div>"+
					 	"<div class='center-align col l9 offset-l2 xl12 offset-xl0 resposta-monteiro'>"+
						 	"<p onClick=\"verificaResposta('BOLA')\">BOLA</p>"+
						 	"<p onClick=\"verificaResposta('BRUXA')\">BRUXA</p>"+
						 	"<p onClick=\"verificaResposta('BONECA')\">BONECA</p>"+
						 	"<p onClick=\"verificaResposta('BAILARINA')\">BAILARINA</p>"+
					 	"</div>"
					);	
		break;
		case 4:
			resposta = "PORCO"
			$("#perguntas").html("<div style='float: left; margin-top: 10%' class='col-md-8 pergunta-monteiro'>"+
				 		"<p style='font-size: 3vw'>Marquês de Rabicó é um"+
				 		"<img style='width: 10%' src='imagens/monteiro-lobato/porco.png'>"+
				 		"</p>"+
				 	"</div>"+
					 	"<div class='center-align col l9 offset-l2 xl12 offset-xl0 resposta-monteiro'>"+
						 	"<p onClick=\"verificaResposta('MENINO')\">MENINO</p>"+
						 	"<p onClick=\"verificaResposta('HOMEM')\">HOMEM</p>"+
						 	"<p onClick=\"verificaResposta('BONECO')\">BONECO</p>"+
						 	"<p onClick=\"verificaResposta('PORCO')\">PORCO</p>"+
					 	"</div>"
					);	
		break;
		case 5:
			resposta = "BOLA"
			$("#perguntas").html("<div style='float: left; margin-top: 10%' class='col-md-8 pergunta-monteiro'>"+
				 		"<p style='font-size: 3vw'>Pedrinho gosta de jogar "+
				 		"<img style='width: 10%' src='imagens/monteiro-lobato/bola.png'>"+
				 		".</p>"+
				 	"</div>"+
					 	"<div class='center-align col l9 offset-l2 xl12 offset-xl0 resposta-monteiro'>"+
						 	"<p onClick=\"verificaResposta('BOLA')\">BOLA</p>"+
						 	"<p onClick=\"verificaResposta('XADREZ')\">XADREZ</p>"+
						 	"<p onClick=\"verificaResposta('DAMA')\">DAMA</p>"+
						 	"<p onClick=\"verificaResposta('PIÃO')\">PIÃO</p>"+
					 	"</div>"
					);	
		break;
		case 6:
			resposta = "PATOS"
			$("#perguntas").html("<div style='float: left; margin-top: 10%' class='col-md-8 pergunta-monteiro'>"+
					 		"<p style='font-size: 3vw'>No sítio do Pica Pau Amarelo, tia Anastácia cuida dos "+
					 		"<img style='width: 10%;' src='imagens/monteiro-lobato/pato.png'>"+
					 		 ".</p>"+
					 	"</div>"+
					 	"<div class='center-align col l9 offset-l2 xl12 offset-xl0 resposta-monteiro'>"+
						 	"<p onClick=\"verificaResposta('PORCOS')\">PORCOS</p>"+
						 	"<p onClick=\"verificaResposta('CAVALOS')\">CAVALOS</p>"+
						 	"<p onClick=\"verificaResposta('PATOS')\">PATOS</p>"+
						 	"<p onClick=\"verificaResposta('GALOS')\">GALOS</p>"+
					 	"</div>"
						);	
		break;
		case 7:
			resposta = "PIPA"
			$("#perguntas").html("<div style='float: left; margin-top: 10%' class='col-md-8 pergunta-monteiro'>"+
				 		"<p style='font-size: 3vw'>Pedrinho e Emilia brincam de "+
				 		"<img style='width: 10%' src='imagens/monteiro-lobato/pipa.png'>"+
				 		 ".</p>"+
				 	"</div>"+
					 	"<div class='center-align col l9 offset-l2 xl12 offset-xl0 resposta-monteiro'>"+
						 	"<p onClick=\"verificaResposta('PEGA-PEGA')\">PEGA-PEGA</p>"+
						 	"<p onClick=\"verificaResposta('PIPA')\">PIPA</p>"+
						 	"<p onClick=\"verificaResposta('BOLA')\">BOLA</p>"+
						 	"<p onClick=\"verificaResposta('NADAR')\">NADAR</p>"+
					 	"</div>"
					);	
		break;
		case 8:
			resposta = "MILHO";
			$("#perguntas").html("<div style='float: left; margin-top: 10%' class='col-md-8 pergunta-monteiro'>"+
					 		"<p style='font-size: 3vw'>Visconde de Sabugosa é uma espiga de "+
					 		"<img style='width: 10%' src='imagens/monteiro-lobato/milho.png'>.</p>"+
					 	"</div>"+
					 	"<div class='center-align col l9 offset-l2 xl12 offset-xl0 resposta-monteiro'>"+
						 	"<p onClick=\"verificaResposta('ARROZ')\">ARROZ</p>"+
						 	"<p onClick=\"verificaResposta('MILHO')\">MILHO</p>"+
						 	"<p onClick=\"verificaResposta('BANANA')\">BANANA</p>"+
						 	"<p onClick=\"verificaResposta('LARANJA')\">LARANJA</p>"+
					 	"</div>"
						);	
		break;
		case 9:
			resposta = "OCULOS"
			$("#perguntas").html("<div style='float: left; margin-top: 10%' class='col-md-8 pergunta-monteiro'>"+
					 		"<p style='font-size: 3vw'>Dona Benta usa "+
					 		"<img style='width: 10%' src='imagens/monteiro-lobato/oculos.png'>.</p>"+					 	
					 	"</div>"+
					 		"<div class='center-align col l9 offset-l2 xl12 offset-xl0 resposta-monteiro'>"+
						 	"<p onClick=\"verificaResposta('VESTIDO')\">VESTIDO</p>"+
						 	"<p onClick=\"verificaResposta('BOTA')\">BOTA</p>"+
						 	"<p onClick=\"verificaResposta('OCULOS')\">OCULOS</p>"+
						 	"<p onClick=\"verificaResposta('CASACO')\">CASACO</p>"+
					 	"</div>"
					 	
						);	
		break;
		case 10:
			resposta = "PIPOCA"
			$("#perguntas").html("<div style='float: left; margin-top: 10%' class='col-md-8 pergunta-monteiro'>"+
					 		"<p style='font-size: 3vw'>Pedrinho e Narizinho pediram pra tia Anastácia fazer "+
					 		"<img style='width: 10%' src='imagens/monteiro-lobato/pipoca.png'>.</p>"+
					 	"</div>"+
					 		"<div class='center-align col l9 offset-l2 xl12 offset-xl0 resposta-monteiro'>"+
						 	"<p onClick=\"verificaResposta('BOLO')\">BOLO</p>"+
						 	"<p onClick=\"verificaResposta('SUCO')\">SUCO</p>"+
						 	"<p onClick=\"verificaResposta('TORTA')\">TORTA</p>"+
						 	"<p onClick=\"verificaResposta('PIPOCA')\">PIPOCA</p>"+
					 	"</div>"
						);	
		break;
	}

}

function sorteiaPergunta(){	
	if(perguntasFeitas.length >= 10){
		pontuacao = 0,
		perguntasFeitas = [],
		vidas = 3;		
		bool = true;
		musica();
		$("#jogo").hide();
		$("#ganhou-jogo").show();

	}else{
		pergunta = Math.floor((Math.random() * 10) + 1);		
		if(perguntasFeitas.indexOf(pergunta) > -1){
			sorteiaPergunta();
		}else{	
			perguntasFeitas.push(pergunta);
		}
	}	
}

function voltar(){
	perguntasFeitas = [];
	$("#jogo").hide();
	$("#telaInicial").show();
}

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

$(document).ready(function(){
	$("#ganhou-jogo").hide();
	$("#fim-do-jogo").hide();
	$("#jogo").hide();
	$("#vidas").html(vidas)

});

