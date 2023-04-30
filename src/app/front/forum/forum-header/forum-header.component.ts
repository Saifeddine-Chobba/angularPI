import {Component, OnInit} from '@angular/core';
import { MenuItem } from 'primeng/api';
import {Post} from "../../../Models/post";
@Component({
  selector: 'app-forum-header',
  templateUrl: './forum-header.component.html',
  styleUrls: ['./forum-header.component.css'],

})

export class ForumHeaderComponent implements OnInit{
  items: MenuItem[]=[] ;
  value = 'Clear me';
  newPost :Post=new Post(0,'',new Date(),false,false,null);
  ngOnInit() {
    this.items = [
      {
        label: 'Update',
        icon: 'pi pi-refresh'
      },
      {
        label: 'Delete',
        icon: 'pi pi-times'
      },
      {
        label: 'Angular',
        icon: 'pi pi-external-link',
        url: 'http://angular.io'
      },
      {
        label: 'Router',
        icon: 'pi pi-upload',
        routerLink: '/fileupload'
      }
    ];
  }



}
