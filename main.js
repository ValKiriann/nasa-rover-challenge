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
// Example: function setup(5, “1 2 N”, [“L”, “M”, “L”, “M”, “L”, “M”, “L”, “M”, “M”]) Expected Output: “1 3 N”


// EL OUTPUT ES LA POSICION FINAL DEL ROVER


// TESTS
// comprobar que los parámetros son los que tienen que ser
// comprobar que el punto de inicio está dentro de la cuadricula
// comprobar que tras las indicaciones el rover sigue dentro de la cuadricula


function setup(gridSize, startPoint, directions){

	// declarando las variables, tamaño de cuadricula, posicion del rover, y cada coordenada por separado. Un contador para las instrucciones
	var xTotal, yTotal = gridSize;
	var roverPosition = startPoint.split(" ");
	var x = roverPosition[0];
	var y = roverPosition[1];
	var head = roverPosition[2];
	var count = 0;

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

	// función para ejecutar las direcciones
	function applyPath(){
		while(count < directions.length){
			if(directions[count] === "M"){
				moveForward(head);
			}else{
				changeHeading(head,directions[count]);
			}
			count++;
		}

		roverPosition = x + " " + y + " " + head;
	}

	applyPath();
	return roverPosition;

}