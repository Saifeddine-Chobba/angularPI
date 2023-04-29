export class Post {
  idPost: number;
  content: string;
  datePost: Date;
  forbiddenWords: boolean;
  archived: boolean;
  forumSection: any; // or create a ForumSection class if you have one

  constructor(idPost: number, content: string, datePost: Date, forbiddenWords: boolean, archived: boolean, forumSection: any) {
    this.idPost = idPost;
    this.content = content;
    this.datePost = datePost;
    this.forbiddenWords = forbiddenWords;
    this.archived = archived;
    this.forumSection = forumSection;
  }
}
