export default class Course{
  constructor(course_name){
    this._course_name = course_name;
    this._mentors = [];
    this._students = [];
  }
  get course_name(){
    return this._course_name;
  }
  get students(){
    return this._students;
  }
  get mentors(){
    return this._mentors;
  }
  set course_name(course_name){
    this._course_name=course_name;
  }
  set students(students){
    this._students= students;
  }
  set mentors(mentors){
    this._mentors = mentors;
  }
  addStudent(student){
    this._students.push(student);
  }
  setMentor(mentor){
    let mentor_array = []
    mentor_array.push(mentor)
    this._mentors = mentor_array;
  }
  setMentors(mentors){
    this._mentors = mentors;
  }
  removeStudent(student){
    for(let i = 0; i<this.students.length; i++){
      if(this.students[i].first_name == student.first_name){
        this.students=this.students.splice(i,1);
      }
    }
  }
  isNanoInTheClass(student){
    for(let i = 0; i<this.students.length; i++){
      if(this.students[i].first_name == student.first_name){
        return true
        break
      }
    }
    return false
  }
  removeMentor(mentor){
    for(let i = 0; i<this.mentors.length; i++){
      if(this.mentors[i].first_name == mentor.first_name){
        this.mentors=this.mentors.splice(i,1);
      }
    }
  }
  classSize(){
    return this.students.length;
  }
  mentorSize(){
    return this.mentors.length;
  }
  rosterSortedAlphabetically(){
    let output = this.students;
    for(let i = 0; i< output.length; i++){
      for(let j = 0; j<output.length; j++){
        if (output[j+1]){
          console.log(output[j+1]);
          if(output[j].first_name.charCodeAt(0) > output[j+1].first_name.charCodeAt(0)){
            let first = output[j+1];
            let last = output[j];
            output[j] = first;
            output[j+1] = last;
          }
        }
      }
    }
    return output;
  }
}
