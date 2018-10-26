export class Person {
  constructor(fName) {
    this.fullName = fName;
    this.firstName;
    this.lastName;
  }

  getFirstName() {
    return (this.firstName = this.fullName.split(' ')[0]);
  }

  getLastName() {
    return (this.lastName = this.fullName.split(' ')[1]);
  }

  getFullName() {
    return this.fullName;
  }

  setFirstName(first) {
    this.firstName = first;
    this.fullName = `${this.firstName} ${this.lastName}`;
  }

  setLastName(last) {
    this.lastName = last;
    this.fullName = `${this.firstName} ${this.lastName}`;
  }

  setFullName(firstAndLast) {
    this.fullName = firstAndLast;
  }
}
