const should = require('chai').should();
const fizzBuzzer = require('../fizzBuzzer');

// unit test for fizzBuzzer function
describe('fizzBuzzer', function(){

// test the normal case
it('Should return multiple of 3 as fizz, multiple of 5 as buzz,' +
	' and multiple of 3 and 5 as fizz-buzz', function(){

	//range of normal inputs
	const normalCases = [
		{num: 3, expected: "fizz"},
		{num: 5, expected: "buzz"},
		{num: 15, expected: "fizz-buzz"}
	]; 

	//for each input fizzBuzzer should return expected outputs
	normalCases.forEach(function(input){
		const answer = fizzBuzzer(input.num);
		answer.should.equal(input.expected);
	});
	});

// test edge case of arguments not being numbers
it('Should raise errors if arguments are not numbers', function(){
	// range of edge cases
	const edgeCases = ["a", "1", "some string"];

	edgeCases.forEach(function(input){
		(function(){
			fizzBuzzer(input)
		}).should.throw(Error); 
	});
});

});