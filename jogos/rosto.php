<div class="row" id="jogo" display>
    <div class="col l10 offset-l1">
        <div class="card transparent darken-1">

            	<div class="row">
            		<div class="col l10 offset-l1 center-align row" id="nomeCor">                         
                        <img style="width: 50%"  src="imagens/rosto/1.png">
                        <div class="col-md-8" id="DivDestino" ondrop="drop(event)" ondragover="allowDrop(event)">
                        </div>                                   					
            		</div>	
            	</div> 
            	<div class="row" style="width: 10%">
            		<img style="width: 100%"  id="LogoDrag" src="imagens/rosto/cabelo.png" draggable="true" ondragstart="drag(event)"  />
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