<!-- Pagína inicial -->
<div class="row" >
	<div class="col s12 l10 offset-l1">
		<div class="titulo ">
			<h3 class="float-left amber-text" >DESCUBRA A PALAVRA</h3>			
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
	<div class="col s12 l10 offset-l1" id="jogo" display>
        <div class="card transparent darken-1">
            <div class="card-content "> 
	            <div class="row">
	            	<audio id="audio">	
			            <source src='sons/geral/ganhou.mp3' type='audio/mpeg'>
					</audio>
	            	<div class="col s8 l7  xl8 offset-xl0" >
	            		<div class="col s12 l8 xl8 center-align">		            		
						    <div id="hospital" class="input-descubra-palavra row">						    			        
								<input onClick="clicaSilaba('hospital','1')" id="hospital1" type="button" value="pi" >
								<input onClick="clicaSilaba('hospital','2')" id="hospital2" type="button" value="hos">
								<input onClick="clicaSilaba('hospital','3')" id="hospital3" type="button" value="tal">
								<span><i class="material-icons">trending_flat</i></span>
								<input class="input-resposta-descubra-palavra" onClick="verificaSilaba('hos','hospital')" type="button" id="hoshospital" name="" value="" >
								<input class="input-resposta-descubra-palavra" onClick="verificaSilaba('pi','hospital')" type="button" id="pihospital" name="" value="">
								<input class="input-resposta-descubra-palavra" onClick="verificaSilaba('tal','hospital')" type="button" id="talhospital" name="" value="">
						    </div>
						    <br/>
						    <div id="amigo" class="margin-top-10 input-descubra-palavra">			        	
								<input onClick="clicaSilaba('amigo','1')" id="amigo1" type="button" value="mi">
								<input onClick="clicaSilaba('amigo','2')" id="amigo2" type="button" value="a">
								<input onClick="clicaSilaba('amigo','3')" id="amigo3" type="button" value="go">
								<span><i class="material-icons">trending_flat</i></span>
								<input class="input-resposta-descubra-palavra" onClick="verificaSilaba('a','amigo')" type="button" id="aamigo" name="" value="" >
								<input class="input-resposta-descubra-palavra" onClick="verificaSilaba('mi','amigo')" type="button" id="miamigo" name="" value="">
								<input class="input-resposta-descubra-palavra" onClick="verificaSilaba('go','amigo')" type="button" id="goamigo" name="" value="">
						    </div>
						    <br/>	
						    <div id="vestido" class="margin-top-10 input-descubra-palavra">			        	
								<input onClick="clicaSilaba('vestido','1')" id="vestido1" type="button" value="ti" >
								<input onClick="clicaSilaba('vestido','2')" id="vestido2" type="button" value="ves">
								<input onClick="clicaSilaba('vestido','3')" id="vestido3" type="button" value="do">
								<span><i class="material-icons">trending_flat</i></span>
								<input class="input-resposta-descubra-palavra" onClick="verificaSilaba('ves', 'vestido')" type="button" id="vesvestido" name="" value="" >
								<input class="input-resposta-descubra-palavra" onClick="verificaSilaba('ti', 'vestido')" type="button" id="tivestido" name="" value="">
								<input class="input-resposta-descubra-palavra" onClick="verificaSilaba('do', 'vestido')" type="button" id="dovestido" name="" value="">
						    </div>	
						    <br/>	
						    <div id="esperto" class="margin-top-10 input-descubra-palavra">			        	
								<input onClick="clicaSilaba('esperto','1')" id="esperto1" type="button" value="to" >
								<input onClick="clicaSilaba('esperto','2')" id="esperto2" type="button" value="es">
								<input onClick="clicaSilaba('esperto','3')" id="esperto3" type="button" value="per">
								<span><i class="material-icons">trending_flat</i></span>
								<input class="input-resposta-descubra-palavra" onClick="verificaSilaba('es','esperto')" type="button" id="esesperto" name="" value="" >
								<input class="input-resposta-descubra-palavra" onClick="verificaSilaba('per','esperto')" type="button" id="peresperto" name="" value="">
								<input class="input-resposta-descubra-palavra" onClick="verificaSilaba('to','esperto')" type="button" id="toesperto" name="" value="">
						    </div>		
						    <br/>	
						    <div id="caderno" class="margin-top-10 input-descubra-palavra">			        	
								<input onClick="clicaSilaba('caderno','1')" id="caderno1" type="button" value="der" >
								<input onClick="clicaSilaba('caderno','2')" id="caderno2" type="button" value="ca">
								<input onClick="clicaSilaba('caderno','3')" id="caderno3" type="button" value="no">
								<span><i class="material-icons">trending_flat</i></span>
								<input class="input-resposta-descubra-palavra" onClick="verificaSilaba('ca','caderno')" type="button" id="cacaderno" name="" value="" >
								<input class="input-resposta-descubra-palavra" onClick="verificaSilaba('der','caderno')" type="button" id="dercaderno" name="" value="">
								<input class="input-resposta-descubra-palavra" onClick="verificaSilaba('no','caderno')" type="button" id="nocaderno" name="" value="">
						    </div>	
						    <br/>	
						    <div id="floresta" class="margin-top-10 input-descubra-palavra">			        	
								<input onClick="clicaSilaba('floresta','1')" id="floresta1" type="button" value="res" >
								<input onClick="clicaSilaba('floresta','2')" id="floresta2" type="button" value="ta">
								<input onClick="clicaSilaba('floresta','3')" id="floresta3" type="button" value="flo">
								<span><i class="material-icons">trending_flat</i></span>
								<input class="input-resposta-descubra-palavra" onClick="verificaSilaba('flo', 'floresta')" type="button" id="flofloresta" name="" value="" >
								<input class="input-resposta-descubra-palavra" onClick="verificaSilaba('res', 'floresta')" type="button" id="resfloresta" name="" value="">
								<input class="input-resposta-descubra-palavra" onClick="verificaSilaba('ta','floresta')" type="button" id="tafloresta" name="" value="">
						    </div>
						    <br/>	
						    <div id="bolacha" class="margin-top-10 input-descubra-palavra">			        	
								<input onClick="clicaSilaba('bolacha','1')" id="bolacha1" type="button" value="cha" >
								<input onClick="clicaSilaba('bolacha','2')" id="bolacha2" type="button" value="bo">
								<input onClick="clicaSilaba('bolacha','3')" id="bolacha3" type="button" value="la">
								<span><i class="material-icons">trending_flat</i></span>
								<input class="input-resposta-descubra-palavra" onClick="verificaSilaba('bo', 'bolacha')" type="button" id="bobolacha" name="" value="" >
								<input class="input-resposta-descubra-palavra" onClick="verificaSilaba('la', 'bolacha')" type="button" id="labolacha" name="" value="">
								<input class="input-resposta-descubra-palavra" onClick="verificaSilaba('cha', 'bolacha')" type="button" id="chabolacha" name="" value="">
						    </div>
						    <br/>	
						    <div id="caneca" class="margin-top-10 input-descubra-palavra">			        	
								<input onClick="clicaSilaba('caneta','1')" id="caneta1" type="button" value="ne" >
								<input onClick="clicaSilaba('caneta','2')" id="caneta2" type="button" value="ta">
								<input onClick="clicaSilaba('caneta','3')" id="caneta3" type="button" value="ca">
								<span><i class="material-icons">trending_flat</i></span>
								<input class="input-resposta-descubra-palavra" onClick="verificaSilaba('ca', 'caneta')" type="button" id="cacaneta" name="" value="" >
								<input class="input-resposta-descubra-palavra" onClick="verificaSilaba('ne', 'caneta')" type="button" id="necaneta" name="" value="">
								<input class="input-resposta-descubra-palavra" onClick="verificaSilaba('ta', 'caneta')" type="button" id="tacaneta" name="" value="">
						    </div>
						   			
				     		
			     		</div>
			     		<div class="col l12" id="divResp">
	            			
	            		</div>
	            		<div class="col l12">	            			
	            			<h5 id="dica"></h5>
	            		</div>
	            	</div>
	            	<div class="col s3 l5 xl3 offset-xl1 center-align">					
						<fieldset>
							<legend>Acertos</legend>
							<h5><b class="red-text" id="acertos"></b><i class="material-icons red-text">favorite</i></h5>
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
    <div class="col s12 l10 offset-l1" id="ganhou-jogo">
		<div class="card transparent darken-1">
	        <div class="card-content blue-text"> 
		        <div class="row">
		        	<div class="titulo col s12 l10 offset-l1 center-align">
			        	<h3 style="color: #00a1ff; font-size: 3vw; margin-top: 5%">PARABÉNS!!</h3>
			        	<a style="margin-top: 5%" class="waves-effect waves-light btn background btnControl" onClick="comecarJogo()" id="jogarNovamente" display="">Jogar Novamente</a>
					</div>				
		        </div>
		    </div>
		</div>	
	</div>
	<div class="col s12 l10 offset-l1" id="fim-do-jogo">
		<div class="card transparent darken-1">
	        <div class="card-content blue-text text-darken-2"> 
		        <div class="row">
		        	<div class="titulo col s12 l10 offset-l1 center-align">
			        	<h3 style="color: #00a1ff; font-size: 3vw; margin-top: 5%">FIM DO JOGO</h3>
			        	<a style="margin-top: 5%" class="waves-effect waves-light btn background btnControl" onClick="comecarJogo()" id="jogarNovamente" display="">Jogar Novamente</a>
					</div>				
		        </div>
		    </div>
		</div>	
	</div>
</div>

<script src="jogos/js/frmDescubraPalavra.js" type="text/javascript"></script>