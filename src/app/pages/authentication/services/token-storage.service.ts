import { Injectable } from '@angular/core';


const TOKEN_KEY='AuthToken';
const USERNAME_KEY='AuthUsername';
const EMAIL_KEY='AuthEmail';
const AUTHORITIES_KEY='AuthAuthorities';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  public saveToken(token:string){
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY,token);
  }
  public getToken():string|null{
    return sessionStorage.getItem(TOKEN_KEY);
  }
  public saveUsername(username:string){
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY,username);
  }
  public getUsername():string|null{
    return sessionStorage.getItem(USERNAME_KEY);
  }
  public saveEmail(email:string){
    window.sessionStorage.removeItem(EMAIL_KEY);
    window.sessionStorage.setItem(EMAIL_KEY,email);
  }
  public getEmail():string|null{
    return sessionStorage.getItem(EMAIL_KEY);
  }

 /* public saveAuthorities(authorities:Role[]){
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY,JSON.stringify(authorities));
  }
  public getAuthorities():Role[]{
   this.roles=[];
   if(sessionStorage.getItem(TOKEN_KEY)){
   JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).array.forEach((authority: { authority: Role; }) => {
     this.roles.push(authority.authority);
  });
}
  return this.roles;
  }*/
}
