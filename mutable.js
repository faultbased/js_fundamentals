const student = {
	name: "Java",
	score: 98,
	grade: "B+",
};

console.info(student);

delete student.grade;
student.score = 99;
console.info(student);
