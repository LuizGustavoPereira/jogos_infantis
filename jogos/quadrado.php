<!-- Tela antes de começar o jogo -->
<div class="row" >
	<div class="col l10 offset-l1">
		<div class="titulo ">
			<h3 class="float-left amber-text" >Quadrado</h3>			
		</div> 
	</div>
	<div class="col l10 offset-l1" id="telaInicial" display>
        <div class="card transparent darken-1">
            <div class="card-content blue-text"> 
	            <div class="row">
	            	<div class="col l10 offset-l1 center-align">
						
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

<!-- Tela do jogo  -->
<div class="row" id="jogo" display>
    <div class="col l10 offset-l1 " >
		<div class="card transparent darken-1">
			<div class="card-content blue-text">
				<div class="row no-bottom">
					<div class="col l8 xl9 center-align" >
						<div class="row">
							<div class="col l2 div-border-quadrado">
								
							</div>
							<div class="col l2 div-border-quadrado">
								
							</div>
							<div class="col l2 div-border-quadrado">
								
							</div>
							<div class="col l2 div-border-quadrado">
								
							</div>
							<div class="col l2 div-border-quadrado">
								
							</div>
						</div>
						<div class="row">
							<div class="col l2">
								<img src="imagens/quadrado/Quad11Mono.png">
							</div>
							<div class="col l2">
								<img src="imagens/quadrado/Quad12Mono.png">
							</div>
							<div class="col l2">
								<img src="imagens/quadrado/Quad13Mono.png">
							</div>
							<div class="col l2">
								<img src="imagens/quadrado/Quad21Mono.png">
							</div>
							<div class="col l2">
								<img src="imagens/quadrado/Quad22Mono.png">
							</div>
							<div class="col l2">
								<img src="imagens/quadrado/Quad23Mono.png">
							</div>
							<div class="col l2">
								<img src="imagens/quadrado/Quad31Mono.png">
							</div>
							<div class="col l2">
								<img src="imagens/quadrado/Quad32Mono.png">
							</div>
							<div class="col l2">
								<img src="imagens/quadrado/Quad33Mono.png">
							</div>
							<div class="col l2">
								<img src="imagens/quadrado/Quad41Mono.png">
							</div>
							<div class="col l2">
								<img src="imagens/quadrado/Quad42Mono.png">
							</div>
							<div class="col l2">
								<img src="imagens/quadrado/Quad43Mono.png">
							</div>
							<div class="col l2">
								<img src="imagens/quadrado/Quad51Mono.png">
							</div>
							<div class="col l2">
								<img src="imagens/quadrado/Quad52Mono.png">
							</div>
							<div class="col l2">
								<img src="imagens/quadrado/Quad53Mono.png">
							</div>
						</div>						
					</div>
					<div class="col l2">
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
				</div>			
			</div>            
		</div>
    </div>
</div>

<!-- GAME OVER -->
<div class="row">
	<div class="col l10 offset-l1" id="fim-do-jogo" display>
		<div class="card transparent darken-1">
	        <div class="card-content deep-purple-text text-darken-2"> 
		        <div class="row">
		        	<div class="titulo col l10 offset-l1 center-align">
			        	<h3 style="font-size: 3vw; margin-top: 5%" class="blue-text">FIM DO JOGO</h3>
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
			        	<h3 style="font-size: 3vw; margin-top: 5%" class="blue-text">PARABÉNS!!</h3>
			        	<a style="margin-top: 5%" class="waves-effect waves-light btn background btnControl" onClick="comecarJogo()" id="jogarNovamente" display="">Jogar Novamente</a>
					</div>				
		        </div>
		    </div>
		</div>	
	</div>
</div>
<script type="text/javascript" src="jogos/js/frmQuadrado.js"></script>