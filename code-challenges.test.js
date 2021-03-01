// ASSESSMENT 3: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.

// a) Create a test with expect statements for each of the variables provided.

describe("returns an array of that length containing the numbers of the Fibonacci", () => {
	it("returns an array with the fib sequence", () => {
        Example input: 6
        Expected output: [1, 1, 2, 3, 5, 8]
        
        Example input: 10
        Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

		expect(fib(6)).toEqual([1, 1, 2, 3, 5, 8]);
		expect(fib(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
	});


Example input: 6
Expected output: [1, 1, 2, 3, 5, 8]

Example input: 10
Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]




const fib = (number) => {
	if (number <= 2) {
	}

	let fibNums = [1, 1];

	let fibN = 0;

	for (let i = 2; i < number; i++) {
		fibN = fibNums[i - 2] + fibNums[i - 1];

		fibNums.push(fibN);
	}

	return fibNums;
};

console.log(fib(10));
console.log(fib(6));

// b) Create the function that makes the test pass.

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.
describe("returns a new array of only odd numbers sorted from least to greatest.", () => {
	it("returns a new array of only odd numbers sorted from least to greatest.", () => {
        var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"];
        // Expected output: [-9, 7, 9, 199]
        
        var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"];
        // Expected output: [-823, 7, 23]

		expect(oddNumsBaby(fullArr1)).toEqual([-9, 7, 9, 199]);
		expect(oddNumsBaby(fullArr2)).toEqual([-9, 0, 3, 18, 94]);
	});
var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"];
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"];
// Expected output: [-823, 7, 23]

const oddNumsBaby = (array) => {
	let sortThis = array.filter((value) => {
		if (value % 2 !== 0) return typeof value === "number";
	});
	return sortThis.sort(function (a, b) {
		return a - b;
	});
};

console.log(oddNumsBaby(fullArr1));
console.log(oddNumsBaby(fullArr2));

// b) Create the function that makes the test pass.

// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

// a) Create a test with expect statements for each of the variables provided.

describe("returns the middle letter of the word. If the word is an even number of letters, return the two middle letters", () => {
	it("returns the middle letter of the word. If the word is an even number of letters, return the two middle letters", () => {
        var middleLetters1 = "alpha";
        // Expected output: “p”
        
        var middleLetters2 = "rhinoceros";
        // Expected output: “oc”

		expect(middleLetters(middleLetters1)).toEqual("p"]);
		expect(middleLetters(middleLetters2)).toEqual("oc");

var middleLetters1 = "alpha";
// Expected output: “p”

var middleLetters2 = "rhinoceros";
// Expected output: “oc”

const middleLetters = (str) => {
	let length = str.length;
	let middle = Math.floor(length / 2);
	if (length % 2 === 0) {
		return str[middle - 1] + str[middle];
	} else {
		return str[middle];
	}
};

console.log(middleLetters(middleLetters1));

// b) Create the function that makes the test pass.

// --------------------4) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("returns an array of the accumulating sum. An empty array should return an empty array.", () => {
	it("returns an array of the accumulating sum. An empty array should return an empty array.", () => {
        var numbersToAdd1 = [2, 4, 45, 9];
        // Excpected output: [2, 6, 51, 60]
        
        var numbersToAdd2 = [0, 7, -8, 12];
        // Expected output: [0, 7, -1, 11]
        
        var numbersToAdd3 = [];
        // Expected output: []
        //The addition assignment operator (+=) adds the value of the right operand to a variable and assigns the result to the variable.

		expect(accumulate(numbersToAdd1)).toEqual([2, 4, 45, 9]);
		expect(accumulate(numbersToAdd2)).toEqual([0, 7, -8, 12);
        expect(accumulate(numbersToAdd3)).toEqual([]);

var numbersToAdd1 = [2, 4, 45, 9];
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12];
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = [];
// Expected output: []
//The addition assignment operator (+=) adds the value of the right operand to a variable and assigns the result to the variable.
const accumulate = (arr) => arr.map(((sum) => (value) => (sum += value))(0));

console.log(accumulate(numbersToAdd1));
console.log(accumulate(numbersToAdd2));
console.log(accumulate(numbersToAdd3));

// b) Create the function that makes the test pass.
