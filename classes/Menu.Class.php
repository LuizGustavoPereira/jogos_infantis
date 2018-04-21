<?php

class Menu{

	private $links = array();

	public function append($nomeLink, $href, $aceso = false, $ident = false){
        if(@$_SESSION['usuario_peloggia']["usuAdmin"] == 1 || $aceso == true) {
            array_push($this->links, array(
                'nomeLink' => $nomeLink,
                'href' => $href,
                'ident' => $ident));
        }
	}

	public function appendTitle($title){
		array_push($this->links, array(
			"title" => $title
		));
	}

	public function render(){

		if(count($this->links) > 0 ){
			print "
			<li class=\"no-padding\">
				<ul class=\"collapsible collapsible-accordion\">
				  <li>
				    <a class=\"collapsible-header\" style='border:1px solid #FAFAFA'><i class=\"material-icons\">".$this->materialIcon."</i>".$this->nomeMenu."<i class=\"material-icons right no-margin\">arrow_drop_down</i></a>
				    <div class=\"collapsible-body no-padding\">
						<ul>";

			foreach ($this->links as $key => $value) {
				if(isset($value["title"]))
					print "<li style='line-height:32px;padding-left:38px;background-color:#FFF;font-weight:bold;'>".$value['title']."</li>";
				else{
					$padding = "padding-left:32px";
					if($value["ident"] == true){
						$padding = "padding-left:56px";
					}
					print "<li class=\"tooltipped\" ><a href=\"".$value['href']."\" style='$padding'><i class=\"material-icons\" style='margin:0;line-height:35px; height:35px; '>keyboard_arrow_right</i>&nbsp;".$value['nomeLink']."</a></li>";
				}
			}

			print "
						</ul>
				    </div>
				  </li>
				</ul>
			</li>

			";
		}
	}

	public function renderLink($nomeLink, $href, $materialIcon){
		print "<li><a href=\"$href\"><i class=\"material-icons\">$materialIcon</i>$nomeLink</a></li>";
	}

	public function __construct($nomeMenu = null, $materialIcon = 'menu'){
		if($nomeMenu !== null){
			$this->nomeMenu     = $nomeMenu;
			$this->materialIcon = $materialIcon;
		}
	}
}
