import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PostsService} from "../../Services/posts.service";
import {Post} from "../../Models/post";
import {FormControl} from "@angular/forms";
import {ReactsService} from "../../Services/reacts.service";
import {ReactionTypeModel} from "../../Models/reactionType.model";
import {Reaction} from "../../Models/react.model";
import {MatDialog} from "@angular/material/dialog";
import {CommentsComponent} from "./dialogs/comments/comments.component";
import {SectionService} from "../../Services/section.service";
import {ForumSection} from "../../Models/section.model";

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit{

  @ViewChild('sectionTab') sectionTab!: ElementRef;

  firstname= new FormControl();
  lastname = new FormControl();
  username = new FormControl();
  email = new FormControl();
  password= new FormControl();
  reaction=new Reaction(0,ReactionTypeModel.Like,1,0);
  posts: Post[] =[];
  postsOfSection!:Post[];
  sections!:ForumSection[];
  newPost :Post=new Post(0,'',new Date(),false,false,null);
  likee:ReactionTypeModel=ReactionTypeModel.Like;
  love:ReactionTypeModel=ReactionTypeModel.Love;
  woww:ReactionTypeModel=ReactionTypeModel.Wow;
  sad:ReactionTypeModel=ReactionTypeModel.Sad;
  haha:ReactionTypeModel=ReactionTypeModel.Haha;
  angry:ReactionTypeModel=ReactionTypeModel.Angry;



  constructor(private postservice:PostsService,private sectionservice:SectionService, private reactService: ReactsService,public dialog: MatDialog) {
  }

  openDialog(post: Post) {
    const dialogRef = this.dialog.open(CommentsComponent, {
      data: { postId: post.idPost } // Add the postId property to the data object
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  ngOnInit(): void {
    this.getAllPosts()

    this.getSections()

  }

  addReact(reactiontype:ReactionTypeModel,idPost:number,idUSer:number){
    this.reactService.assignReactionToPost(reactiontype,idUSer,idPost).subscribe(()=>{
      console.log("react added successfully :"+reactiontype);

    })
  }


  getAllPosts():any{
    this.postservice.getposts().subscribe((Posts: any[]) => {
      this.posts = this.sortByDate(Posts)})
  }
  getPostsBySection(idSection: number): void {
    this.postservice.getPostsBySection(idSection).subscribe((posts: Post[]) => {
      this.postsOfSection = posts;
    });
  }
  createPost() {
    this.postservice.addPost(this.newPost,1,1).subscribe((response) => {
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
  getSections(){
    // @ts-ignore
    this.sectionservice.getSections().subscribe((Sections : ForumSection[])=>{
      console.log("Section jouu!!")
      this.sections=Sections;
    })
  }
   sortByDate(posts: Post[]): Post[] {
    return posts.sort((a, b) => {
      console.log("sort Date works!!");
      return new Date(b.datePost).getTime() - new Date(a.datePost).getTime();
    });
  }



}
