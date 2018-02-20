<?php
	require_once "Vmwarephp/Autoloader.php";
	$autoloader = new \Vmwarephp\Autoloader;
	$autoloader->register();
	include ("vsphere_cred/conf.php");
	$vhost = new \Vmwarephp\Vhost($host, $pw, $user);
	
	if($_POST["func"] == "get_virtualMachineList"){
		get_virtualMachineList();
	}

	
	function get_virtualMachineList(){
		global $vhost;
		$virtualMachines = $vhost->findAllManagedObjects('VirtualMachine', array('name'));
		//print_r ($virtualMachines);
		$data = array();
		foreach($virtualMachines as $singleMachine){
			array_push($data, $singleMachine->config->name);
		}
		echo (json_encode ($data));
	}
?>