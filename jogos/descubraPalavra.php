<!-- Pagína inicial -->
<div class="row" >
	<div class="col l10 offset-l1">
		<div class="titulo ">
			<h3 class="float-left amber-text" >DESCUBRA A PALAVRA</h3>			
		</div> 
	</div>
	<div class="col l10 offset-l1" id="telaInicial" display>
        <div class="card transparent darken-1">
            <div class="card-content blue-text"> 
	            <div class="row">
	            	<div class="col l10 offset-l1 center-align">
						<img src="">
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
	            	<div class="col l7  xl8 offset-xl0 margin-top-5" >
	            		<div class="col l7 center-align">		            		
						    <div id="hospital" class="input-descubra-palavra">			        	
								<input onClick="clicaSilaba('hospital1')" id="hospital1" type="button" value="pi" >
								<input onClick="clicaSilaba('hospital2')" id="hospital2" type="button" value="hos">
								<input onClick="clicaSilaba('hospital3')" id="hospital3" type="button" value="tal">
								<span><i class="material-icons">trending_flat</i></span>
								<input onClick="verificaSilaba('hos')" type="button" id="hos" name="" value="" >
								<input onClick="verificaSilaba('pi')" type="button" id="pi" name="" value="">
								<input onClick="verificaSilaba('tal')" type="button" id="tal" name="" value="">
						    </div>
						    <div id="amigo" class="margin-top-10 input-descubra-palavra">			        	
								<input onClick="clicaSilaba('amigo1')" id="amigo1" type="button" value="mi" >
								<input onClick="clicaSilaba('amigo2')" id="amigo2" type="button" value="a">
								<input onClick="clicaSilaba('amigo3')" id="amigo3" type="button" value="go">
								<span><i class="material-icons">trending_flat</i></span>
								<input onClick="verificaSilaba('mi')" type="button" id="a" name="" value="" >
								<input onClick="verificaSilaba('a')" type="button" id="mi" name="" value="">
								<input onClick="verificaSilaba('g')" type="button" id="go" name="" value="">
						    </div>							
				     		
			     		</div>
			     		<div class="col l12" id="divResp">
	            			
	            		</div>
	            		<div class="col l12">	            			
	            			<h5 id="dica"></h5>
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

<script src="jogos/js/frmDescubraPalavra.js" type="text/javascript"></script>