<div class="row" >
	<!-- Pagína inicial -->
	<div class="col l10 offset-l1">
		<div class="titulo ">
			<h3 class="float-left deep-purple-text" >ANTES E DEPOIS</h3>			
		</div> 
	</div>
	<div class="col l10 offset-l1" id="telaInicial" display>
        <div class="card transparent darken-1">
            <div class="card-content blue-text"> 
	            <div class="row">
	            	<div class="col l10 offset-l1">
						<img class="width-100" src="imagens/antes-depois/antes-depois.png">
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


	<!-- Pagína do jogo -->
	<div class="col l10 offset-l1" id="jogo" display>
        <div class="card transparent darken-1">
            <div class="card-content "> 
	            <div class="row">
		            <div class="col l10 margin-top-5" id="perguntas">
							
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
					<div class="col l4">
						<a class="waves-effect waves-light btn background btnControl" onClick="jogarNovamente()" id="jogarNovamente" display="">Jogar Novamente</a>
					</div>				
				</div>	           	
            </div>            
        </div>
    </div>

	<!-- GAME OVER -->
	<div class="col l10 offset-l1" id="fim-do-jogo" display>
		<div class="card transparent darken-1">
	        <div class="card-content deep-purple-text text-darken-2"> 
		        <div class="row">
		        	<div class="titulo col l10 offset-l1 center-align">
			        	<h3 style="font-size: 3vw; margin-top: 5%" class="deep-purple-text">FIM DO JOGO</h3>
			        	<a style="margin-top: 5%" class="waves-effect waves-light btn background btnControl" onClick="comecarJogo()" id="jogarNovamente" display="">Jogar Novamente</a>
					</div>				
		        </div>
		    </div>
		</div>	
	</div>

	<!-- GANHOU -->
	<div class="col l10 offset-l1" id="ganhou-jogo" display>
		<div class="card transparent darken-1">
	        <div class="card-content deep-purple-text"> 
		        <div class="row">
		        	<div class="titulo col l10 offset-l1 center-align">
			        	<h3 style="font-size: 3vw; margin-top: 5%" class="deep-purple-text">PARABÉNS!!</h3>
			        	<a style="margin-top: 5%" class="waves-effect waves-light btn background btnControl" onClick="comecarJogo()" id="jogarNovamente" display="">Jogar Novamente</a>
					</div>				
		        </div>
		    </div>
		</div>	
	</div>
</div>
<script src="jogos/js/frmAntesDepois.js" type="text/javascript"></script>