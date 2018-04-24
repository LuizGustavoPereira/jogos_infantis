<!-- Tela antes de começar o jogo -->
<div class="row" id="inicio" display>
    <div class="col l10 offset-l1 " >
		<div class="card transparent darken-1">
			<div class="card-content blue-text">
				<div class="center-align">
					<h3>Jogo da Tabuada</h3>
				</div>
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

						    </div>

					  </fieldset>
					</div>
					<div class="col l5 xl5">
						<fieldset>
						    <legend>Selecione o tipo de entrada:</legend>

						    <div class="row">
						    	<div class="col l12 xl12 input-field">
								    <input type="radio" name="entrada" id="teclado" checked>
								    <label for="teclado">Teclado numérico</label>
							    </div>
							    <div class="col l12 xl12 input-field">
								    <input type="radio" name="entrada" id="tecla">
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
		<div class="card transparent darken-1">
			<div class="card-content blue-text">
				<div class="center-align tituloJogo">

				</div>
				<div class="row">
					<div class="col l8">
						
					</div>
					<div class="col l2">
						<fieldset>
							<legend>Tabuada</legend>
							<div class="priResultados">
								
							</div>
						</fieldset>
					</div>
				</div>
				<div class="row left-align">
					<div class="col l12 ">
						<a class="waves-effect waves-light btn background btnControl" onClick="voltar()"><i class="material-icons"> arrow_back </i></a>
					</div>
				</div>			
			</div>            
		</div>
    </div>
</div>

<script type="text/javascript" src="jogos/js/frmTabuada.js"></script>