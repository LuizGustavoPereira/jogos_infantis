
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
	            	<div class="col l10 offset-l1">
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
<div class="row" id="jogo" display>
    <div class="col l10 offset-l1">
        <div class="card transparent darken-1">
            <div class="card-content blue-text text-darken-2"> 
	            <div class="row">
	            	<div class="center-align col l12" id="bandeira">
	            		<img src='imagens/brasileiro/bandeira-preta-branca.png' class='img-brasileiro-bandeira'>
            		</div>  
            		<div class="center-align  col l2 offset-l1" >
        				<img src='imagens/brasileiro/tinta-amarelo.png' class="img-brasileiro-tinta" onClick="pintaBandeira(2)">
        			</div>
        			<div class="center-align  col l2" >
        				<img src='imagens/brasileiro/tinta-roxa.png' class="img-brasileiro-tinta" onClick="pintaBandeira(0)">
        			</div>
        			<div class="center-align col l2">
        				<img src='imagens/brasileiro/tinta-azul.png' class="img-brasileiro-tinta" onClick="pintaBandeira(1)">	
        			</div>
        			<div class="center-align col l2">
        				<img src='imagens/brasileiro/tinta-vermelha.png' class="img-brasileiro-tinta" onClick="pintaBandeira(0)">	
        			</div>
        			<div class="center-align col l2">
        				<img src='imagens/brasileiro/tinta-verde.png' class="img-brasileiro-tinta" onClick="pintaBandeira(3)">   
        			</div>
            	</div>  
            	<div class="row">
            		<div class="col l10 offset-l1 center-align" id="nomeCor">

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
<script src="jogos/js/frmBrasileiro.js" type="text/javascript"></script>