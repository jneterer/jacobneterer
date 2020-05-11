import { OutboundLink } from "gatsby-plugin-google-analytics";
import React, { FunctionComponent } from "react";
import { IPost } from "../../../contracts/blog-posts/ipost";

const Post: FunctionComponent<{ post: IPost }> = ({ post }) => {
  return <div>
    <h3>
      <OutboundLink href={ post.url } target="_blank" >
        <span>{ post.title }</span>
      </OutboundLink> - <span><i>{ post.datePosted }</i></span>
    </h3>
    <p>{ post.description }</p>
  </div>
}

export default Post