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
	            	<div class="col l12 xl12 offset-xl0 center-align" >
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
						   	<input id="7-m" class="input-casa-s-com-borda 55" maxlength="1" onclick="dica(7)">
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
						   	<input id="6-g" class="input-casa-s-com-borda 54" maxlength="1" onclick="dica(6)">
						   	<input id="7-a" class="input-casa-s-com-borda 53" maxlength="1" onclick="dica(7)">
						   	<input id="8-t" class="input-casa-s-com-borda 52" maxlength="1" onclick="dica(8)">
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
						   	<input id="5-a" class="input-casa-s-com-borda 51" maxlength="1" onclick="dica(5)">
						   	<input id="6-o" class="input-casa-s-com-borda 50" maxlength="1" onclick="dica(6)">
						   	<input id="7-i" class="input-casa-s-com-borda 49" maxlength="1" onclick="dica(7)">
						   	<input id="8-e" class="input-casa-s-com-borda 48" maxlength="1" onclick="dica(8)">
						   	<input id="9-m" class="input-casa-s-com-borda 47" maxlength="1" onclick="dica(9)">
						   	<input class="input-casa-s-sem-borda" value="10" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
						   	<input class="input-casa-s-sem-borda" disabled="true">
			     		</div>
			     		<div class="col l12 xl12">
						    <input class="input-casa-s-sem-borda" value="1" disabled="true">
						   	<input class="input-casa-s-sem-borda" value="2" disabled="true">
						   	<input class="input-casa-s-sem-borda" value="3" disabled="true">
						   	<input id="4-p" class="input-casa-s-com-borda 46" maxlength="1" onclick="dica(4)">
						   	<input id="5-t" class="input-casa-s-com-borda 45" maxlength="1" onclick="dica(5)">
						   	<input id="6-s" class="input-casa-s-com-borda 44" maxlength="1" onclick="dica(6)">
						   	<input id="7-o" class="input-casa-s-com-borda 43" maxlength="1" onclick="dica(7)">
						   	<input id="8-d" class="input-casa-s-com-borda 42" maxlength="1" onclick="dica(8)">
						   	<input id="9-e" class="input-casa-s-com-borda 41" maxlength="1" onclick="dica(9)">
						   	<input id="10-p" class="input-casa-s-com-borda 40" maxlength="1" onclick="dica(10)">
						   	<input class="input-casa-s-sem-borda" value="11" disabled="true">
						   	<input class="input-casa-s-sem-borda" value="12" disabled="true">
						   	<input class="input-casa-s-sem-borda" value="13" disabled="true">
			     		</div>
			     		<div class="col l12 xl12">
						    <input id="1-c" class="input-casa-s-com-borda 39" maxlength="1" onclick="dica(1)">
						   	<input id="2-v" class="input-casa-s-com-borda 38" maxlength="1" onclick="dica(2)">
						   	<input id="3-r" class="input-casa-s-com-borda 37" maxlength="1" onclick="dica(3)">
						   	<input id="4-r" class="input-casa-s-com-borda 36" maxlength="1" onclick="dica(4)">
						   	<input id="5-r" class="input-casa-s-com-borda 35" maxlength="1" onclick="dica(5)">
						   	<input id="6-t" class="input-casa-s-com-borda 34" maxlength="1" onclick="dica(6)">
						   	<input id="7-n" class="input-casa-s-com-borda 33" maxlength="1" onclick="dica(7)">
						   	<input id="8-i" class="input-casa-s-com-borda 32" maxlength="1" onclick="dica(8)">
						   	<input id="9-l" class="input-casa-s-com-borda 31" maxlength="1" onclick="dica(9)">
						   	<input id="10-e" class="input-casa-s-com-borda 30" maxlength="1" onclick="dica(10)">
						   	<input id="11-p" class="input-casa-s-com-borda 29" maxlength="1" onclick="dica(11)">
						   	<input id="12-o" class="input-casa-s-com-borda 28" maxlength="1" onclick="dica(12)">
						   	<input id="13-p" class="input-casa-s-com-borda 27" maxlength="1" onclick="dica(13)">
			     		</div>
			     		<div class="col l12 xl12">
						    <input id="1-a" class="input-casa-s-com-borda 26" maxlength="1" onclick="dica(1)">
						   	<input id="2-a" class="input-casa-s-com-borda 25" maxlength="1" onclick="dica(2)">
						   	<input id="3-a" class="input-casa-s-com-borda 24" maxlength="1" onclick="dica(3)">
						   	<input id="4-e" class="input-casa-s-com-borda 23" maxlength="1" onclick="dica(4)">
						   	<input id="5-a" class="input-casa-s-com-borda 22" maxlength="1" onclick="dica(5)">
						   	<input id="6-o" class="input-casa-s-com-borda 21" maxlength="1" onclick="dica(6)">
						   	<input id="7-e" class="input-casa-s-com-borda 20" maxlength="1" onclick="dica(7)">
						   	<input id="8-o" class="input-casa-s-com-borda 19" maxlength="1" onclick="dica(8)">
						   	<input id="9-o" class="input-casa-s-com-borda 18" maxlength="1" onclick="dica(9)">
						   	<input id="10-n" class="input-casa-s-com-borda 17" maxlength="1" onclick="dica(10)">
						   	<input id="11-e" class="input-casa-s-com-borda 16" maxlength="1" onclick="dica(11)">
						   	<input id="12-s" class="input-casa-s-com-borda 15" maxlength="1" onclick="dica(12)">
						   	<input id="13-i" class="input-casa-s-com-borda 14" maxlength="1" onclick="dica(13)">
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
			     			<input id="1-a" class="input-casa-s-com-borda 13" data-next=".12" maxlength="1" onclick="dica(1)">
						   	<input id="2-o" class="input-casa-s-com-borda 12" maxlength="1" onclick="dica(2)">
						   	<input id="3-o" class="input-casa-s-com-borda 11" maxlength="1" onclick="dica(3)">
						   	<input id="4-o" class="input-casa-s-com-borda 10" maxlength="1" onclick="dica(4)">
						   	<input id="5-o" class="input-casa-s-com-borda 9"  maxlength="1" onclick="dica(5)">
						   	<input id="6-o" class="input-casa-s-com-borda 8"  maxlength="1" onclick="dica(6)">
						   	<input id="7-e" class="input-casa-s-com-borda 7"  maxlength="1" onclick="dica(7)">
						   	<input id="8-o" class="input-casa-s-com-borda 6"  maxlength="1" onclick="dica(8)">
						   	<input id="9-o" class="input-casa-s-com-borda 5"  maxlength="1" onclick="dica(9)">
						   	<input id="10-o" class="input-casa-s-com-borda 4" maxlength="1" onclick="dica(10)">
						   	<input id="11-a" class="input-casa-s-com-borda 3" maxlength="1" onclick="dica(11)">
						   	<input id="12-o" class="input-casa-s-com-borda 2" maxlength="1" onclick="dica(12)">
						   	<input id="13-o" class="input-casa-s-com-borda 1" maxlength="1"  onclick="dica(13)">
			     		</div>
			     		
	            		<div class="col l12 xl12 margin-top-5">
	            			<button class="waves-effect waves-light btn background btnControl float-right" onclick="corrigir()">Corrigir</button>
	            			<div class="col xl10" style="float: left;">
	            				<input class=" input-casa-s-dica col xl2 float-left" value="Dica:" disabled="true">
	            				<input class="col xl8 input-casa-s-dica float-left" id="dica" disabled="true">
	            			</div>
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