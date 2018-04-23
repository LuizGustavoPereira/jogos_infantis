<?php 
	class Sistema{

		public function verifica_sessao($NOME){
			if(!isset($NOME) ){
				if( !isset($_SESSION["usuario_peloggia"]["usuLogin"]) ){			
					$url = INCLUDE_PATH."/login/";
					header("location: ".$url." ");
					exit;
				}
			}
		}

		function padroniza_datas_BR($data){
			if($data != ""){
				$aux = explode("-",$data);
				$result = $aux[2]."/".$aux[1]."/".$aux[0];
				return $result;
			}else{
				return "";
			}
		}

		function padroniza_datas_US($data){
			if($data != ""){
				$aux = explode("/",$data);
				$result = $aux[2]."-".$aux[1]."-".$aux[0];
				return $result;
			}else{
				return "";
			}
		}

		function padroniza_docs_CNPJ($doc){
			$aux1 = substr($doc,0,2);
			$aux2 = substr($doc,2,3);
			$aux3 = substr($doc,5,3);
			$aux4 = substr($doc,8,4);
			$aux5 = substr($doc,12);
			return $aux1.".".$aux2.".".$aux3."/".$aux4."-".$aux5;
		}

		function padroniza_docs_CPF($doc){

			$aux1 = substr($doc,0,3);
			$aux2 = substr($doc,3,3);
			$aux3 = substr($doc,6,3);
			$aux4 = substr($doc,9);
			
			return $aux1.".".$aux2.".".$aux3."-".$aux4;
		}

		function padronizaCep($cep){

			$aux1 = substr($cep,0,5);
			$aux2 = substr($cep,5,3);
			
			return $aux1."-".$aux2;
		}

		function padronizaTelefone($tel){
			//8 dígitos
			$aux1 = substr($tel,0,2);
			$aux2 = substr($tel,2,4);
			$aux3 = substr($tel,5,4);
			
			return "(".$aux1.")"." ".$aux2."-".$aux3;
		}

		function higienizarCampo($doc){
			return str_replace(",","", str_replace(".","",str_replace("/","",str_replace("-", "", str_replace("(","",str_replace(")","",str_replace(" ","", trim($doc))))))));
		}

		function limpaVars($str){
			$strAux = str_replace("(","",$str);
			$strAux = str_replace(")","",$strAux);
			$strAux = str_replace("-","",$strAux);
			$strAux = str_replace(".","",$strAux);
			$strAux = str_replace("/","",$strAux);
			$strAux = str_replace(" ","",$strAux);
			return $strAux;
		}	


		function gera_codigo($tabela){
			$conn = new Conexao();
			$sSQL = "SELECT RECNO AS CODIGO FROM recnos WHERE TABELA = '".$tabela."'";
			$sQRY = $conn->prepare($sSQL);
			$sQRY->execute();
			if($sQRY->rowCount() > 0){
				$ln  = $sQRY->fetch(PDO::FETCH_ASSOC);
				$res = $ln["CODIGO"];
				
				try{
					$sql = "UPDATE recnos SET RECNO = ".($res+1)." WHERE TABELA = '".$tabela."'";
					$qry = $conn->prepare($sql);
					$qry->execute();
					if($qry->rowCount() > 0){
					    return $res+1;
					}
				}catch(Exception $e){
				    die('Erro ao gerar código:'. $e->getMessage());
				}
			}
			else{
				$insert = "INSERT INTO recnos (TABELA, RECNO) VALUES ('".$tabela."', 1)";
				$queryInsert = $conn->prepare($insert);
				$queryInsert->execute();
				return 1;
			}
		}

		function getInsert($table, array $dados){

			$sql = "INSERT INTO $table ";
			$fields = '';
			$binds  = '';
			foreach ($dados as $key => $value) {
				$fields .= ($fields != "") ? ", " . str_replace(":","",$key) : str_replace(":", "" ,$key) ;
				$binds  .= ($binds != "")  ? ", " . $key : $key;
			}
			return $sql . " ($fields) VALUES ($binds) "; 
		}

		function getUpdate($table,$whereUpdate, $dados ){
		
			$fields      = "";
			$updateDados = "";
			foreach ($dados as $key => $value) {
				$setUpdate = str_replace(':', "", $key) . ' = ' . $key;
				$updateDados .= ($updateDados != "") ? ",".$setUpdate  : $setUpdate ;
			}

			return "UPDATE $table SET $updateDados WHERE $whereUpdate";
		}

		public function identificarCorrecao($vListAntiga, $vListNova, $bind = false, $trigger = true){
	        $resp = "";
	        foreach($vListAntiga as $key => $value){
	            if(isset($vListNova[$key])){
	                if($vListNova[$key] != $value){
	                	$sKey = $key;
	                	if(!$bind){
	                		$sKey = str_replace(":", "", $key);
	                	}

	                	if(!$trigger){
	                		$sKey = mb_strcut($sKey, $bind == true ? 5 : 4);
	                	}

	                    $resp .= " ".$sKey." de ".$vListAntiga[$key]." para ".$vListNova[$key].";";
	                }
	            }
	        }

	        return $resp;
	    }


		function getValor($valor){
			if($valor != ''){
				return str_replace(",", ".", str_replace(".", "",$valor));
			}
		}

		function getUfs(){
			return ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];		
		}

		function getAlfabeto(){
			return ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
		}

		function historico( $modulo, $tela,$acao, $options = ''){

	        $result = array(
	            ':HIS_DATA'      => date('Y-m-d'),
	            ':HIS_HORA'      => date('H:i:s'),
	            ':USU_CODIGO'    => $_SESSION["usuario_peloggia"]["usuCodigo"],
	            ':HIS_MODULO'    => $modulo,
	            ':HIS_TELA'      => $tela,
	            ':HIS_ACAO'      => $acao,
	            ':HIS_IP'        => $_SERVER["REMOTE_ADDR"],
	        );

	        if($options != ""){
	            $result = array_merge($result, $options);
	        }

	        try{
	        	$conn = new Conexao();
	        	$qry = $conn->prepare( $this->getInsert('historico', $result ) );
	        	foreach ($result as $key => &$value) {
	        		$qry->bindParam($key, $value);
	        	}
	        	$qry->execute();

	        }catch(Exception $e){
	        	print $e->getMessage();
	        }
	    }

	    public function select($conn, $table, $sCampos, $dadosWhere = array(), $bind = false ){

	    	$where = [];
		    if(count($dadosWhere) > 0){
		        foreach ($dadosWhere as $key => $value) {
		            $bindField = ":".$key;
		            $whereStmt = $key . " = " . $bindField;
		            array_push($where, $whereStmt);
		        }
		        $where = join(" AND ", $where);
		    }else{
		        $where = '';
		    }

		    $campos = '';
		    foreach ($sCampos as $key => $value) {
		    	$key = str_replace(":", "" ,$key);
		    	$campos .= $campos != '' ? ",".$key : $key ;
		    }

	    	$sSQL = "SELECT ".$campos." FROM $table WHERE 1 = 1 AND ".$where." ";
		    $query = $conn->prepare($sSQL);
		    if(count($dadosWhere) > 0){
		        foreach ($dadosWhere as $key => &$value) {
		            $query->bindParam(':'.$key, $value);
		        }
		    }
		    $query->execute();

		    $ln = $query->fetch(PDO::FETCH_ASSOC);
		    if($bind){
			    $sDados = [];
			    foreach ($ln as $key => $value) {
			    	$sDados[':'.$key] = $value;
			    }
			    return $sDados;
		    }else{
		    	return $ln;	
		    }
		    
	    }

	    public function formataValorBR($valor){
	    	$val = number_format($valor,2,",",".");

	    	return $val;
	    }

	    public function formataValorFloat($valor){
	    	$recebeValor = $valor;
		    $converterValor = str_replace('.','',$recebeValor);
		    $converterValor = str_replace(',','.',$converterValor);
		    return $converterValor;
	    }
	    
    	public function mesExtenso($nMes){
	        switch($nMes){
	            case "1":
	                return "Janeiro";
	            break;
	            case "2":
	                return "Fevereiro";
	            break;
	            case "3":
	                return "Mar&ccedil;o";
	            break;
	            case "4":
	                return "Abril";
	            break;
	            case "5":
	                return "Maio";
	            break;
	            case "6":
	                return "Junho";
	            break;
	            case "7":
	                return "Julho";
	            break;
	            case "8":
	                return "Agosto";
	            break;
	            case "9":
	                return "Setembro";
	            break;
	            case "10":
	                return "Outubro";
	            break;
	            case "11":
	                return "Novembro";
	            break;
	            case "12":
	                return "Dezembro";
	            break;
	        }
	    }

	    public function mesExtensoAoContrario($nMes){
	        switch($nMes){
	            case "Janeiro":
	                return "01";
	            break;
	            case "Fevereiro":
	                return "02";
	            break;
	            case "Mar&ccedil;o":
	                return "03";
	            break;
	            case "Abril":
	                return "04";
	            break;
	            case "Maio":
	                return "05";
	            break;
	            case "Junho":
	                return "06";
	            break;
	            case "Julho":
	                return "07";
	            break;
	            case "Agosto":
	                return "08";
	            break;
	            case "Setembro":
	                return "09";
	            break;
	            case "Outubro":
	                return "10";
	            break;
	            case "Novembro":
	                return "11";
	            break;
	            case "Dezembro":
	                return "12";
	            break;
	        }
	    }

	    public function pesquisaPorTrimestre($trimestre){
			// WHERE YEAR(DATA)=ANO AND MONTH(DATA) BETWEEN 10 AND 12
			$semestre = [];
	    	switch ($trimestre) {
	    		case '1':
	    			$semestre = [1, 3];
	    			break;
	    		case '2':
	    			$semestre = [4, 6];
	    			break;
	    		case '3':
	    			$semestre = [7, 9];
	    			break;
	    		case '4':
	    			$semestre = [10, 12];
	    			break;
	    		default:
	    			throw new Exception("Não foi possível identificar o trimestre", 1);
	    			break;
	    	}
			return $semestre;
	    }

		public Function SoNumero($numero){		
			return preg_replace('/[^0-9]/', '', $numero);
		}

	    public function formataDataRemessa($data){ //Formata de 2017-12-20 para 201217
	    	if ($data != "") {
				$data = DateTime::createFromFormat('Y-m-d', $data);
				return $data->format('dmy');
	    	}else{
	    		return $data;
	    	}
	    }

	    public function formataDataRetorno($data){ //Formata de 201217 para 2017-12-20
    		$data = $this->SoNumero($data);
	    	if ($data != "") {
				$data = DateTime::createFromFormat('dmy', $data);
				return $data->format('Y-m-d');
	    	}else{
	    		return $data;
	    	}
	    }

	    public function formataValorRetorno($valor){ //Formata de 0000123 para 1,23
	    	if ($valor != "") {
				$valor = number_format( (substr($valor, 0, -2).".".substr($valor, -2)), 2, '.', '');
	    	}else{
	    		$valor = '0.00';
	    	}
			return $valor;
	    }
	    
	    public function formataNossoNumero($nossoNumero){
	    	if ($nossoNumero != "" && is_numeric($nossoNumero)) {
	    		$nossoNumero = number_format($nossoNumero, 0, '', '');
	    	}
			return $nossoNumero;
	    }

        public function limpaDoc($doc){
            return str_replace(",","",str_replace(".","",str_replace("-","",str_replace("/","",$doc))));
        }

        public function mask($val, $mask = null){
            $maskared = '';
            $k = 0;
            if($mask == null || $mask == ""){
                switch (strlen($val)) {
                    case 11:
                        $mask = "###.###.###-##";
                        break;

                    case 9:
                        $mask = "##.###.###-#";
                        break;

                    case 14:
                        $mask = "##.###.###/####-##";
                        break;

                    case 8:
                        $mask = "#####-###";
                        break;

                    default:
                        return $val;
                        break;
                }
            }
            if($val != ""){
                for($i = 0; $i<=strlen($mask)-1; $i++){
                    if($mask[$i] == '#'){
                        if(isset($val[$k]))
                            $maskared .= $val[$k++];
                    }else{
                        if(isset($mask[$i]))
                            $maskared .= $mask[$i];
                    }
                }
            }
            return $maskared;
        }
	}