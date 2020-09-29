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

	function createBoardUser(grid, squares){
		for(let i =0; i < width*width; i++){
			const square = document.createElement('div');
			square.dataset.id = i;
			square.classList.add("user-grid")
			grid.appendChild(square);
			squares.push(square)
	function RandomDiv(event) {
	var number = document.getElementsByClassName("user-grid")
    var ChosenDiv = number[Math.floor(Math.random() * number.length)];
    console.log(ChosenDiv); //Just to show this.
    var tsd = event.target;
    var mvs =tsd.getAttribute("class"); 
    console.log(mvs)
    if (mvs ==="user-grid taken submarine" || mv ==="user-grid taken carrier" || mv ==="user-grid taken destroyer" || mv ==="user-grid taken battelship" || mv ==="user-grid taken cruiser") {
    ChosenDiv.classList.remove("user-grid");
    ChosenDiv.classList.add("pc");
	}else{
	ChosenDiv.classList.remove("user-grid");
    ChosenDiv.classList.add("pc1");
	}
    console.log("RandomDiv -> ChosenDiv", ChosenDiv)
   
}

		}
	}
	createBoardUser(userGrid, userSquares);
	createBoardOrdinateur(computerGrid, computerSquares)

		function createBoardOrdinateur(grid, squares){
		for(let i =0; i < width*width; i++){
			const square = document.createElement('div');
			square.setAttribute("class", "shipsy")
			square.dataset.id = i;
			grid.appendChild(square);
			squares.push(square)


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
function generate(ship) {
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
function rotate(){
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
selectedShipIndex = parseFloat(selectedShipNameWithIndex.substr(-1))
shipLastId =shipLastId-selectedShipIndex
console.log(shipLastId)
if(isHorizontal){
	let draggedShipLength = draggedShip.getElementsByTagName("div").length
	console.log(draggedShipLength)
    for(let i=0; i< draggedShipLength; i++){
        userSquares[parseFloat(this.dataset.id)-selectedShipIndex + i].classList.add('taken', shipClass)
        console.log()
    }
}else if (!isHorizontal){
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