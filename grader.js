
 var gradingExercise = {
	letterGrader: 	function(grade) {
						if (grade >= 90) {
							return 'A';
						} else if (grade >= 80) {
							return 'B';
						} else if (grade >= 70) {
							return 'C';
						} else if (grade >= 60) {
							return 'D';
						} else {
							return 'F';
						}
					},
	averageScore: 	function(grades) {
						var sumOfGrades = grades.reduce(function(firstVal, nextVal) {
					  							return firstVal + nextVal;
										   });
						return Math.round(sumOfGrades / grades.length);
					},
	medianScore: 	function(grades) {

						//ensure grades are sorted before finding median score
						var grades = grades.sort(function compareNumbers(a, b) {
  								return a - b;
							});
						var medianIndex = Math.floor(grades.length / 2);

						if (grades.length % 2 === 0) {
							//return average of middle 2 numbers if index length is even
							return Math.round((grades[medianIndex - 1] + grades[medianIndex]) / 2);
						} else {
							return grades[medianIndex];
						}
					}, 
	modeScore: 		function(grades) {
						var testScores = {};
						var mode = 0
						var modeGrade = 0;

						//populate array w/ grade scores and values
						for (var i = 0; i < grades.length; i++) {
							var testScoresKey = grades[i];

							if (!testScores[testScoresKey]) {
								testScores[testScoresKey] = 1;
							} else {
								testScores[testScoresKey]++;
							}
						} 

						//loop through object to see what has highest testScores key value
						for (var score in testScores) {
							if (testScores[score] > mode) {
								mode = testScores[score];
								modeGrade = score;
							}
						}
						return parseInt(modeGrade);
					}

};

module.exports = gradingExercise;