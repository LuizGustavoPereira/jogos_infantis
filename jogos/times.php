<!-- Pagína inicial -->
<div class="row" >
	<div class="col l10 offset-l1">
		<div class="titulo ">
			<h3 class="float-left amber-text" >ADIVINHE OS TIMES</h3>			
		</div> 
	</div>
	<div class="col l10 offset-l1" id="telaInicial" display>
        <div class="card transparent darken-1">
            <div class="card-content blue-text"> 
	            <div class="row">
	            	<div class="col l10 offset-l1 center-align">
						<img src="imagens/times/futebol.png">
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
	            	<div class="col l7  xl6 offset-xl2 center-align" >
	            		<audio id="errou">	
			            	<source src='sons/geral/errou.mp3' type='audio/mpeg'>													  
						</audio>
						<audio id="acertou">	
			            	<source src='sons/geral/acertou.mp3' type='audio/mpeg'>													  
						</audio>
	            		<div class="col s12 l12 xl12">
		            		<div class="card card-imagens small image-center">
						        <div id="logoTime">			        	
									
						        </div>							
				     		</div>
			     		</div>
			     		<div class="col l12 xl12" id="divResp">
	            			
	            		</div>
	            		<div class="col l12 xl12">	            			
	            			<h5 id="dica"></h5>
	            		</div>
	            	</div>
	            	<div class="col l5 xl3 offset-xl1 center-align">
						<fieldset>
							<legend>Pontuação</legend>
							<h5><b id="pontuacao">0</b></h5>
						</fieldset>
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
            	         	
            </div>            
        </div>
    </div>
    <!-- Tempo esgotado -->
	<div class="col l10 offset-l1" id="tempo-esgotado" display>
		<div class="card transparent darken-1">
	        <div class="card-content deep-purple-text"> 
		        <div class="row">
		        	<div class="titulo col l10 offset-l1 center-align">
			        	<h3 style="font-size: 3vw; margin-top: 9rem" class="blue-text">Seu tempo acabou, tente novamente</h3>
			        	<div class="row left-align" style="margin-top: 10rem">						
						<div class="col l7">
							<a class="waves-effect waves-light btn background btnControl" onClick="jogarNovamente()" display="">Jogar Novamente</a>
						</div>				
				</div>	  
					</div>				
		        </div>
		    </div>
		</div>	
	</div>

<!-- GANHOU -->
	<div class="col l10 offset-l1" id="ganhou-jogo" display>
		<div class="card transparent darken-1">
	        <div class="card-content deep-purple-text"> 
	        	<audio id="ganhou">	
		            <source src='sons/geral/ganhou.mp3' type='audio/mpeg'>
				</audio>
		        <div class="row">
		        	<div class="titulo col l10 offset-l1 center-align">
			        	<h3 style="font-size: 3vw; margin-top: 9rem" class="blue-text">PARABÉNS!!</h3>
			        	<div class="row left-align" style="margin-top: 10rem">
						<div class="col l5 ">
							<a class="waves-effect waves-light btn background btnControl" onClick="voltar()"><i class="material-icons"> arrow_back </i></a>
						</div>	
						<div class="col l7">
							<a class="waves-effect waves-light btn background btnControl" onClick="jogarNovamente()" id="jogarNovamente" display="">Jogar Novamente</a>
						</div>				
				</div>	  
					</div>				
		        </div>
		    </div>
		</div>	
	</div>
</div>



<script src="jogos/js/frmTimes.js" type="text/javascript"></script>