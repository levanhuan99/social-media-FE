export interface Post {
  id?: number;
  content: string;
  status: boolean;
  amountOfLikes?: number;
  amountOfComment?: number;
  postTime?: Date;
  account?: any;


}
