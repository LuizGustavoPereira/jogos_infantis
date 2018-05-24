<div class="row" id="jogo" display>
    <div class="col l10 offset-l1">
        <div class="card transparent darken-1">
            <div class="card-content blue-text text-darken-2"> 
	            <div class="row">  
					<div id="DivDestino" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
					<br />
					<img id="LogoDrag" src="imagens/times/futebol.png" draggable="true" ondragstart="drag(event)" width="336" height="69" />
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



<script src="jogos/js/frmRosto.js" type="text/javascript"></script>