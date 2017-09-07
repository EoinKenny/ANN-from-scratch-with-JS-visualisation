// Inputs and outputs
var X = [[0,0,1], [1,1,1], [0,1,1], [1,0,1]];
var y = [[0], [0], [1], [1]];
// Perceptron Weights
var weights1 = makeRandomArrayOfWeghts(3, 4);;
var weights2 = makeRandomArrayOfWeghts(4, 1);;
// Outputs
var annGuesses;
var totalIterations = 0;
var started = false;
var neuronSize = 50;


function mousePressed(){
	if (started == false) {
			started = true;
		} else {started = false;}
}
	

function setup() {
	createCanvas(480, 500);
	background(0);
	
	X = [[0,0,1], [1,1,1], [0,1,1], [1,0,1]];
	y = [[0], [0], [1], [1]];

	// Perceptron Weights
	weights1 = makeRandomArrayOfWeghts(3, 4);
	weights2 = makeRandomArrayOfWeghts(4, 1);
}


function draw() {
	
	textSize(25);
	fill(100,100,0);
	text("[0,1,0,1]", 75, 465);
	text("[0,1,1,0]", 195, 465);
	text("[1,1,1,1]", 315, 465);
	
	var colour;
	var weightWidth;
	
	// --------------- Weights -------------------- //
	// Input 1
	colour = map(weights1[0][0], -10, 10, 0, 255);
	weightWidth = map(weights1[0][0], -10, 10, -10, 10);
	fill(255 - colour,colour,0);
	quad(120,400,120+weightWidth,400, 98+weightWidth,250,98,250);
	
	colour = map(weights1[0][1], -10, 10, 0, 255);
	weightWidth = map(weights1[0][1], -10, 10, -10, 10);
	fill(255 - colour,colour,0);
	quad(120,400,120+weightWidth,400, 196+weightWidth,250,196,250);
	
	colour = map(weights1[0][2], -10, 10, 0, 255);
	weightWidth = map(weights1[0][2], -10, 10, -10, 10);
	fill(255 - colour,colour,0);
	quad(120,400,120+weightWidth,400, 284+weightWidth,250,284,250);
	
	colour = map(weights1[0][3], -10, 10, 0, 255);
	weightWidth = map(weights1[0][3], -10, 10, -10, 10);
	fill(255 - colour,colour,0);
	quad(120,400-weightWidth,120,400, 372,250,372,250-weightWidth);
	
	// Input 2
	colour = map(weights1[1][0], -10, 10, 0, 255);
	weightWidth = map(weights1[1][0], -10, 10, -10, 10);
	fill(255 - colour,colour,0);
	quad(240,400,240+weightWidth,400, 98+weightWidth,250,98,250);
	
	colour = map(weights1[1][1], -10, 10, 0, 255);
	weightWidth = map(weights1[1][0], -10, 10, -10, 10);
	fill(255 - colour,colour,0);
	quad(240,400,240+weightWidth,400, 196+weightWidth,250,196,250);
	
	colour = map(weights1[1][2], -10, 10, 0, 255);
	weightWidth = map(weights1[1][2], -10, 10, -10, 10);
	fill(255 - colour,colour,0);
	quad(240,400,240+weightWidth,400, 284+weightWidth,250,284,250);
	
	colour = map(weights1[1][3], -10, 10, 0, 255);
	weightWidth = map(weights1[1][3], -10, 10, -10, 10);
	fill(255 - colour,colour,0);
	quad(240,400,240+weightWidth,400, 372+weightWidth,250,372,250);
	
	// Input 3
	colour = map(weights1[2][0], -10, 10, 0, 255);
	weightWidth = map(weights1[2][0], -10, 10, -10, 10);
	fill(255 - colour,colour,0);
	quad(360,400-weightWidth,360,400, 98,250,98,250-weightWidth);
		
	colour = map(weights1[2][1], -10, 10, 0, 255);
	weightWidth = map(weights1[2][1], -10, 10, -10, 10);
	fill(255 - colour,colour,0);
	quad(360,400,360+weightWidth,400, 196+weightWidth,250,196,250);
	
	colour = map(weights1[2][2], -10, 10, 0, 255);
	weightWidth = map(weights1[2][2], -10, 10, -10, 10);
	fill(255 - colour,colour,0);
	quad(360,400,360+weightWidth,400, 284+weightWidth,250,284,250);
	
	colour = map(weights1[2][3], -10, 10, 0, 255);
	weightWidth = map(weights1[2][3], -10, 10, -10, 10);
	fill(255 - colour,colour,0);
	quad(360,400,360+weightWidth,400, 372+weightWidth,250,372,250);
	
	// Layer 2	
	colour = map(weights2[0][0], -10, 10, 0, 255);
	weightWidth = map(weights2[0][0], -10, 10, -10, 10);
	fill(255 - colour,colour,0);
	quad(98,250,98+weightWidth,250, 240+weightWidth,100,240,100);
	
	colour = map(weights2[1][0], -10, 10, 0, 255);
	weightWidth = map(weights2[1][0], -10, 10, -10, 10);
	fill(255 - colour,colour,0);
	quad(196,250,196+weightWidth,250, 240+weightWidth,100,240,100);
	
	colour = map(weights2[2][0], -10, 10, 0, 255);
	weightWidth = map(weights2[2][0], -10, 10, -10, 10);
	fill(255 - colour,colour,0);
	quad(284,250,284+weightWidth,250, 240+weightWidth,100,240,100);
	
	colour = map(weights2[3][0], -10, 10, 0, 255);
	weightWidth = map(weights2[3][0], -10, 10, -10, 10);
	fill(255 - colour,colour,0);
	quad(372,250,372+weightWidth,250, 240+weightWidth,100,240,100);
	
	// --------------- Neurons --------------------- //
	fill(100,100,0);
	// Inputs
	ellipse(120, 400, neuronSize, neuronSize);
	ellipse(240, 400, neuronSize, neuronSize);
	ellipse(360, 400, neuronSize, neuronSize);
	
	// Hidden Layer
	ellipse(98, 250, neuronSize, neuronSize);
	ellipse(196, 250, neuronSize, neuronSize);
	ellipse(284, 250, neuronSize, neuronSize);
	ellipse(372, 250, neuronSize, neuronSize);
	
	// Output
	ellipse(240, 100, neuronSize, neuronSize);
	
	
	// ---------- After Button Is Pressed ---------- //
	if (started) {
		trainANN();
		var guess1 = document.getElementById("guess1");
		var guess2 = document.getElementById("guess2");
		var guess3 = document.getElementById("guess3");
		var guess4 = document.getElementById("guess4");
		var iterations = document.getElementById("iterations");

		var w0 = document.getElementById("w0");
		var w1 = document.getElementById("w1");
		var w2 = document.getElementById("w2");
		var w3 = document.getElementById("w3");
		
		var w1_0 = document.getElementById("w1_0");
		var w1_1 = document.getElementById("w1_1");
		var w1_2 = document.getElementById("w1_2");
		var w1_3 = document.getElementById("w1_3");
		var w1_4 = document.getElementById("w1_4");
		var w1_5 = document.getElementById("w1_5");
		var w1_6 = document.getElementById("w1_6");
		var w1_7 = document.getElementById("w1_7");
		var w1_8 = document.getElementById("w1_8");
		var w1_9 = document.getElementById("w1_9");
		var w1_10 = document.getElementById("w1_10");
		var w1_11 = document.getElementById("w1_11");
	
		guess1.innerHTML = annGuesses[0][0].toFixed(10);
		guess2.innerHTML = annGuesses[1][0].toFixed(10);
		guess3.innerHTML = annGuesses[2][0].toFixed(10);
		guess4.innerHTML = annGuesses[3][0].toFixed(10);
		iterations.innerHTML = totalIterations;
		
		w0.innerHTML = weights2[0][0].toFixed(4);
		w1.innerHTML = weights2[1][0].toFixed(4);
		w2.innerHTML = weights2[2][0].toFixed(4);
		w3.innerHTML = weights2[3][0].toFixed(4);
		
		w1_0.innerHTML = weights1[0][0].toFixed(4);
		w1_1.innerHTML = weights1[0][1].toFixed(4);
		w1_2.innerHTML = weights1[0][2].toFixed(4);
		w1_3.innerHTML = weights1[0][3].toFixed(4);
		w1_4.innerHTML = weights1[1][0].toFixed(4);
		w1_5.innerHTML = weights1[1][1].toFixed(4);
		w1_6.innerHTML = weights1[1][2].toFixed(4);
		w1_7.innerHTML = weights1[1][3].toFixed(4);
		w1_8.innerHTML = weights1[2][0].toFixed(4);
		w1_9.innerHTML = weights1[2][1].toFixed(4);
		w1_10.innerHTML = weights1[2][2].toFixed(4);
		w1_11.innerHTML = weights1[2][3].toFixed(4);
	}
}


