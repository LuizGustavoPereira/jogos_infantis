<!-- Tela antes de começar o jogo -->
<div class="row" id="inicio" display>
    <div class="col l10 offset-l1 " >
		<div class="blue-text titulo">
			<h3>JOGO DA TABUADA</h3>
		</div>
		<div class="card transparent darken-1">
			<div class="card-content blue-text">
				<div class="row">
					<div class="col l5 xl5 offset-l1 offset-xl1 ">
						<fieldset>
						    <legend>Selecione a tabuada:</legend>
						    <div class="row">
						    	<div class="col l12 xl12 input-field">
								    <input type="radio" name="tabuada" id="tabDo2" value="2" checked>
								    <label for="tabDo2">Tabuada do 2</label>
							    </div>
							    <div class="col l12 input-field">
								    <input type="radio" name="tabuada" id="tabDo4" value="4">
								    <label for="tabDo4">Tabuada do 4</label>
							    </div>
							    <div class="col l12 input-field">
								    <input type="radio" name="tabuada" id="tabDo6" value="6">
								    <label for="tabDo6">Tabuada do 6</label>
							    </div>
							    <div class="col l12 input-field">
								    <input type="radio" name="tabuada" id="tabDo8" value="8">
								    <label for="tabDo8">Tabuada do 8</label>
							    </div>
							    <div class="col l12 input-field">
								    <input type="radio" name="tabuada" id="tabDo10" value="10">
								    <label for="tabDo10">Tabuada do 10</label>
							    </div>

						    </div>

					  </fieldset>
					</div>
					<div class="col l5 xl5">
						<fieldset>
						    <legend>Selecione o tipo de entrada:</legend>

						    <div class="row">
						    	<div class="col l12 xl12 input-field">
								    <input type="radio" name="entrada" id="teclado" value="num" checked>
								    <label for="teclado">Teclado numérico</label>
							    </div>
							    <div class="col l12 xl12 input-field">
								    <input type="radio" name="entrada" id="tecla" value="enter">
								    <label for="tecla">Tecla Enter</label>
							    </div>

						    </div>

					  </fieldset>
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
		<div id="tituloJogo" class="blue-text titulo">
		
		</div>
		<div class="card transparent darken-1">
			<div class="card-content blue-text">
				<div class="row no-bottom">

					<div class="col l8 xl9 center-align" >
						<div class="row">
							<audio id="audio-errou">	
					            <source src='sons/geral/errou.mp3' type='audio/mpeg'>
							</audio>
							<audio id="audio-acertou">	
					            <source src='sons/geral/acertou.mp3' type='audio/mpeg'>
							</audio>
							<div class="col l12" id="enunciado">
								
							</div>
							<div class="col l12" style="color:#618fb0; float:left"; id="">
								<h5><b>seguindo o exemplo a cima, complete:</b></h5>
							</div>
							<div class="col l12">
								<div class="row" id="respJogo"></div>
							</div>
						</div>
						
					</div>
					<div class="col l2 offset-l1 center-align">
						<fieldset>
							<legend>Tabuada</legend>
							<div id="priResultados">
								
							</div>
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

	<!-- GANHOU -->
	<div class="col l10 offset-l1" id="ganhou-jogo" display>
		<div class="card transparent darken-1">
	        <div class="card-content deep-purple-text"> 
	        	<audio id="audio-ganhou">	
		            <source src='sons/geral/ganhou.mp3' type='audio/mpeg'>
				</audio>
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
<script type="text/javascript" src="jogos/js/frmTabuada.js"></script>