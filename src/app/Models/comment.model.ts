import {Post} from "./post";

export class Comment{
     idComment: number;
    username: string;
    content: string;
    imageName: string;
    dateComment: string;
     forbiddenWords: boolean ;
     post: Post;
    constructor(idComment: number,
  username: string,
  content: string,
  imageName: string,
  dateComment: string,
  forbiddenWords: boolean ,
  post: Post) {
      this.idComment= idComment;
      this.username = username;
      this.content = content;
      this.imageName = imageName;
      this.dateComment = dateComment;
      this.forbiddenWords = forbiddenWords;
      this.post = post
    }
  static create() {
    return Object.create(this.prototype);
  }
}
