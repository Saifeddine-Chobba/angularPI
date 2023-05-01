import {ReactionTypeModel} from "./reactionType.model";
import {Post} from "./post";
import {User} from "./user.model";

export class Reaction{
  idReaction:number;
   reactionType: ReactionTypeModel;
   idPost: number;
    idUser:number;
  constructor( idReaction:number,reactionType :ReactionTypeModel, idUser: number,idPost: number)
  {
    this.idReaction=idReaction;
    this.reactionType = reactionType;
    this.idUser= idUser;
    this.idPost = idPost

  }
  static create() {
    return Object.create(this.prototype);
  }
}
