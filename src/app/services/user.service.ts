import { Injectable } from '@angular/core';
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
  }

  public getCurrentUserId() : number{
    return 1;
  }
}
