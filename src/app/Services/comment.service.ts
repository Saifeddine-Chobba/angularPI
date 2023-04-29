import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Post} from "../Models/post";
import {Comment} from "../Models/comment.model";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  // @ts-ignore

  constructor(private httpClient:HttpClient) { }

  getComments(idPost : number) : Observable<any> {
    return this.httpClient.get<Comment>("http://localhost:8089/campside/commment/get-commnets/"+idPost)
  }

  addComment(comment: Comment, idUser: number | undefined, idPost: number | undefined):Observable<any>{
    return this.httpClient.post("http://localhost:8089/campside/commment/add-assing-comment"+"/"+idUser+"/"+idPost,comment);

  }

}
