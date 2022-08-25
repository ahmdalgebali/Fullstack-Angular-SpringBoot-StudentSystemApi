export class Student {
    id: number;
    fullName: string;
    gender: string;
    age: string;
    phone: string;
    address: string;
    dateCreated: Date;
    dateUpdated: Date;
    constructor(id: number, fullName: string, age: string, address: string, phone: string, gender: string) {
      this.id = id;
      this.fullName = fullName;
      this.gender = gender;
      this.age = age;
      this.phone = phone;
      this.address = address;
    }

  }