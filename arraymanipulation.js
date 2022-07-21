// Arrays of Number
const studentScore = [80, 90, 70, 60, 50];
// Array of Strings
const studentNames = ['favour', 'james', 'okiroro', 'Timilehin', 'Olufemi'];
// Array of Objects
const studentActivities = [
    {
        id: 1,
        description: 'Having a induction',
        isDone: true,
    },
    {
        id: 2,
        description: 'Studying the JavaScript, HTML, CSS, REACT CLASS',
        isDone: false
    },
    {
        id: 3,
        description: 'Studying the C# .Net classes',
        isDone: false
    }
]

// Accessing Arrays
// console.log(studentActivities[0].description);

// Higher Order arrays
// const studentActivitiesDescription = studentActivities.map(())

const newStudentScore = studentScore.map(score => score*2);

console.log('New Student Scores are: \n', ...newStudentScore);