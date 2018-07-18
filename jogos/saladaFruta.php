<!-- Pagína inicial -->
<div class="row" >
	<div class="col l10 offset-l1">
		<div class="titulo ">
			<h3 class="float-left amber-text" >Salada de Frutas</h3>			
		</div> 
	</div>
	<div class="col l10 offset-l1" id="telaInicial" display>
        <div class="card transparent darken-1">
            <div class="card-content blue-text"> 
	            <div class="row">
	            	<div class="col l10 offset-l1 center-align">
						<img class="width-50" src="imagens/salada-de-frutas/salada-fruta.png">
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
	            	<div class="col l7  xl8 offset-xl0" >
	            		
		            	<div class="col xl4 card card-imagens small float-left">
						    <div id="imagemFruta">			        	
									
						    </div>							
				     	</div>
			     		<div class="col xl7 offset-xl1 letras-salada-fruta" id="letrasFruta">
			     			
			     		</div>
			     		<div class="col l12 center-align" id="divResp">
	            			
	            		</div>
	            	</div>
	            	<div class="col l5 xl3 offset-xl1 center-align">
						<fieldset>
							<legend>Pontuação</legend>
							<h5><b id="pontuacao">0</b></h5>
						</fieldset>
						<fieldset>
							<legend>Vidas</legend>
							<h5><b class="red-text" id="vidas"></b><i class="material-icons red-text">favorite</i></h5>
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
</div>

<script src="jogos/js/frmSaladaFruta.js" type="text/javascript"></script>