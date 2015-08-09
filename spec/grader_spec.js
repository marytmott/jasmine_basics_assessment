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

	describe('averageScore', function() {
		it('should return the average of an array of scores', function() {
			expect(gradingExercise.averageScore([90, 95, 87, 60])).toEqual(83);
		});

		it('should round the averge of an array of scores if not a whole integer', function() {
			expect(gradingExercise.averageScore([100, 79, 83, 96])).toEqual(90);
		});

	});

	describe('medianScore', function() {
		it('should return the median score from an array of scores', function () {
			expect(gradingExercise.medianScore([52,80,80,86,94])).toEqual(80);
		});
		it('should calculate the average of the middle two scores if the array is even', function() {
			expect(gradingExercise.medianScore([70, 85, 86, 90])).toEqual(86);
		});
	});

	describe('modeScore', function() {
		it('should return the score which appears the most often from an array of scores', function() {
			expect(gradingExercise.modeScore([82, 92, 75, 91, 92, 89, 95, 100, 86])).toEqual(92);
			expect(gradingExercise.modeScore([78, 78, 85, 85, 90, 90, 100, 90, 100, 98])).toEqual(90);

		});
	});

});
