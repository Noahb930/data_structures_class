import Nano from './nano';
import Mentor from './mentor';
import Course from './course';

let droid = new Nano("Droid","droid@nanohackers.org");
let hi = new Nano("Hi","hi@nanohackers.org");
let mentor = new Mentor("Mentor ","mentor1@nanohackers.org");
let mentor1 = new Mentor("Mentor 1","mentor1@nanohackers.org");
let mentor2 = new Mentor("Mentor 2","mentor2@nanohackers.org");
let course = new Course("Data Structures");
course.addStudent(hi);
course.addStudent(droid);
course.classSize
console.log(course.students)
course.setMentor(mentor);
course.setMentors([mentor1, mentor2]);
course.mentorSize
course.removeMentor(mentor1)
course.removeStudent(droid);
course.isNanoInTheClass(droid);
console.log(course.rosterSortedAlphabetically());
