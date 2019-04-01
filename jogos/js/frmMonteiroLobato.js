var cor = 1,
	pergunta = 0,
	resposta = "",
	perguntasFeitas = [],
	vidas = 0,
	textoTroca = "";


audio = document.getElementById('audio');
perdeu = document.getElementById('perdeu');
ganhou = document.getElementById('ganhou');
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
	if (valor == resposta){
		$(".troca-imagem").html(textoTroca);
		setTimeout("formularPergunta()", 3000);
		vidas+=1		
		$("#vidas").html(vidas);
		$('#imagem').html(resposta)
	}
	else{
		if( vidas < 0 ){			
			audio.pause();
			perdeu.play();
			$("#jogo").hide();
			$("#fim-do-jogo").show();
			$("#jogarNovamente").show();
		}
	}
}

function formularPergunta(){
	sorteiaPergunta();
	switch(pergunta){
		case 1:
			resposta = "SACI"
			textoTroca = "<div>Será que o pedrinho tem medo do <b>SACI</b>?</div>";
			$("#perguntas").html("<div class='col-md-8 pergunta-monteiro'>"+
					 		"<div class='pergunta-monteiro troca-imagem'> Será que o pedrinho tem medo do "+
					 		"<img id='imagemEnigma' src='imagens/monteiro-lobato/saci.png'> ?</div>"+
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
			resposta = "BOLO";
			textoTroca = "<div>A tia Anastácia faz um do <b>BOLO</b> muito gostoso.</div>"
			$("#perguntas").html("<div style='margin-top: 5%' class='col-md-8 pergunta-monteiro'>"+
					 		"<div class='troca-imagem'> A Tia Anastacia faz um "+
					 		"<img id='imagemEnigma' src='imagens/monteiro-lobato/bolo.png'>"+
					 		"muito gostoso.</div>"+
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
			textoTroca = "<div>Emilia é uma <b>BONECA</b> de pano.</div>";
			$("#perguntas").html("<div style='margin-top: 10%' class='col-md-8 pergunta-monteiro'>"+
				 		"<div class='troca-imagem'> Emilia é uma "+
				 		"<img id='imagemEnigma' src='imagens/monteiro-lobato/emilia.png'>"+
				 		"de pano.</div>"+
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
			textoTroca = "<div>Marquês de Rabicó é um<b> PORCO.</b></div>"
			$("#perguntas").html("<div style='margin-top: 10%' class='col-md-8 pergunta-monteiro'>"+
				 		"<div class='troca-imagem'>Marquês de Rabicó é um"+
				 		"	<img id='imagemEnigma' src='imagens/monteiro-lobato/porco.png'>."+
				 		"</div>"+
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
			textoTroca = "<div>Pedrinho gosta de jogar <b>BOLA.</b></div>"
			$("#perguntas").html("<div style='margin-top: 10%' class='col-md-8 pergunta-monteiro'>"+
				 		"<div class='troca-imagem'>Pedrinho gosta de jogar "+
				 		"	<img id='imagemEnigma' style='width: 10%' src='imagens/monteiro-lobato/bola.png'>"+
				 		".</div>"+
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
			textoTroca = "<div>No sítio do Pica Pau Amarelo, tia Anastácia cuida dos<b> PATOS. </b></div>"
			$("#perguntas").html("<div style='margin-top: 10%' class='col-md-8 pergunta-monteiro'>"+
					 		"<div class='troca-imagem'>No sítio do Pica Pau Amarelo, tia Anastácia cuida dos "+
					 		"	<img id='imagemEnigma' style='width: 18%;' src='imagens/monteiro-lobato/patos.png'>"+
					 		".</div>"+
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
			textoTroca = "<div>Pedrinho e Emilia brincam de <b>PIPA.</b></div>"
			$("#perguntas").html("<div style='margin-top: 10%' class='col-md-8 pergunta-monteiro'>"+
				 		"<div class='troca-imagem'>Pedrinho e Emilia brincam de "+					 	 
				 		"<img id='imagemEnigma' style='width: 10%' src='imagens/monteiro-lobato/pipa.png'>"+
				 		".</div>"+
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
			textoTroca = "<div>Visconde de Sabugosa é uma espiga de <b> MILHO. </b></div>"
			$("#perguntas").html("<div style='margin-top: 10%' class='col-md-8 pergunta-monteiro'>"+
					 		"<div class='troca-imagem'>Visconde de Sabugosa é uma espiga de "+					 		
					 		"<img id='imagemEnigma' style='width: 10%' src='imagens/monteiro-lobato/milho.png'>"+
					 		".</div>"+
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
			resposta = "DONA BENTA"
			textoTroca = "<div><b>Dona Benta</b> gosta de contar histórias no sítio do Pica Pau Amarelo.</div>"
			$("#perguntas").html("<div style='margin-top: 5%' class='col-md-8 pergunta-monteiro'>"+
							"<div class='troca-imagem'>"+
							"<img id='imagemEnigma' style='width: 17%' src='imagens/monteiro-lobato/DonaBenta.png'>"+
					 		"gosta de contar histórias no sítio do Pica Pau Amarelo."+
					 		"</div>"+
					 	"</div>"+
					 		"<div class='center-align col l9 offset-l2 xl12 offset-xl0 resposta-monteiro'>"+
						 	"<p onClick=\"verificaResposta('DONA BENTA')\">Dona Benta</p>"+
						 	"<p onClick=\"verificaResposta('PEDRINHO')\">Pedrinho</p>"+
						 	"<p onClick=\"verificaResposta('EMÍLIA')\">Emília</p>"+
						 	"<p onClick=\"verificaResposta('RABICÓ')\">Rabicó</p>"+
					 	"</div>"
					 	
						);	
		break;
		case 10:
			resposta = "PIPOCA"
			textoTroca = "<div>Pedrinho e Narizinho pediram pra tia Anastácia fazer <b>PIPOCA</b>.</div>"
			$("#perguntas").html("<div style='margin-top: 10%' class='col l12 pergunta-monteiro'>"+
					 		"<div class='troca-imagem'>Pedrinho e Narizinho pediram pra tia Anastácia fazer "+
					 		"<img id='imagemEnigma' style='width: 10%' src='imagens/monteiro-lobato/pipoca.png'>"+
					 		".</div>"+
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
		perguntasFeitas = [],
		vidas = 3;		
		bool = true;
		musica();
		$("#jogo").hide();
		$("#ganhou-jogo").show();
		audio.pause();
		ganhou.play();

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
	perdeu.pause();
	bool = true;
	musica();
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

