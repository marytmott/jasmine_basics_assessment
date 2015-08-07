var gradingExercise = require('../grader.js');

describe('gradingExercise', function() {
	describe('letterGrader', function() {

		it('should return a grade of A if the test score is between 90 and 100', function() {
			expect(gradingExercise.letterGrader(98)).toEqual('A');
		});

		it ('should return a grade of B if the test score is between 80 and 89', function() {
			expect(gradingExercise.letterGrader(83)).toEqual('B');
			expect(gradingExercise.letterGrader(89)).toEqual('B');

		});

		it ('should return a grade of C if the test score is between 70 and 79', function() {
			expect(gradingExercise.letterGrader(74)).toEqual('C');
			expect(gradingExercise.letterGrader(70)).toEqual('C');

		});

		it ('should return a grade of D if the test score is between 60 and 69', function() {
			expect(gradingExercise.letterGrader(65)).toEqual('D');
		});

		it ('should return a grade of F if the test score is between 0 and 59', function() {
			expect(gradingExercise.letterGrader(50)).toEqual('F');
		});


	});
});


// Write a function `letterGrader` which takes a test score and returns the 
// equivalent letter grade.

// * A: 90-100
// * B: 80-89
// * C: 70-79
// * D: 60-69
// * F: 0-59

// ```
// letterGrader(98);
// //=> 'A'