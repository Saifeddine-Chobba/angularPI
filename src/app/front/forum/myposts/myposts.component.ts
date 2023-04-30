import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {PostsService} from "../../../Services/posts.service";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatSort, Sort} from "@angular/material/sort";
import {Post} from "../../../Models/post";
import {MatDialog} from "@angular/material/dialog";
import {EditPostComponent} from "../dialogs/edit-post/edit-post.component";






@Component({
  selector: 'app-myposts',
  templateUrl: './myposts.component.html',
  styleUrls: ['./myposts.component.css']
})
export class MypostsComponent implements OnInit{
  displayedColumns: string[] = ['idPost', 'content', 'datePost', 'forbiddenWords','archived','forumSection','Options'];
  // @ts-ignore

  dataSource: MatTableDataSource<any>;

  MyPosts!:any

 content!:string

  constructor(private postservice:PostsService,public dialog: MatDialog) {}
  openDialog(post:Post) {
    const dialogRef = this.dialog.open(EditPostComponent, {
    });

    dialogRef.afterClosed().subscribe(editedContent => {
      if (editedContent) {
      this.editPost(post,editedContent)

      }
    });
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();


  }

  ngOnInit(): void {
    this.getPostsByUser(1);
  }
  getPostsByUser(idUser: number){

    this.postservice.getpostsByuser(idUser).subscribe((data)=>{

      this.MyPosts=data;
      this.dataSource = new MatTableDataSource(this.MyPosts);
      console.log("done nigga ::**")
    })
  }
  deletPost(idPost : number){
    this.postservice.deletePost(idPost).subscribe(()=>{
      console.log('Post with id '+idPost+' deleted');
      this.getPostsByUser(1);

      // @ts-ignore
      this.posts = this.posts.filter((post) => post.idPost !== idPost);
    })

  }

  editPost(post :Post,content:string){
    this.postservice.addPost(new Post(post.idPost ,content,post.datePost,post.forbiddenWords,post.archived,post.forumSection),1,1).subscribe(()=>{
      console.log('Post updated');
      this.getPostsByUser(1);

    })
  }


}


