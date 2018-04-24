function comecarJogo(){
	$("#inicio").hide();
	$("#jogo").show();

	var tabuada = $("input[name=tabuada]:checked").val();

	$(".tituloJogo").html("<h3>Tabuada do "+tabuada+"</h3>");

	$(".priResultados").html(
							"<p> "+tabuada+" x 0 = 0 </p>"+
							"<p> "+tabuada+" x 1 = "+(tabuada*1)+ "</p>"
							);
}
function voltar(){
	$("#inicio").show();
	$("#jogo").hide();
}
$(document).ready(function(){
	$("#jogo").hide();
});