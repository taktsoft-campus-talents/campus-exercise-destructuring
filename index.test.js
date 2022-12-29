import * as exercises from "./index.js";
import { jest } from "@jest/globals";

describe("Test destructuring exercises", () => {
  it("DEMO exercise should export a variable 'demo' with a value of 42", () => {
    expect(exercises.demo).toEqual(42);
  });
  it("Exercise 1 should export a variable 'year' containing the year of the course", () => {
    expect(exercises.year).toEqual(2023);
  });
  it("Exercise 2 should export a variable 'courseTitle' with a value of 'Fullstack App & Web Developer'", () => {
    expect(exercises.courseTitle).toEqual("Fullstack App & Web Developer");
  });
  it("Exercise 3 should export a variable 'shortCourseInfo' containing only title and year of the course", () => {
    expect(exercises.shortCourseInfo.title).toEqual(
      "Fullstack App & Web Developer"
    );
    expect(exercises.shortCourseInfo.year).toEqual(2023);
    expect(exercises.shortCourseInfo).not.toHaveProperty("teachers");
    expect(exercises.shortCourseInfo).not.toHaveProperty("school");
  });
  it("Exercise 4 should export an object 'extendedCourseInfo' containing the detailed school address in the property 'school'", () => {
    expect(exercises.shortCourseInfo.title).toEqual(
      "Fullstack App & Web Developer"
    );
    expect(exercises.extendedCourseInfo.school.zip).toEqual("53115");
  });
  it("Exercise 5 should export a variable 'firstTeacher' with the value of 'Sascha' and an array called 'otherTeachers' containing all teachers except Sascha", () => {
    expect(exercises.firstTeacher).toEqual("Sascha");
    expect(exercises.otherTeachers).toContain("Ulrich");
    expect(exercises.otherTeachers).toContain("Ralf");
    expect(exercises.otherTeachers).not.toContain("Sascha");
  });
  it("Exercise 6 should export a function 'printTeachers' that uses console.log to print 'Sascha Ulrich Ralf'", () => {
    const spy = jest.spyOn(console, "log");
    exercises.printTeachers();
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith("Sascha", "Ulrich", "Ralf");
    spy.mockRestore();
  });
  it("Exercise 7 should export an array 'allTeachers' containing all teachers of the course AND a new teacher 'Thomas' at index 0", () => {
    expect(exercises.allTeachers[0]).toEqual("Thomas");
    expect(exercises.allTeachers[1]).toEqual("Sascha");
    expect(exercises.allTeachers[2]).toEqual("Ulrich");
    expect(exercises.allTeachers[3]).toEqual("Ralf");
  });
  it("Exercise 8 should export a variable 'schoolName' containing the name of the school", () => {
    expect(exercises.schoolName).toEqual("taktsoft campus talents");
  });
});
