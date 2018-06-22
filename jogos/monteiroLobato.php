
<div class="row" >
	<div class="col l10 offset-l1">
		<div class="titulo">
			<h3 class="float-left" style="color: #ff0404; font-size: 3vw">M</h3>
			<h3 class="float-left" style="color: yellow; font-size: 3vw">O</h3>
			<h3 class="float-left" style="color: #ff7600; font-size: 3vw">N</h3>
			<h3 class="float-left" style="color: #4e69c8; font-size: 3vw">T</h3>
			<h3 class="float-left" style="color: #44a755; font-size: 3vw">E</h3>
			<h3 class="float-left" style="color: #ff0404; font-size: 3vw">I</h3>
			<h3 class="float-left" style="color: yellow; font-size: 3vw">R</h3>
			<h3 class="float-left" style="color: #ff7600; font-size: 3vw">O</h3>
			<h3 class="float-left" style="color: #4e69c8; padding-left: 15px; font-size: 3vw">L</h3>
			<h3 class="float-left" style="color: #44a755; font-size: 3vw">O</h3>
			<h3 class="float-left" style="color: #ff0404; font-size: 3vw">B</h3>
			<h3 class="float-left" style="color: yellow; font-size: 3vw">A</h3>
			<h3 class="float-left" style="color: #ff7600; font-size: 3vw">T</h3>
			<h3 class="float-left" style="color: #4e69c8; font-size: 3vw">O</h3>
		</div> 
	</div>
	<div class="col l10 offset-l1" id="telaInicial" display>
        <div class="card transparent darken-1">
            <div class="card-content blue-text"> 
	            <div class="row">
	            	<div class="col l10 offset-l1 center-align">
						<img src="imagens/monteiro-lobato/monteiro-lobato.png">
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
    <div class="col l10 offset-l1" id="jogo" display>
	    <div class="card transparent darken-1">
	        <div class="card-content blue-text text-darken-2"> 
		        <div class="row">
		            <audio id="audio">
						<source src="sons/monteiro-lobato/sitio.mp3" type="audio/mpeg">
						   	Seu navegador não possui suporte ao elemento audio
					</audio>					
					<a class="icon-sound"  onclick="musica()" id="icone-musica"><i class="material-icons">volume_up</i></a>
						
					<div class="col l10" id="perguntas">
							
					</div>	

					<div class="col l2 center-align">
						<fieldset>
							<legend>Pontuação</legend>
							<h5><b id="pontuacao">0</b></h5>
						</fieldset>
						<fieldset>
							<legend>Vidas</legend>
							<h5><b class="red-text" id="vidas"></b><i class="material-icons red-text">favorite</i></h5>
						</fieldset>
							
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
	<div class="col l10 offset-l1" id="fim-do-jogo" display>
		<div class="card transparent darken-1">
	        <div class="card-content blue-text text-darken-2"> 
		        <div class="row">
		        	<div class="titulo col l10 offset-l1 center-align">
			        	<h3 style="color: #00a1ff; font-size: 3vw; margin-top: 5%">FIM DO JOGO</h3>
			        	<a style="margin-top: 5%" class="waves-effect waves-light btn background btnControl" onClick="comecarJogo()" id="jogarNovamente" display="">Jogar Novamente</a>
					</div>				
		        </div>
		    </div>
		</div>	
	</div>
	<div class="col l10 offset-l1" id="ganhou-jogo">
		<div class="card transparent darken-1">
	        <div class="card-content blue-text"> 
		        <div class="row">
		        	<div class="titulo col l10 offset-l1 center-align">
			        	<h3 style="color: #00a1ff; font-size: 3vw; margin-top: 5%">PARABÉNS!!</h3>
			        	<a style="margin-top: 5%" class="waves-effect waves-light btn background btnControl" onClick="comecarJogo()" id="jogarNovamente" display="">Jogar Novamente</a>
					</div>				
		        </div>
		    </div>
		</div>	
	</div>
</div>





<script src="jogos/js/frmMonteiroLobato.js" type="text/javascript"></script>