import {Component, Inject, Input, OnInit} from '@angular/core';
import {CommentService} from "../../../../Services/comment.service";
import {Post} from "../../../../Models/post";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit{

  AllComments:any
  newComment :Post=new Post(0,'',new Date(),false,false,null);

  postId!: number;
  constructor(private commentservice:CommentService,public dialogRef: MatDialogRef<CommentsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.getComments(11);
    this.postId=this.data.postId;
  }


  getComments(idPost :number){
    this.commentservice.getComments(idPost).subscribe((data)=>{
      console.log("jebnehom lkol "+data.length);
      this.AllComments=data;
    })
  }
  addComment(idPost:number){
    this.commentservice.addComment(this.newComment,1,idPost).subscribe(()=>{
      console.log("comment"+this.newComment.content+" added");
      this.getComments(idPost)
    })
  }




}
