var resp = "",
	array_index=[]
	sorteados = [],
	fruta = "",
	pontuacao = 0,
	vidas = 3,
	count = 0,
	letras = 0,
	posInput = 1,
	nomeFruta = "",
	index=1,
	tempo = 0;

function comecarJogo(){
	vidas = 3;
	pontuacao = 0;
	sorteados = [];	
	clearTimeout(tempo);
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
	sorteiaFruta();
}

function sorteiaFruta(){
	clearTimeout(tempo);
	$("#divResp").html("");
	$("#letrasFruta").html("");		
	input = 0;
	index = 0;
	nomeFruta = [];
	posInput = 1;
	verificaFrutas();	
	switch (fruta){
		case 1:
			resp = "ABACAXI";
			array_index = [0,1,2,3,4,5,6];
			array_letras=["B","A","C","X","A","I","A"];			
			$("#imagemFruta").html("<img class='width-100' src='imagens/salada-de-frutas/abacaxi.png'>");
			for(var i=0; i < array_index.length; i++){
				if((i%2 == 0)){
					$("#letrasFruta").append("<span class='float-left letra-salada-fruta-par' id=letra"+i+">"+array_letras[i]+"</span>");
				}else{
					$("#letrasFruta").append("<span class='float-left letra-salada-fruta-impar' id=letra"+i+">"+array_letras[i]+"</span>");
				}
			}
			for(var i=0; i < array_index.length; i++){
				$("#divResp").append("<input type=\"text\" name=\"nome\" id=\"nomeFruta"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\" data-next=\"#nomeFruta"+(i+1)+"\" >");			
			}	
			
		break;
		case 2:
			resp = "MELANCIA";
			array_index = [0,1,2,3,4,5,6,7];
			array_letras=["L","A","N","M","A","I","C","E"];			
			$("#imagemFruta").html("<img class='width-100' src='imagens/salada-de-frutas/melancia.png'>");
			for(var i=0; i < array_index.length; i++){
				if((i%2 == 0)){
					$("#letrasFruta").append("<span class='float-left letra-salada-fruta-par' id=letra"+i+">"+array_letras[i]+"</span>");
				}else{
					$("#letrasFruta").append("<span class='float-left letra-salada-fruta-impar' id=letra"+i+">"+array_letras[i]+"</span>");
				}
			}
			for(var i=0; i < array_index.length; i++){
				$("#divResp").append("<input type=\"text\" name=\"nome\" id=\"nomeFruta"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\" data-next=\"#nomeFruta"+(i+1)+"\" >");			
			}
		break;
		case 3:
			resp = "BANANA";
			array_index = [0,1,2,3,4,5];
			array_letras=["N","A","A","B","A","N"];			
			$("#imagemFruta").html("<img class='width-100' src='imagens/salada-de-frutas/banana.png'>");
			for(var i=0; i < array_index.length; i++){
				if((i%2 == 0)){
					$("#letrasFruta").append("<span class='float-left letra-salada-fruta-par' id=letra"+i+">"+array_letras[i]+"</span>");
				}else{
					$("#letrasFruta").append("<span class='float-left letra-salada-fruta-impar' id=letra"+i+">"+array_letras[i]+"</span>");
				}
			}
			for(var i=0; i < array_index.length; i++){
				$("#divResp").append("<input type=\"text\" name=\"nome\" id=\"nomeFruta"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\" data-next=\"#nomeFruta"+(i+1)+"\" >");			
			}
		break;
		case 4:
			resp = "LARANJA";
			array_index = [0,1,2,3,4,5,6];
			array_letras=["L","A","J","A","A","N","R"];			
			$("#imagemFruta").html("<img class='width-100' src='imagens/salada-de-frutas/laranja.png'>");
			for(var i=0; i < array_index.length; i++){
				if((i%2 == 0)){
					$("#letrasFruta").append("<span class='float-left letra-salada-fruta-par' id=letra"+i+">"+array_letras[i]+"</span>");
				}else{
					$("#letrasFruta").append("<span class='float-left letra-salada-fruta-impar' id=letra"+i+">"+array_letras[i]+"</span>");
				}
			}
			for(var i=0; i < array_index.length; i++){
				$("#divResp").append("<input type=\"text\" name=\"nome\" id=\"nomeFruta"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\" data-next=\"#nomeFruta"+(i+1)+"\" >");			
			}
		break;
		case 5:
			resp = "LIMÃO";
			array_index = [0,1,2,3,4];
			array_letras=["L","M","O","Ã","I"];			
			$("#imagemFruta").html("<img class='width-100' src='imagens/salada-de-frutas/limao.png'>");
			for(var i=0; i < array_index.length; i++){
				if((i%2 == 0)){
					$("#letrasFruta").append("<span class='float-left letra-salada-fruta-par' id=letra"+i+">"+array_letras[i]+"</span>");
				}else{
					$("#letrasFruta").append("<span class='float-left letra-salada-fruta-impar' id=letra"+i+">"+array_letras[i]+"</span>");
				}
			}
			for(var i=0; i < array_index.length; i++){
				$("#divResp").append("<input type=\"text\" name=\"nome\" id=\"nomeFruta"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\" data-next=\"#nomeFruta"+(i+1)+"\" >");			
			}
		break;
		case 6:
			resp = "MAÇÃ";
			array_index = [0,1,2,3];
			array_letras=["Ç","M","A","Ã"];			
			$("#imagemFruta").html("<img class='width-100' src='imagens/salada-de-frutas/maca.png'>");
			for(var i=0; i < array_index.length; i++){
				if((i%2 == 0)){
					$("#letrasFruta").append("<span class='float-left letra-salada-fruta-par' id=letra"+i+">"+array_letras[i]+"</span>");
				}else{
					$("#letrasFruta").append("<span class='float-left letra-salada-fruta-impar' id=letra"+i+">"+array_letras[i]+"</span>");
				}
			}
			for(var i=0; i < array_index.length; i++){
				$("#divResp").append("<input type=\"text\" name=\"nome\" id=\"nomeFruta"+i+"\" value=\"\" class=\"input-times\" maxlength=\"1\" data-next=\"#nomeFruta"+(i+1)+"\" >");			
			}
		break;
	}	

	opcoes();
	
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



$(document).ready(function(){
	$("#jogo").hide();
	$("#jogarNovamente").hide();
	$("#ganhou-jogo").hide();
	$("#fim-do-jogo").hide();
});