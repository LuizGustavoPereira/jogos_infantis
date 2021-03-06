<!-- Pagína inicial -->
<div class="row" >
	<div class="col l10 offset-l1">
		<div class="titulo ">
			<h3 class="float-left blue-text" >Animais</h3>			
		</div> 
	</div>
	<div class="col l10 offset-l1" id="telaInicial" display>
        <div class="card transparent darken-1">
            <div class="card-content blue-text"> 
	            <div class="row">
	            	<div class="col l10 offset-l1 center-align">
						<img class="width-50" src="imagens/animais/capa.png">
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

<!-- Pagína do jogo -->
<div class="row">
	<div class="col l10 offset-l1" id="jogo" display>
        <div class="card transparent darken-1">
            <div class="card-content "> 
	            <div class="row">
	            	<div class="col xl12">
			            <audio id="audio-aguia">	
			            	<source src='sons/animais/aguia.mp3' type='audio/mpeg'>													  
						</audio>
						<audio id="audio-gato">	
			            	<source src='sons/animais/gato.mp3' type='audio/mpeg'>											  
						</audio>
						<audio id="audio-elefante">	
			            	<source src='sons/animais/elefante.mp3' type='audio/mpeg'>											  
						</audio>
						<audio id="audio-cachorro">	
			            	<source src='sons/animais/cachorro.mp3' type='audio/mpeg'>											  
						</audio>
						<audio id="audio-leao">	
			            	<source src='sons/animais/leao.mp3' type='audio/mpeg'>												  
						</audio>
						<audio id="audio-bode">	
			            	<source src='sons/animais/bode.mp3' type='audio/mpeg'>												  
						</audio>
						<audio id="audio-touro">	
			            	<source src='sons/animais/touro.mp3' type='audio/mpeg'>											  
						</audio>
						<audio id="audio-tigre">	
			            	<source src='sons/animais/tigre.mp3' type='audio/mpeg'>													  
						</audio>
						<audio id="audio-macaco">	
			            	<source src='sons/animais/macaco.mp3' type='audio/mpeg'>												  
						</audio>
						
						<audio id="ganhou">
							<source src="sons/geral/ganhou.mp3" type="audio/mpeg">						   	
						</audio>
						<audio id="perdeu">
							<source src="sons/geral/perdeu.mp3" type="audio/mpeg">						   
						</audio>
					</div>
	            	<div class="col l7 xl8 offset-xl0" >
	            		
		            	<div class="col xl12 card card-imagens center-align">
						    <div >			        	
								<img class='width-70' id="imagemAnimal">	
						    </div>							
				     	</div>			     		
	            	</div>
	            	<div class="col s5 l5 xl3 offset-xl1 center-align">
						<fieldset>
							<legend>Acertos</legend>
							<h5><b id="acertos">0</b></h5>
						</fieldset>
						<fieldset>
							<legend>Erros</legend>
							<h5><b class="red-text" id="erros">0</b></h5>
						</fieldset>						
					</div>
	            	<div class="col l5 xl3 offset-xl1 center-align">

						<fieldset>
							<legend>Tempo</legend>
							<fieldset class="tempo">
								<div class="row">
									<div class="col l7" id="min">
										
									</div>									
									<div class="col l5" id="countTempo">
										&nbsp;
									</div>
								</div>
							</fieldset>
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
	<div class="col l10 offset-l1" id="acabou-o-tempo" display>
		<div class="card transparent darken-1">
	        <div class="card-content blue-text text-darken-2"> 
		        <div class="row">
		        	<div class="titulo col l10 offset-l1 center-align">
			        	<h3 style="color: #00a1ff; font-size: 3vw; margin-top: 5%">Tempo Esgotado</h3>
			        	<a style="margin-top: 5%" class="waves-effect waves-light btn background btnControl" onClick="comecarJogo()" id="jogarNovamente" display="">Jogar Novamente</a>
					</div>				
		        </div>
		    </div>
		</div>	
	</div>
</div>

<script src="jogos/js/frmAnimais.js" type="text/javascript"></script>