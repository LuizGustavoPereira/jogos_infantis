<!-- Pagína inicial -->
<div class="row" >
	<div class="col s12 l10 offset-l1">
		<div class="titulo ">
			<h3 class="float-left amber-text" >Casa do S</h3>			
		</div> 
	</div>
	<div class="col s12 l10 offset-l1" id="telaInicial" display>
        <div class="card transparent darken-1">
            <div class="card-content blue-text"> 
	            <div class="row">
	            	<div class="col s12 l10 offset-l1 center-align">
						<img src="imagens/descubra-palavra/detetive.gif">
	            	</div>
            	</div> 
            	<div class="row center-align">
					<div class="col s12 l10 offset-l1">
						<a class="waves-effect waves-light btn background btnControl" onClick="comecarJogo()">COMEÇAR</a>
					</div>
				</div>          	
            </div>            
        </div>
    </div>
</div>

<!-- Pagína do jogo -->
<div class="row">
	<div class="col s12 l12" id="jogo" display>
        <div class="card transparent darken-1">
            <div class="card-content "> 
	            <div class="row">
	            	<div class="col s12 l12 xl12 center-align" >
	            		<div class="col s12 l12 xl12">		            		
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
			     		<div class="col s12 l12 xl12">		            		
						    <input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" value="6" disabled="true">
						   	<input id="7-m" class="input-casa-s-com-borda 55 caixa25" maxlength="1" onclick="dica(7,25)" type="text">
						   	<input class="input-casa-s-sem-borda" value="8" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
			     		</div>		            		
						    <div class="col s12 l12 xl12">		            		
						    <input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" value="5" disabled="true">
						   	<input id="6-g" class="input-casa-s-com-borda 54 caixa19" maxlength="1" onclick="dica(6,19)" type="text">
						   	<input id="7-a" class="input-casa-s-com-borda 53 caixa26" maxlength="1" onclick="dica(7,26)" type="text">
						   	<input id="8-t" class="input-casa-s-com-borda 52 caixa32" maxlength="1" onclick="dica(8,32)" type="text">
						   	<input class="input-casa-s-sem-borda" value="9" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
			     		</div>
			     		<div class="col s12 l12 xl12">		            		
						    <input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" value="4" disabled="true">
						   	<input id="5-a" class="input-casa-s-com-borda 51 caixa14" maxlength="1" onclick="dica(5,14)" type="text">
						   	<input id="6-o" class="input-casa-s-com-borda 50 caixa20" maxlength="1" onclick="dica(6,20)" type="text">
						   	<input id="7-i" class="input-casa-s-com-borda 49 caixa27" maxlength="1" onclick="dica(7,27)" type="text">
						   	<input id="8-e" class="input-casa-s-com-borda 48 caixa33" maxlength="1" onclick="dica(8,33)" type="text">
						   	<input id="9-m" class="input-casa-s-com-borda 47 caixa38" maxlength="1" onclick="dica(9,38)" type="text">
						   	<input class="input-casa-s-sem-borda" value="10" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
			     		</div>
			     		<div class="col s12 l12 xl12">
						    <input class="input-casa-s-sem-borda" value="1" disabled="true">
						   	<input class="input-casa-s-sem-borda" value="2" disabled="true">
						   	<input class="input-casa-s-sem-borda" value="3" disabled="true">
						   	<input id="4-p" class="input-casa-s-com-borda 46 caixa10" maxlength="1" onclick="dica(4,10)" type="text">
						   	<input id="5-t" class="input-casa-s-com-borda 45 caixa15" maxlength="1" onclick="dica(5,15)" type="text">
						   	<input id="6-s" class="input-casa-s-com-borda 44 caixa21" maxlength="1" onclick="dica(6,21)" type="text">
						   	<input id="7-o" class="input-casa-s-com-borda 43 caixa28" maxlength="1" onclick="dica(7,28)" type="text">
						   	<input id="8-d" class="input-casa-s-com-borda 42 caixa34" maxlength="1" onclick="dica(8,34)" type="text">
						   	<input id="9-e" class="input-casa-s-com-borda 41 caixa39" maxlength="1" onclick="dica(9,39)" type="text">
						   	<input id="10-p" class="input-casa-s-com-borda 40 caixa43" maxlength="1" onclick="dica(10,43)" type="text">
						   	<input class="input-casa-s-sem-borda" value="11" disabled="true">
						   	<input class="input-casa-s-sem-borda" value="12" disabled="true">
						   	<input class="input-casa-s-sem-borda" value="13" disabled="true">
			     		</div>
			     		<div class="col s12 l12 xl12">
						    <input id="1-c" class="input-casa-s-com-borda 39 caixa1" maxlength="1" onclick="dica(1,1)" type="text">
						   	<input id="2-v" class="input-casa-s-com-borda 38 caixa4" maxlength="1" onclick="dica(2,4)" type="text">
						   	<input id="3-r" class="input-casa-s-com-borda 37 caixa7" maxlength="1" onclick="dica(3,7)" type="text">
						   	<input id="4-r" class="input-casa-s-com-borda 36 caixa11" maxlength="1" onclick="dica(4,11)" type="text">
						   	<input id="5-r" class="input-casa-s-com-borda 35 caixa16" maxlength="1" onclick="dica(5,16)" type="text">
						   	<input id="6-t" class="input-casa-s-com-borda 34 caixa22" maxlength="1" onclick="dica(6,22)" type="text">
						   	<input id="7-n" class="input-casa-s-com-borda 33 caixa29" maxlength="1" onclick="dica(7,29)" type="text">
						   	<input id="8-i" class="input-casa-s-com-borda 32 caixa35" maxlength="1" onclick="dica(8,35)" type="text">
						   	<input id="9-l" class="input-casa-s-com-borda 31 caixa40" maxlength="1" onclick="dica(9,40)" type="text">
						   	<input id="10-e" class="input-casa-s-com-borda 30 caixa44" maxlength="1" onclick="dica(10,44)" type="text">
						   	<input id="11-p" class="input-casa-s-com-borda 29 caixa47" maxlength="1" onclick="dica(11,47)" type="text">
						   	<input id="12-o" class="input-casa-s-com-borda 28 caixa50" maxlength="1" onclick="dica(12,50)" type="text">
						   	<input id="13-p" class="input-casa-s-com-borda 27 caixa53" maxlength="1" onclick="dica(13,53)" type="text">
			     		</div>
			     		<div class="col s12 l12 xl12">
						    <input id="1-a" class="input-casa-s-com-borda 26 caixa2" maxlength="1" onclick="dica(1,2)" type="text">
						   	<input id="2-a" class="input-casa-s-com-borda 25 caixa5" maxlength="1" onclick="dica(2,5)" type="text">
						   	<input id="3-a" class="input-casa-s-com-borda 24 caixa8" maxlength="1" onclick="dica(3,8)" type="text">
						   	<input id="4-e" class="input-casa-s-com-borda 23 caixa12" maxlength="1" onclick="dica(4,12)" type="text">
						   	<input id="5-a" class="input-casa-s-com-borda 22 caixa17" maxlength="1" onclick="dica(5,17)" type="text">
						   	<input id="6-o" class="input-casa-s-com-borda 21 caixa23" maxlength="1" onclick="dica(6,23)" type="text">
						   	<input id="7-e" class="input-casa-s-com-borda 20 caixa30" maxlength="1" onclick="dica(7,30)" type="text">
						   	<input id="8-o" class="input-casa-s-com-borda 19 caixa36" maxlength="1" onclick="dica(8,36)" type="text">
						   	<input id="9-o" class="input-casa-s-com-borda 18 caixa41" maxlength="1" onclick="dica(9,41)" type="text">
						   	<input id="10-n" class="input-casa-s-com-borda 17 caixa45" maxlength="1" onclick="dica(10,45)" type="text">
						   	<input id="11-e" class="input-casa-s-com-borda 16 caixa48" maxlength="1" onclick="dica(11,48)" type="text">
						   	<input id="12-s" class="input-casa-s-com-borda 15 caixa51" maxlength="1" onclick="dica(12,51)" type="text">
						   	<input id="13-i" class="input-casa-s-com-borda 14 caixa54" maxlength="1" onclick="dica(13,54)" type="text">
			     		</div>
			     		<div class="col s12 l12 xl12">	
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
			     		<div class="col s12 l12 xl12">	    
			     			<input id="1-a" class="input-casa-s-com-borda 13 caixa3" maxlength="1" onclick="dica(1,3)" type="text">
						   	<input id="2-o" class="input-casa-s-com-borda 12 caixa6" maxlength="1" onclick="dica(2,6)" type="text">
						   	<input id="3-o" class="input-casa-s-com-borda 11 caixa9" maxlength="1" onclick="dica(3,9)">
						   	<input id="4-o" class="input-casa-s-com-borda 10 caixa13" maxlength="1" onclick="dica(4,13)">
						   	<input id="5-o" class="input-casa-s-com-borda 9 caixa18"  maxlength="1" onclick="dica(5,18)">
						   	<input id="6-o" class="input-casa-s-com-borda 8 caixa24"  maxlength="1" onclick="dica(6,24)">
						   	<input id="7-e" class="input-casa-s-com-borda 7 caixa31"  maxlength="1" onclick="dica(7,31)">
						   	<input id="8-o" class="input-casa-s-com-borda 6 caixa37"  maxlength="1" onclick="dica(8,37)">
						   	<input id="9-o" class="input-casa-s-com-borda 5 caixa42"  maxlength="1" onclick="dica(9,42)">
						   	<input id="10-o" class="input-casa-s-com-borda 4 caixa46" maxlength="1" onclick="dica(10,46)">
						   	<input id="11-a" class="input-casa-s-com-borda 3 caixa49" maxlength="1" onclick="dica(11,49)">
						   	<input id="12-o" class="input-casa-s-com-borda 2 caixa52" maxlength="1" onclick="dica(12,52)">
						   	<input id="13-o" class="input-casa-s-com-borda 1 caixa55" maxlength="1"  onclick="dica(13,55)">
			     		</div>			     			        
	            	</div>
	            	<div class="col s12 l12 xl12 margin-top-5">
	            		<button class="waves-effect waves-light btn background btnControl float-right" onclick="corrigir()">Corrigir</button>
	            		<div class="col xl12" style="float: left;">
	            			<div class="col xl1 input-casa-s-dica float-left" disabled="true"><h5>Dica:</h5></div>
	            			<div class="col xl10 input-casa-s-dica float-left"  disabled="true"><h5 id="dica">Onde você mora.</h5></div>
	            		</div>
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