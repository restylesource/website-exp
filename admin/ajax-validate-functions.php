<?

	include_once('includes/db.php');

	switch($_GET['f']){
	
		case "checkEmail":
			$status = (unameAvailable($_GET['user_id'], $_GET['email'])) ? "true" : "false";
			break;
	
	}

	echo($status);
	
	
?>