// Train the neural net
function trainANN() {
	
	var numIterations = 1;
	
	for (var i = 0; i < numIterations; i++){	
		
		// ------------------------- Forward Propagation ---------------------------- #
		// Get predictions for layer 1 & 2
		var layer1 = sigmoid(matrixMultiply(X, weights1));
		annGuesses = sigmoid(matrixMultiply(layer1, weights2));
		
		// -------------------------- Back Propagation ------------------------------ #
		// Get errors from output (layer 2)
		var layer2_error = minusArrays(y, annGuesses);
		var layer2_delta = multiplyArrays(layer2_error, sigmoidDeriv(annGuesses));
		
		// Get errors from layer1 (this part confuses me...)
		var layer1_error = matrixMultiply(layer2_delta, transpose(weights2));
		var layer1_delta = multiplyArrays(layer1_error, sigmoidDeriv(layer1));
		
		// How much do we need to update the weights?
		var weights1_update = matrixMultiply(transpose(X), layer1_delta); 
		var weights2_update = matrixMultiply(transpose(layer1), layer2_delta);

		// Update the weights
		weights1 = addArrays(weights1, weights1_update);
		weights2 = addArrays(weights2, weights2_update);
	}
	totalIterations += numIterations;
}


// Make random array of weights between 1 and -1
function makeRandomArrayOfWeghts(rows, columns) {
	
	var tempArray = [];
	
	for (var i = 0; i < rows; i++) {
		var tempRow = [];
		for (var j = 0; j < columns; j++) {
			tempRow.push((2 * Math.random()) - 1);
		}
		tempArray.push(tempRow);
	}
	return tempArray;
}


