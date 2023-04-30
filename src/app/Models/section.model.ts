import {Post} from "./post";

export class ForumSection {

  idForumSection:number;
  name:string;
  archived:boolean;
  posts:Post[]

  constructor(idForumSection: number, name: string, archived: boolean, posts: Post[]) {
    this.idForumSection = idForumSection;
    this.name = name;
    this.archived = archived;
    this.posts = posts;
  }
}
