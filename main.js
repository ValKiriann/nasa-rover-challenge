// INSTRUCCIONES
// El rover aterriza en una plataforma dividida en una cuadrícula de 5x5 (ejemplo)
// las coordenadas para la cuadrícula son en "x" e "y"
// el punto 0,0 se encuentra en la esquina inferior izquierda
// La posición del rover se determina por las coordenadas y el punto cardinal hacia el que mira (0,0 N)
// Para mover el Rover se cambia el punto cardinal hacia el que mira 
// girando 90º Left o Right (izquierda o derecha) y avanzando hacia delante con M (move) un punto

// INPUT SOLICITADO
// Primer parámetro: tamaño del cuadrado (5)
// Segundo parámetro: coordenadas del rover en la actualidad
// Tercer parámetro: las indicaciones de movimiento hasta el destino final 
// Example: function setup(5, "1 2 N", ["L", "M", "L", "M", "L", "M", "L", "M", "M"]) Expected Output: "1 3 N"


// EL OUTPUT ES LA POSICION FINAL DEL ROVER


// TESTS
// comprobar que los parámetros son los que tienen que ser
// comprobar que el punto de inicio está dentro de la cuadricula
// comprobar que tras las indicaciones el rover sigue dentro de la cuadricula

// Comprueba que el número está dentro de la cuadrícula
function isInGrid (number,gridSize, errorMessage){
	if(number > gridSize) {
		errorMessage.push("The coordinates of Rover can't be greater than grid size, please try again");
	}
	return errorMessage;
}

// Función para detectar que los datos numéricos son números y positivos
function checkdataNumber(number, data, errorMessage) {
	if(typeof gridSize != "number" && isNaN(Number(gridSize)) != false) {
		errorMessage.push(data + " is not a number, please try again");
	} else if(gridSize < 0){
		errorMessage.push(data + " is not a positive number, please try again");
	}
	// QUIERO METER AQUI IS IN GRID PERO NO QUIERO AUMENTAR A 4 LOS PARAMETROS ASI QUE NO ESTA AQUI DENTRO
	return errorMessage;
}

// Comprueba si los datos son correctos buscandolo en el array que contiene los datos correctos
function dataIsCorrect(data,arrayData,errorMessage){
	if(!arrayData.indexOf(data) > -1){
		errorMessage.push("cardinal Point for Rover is not valid, please try again");
	}
}
function directionsAreCorrect(directions,arrayData,errorMessage) {
	directions.forEach(dataIsCorrect(element,arrayData,errorMessage););
	return errorMessage;
}
/*
function isCardinalPoint(head,errorMessage){
	var cardinalPoints = ["N", "S", "E", "W"];
	if(!cardinalPoints.indexOf(head) > -1){
		errorMessage.push("cardinal Point for Rover is not valid, please try again");
	}
	return errorMessage;
}

function checkDirections(directions,errorMessage){
	var count = 0;
	var correctMoves = ["L", "R", "M"];
	while(counter < directions.length){
		var directionsAreCorrect = (correctMoves.indexOf(directions[counter]) > -1);
		if(!directionsAreCorrect){
			errorMessage.push("Directions for Rover are not valid, please try again");
			break;
		}else{counter++;}
	}
	return errorMessage;
}
*/

// función para cambiar el punto de mira del rover
function changeHeading(actualHead, direction) {
	switch(actualHead) {
		case "N":
			if(direction === "L"){head = "E"}else if(direction === "R"){head = "W"}
			break;
		case "S":
			if(direction === "L"){head = "W"}else if(direction === "R"){head = "E"}
			break;
		case "E":
			if(direction === "L"){head = "S"}else if(direction === "R"){head = "N"}
			break;
		case "W":
			if(direction === "L"){head = "N"}else if(direction === "R"){head = "S"}
			break;	
	}
}

// función para avanzar hacia delante
function moveForward(actualHead) {
	switch(actualHead) {
		case "N":
			y++;
			break;
		case "S":
			y--;
			break;
		case "E":
			x--;
			break;
		case "W":
			x++;
			break;	
	}
}



// ESTA COMO LA MIERDA PIENSA OTRA VEZ
// función para ejecutar las direcciones
function applyPath(directions,roverPosition,head,x,y,errorMessage){
	var count = 0;
	while(count < directions.length){
		if(directions[count] === "M"){
			moveForward(head);
		}else{
			changeHeading(head,directions[count]);
		}
		count++;
	}

	isInGrid(x);
	isInGrid(y);

	if(x > gridSize || y > gridSize) {
		errorMessage.push("the directions cause Rover to get out of the grid, please try again");
	} else {
		roverPosition = x + " " + y + " " + head;
		return roverPosition;
	}
	
}

function setup(gridSize, startPoint, directions){

	// declarando las variables, tamaño de cuadricula, posicion del rover, y cada coordenada por separado. Un contador para las instrucciones
	var roverPosition = startPoint.split(" ");
	var x = roverPosition[0];
	var y = roverPosition[1];
	var head = roverPosition[2];
	var errorMessage = [];
	var cardinalPoints = ["N", "S", "E", "W"];
	var validMoves = ["L", "R", "M"];

	// Comprobar el tamaño de la cuadrícula
	checkdataNumber(gridSize, "Grid Size");
	//comprobar que startpoint es un dato válido
	checkdataNumber(x, "X coordinate",errorMessage);
	checkdataNumber(y, "Y coordinate",errorMessage);
	isInGrid(x, gridSize, errorMessage);
	isInGrid(y, gridSize, errorMessage);
	// Comprobamos que la cabeza está en un punto cardinal
	dataIsCorrect(head,cardinalPoints,errorMessage);
	// Comprobamos que las direcciones son movimientos correctos
	directionsAreCorrect(directions,validMoves,errorMessage);

// VOY POR AQUI CHATOS


	// SI NO HAY ERRORES EN LOS TEST DEVUELVE LA NUEVA POSICIÓN
	if(errorMessage.length > 0) {

		for (i=0;i < errorMessage.length;i++) {
			console.error(errorMessage[i]);
		}

	} else { return applyPath() }

	//setup(5, "1 2 N", ["L", "M", "L", "M", "L", "M", "L", "M", "M"])

}