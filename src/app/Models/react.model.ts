import {ReactionTypeModel} from "./reactionType.model";
import {Post} from "./post";
import {User} from "./user.model";

export class Reaction{
   reactionType: ReactionTypeModel;
   idPost: number;
    idUser:number;
  constructor(  idPost: number,
                reactionType :ReactionTypeModel,
                idUser: number) {
    this.idUser= idUser;
    this.reactionType = reactionType;
   this.idPost = idPost

  }
  static create() {
    return Object.create(this.prototype);
  }
}
