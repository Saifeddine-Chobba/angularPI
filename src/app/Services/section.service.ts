import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ForumSection} from "../Models/section.model";

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(private httpClient:HttpClient) { }
  getSections(){
    return this.httpClient.get<ForumSection>(environment.backendUrlSection+"/retrieve-all-sections");
  }
}
