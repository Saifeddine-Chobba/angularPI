import { BehaviorSubject, Observable, map } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { TokenStorageService } from "./token-storage.service";
import { User } from "../models/user";



const USERNAME_KEY='AuthUsername';
const EMAIL_KEY='AuthEmail';
const httpOption ={
    headers:new HttpHeaders({'Content-Type':'application/json'})
  }
  const TOKEN_KEY ='AuthToken';
  @Injectable({
    providedIn: 'root'
  })
  export class AuthService {
private currentUserSubject:BehaviorSubject<any>;
public currentUser:Observable<User>;
  private signInUrl:string="http://localhost:8089/crashcode/api/auth/signin";
 private signUpUrl:string="http://localhost:8089/crashcode/api/auth/signup";
constructor(private http:HttpClient,private tokenStorage:TokenStorageService) {
  this.currentUserSubject=new BehaviorSubject<any>(sessionStorage.getItem(TOKEN_KEY));
  this.currentUser=this.currentUserSubject.asObservable();
  
 }

 public get currentUserValue():any{
   return this.currentUserSubject.value;
 }


SignIn(user:User){
 
  return this.http.post(this.signInUrl,user, httpOption)
  .pipe(map(data =>{
    
    this.saveUserData(data);
    return data;
  }));
  
    }
/*hearder(data:jwtResponse):Observable<jwtResponse>{
let tokenStr='Bearer '+data.acessToken;
const headers = new HttpHeaders().set('Authorization', tokenStr);
return this.http.post({headers, responseType: 'text' as 'json' });
}*/

signUp(user:User){
  return this.http.post(this.signUpUrl,user);
    }




    private saveUserData(data:any){
      this.tokenStorage.saveToken(data.accessToken);
      this.tokenStorage.saveUsername(data.username);
      this.tokenStorage.saveEmail(data.email);
    //  this.tokenStorage.saveAuthorities(data.authorities);
      this.currentUserSubject.next(data.accessToken);
    }


    logOut(){
      sessionStorage.removeItem(TOKEN_KEY);
      sessionStorage.removeItem(USERNAME_KEY);
      sessionStorage.removeItem(EMAIL_KEY);
    }
}