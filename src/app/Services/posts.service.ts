import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Post} from "../Models/post";

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  constructor(private httpClient:HttpClient) { }

  getposts():Observable<any> {

    return this.httpClient.get<any>(environment.backendUrlPost+"/retrieve-all-posts");
  }

  /*
  deletePost(idPost :number): any{
    return this.httpClient.delete(environment.backendUrlPost+"/delete-post/"+idPost.toString())
  }*/

  addPost(post : Post):Observable<Post>{
    post.forbiddenWords = false;
    post.archived=false;
    return this.httpClient.post<Post>(environment.backendUrlPost+"/add-post",post);
  }

  deletePost(idPost:number):Observable<{}>{
    const url=environment.backendUrlPost+"/delete-post/"+idPost;
    return this.httpClient.delete(url);
  }
}
