import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Reaction} from "../Models/react.model";
import {Observable} from "rxjs";
import {ReactionTypeModel} from "../Models/reactionType.model";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
};
@Injectable({
  providedIn: 'root'
})
export class ReactsService {
  private baseReactURL = environment.backendUrlReact;
  constructor(private httpClient:HttpClient) {

  }
  updateReaction(reaction: Reaction):Observable<any>{
    let editReactUrl = this.baseReactURL + "/update-reaction";
    return this.httpClient.post<Reaction>(editReactUrl, reaction)
  }
  getAllReactions(){
    let getAllReactUrl = this.baseReactURL + "/retrieve-all-reactions"
    return this.httpClient.get<any[]>(getAllReactUrl)

  }
  getReaction(idReact: number){
  let getReactUrl= this.baseReactURL + "/retrieve-reaction/" + idReact
  return this.httpClient.get<Reaction>(getReactUrl,httpOptions)
  }
  deleteReaction(idReact: number){
  let deleteReactUrl = this.baseReactURL + "/delete-reaction/" + idReact
    return this.httpClient.delete(deleteReactUrl, httpOptions)
  }
  assignReactionToPost(reactiontype: ReactionTypeModel, idUser: number, idPost: number){
    let reaction=new Reaction(0,reactiontype,idUser,idPost);
  let addReactionToPostUrl = this.baseReactURL + "/add-assing-reaction-topost/"+idUser+"/"+idPost;
    return this.httpClient.post(addReactionToPostUrl,reaction);
  }
}
