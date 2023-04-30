import {User} from "./user.model";
import {ForumSection} from "./section.model";

export class Post {
  idPost: number;
  content: string;
  datePost: Date;
  forbiddenWords: boolean;
  archived: boolean;
  forumSection: ForumSection|null; // or create a ForumSection class if you have one

  constructor(idPost: number, content: string, datePost: Date, forbiddenWords: boolean, archived: boolean, forumSection: ForumSection|null) {
    this.idPost = idPost;
    this.content = content;
    this.datePost = datePost;
    this.forbiddenWords = forbiddenWords;
    this.archived = archived;
    this.forumSection = forumSection;
  }
}
