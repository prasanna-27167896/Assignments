const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 78 },
  { name: "David", score: 90 },
];

let totalScore = 0;

// Using forEach to sum up the scores
students.forEach((student) => {
  totalScore += student.score;
});

// Calculating the average score
const averageScore = totalScore / students.length;

console.log("Average Score:", averageScore);
