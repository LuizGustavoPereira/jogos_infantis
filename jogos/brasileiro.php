
<div class="row" >
	<div class="col l10 offset-l1">
		<div class="titulo">
			<h3 class="float-left" style="color: green">J</h3>
			<h3 class="float-left" style="color: blue">O</h3>
			<h3 class="float-left" style="color: yellow">G</h3>
			<h3 class="float-left" style="color: green">O</h3>
			<h3 class="float-left" style="color: blue; padding-left: 15px">B</h3>
			<h3 class="float-left" style="color: yellow">R</h3>
			<h3 class="float-left" style="color: green">A</h3>
			<h3 class="float-left" style="color: blue">S</h3>
			<h3 class="float-left" style="color: yellow">I</h3>
			<h3 class="float-left" style="color: green">L</h3>
			<h3 class="float-left" style="color: blue">E</h3>
			<h3 class="float-left" style="color: yellow">I</h3>
			<h3 class="float-left" style="color: green">R</h3>
			<h3 class="float-left" style="color: blue">O</h3>
		</div> 
	</div>
	<div class="col l10 offset-l1" id="telaInicial" display>
        <div class="card transparent darken-1">
            <div class="card-content blue-text"> 
	            <div class="row">
	            	<div class="col l10 offset-l1">
						<img src="imagens/brasileiro/ze-carioca.png">
	            	</div>
            	</div> 
            	<div class="row center-align">
					<div class="col l10 offset-l1">
						<a class="waves-effect waves-light btn background btnControl" onClick="comecarJogo()">COMEÇAR</a>
					</div>
				</div>          	
            </div>            
        </div>
    </div>
</div>
<div class="row" id="jogo" display>
    <div class="col l10 offset-l1">
        <div class="card transparent darken-1">
            <div class="card-content blue-text text-darken-2"> 
	            <div class="row">

	            	<audio id="audio">
					    <source src="sons/brasileiro/meu-brasil-brasileiro.mp3" type="audio/mpeg">
					    Seu navegador não possui suporte ao elemento audio
					</audio>					
					<!--<a class="icon-sound icone-musica"  onclick="musica()"><i class="material-icons">volume_up</i></a>-->
					

					<div class="enunciado-brasileiro">
            			<h5>Clique nas tintas, para pintar a bandeira, conforme a palavra.</h5>
            		</div>              		
	            	<div class="center-align col l12" id="bandeira">
	            		<img src='imagens/brasileiro/bandeira-preta-branca.png' class='img-brasileiro-bandeira'>
            		</div>  
            		<div class="center-align  col l2 offset-l1" >
        				<img src='imagens/brasileiro/tinta-amarelo.png' class="img-brasileiro-tinta tinta" onClick="verificaResposta(2)">
        			</div>
        			<div class="center-align  col l2" >
        				<img src='imagens/brasileiro/tinta-roxa.png' class="img-brasileiro-tinta tinta" onClick="verificaResposta(0)">
        			</div>
        			<div class="center-align col l2">
        				<img src='imagens/brasileiro/tinta-azul.png' class="img-brasileiro-tinta tinta" onClick="verificaResposta(1)">	
        			</div>
        			<div class="center-align col l2">
        				<img src='imagens/brasileiro/tinta-vermelha.png' class="img-brasileiro-tinta tinta" onClick="verificaResposta(0)">	
        			</div>
        			<div class="center-align col l2">
        				<img src='imagens/brasileiro/tinta-verde.png' class="img-brasileiro-tinta tinta" onClick="verificaResposta(3)">   
        			</div>
            	</div>

            	<div class="row">
            		<div class="col l10 offset-l1 center-align" id="nomeCor">

            		</div>
            	</div>      	
	            <div class="row left-align">
					<div class="col l4 ">
						<a class="waves-effect waves-light btn background btnControl" onClick="voltar()"><i class="material-icons"> arrow_back </i></a>
					</div>					
				</div>	            
            </div> 
        </div>
    </div>
</div>
<!-- GANHOU -->
<div class="row">
	<div class="col l10 offset-l1" id="ganhou-jogo" display>
		<div class="card transparent darken-1">
	        <div class="card-content deep-purple-text"> 
		        <div class="row">
		        	<div class="col l12 left">		        		
		        		<a class="icon-sound icone-musica"  onclick="musica()" ><i class="material-icons">volume_up</i></a>
		        	</div>
		        	<div class="center-align col l12" id="bandeira">
	            		<img src='imagens/brasileiro/bandeira_colorida.png' class='img-brasileiro-bandeira'>
            		</div> 
		        	<div class="titulo col l10 offset-l1 center-align">
			        	<h3 style="font-size: 3vw; margin-top: 5%" class="blue-text">PARABÉNS!!</h3>
			        	<a style="margin-top: 5%" class="waves-effect waves-light btn background btnControl" onClick="comecarJogo()" id="jogarNovamente" display="">Jogar Novamente</a>
					</div>				
		        </div>
		    </div>
		</div>	
	</div>
</div>
<script src="jogos/js/frmBrasileiro.js" type="text/javascript"></script>