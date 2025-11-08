const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

//for loop
for(let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

//while loop
let i = 0;
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
    i++;
}   

//for each loop
studentReport.forEach(function (item){
    if (item < LIMIT) {
        console.log(item);
    }
}) 

//for...in loop
for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

//Use any type of repetition (looping) statement to dynamically produce the day names 
// (Monday, Tuesday, Wednesday, etc.) of the next number of DAYS from today's date.

const today = new Date();

for (let i = 0; i <= DAYS; i++) {
  let nextDay = new Date();
  nextDay.setDate(today.getDate() + i);

  // Get weekday name (e.g. Monday)
  let dayName = nextDay.toLocaleDateString('en-US', { weekday: 'long' });

  console.log(dayName);
}
