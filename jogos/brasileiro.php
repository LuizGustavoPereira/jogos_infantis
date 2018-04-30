
<div class="row" id="telaInicial" display>
	<div class="col l10 offset-l1">
		<div class="titulo ">
			<h3 class="float-left" style="color: green">J</h3>
			<h3 class="float-left" style="color: blue">O</h3>
			<h3 class="float-left" style="color: yellow">G</h3>
			<h3 class="float-left" style="color: green">O</h3>
			<h3 class="float-left" style="color: blue; padding-left: 15px">B</h3>
			<h3 class="float-left" style="color: yellow">R</h3>
			<h3 class="float-left" style="color: green">A</h3>
			<h3 class="float-left" style="color: blue">S</h3>
			<h3 class="float-left" style="color: yellow">I</h3>
			<h3 class="float-left" style="color: green">L</h3>
			<h3 class="float-left" style="color: blue">E</h3>
			<h3 class="float-left" style="color: yellow">I</h3>
			<h3 class="float-left" style="color: green">R</h3>
			<h3 class="float-left" style="color: blue">O</h3>
		</div> 
	</div>
	<div class="col l10 offset-l1">
        <div class="card transparent darken-1">
            <div class="card-content blue-text"> 
	            <div class="row">
	            	<div class="col l10 offset-l1">
						<img src="imagens/brasileiro/ze_carioca.png">
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
            		<div class="center-align  col l4" >
        				<img src='imagens/brasileiro/tinta-amarelo.png' class="img-brasileiro-tinta" onClick="pintaBandeira(2)">
        			</div>
        			<div class="center-align col l4">
        				<img src='imagens/brasileiro/tinta-azul.png' class="img-brasileiro-tinta" onClick="pintaBandeira(1)">	
        			</div>
        			<div class="center-align col l4">
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