export default class Person{
  constructor(type, first_name, last_name, email){
    this._type = type;
    this._first_name = first_name;
    this._last_name = last_name;
    this._email = email;
  }
  get type(){
    return this._type
  }
  get first_name(){
    return this._first_name
  }
  get last_name(){
    return this._last_name
  }
  get email(){
    return this._email
  }
  set type(type){
    this._type = type;
  }
  set first_name(first_name){
    this._first_name = first_name;
  }
  set last_name(last_name){
    this._last_name = last_name;
  }
  set email(email){
    this._email = email;
  }
}