// The sigmoid function normaliser
function sigmoid(x) {

	var tempArray = [];

	for (var i = 0; i < x.length; i++) {
		var tempRow = [];
		
		for (var j = 0; j < x[i].length; j++) {
			tempRow.push(1 / (1 + Math.exp(-x[i][j])));
		}
		tempArray.push(tempRow);
	}
	return tempArray;
}


// The sigmoid function derivitive
function sigmoidDeriv(x) {
	
	var tempArray = [];

	for (var i = 0; i < x.length; i++) {
		var tempRow = [];
		
		for (var j = 0; j < x[i].length; j++) {
			tempRow.push(x[i][j] * (1 - x[i][j]));
		}
		tempArray.push(tempRow);
	}
	return tempArray;
}


// Transpose a matrix
function transpose(array) {
    return array.reduce((prev, next) => next.map((item, i) =>
        (prev[i] || []).concat(next[i])
    ), []);
}
	

// Subtract two arrays
function minusArrays(x, y) {
	
	var tempArray = [];
	
	for (var i = 0; i < x.length; i++) {
		var tempRow = [];
		for (var j = 0; j < x[i].length; j++) {
			tempRow.push(x[i][j] - y[i][j]);
		}
		tempArray.push(tempRow);
	}
	return tempArray;
}


// Multiply two arrays
function multiplyArrays(x, y) {
	
	var tempArray = [];
	
	for (var i = 0; i < x.length; i++) {
		var tempRow = [];
		for (var j = 0; j < x[i].length; j++) {
			tempRow.push(x[i][j] * y[i][j]);
		}
		tempArray.push(tempRow);
	}
	return tempArray;
}


// Add two arrays
function addArrays(x, y) {
	
	var tempArray = [];
	
	for (var i = 0; i < x.length; i++) {
		var tempRow = [];
		for (var j = 0; j < x[i].length; j++) {
			tempRow.push(x[i][j] + y[i][j]);
		}
		tempArray.push(tempRow);
	}
	return tempArray;
}


// For matrix multiplication
function matrixMultiply(a, b) {
  var aNumRows = a.length, aNumCols = a[0].length,
      bNumRows = b.length, bNumCols = b[0].length,
      m = new Array(aNumRows);  // initialize array of rows
  for (var r = 0; r < aNumRows; ++r) {
    m[r] = new Array(bNumCols); // initialize the current row
    for (var c = 0; c < bNumCols; ++c) {
      m[r][c] = 0;             // initialize the current cell
      for (var i = 0; i < aNumCols; ++i) {
        m[r][c] += a[r][i] * b[i][c];
      }
    }
  }
  return m;
}
