function createClassRoom(numbersOfStudents) { // create class room w specific number of students
  function studentSeat(seat) { // nested func to assign seat to student
    return function () {
      return seat; // seat number
    };
  }
  let students = []; // empty array to store student seat funcs
  for (let i = 0; i < numbersOfStudents; i++) {
    students.push(studentSeat(i + 1)); // unique seat number pushed into students array and start at 1 not 0
  }
  return students; // return array of students seat numbers
}
let classRoom = createClassRoom(10); // create class room w 10 students
