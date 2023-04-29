export class User{
   idUser: number;
   firstname :string;
   lastname:string;
    username:string;
   email:string;
   password:string;
  constructor(  idUser: number,
  firstname :string,
  lastname:string,
  username:string,
  email:string,
  password:string,) {
     this.idUser= idUser;
     this.firstname = firstname;
     this.lastname = lastname;
     this.username = username;
     this.email = email;
     this.password = password;

   }
  static create() {
    return Object.create(this.prototype);
  }
}
