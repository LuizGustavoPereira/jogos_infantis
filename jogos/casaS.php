<!-- Pagína inicial -->
<div class="row" >
	<div class="col l10 offset-l1">
		<div class="titulo ">
			<h3 class="float-left amber-text" >Casa do S</h3>			
		</div> 
	</div>
	<div class="col l10 offset-l1" id="telaInicial" display>
        <div class="card transparent darken-1">
            <div class="card-content blue-text"> 
	            <div class="row">
	            	<div class="col l10 offset-l1 center-align">
						<img src="imagens/descubra-palavra/detetive.gif">
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
	            		<div class="col l12 xl12">		            		
						    <input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" value="7" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
			     		</div>
			     		<div class="col l12 xl12">		            		
						    <input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" value="6" disabled="true">
						   	<input class="input-casa-s-com-borda 58" onclick="dica(7)">
						   	<input class="input-casa-s-sem-borda" value="8" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
			     		</div>		            		
						    <div class="col l12 xl12">		            		
						    <input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" value="5" disabled="true">
						   	<input class="input-casa-s-com-borda 57" onclick="dica(6)">
						   	<input class="input-casa-s-com-borda 56" onclick="dica(7)">
						   	<input class="input-casa-s-com-borda 55" onclick="dica(8)">
						   	<input class="input-casa-s-sem-borda" value="9" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
			     		</div>
			     		<div class="col l12 xl12">		            		
						    <input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" value="4" disabled="true">
						   	<input class="input-casa-s-com-borda 54" onclick="dica(5)">
						   	<input class="input-casa-s-com-borda 53" onclick="dica(6)">
						   	<input class="input-casa-s-com-borda 52" onclick="dica(7)">
						   	<input class="input-casa-s-com-borda 51" onclick="dica(8)">
						   	<input class="input-casa-s-com-borda 50" onclick="dica(9)">
						   	<input class="input-casa-s-sem-borda" value="10" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
			     		</div>
			     		<div class="col l12 xl12">
						    <input class="input-casa-s-sem-borda 49" value="1" disabled="true">
						   	<input class="input-casa-s-sem-borda 48" value="2" disabled="true">
						   	<input class="input-casa-s-sem-borda 47" value="3" disabled="true">
						   	<input class="input-casa-s-com-borda 46" onclick="dica(4)">
						   	<input class="input-casa-s-com-borda 45" onclick="dica(5)">
						   	<input class="input-casa-s-com-borda 44" onclick="dica(6)">
						   	<input class="input-casa-s-com-borda 43" onclick="dica(7)">
						   	<input class="input-casa-s-com-borda 42" onclick="dica(8)">
						   	<input class="input-casa-s-com-borda 41" onclick="dica(9)">
						   	<input class="input-casa-s-com-borda 40" onclick="dica(10)">
						   	<input class="input-casa-s-sem-borda" value="11" disabled="true">
						   	<input class="input-casa-s-sem-borda" value="12" disabled="true">
						   	<input class="input-casa-s-sem-borda" value="13" disabled="true">
			     		</div>
			     		<div class="col l12 xl12">
						    <input class="input-casa-s-com-borda 39" onclick="dica(1)">
						   	<input class="input-casa-s-com-borda 38" onclick="dica(2)">
						   	<input class="input-casa-s-com-borda 37" onclick="dica(3)">
						   	<input class="input-casa-s-com-borda 36" onclick="dica(4)">
						   	<input class="input-casa-s-com-borda 35" onclick="dica(5)">
						   	<input class="input-casa-s-com-borda 34" onclick="dica(6)">
						   	<input class="input-casa-s-com-borda 33" onclick="dica(7)">
						   	<input class="input-casa-s-com-borda 32" onclick="dica(8)">
						   	<input class="input-casa-s-com-borda 31" onclick="dica(9)">
						   	<input class="input-casa-s-com-borda 30" onclick="dica(10)">
						   	<input class="input-casa-s-com-borda 29" onclick="dica(11)">
						   	<input class="input-casa-s-com-borda 28" onclick="dica(12)">
						   	<input class="input-casa-s-com-borda 27" onclick="dica(13)">
			     		</div>
			     		<div class="col l12 xl12">
						    <input id="1-a" class="input-casa-s-com-borda 26" onclick="dica(1)">
						   	<input id="2-a" class="input-casa-s-com-borda 25" onclick="dica(2)">
						   	<input id="3-a" class="input-casa-s-com-borda 24" onclick="dica(3)">
						   	<input id="4-a" class="input-casa-s-com-borda 23" onclick="dica(4)">
						   	<input id="5-a" class="input-casa-s-com-borda 22" onclick="dica(5)">
						   	<input id="6-a" class="input-casa-s-com-borda 21" onclick="dica(6)">
						   	<input id="7-a" class="input-casa-s-com-borda 20" onclick="dica(7)">
						   	<input id="8-a" class="input-casa-s-com-borda 19" onclick="dica(8)">
						   	<input id="9-a" class="input-casa-s-com-borda 18" onclick="dica(9)">
						   	<input id="10-a" class="input-casa-s-com-borda 17" onclick="dica(10)">
						   	<input id="11-a" class="input-casa-s-com-borda 16" onclick="dica(11)">
						   	<input id="12-a" class="input-casa-s-com-borda 15" onclick="dica(12)">
						   	<input id="13-a" class="input-casa-s-com-borda 14" onclick="dica(13)">
			     		</div>
			     		<div class="col l12 xl12">	
						    <input class="input-casa-s-com-borda" value="S" disabled="true">
						   	<input class="input-casa-s-com-borda" value="S" disabled="true">
						   	<input class="input-casa-s-com-borda" value="S" disabled="true">
						   	<input class="input-casa-s-com-borda" value="S" disabled="true">
						   	<input class="input-casa-s-com-borda" value="S" disabled="true">
						   	<input class="input-casa-s-com-borda" value="S" disabled="true">
						   	<input class="input-casa-s-com-borda" value="S" disabled="true">
						   	<input class="input-casa-s-com-borda" value="S" disabled="true">
						   	<input class="input-casa-s-com-borda" value="S" disabled="true">
						   	<input class="input-casa-s-com-borda" value="S" disabled="true">
						   	<input class="input-casa-s-com-borda" value="S" disabled="true">
						   	<input class="input-casa-s-com-borda" value="S" disabled="true">
						   	<input class="input-casa-s-com-borda" value="S" disabled="true">
			     		</div>
			     		<div class="col l12 xl12">	    
			     			<input id="1-a" class="input-casa-s-com-borda 13" onclick="dica(1)">
						   	<input id="2-o" class="input-casa-s-com-borda 12" onclick="dica(2)">
						   	<input id="3-o" class="input-casa-s-com-borda 11" onclick="dica(3)">
						   	<input id="4-o" class="input-casa-s-com-borda 10" onclick="dica(4)">
						   	<input id="5-o" class="input-casa-s-com-borda 9" onclick="dica(5)">
						   	<input id="6-o" class="input-casa-s-com-borda 8" onclick="dica(6)">
						   	<input id="7-e" class="input-casa-s-com-borda 7" onclick="dica(7)">
						   	<input id="8-o" class="input-casa-s-com-borda 6" onclick="dica(8)">
						   	<input id="9-o" class="input-casa-s-com-borda 5"  onclick="dica(9)">
						   	<input id="10-o" class="input-casa-s-com-borda 4" onclick="dica(10)">
						   	<input id="11-a" class="input-casa-s-com-borda 3" onclick="dica(11)">
						   	<input id="12-o" class="input-casa-s-com-borda 2" onclick="dica(12)">
						   	<input id="13-o" class="input-casa-s-com-borda 1" onclick="dica(13)">
			     		</div>
			     		<button onclick="corrigir()"></button>
	            		<div class="col l12 xl12">
	            			<input class="input-casa-s-dica" id="dica">
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
	<div class="col l10 offset-l1" id="fim-do-jogo">
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
</div>

<script src="jogos/js/frmCasaS.js" type="text/javascript"></script>