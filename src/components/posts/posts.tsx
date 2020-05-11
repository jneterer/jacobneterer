import React, { FunctionComponent } from "react";
import { IPost } from "../../contracts/blog-posts/ipost";
import { IPostsProps } from "../../contracts/blog-posts/posts-props";
import Post from './post/post';
import "./posts.scss";

const Posts: FunctionComponent<IPostsProps> = ({ posts }) => {
  return <div>
    {
      posts.map((post: IPost) => <Post post={post} key={post._id} />)
    }
  </div>
}

export default Posts