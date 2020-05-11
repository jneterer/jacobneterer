import { IPost } from "./ipost";

export interface IGetPostsResponse {
  allSanityPost: {
    nodes: IPost[];
  }
}