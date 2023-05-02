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
import {User} from "../../Models/user.model";

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
   users:any[] = [
    { avatar: 'assets/Avatars/bechir.jpg', username: ' BERIMN.7', status: 'connected' },
    { avatar: 'assets/Avatars/khlil.jpg', username: ' Khlil_17', status: 'connected' },
    { avatar: 'assets/Avatars/tlili.jpg', username: ' Tlili_11', status: 'connected' },
    { avatar: 'assets/Avatars/dali.jpg', username: ' Med.ali', status: 'disconnected' },
    { avatar: 'assets/Avatars/wiss.jpg', username: ' WISS.23', status: 'disconnected' },
    { avatar: 'assets/Avatars/Amir.jpg', username: ' AMir.hajji', status: 'connected' },
    { avatar: 'assets/Avatars/bechir.jpg', username: ' ALI.SAdid', status: 'connected' },
    { avatar: 'assets/Avatars/bechir.jpg', username: ' Jhon', status: 'disconnected' },
    { avatar: 'assets/Avatars/bechir.jpg', username: ' Naruto', status: 'connected' },
    { avatar: 'assets/Avatars/bechir.jpg', username: ' Ippo', status: 'connected' }

  ];



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
      this.posts = Posts})
  }
  getPostsBySection(idSection: number): void {
    this.postservice.getPostsBySection(idSection).subscribe((posts: Post[]) => {
      this.postsOfSection = posts;
    });
  }
  createPost(idUser:number,idSection:number) {
    this.postservice.addPost(this.newPost,idUser,idSection).subscribe((response) => {
      console.log('Post created:', response);
      this.newPost = new Post(0, '', new Date(), false, false, null); // Reset the form
      this.getAllPosts();
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
  PostScore(idPost:number){
    return this.postservice.PostScore(idPost);

  }
  sortPostsByScore(posts: Post[]) {
    posts.sort((post1, post2) => {
      console.log("score works !!")
      let score1 = this.PostScore(post1.idPost);
      let score2 = this.PostScore(post2.idPost);
      // @ts-ignore
      return score2 - score1;
    });
    this.posts=posts;
    this.getAllPosts()
  }
  sortPostReacts(){

  }





}
