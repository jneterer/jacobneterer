import React from "react";
import Layout from "../components/layout/layout";
import Posts from "../components/posts/posts";
import SEO from "../components/seo";
import { IPost } from "../contracts/blog-posts/ipost";
import { GetPosts } from "../hooks/blog-posts/get-posts";

const BlogPosts = () => {
  const { allSanityPost } = GetPosts();
  const posts: IPost[] = allSanityPost.nodes;
  return <Layout>
    <SEO title="Blog Posts" description="Check out blog posts I've written ranging from topics like Angular to Gatsby on platforms like Medium." />
    <div className="posts-section-container">
      <h2>Blog Posts</h2>
      <Posts posts={posts} />
    </div>
  </Layout>
}

export default BlogPosts
