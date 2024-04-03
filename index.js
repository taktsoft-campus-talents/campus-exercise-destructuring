const ourCourse = {
  title: "Fullstack App & Web Developer",
  year: 2024,
  teachers: ["Staicy", "Ernst", "Ulrich", "Ralf"],
  school: {
    name: "taktsoft campus talents",
    city: "Bonn",
  },
};

const schoolAddress = {
  city: "Bonn",
  zip: "53115",
  street: "Mozartstraße 4-10",
};

// All exercises should make use of the destructuring syntax, the rest operator and the spread operator
// We can't test this automatically as we only check the results
// Please make sure that you don't use the "regular" syntax for your solutions

// DEMO EXERCISE WITH SOLUTION
// Declare and export a variable "demo" with a value of 42

const demo = 42;
export { demo };

// Exercise 1:
// Create and export a variable "year" containing the year of the course

// Exercise 2:
// Create and export a variable "courseTitle" containing the title of the course

// Exercise 3:
// Create and export an object "shortCourseInfo" containing only the title and the year of the course

// Exercise 4:
// Create and export an object "extendedCourseInfo" containing everything from "ourCourse" but with the school address from "schoolAddress" inside the property "school"

// Exercise 5:
// Create and export the following variables:
// 'firstTeacher' with the value of "Staicy"
// 'otherTeachers' as an array containing the other teachers except Staicy

// Exercise 6:
// Write and export a function 'printTeachers' that uses console.log() to print "Ernst Ulrich Ralf"

// Exercise 7:
// Create and export a new array 'allTeachers' containing all teachers of the course AND a new teacher "Thomas" as first entry

// Exercise 8:
// Create and export a variable 'schoolName' containing the name of the school
