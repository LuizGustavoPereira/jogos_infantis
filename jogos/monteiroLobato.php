<!-- Tela antes de começar o jogo -->
<div class="row" id="inicio" display>
    <div class="col l10 offset-l1 " >
		<div class="orange-text titulo">
			<h3>Brincando com Monteiro Lobato</h3>
		</div>
		<div class="card transparent darken-1">
			<div class="card-content blue-text">
				<div class="row">
					<div class="col l10 offset-l1 center-align">
						<img src="imagens/monteiroLobato/monteiroLobato.png">
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

					<div class="col l8 center-align" >
						<div class="row">
							<div class="col l12" id="enunciado">
								
							</div>
							<div class="col l12" style="margin-top: 15px">
								<div class="row" id="respJogo"></div>
							</div>
						</div>
						
					</div>
					<div class="col l2 offset-l1 center-align">
						<fieldset>
							<legend>Pontuação</legend>
							<h5><b id="pontuacao">0</b></h5>
						</fieldset>
						<fieldset>
							<legend>Vidas</legend>
							<h5><b class="red-text" id="vidas"></b><i class="material-icons red-text">favorite</i></h5>
						</fieldset>

					</div>
				</div>			
				<div class="row left-align">
					<div class="col l4 ">
						<a class="waves-effect waves-light btn background btnControl" onClick="voltar()"><i class="material-icons"> arrow_back </i></a>
					</div>
					<div class="col l4">
						<a class="waves-effect waves-light btn background btnControl" onClick="comecarJogo()" id="jogarNovamente" display="">Jogar Novamente</a>
					</div>
				</div>			
			</div>            
		</div>
    </div>
</div>

<script type="text/javascript" src="jogos/js/frmMonteiroLobato.js"></script>