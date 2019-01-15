function comecarJogo(){
	$("#jogo").show();
	$("#telaInicial").hide();
}

function voltar(){
	$("#jogo").hide();
	$("#telaInicial").show();
}

$(document).ready(function(){
	$("#jogo").hide();	
	$("#ganhou-jogo").hide();
	$("#fim-do-jogo").hide();
});


function allowDrop(ev)
{
	ev.preventDefault();
}
 
function drag(ev)
{
	ev.dataTransfer.setData("Text",ev.target.id);
}
 
function drop(ev)
{
	var data = ev.dataTransfer.getData("Text");
	ev.target.appendChild(document.getElementById(data));
	ev.preventDefault();
}