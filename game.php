<!DOCTYPE html>
<html>
<head>
	<title></title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="css/style.css">

</head>
<body>
  <div>
<center>
 <img src="img/opiece.png">
</center>
</div>
	<div class="container">
    <div class="row">
      <div>
            <audio id="audio1" src="audio/Explosion.ogg"></audio>
            <audio id="audio" src="audio/Cannon.ogg"></audio>
      </div>
    <div class="score">
      <h5>Nom de joueur:</h5>
      <input type="" name="" value="<?php echo $_GET["name"]; ?>" class="form-control" value="name" disabled>
      <h5>Score:</h5>
      <input type="text" class="form-control" id="score" value="0" disabled>
      <h5>Vous Bateaux:</h5>
      <input type="text" class="form-control" id="nombr" value="17" disabled>
      <h5>Ennemie bateaux:</h5>
      <input type="text" class="form-control" id="nombrEnmie" value="17" disabled>
    </div>

<div class="grid grid-user">
<div id="progres"></div> 
</div>
<div class="grid grid-computer">
<div id="progress"></div>
</div>
</div>
</div>
<div class="row">
<div class="col-lg-3"></div>
<div class="col-lg-6">
    <div class="hidden-info">
      <button id="start" class="btn btn-primary">Jouer</button>
      <button id="rotate" class="btn btn-primary">Tourner les bateaux</button>
      <h3 id="whose-go"></h3>
      <h3 id="info"></h3>
    </div>
    <div class="grid-display">
      <div class="ship destroyer-container" draggable="true">
          <div id="destroyer-0"></div>
          <div id="destroyer-1"></div>
        </div>
        <div class="ship submarine-container" draggable="true">
          <div id="submarine-0"></div>
          <div id="submarine-1"></div>
          <div id="submarine-2"></div>
        </div>
        <div class="ship cruiser-container" draggable="true">
          <div id="cruiser-0"></div>
          <div id="cruiser-1"></div>
          <div id="cruiser-2"></div>
        </div>
        <div class="ship battelship-container" draggable="true">
          <div id="battelship-0"></div>
          <div id="battelship-1"></div>
          <div id="battelship-2"></div>
          <div id="battelship-3"></div>
        </div>
        <div class="ship carrier-container" draggable="true">
          <div id="carrier-0"></div>
          <div id="carrier-1"></div>
          <div id="carrier-2"></div>
          <div id="carrier-3"></div>
          <div id="carrier-4"></div>
        </div>        
      </div>
    </div>
</div>
</body>
 <script type="text/javascript" src="js/script.js"></script>
</html>