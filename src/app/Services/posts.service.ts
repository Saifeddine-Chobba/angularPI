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
  getpostsByuser(idUser :number):Observable<any> {

    return this.httpClient.get<any>(environment.backendUrlPost+"/retrieve-posts-user/"+idUser);
  }
  getPostsBySection(idSection:number):Observable<Post[]>{
    return this.httpClient.get<Post[]>(environment.backendUrlPost+"/retrieve-posts-section/"+idSection);
  }

  /*
  deletePost(idPost :number): any{
    return this.httpClient.delete(environment.backendUrlPost+"/delete-post/"+idPost.toString())
  }*/

  addPost(post : Post,idUser:number,idSection:number):Observable<Post>{
    post.forbiddenWords = false;
    post.archived=false;
    return this.httpClient.post<Post>(environment.backendUrlPost+"/add-assign-post/"+idUser+"/"+idSection,post);
  }

  deletePost(idPost:number):Observable<{}>{
    const url=environment.backendUrlPost+"/delete-post/"+idPost;
    return this.httpClient.delete(url);
  }
  sortPostsDate(idSection:number):Observable<any>{
    return this.httpClient.get<any>(environment.backendUrlPost+"/SortPostsDate/"+idSection);
  }

  sortPostsReacts(idSection:number):Observable<any>{
    return  this.httpClient.get<any>(environment.backendUrlPost+"/SortPostsReacts/"+idSection);
  }
  editPost(post:Post){


    return this.httpClient.post(environment.backendUrlPost+"/update-post",post);

  }
  SortPostsRelevent(){


  }

}
