document.addEventListener('DOMContentLoaded', ()=>{
	const userGrid = document.querySelector('.grid-user');
	const computerGrid = document.querySelector('.grid-computer');
	const displayGrid = document.querySelector('.grid-display');
	const ships = document.querySelectorAll('.ship');
	const destroyer = document.querySelector('.destroyer-container');
	const submarine = document.querySelector('.submarine-container');
	const cruiser = document.querySelector('.cruiser-container');
	const battelship = document.querySelector('.battelship-container');
	const carrier = document.querySelector('.carrier-container');
	const StartButton = document.querySelector('#start');
	const rotateButton = document.querySelector('#rotate');
	const turnDisplay = document.querySelector('#whose-go');
	const infoDisplay = document.querySelector('#info');
	const userSquares = [];
	const computerSquares = [];
	let isHorizontal = true;
	const width = 10;
  //Ne Pas Jouer Avant de cliquer ET le tableau User soit remplis
	let startGame = false;
	StartButton.addEventListener("click",()=>{
        if (displayGrid.childElementCount==0) {

            startGame=true
        }else{
            
        }

    })
  //Creation des Tables

	function createBoardUser(grid, squares){
		for(let i =0; i < width*width; i++){
			const square = document.createElement('div');
			square.dataset.id = i;
			square.classList.add("user-grid")
			grid.appendChild(square);
			squares.push(square)


		}
	}
	createBoardUser(userGrid, userSquares);
	createBoardOrdinateur(computerGrid, computerSquares)
 //Click Aleatoire de l'ordi

	function RandomDiv() {
		var number = document.getElementsByClassName("user-grid")
		console.log(number);
    var ChosenDiv = number[Math.floor(Math.random() * number.length)];
    mv = ChosenDiv.getAttribute("class")
    console.log(ChosenDiv); //Just to show this.
      //

    if (mv ==="user-grid taken submarine" || mv ==="user-grid taken carrier" || mv ==="user-grid taken destroyer" || mv ==="user-grid taken battelship" || mv ==="user-grid taken cruiser") {
    ChosenDiv.classList.remove("user-grid");
    ChosenDiv.classList.add("pc");
    var pro = document.getElementById("progres");
        var proDiv = document.createElement('span')
        proDiv.setAttribute("class", "prog")
        pro.appendChild(proDiv)
        proDiv.style.backgroundColor= "yellow";
        proDiv.style.width= "23px";
        proDiv.style.display = "flex"
        proDiv.style.height= "20px"
    	var c = parseFloat(document.getElementById("nombr").value);
	   	t = c-1;
	   	document.getElementById("nombr").value = t
	   	if(t ===0){
	   		window.alert("Vous avez perdu")
	   	}
	}else{
	ChosenDiv.classList.remove("user-grid");
    ChosenDiv.classList.add("pc1");
	}
    console.log("RandomDiv -> ChosenDiv", ChosenDiv)
   
}

		function createBoardOrdinateur(grid, squares){
		for(let i =0; i < width*width; i++){
			const square = document.createElement('div');
			square.setAttribute("class", "shipsy")
			square.dataset.id = i;
			grid.appendChild(square);
			squares.push(square)
			document.getElementById("score").value = "0";
			document.getElementById("nombrEnmie").value = "17"; 
			document.getElementById("nombr").value = "17"; 

			square.onclick = function(event){
				if (startGame==true) {//click obligatoir sur le bouton jouer pour jouer
        var ts = event.target; //affichage des images GIF on click
        var mv =ts.getAttribute("class"); 
        if(mv ==="shipsy taken submarine" || mv ==="shipsy taken carrier" || mv ==="shipsy taken destroyer" || mv ==="shipsy taken battelship" || mv ==="shipsy taken cruiser")    
        {
        var pro = document.getElementById("progress");
        var proDiv = document.createElement('span')
        proDiv.setAttribute("class", "prog")
        pro.appendChild(proDiv)
        proDiv.style.backgroundColor= "yellow";
        proDiv.style.width= "23px";
        proDiv.style.display = "flex"
        proDiv.style.height= "20px";
        play()
        function play() { //ajouter le son 
        var audio = document.getElementById("audio1");
        audio.play();
        }
        ts.style.backgroundSize= "cover";
        ts.style.backgroundImage= "url('./img/tenor.gif')";
        ts.setAttribute("class", "clicked");
        var x = parseFloat(document.getElementById("score").value);
        var n = x+10;
	   	document.getElementById("score").value = n
	   	var m = parseFloat(document.getElementById("nombrEnmie").value);
	   	s = m-1;
	   	document.getElementById("nombrEnmie").value = s
	   	if(s ===0){
	   		window.alert("Vous avez Gagné")
	   	}
	   	setTimeout(function(){         
	   	ts.style.backgroundSize= "cover";
        ts.style.backgroundImage= "url('./img/fire.gif')"; }, 4000);
        }
        else{
        play()
        function play() {
        var audio = document.getElementById("audio");
        audio.play();
      }
        ts.style.backgroundSize= "cover";
        ts.style.backgroundImage= "url('./img/giphy.gif')";
        ts.setAttribute("class", "clicked");
        var x = parseFloat(document.getElementById("score").value);
        var n = x-1;
	   	document.getElementById("score").value = n
        setTimeout(function(){         
	   	ts.style.backgroundSize= "cover";
        ts.style.backgroundImage= "url('./img/fail.gif')"; }, 4000);
    }
        setTimeout(function(){ RandomDiv() }, 1000);
        
    }
    else{
      alert("Vous devez deplacer tout les bateaux et cliquer sur jouer!");
    }
}

		}
	}
	//Ships

const shipArray=[
    {
        name:'destroyer',
        directions:[
        [0,1],
        [0,width]
    ]

    },
    {
        name:'submarine',
        directions:[
        [0,1,2],
        [0,width,width*2]
    ]

    },
    {
        name:'cruiser',
        directions:[
        [0,1,2],
        [0,width,width*2]
    ]

    },
    {
        name:'battelship',
        directions:[
        [0,1,2,3],
        [0,width,width*2,width*3]
    ]

    },
    {
        name:'carrier',
        directions:[
        [0,1,2,3,4],
        [0,width,width*2,width*3,width*4]
    ]

    },
]
function generate(ship) { //generer les ships
    let randomDirection = Math.floor(Math.random() * ship.directions.length)
    let current = ship.directions[randomDirection]
  
    if (randomDirection === 0) direction = 1
    if (randomDirection === 1) direction = 10
    let randomStart = Math.abs(Math.floor(Math.random() * computerSquares.length - (ship.directions[0].length * direction)))

    const isTaken = current.some(index => computerSquares[randomStart + index].classList.contains('taken'))
    const isAtRightEdge = current.some(index => (randomStart + index) % width === width - 1)
    const isAtLeftEdge = current.some(index => (randomStart + index) % width === 0)

    if (!isTaken && !isAtRightEdge && !isAtLeftEdge) current.forEach(index => computerSquares[randomStart + index].classList.add('taken', ship.name))

    else generate(ship)
  }
generate(shipArray[0])
generate(shipArray[1])
generate(shipArray[2])
generate(shipArray[3])
generate(shipArray[4])
function rotate(){//Rotation
    if(isHorizontal){
        destroyer.classList.toggle('destroyer-container-vertical')
        submarine.classList.toggle('submarine-container-vertical')
        cruiser.classList.toggle('cruiser-container-vertical')
        battelship.classList.toggle('battelship-container-vertical')
        carrier.classList.toggle('carrier-container-vertical')
        isHorizontal = false
        return
            }
        if(!isHorizontal){
        destroyer.classList.toggle('destroyer-container-vertical')
        submarine.classList.toggle('submarine-container-vertical')
        cruiser.classList.toggle('cruiser-container-vertical')
        battelship.classList.toggle('battelship-container-vertical')
        carrier.classList.toggle('carrier-container-vertical')
        isHorizontal = true
        return
          		}
           }
       	rotateButton.addEventListener('click', rotate)
        //Drag & Drop
       	ships.forEach(ship =>ship.addEventListener('dragstart', dragStart))
       	userSquares.forEach(square => square.addEventListener('dragstart', dragStart))
       	userSquares.forEach(square => square.addEventListener('dragover', dragOver))
       	userSquares.forEach(square => square.addEventListener('dragenter', dragEnter))
       	userSquares.forEach(square => square.addEventListener('dragleave', dragLeave))
       	userSquares.forEach(square => square.addEventListener('drop', dragDrop))
       	userSquares.forEach(square => square.addEventListener('dragend', dragEnd))
       	let selectedShipNameWithIndex ;
       	let draggedShip =this;
       	let draggedShipLength;
       	ships.forEach(ship => ship.addEventListener('mousedown', (e) =>{
       		selectedShipNameWithIndex = e.target.id;
       		console.log(selectedShipNameWithIndex);
       	}))
       	function dragStart() {
       		draggedShip = this;
       		draggedShipLength = this.length;
       		console.log(draggedShip);
       	}
       	function dragOver(e){
       		e.preventDefault()
       	}
       	function dragEnter(e){
       		e.preventDefault()
       	}
       	function dragLeave(){
       		console.log('drag leave')
       	}
       	function dragDrop(){
let shipNameWithLastId = draggedShip.lastElementChild.id
let shipClass = shipNameWithLastId.slice(0, -2)
console.log(shipClass)
let lastShipIndex = parseFloat(shipNameWithLastId.substr(-1))
let shipLastId = lastShipIndex + parseFloat(this.dataset.id)
console.log(shipLastId)
//placer les ship uniquement dans le tableau
const notAllowedHorizontal = [0,10,20,30,40,50,60,70,80,90,1,11,21,31,41,51,61,71,81,91,2,12,22,32,42,52,62,72,82,92,3,13,23,33,43,53,63,73,83,93]
const notAllowedVertical = [99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60]
let newNotAllowedHorizontal = notAllowedHorizontal.slice(0, 10*lastShipIndex)
let newNotAllowedVertical = notAllowedVertical.slice(0, 10*lastShipIndex)
selectedShipIndex = parseFloat(selectedShipNameWithIndex.substr(-1))
shipLastId =shipLastId-selectedShipIndex
if(isHorizontal && !newNotAllowedHorizontal.includes(shipLastId)){
	let draggedShipLength = draggedShip.getElementsByTagName("div").length
	console.log(draggedShipLength)
    for(let i=0; i< draggedShipLength; i++){
        userSquares[parseFloat(this.dataset.id)-selectedShipIndex + i].classList.add('taken', shipClass)
        console.log()
    }
}else if (!isHorizontal && !notAllowedVertical.includes(shipLastId)){
let draggedShipLength = draggedShip.getElementsByTagName("div").length
for(let i=0; i< draggedShipLength; i++)
{
    userSquares[parseFloat(this.dataset.id)-selectedShipIndex + width*i].classList.add('taken', shipClass)
    console.log()
}
}else return
displayGrid.removeChild(draggedShip)
}
       	function dragEnd(){

       	}
})