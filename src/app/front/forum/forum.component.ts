import {Component, OnInit} from '@angular/core';
import {PostsService} from "../../Services/posts.service";
import {Post} from "../../Models/post";
import {FormControl} from "@angular/forms";
import {ReactsService} from "../../Services/reacts.service";
import {ReactionTypeModel} from "../../Models/reactionType.model";
import {Reaction} from "../../Models/react.model";

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit{
  reaction!: Reaction;

  firstname= new FormControl();
  lastname = new FormControl();
  username = new FormControl();
  email = new FormControl();
  password= new FormControl();
  posts: any[] | undefined
  newPost :Post=new Post(0,'',new Date(),false,false,null);
  constructor(private postservice:PostsService, private reactService: ReactsService) {

  }



  ngOnInit(): void {
    console.log(this.reaction)
    this.getAllPosts()
    this.addReact()
    this.CreateReaction()
    console.log("done")
  }
  addReact(){
  }
  CreateReaction(){
    return new Reaction(
      1,
      ReactionTypeModel.Like,
      1
    )
    console.log("created!")

  }
  createReaction(reaction: ReactionTypeModel, idUser: number, idPost: number): void{
    this.reaction.reactionType = reaction
    this.reactService.assignReactionToPost(this.reaction, idUser, idPost).subscribe(
      ()=>{
        console.log("done")
      }
    )
  }
  getAllPosts():any{
    this.postservice.getposts().subscribe((Posts: any[]) => {
      this.posts = Posts})
  }

  createPost() {
    this.postservice.addPost(this.newPost).subscribe((response) => {
      console.log('Post created:', response);
      this.newPost = new Post(0, '', new Date(), false, false, null); // Reset the form
    });
  }
  deletPost(idPost : number){
    this.postservice.deletePost(idPost).subscribe(()=>{
      console.log('Post with id '+idPost+' deleted');
      // @ts-ignore
      this.posts = this.posts.filter((post) => post.idPost !== idPost);
    })
  }

}
