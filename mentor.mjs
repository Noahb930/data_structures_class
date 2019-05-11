import Person from './person';
export default class Mentor extends Person{
  constructor(first_name,last_name,email){
    super("Mentor",first_name,last_name,email);
  }
}
