import React from "react"
import Hero from "../components/hero/hero"
import Layout from "../components/layout/layout"
import Posts from "../components/posts/posts"
import ProjectsSection from "../components/projects-section/projects-section"
import SEO from "../components/seo"
import { IPost } from "../contracts/blog-posts/ipost"
import { GetFeaturedPosts } from "../hooks/blog-posts/get-featured-posts"
import { Link } from "gatsby"

const IndexPage = () => {
  const { allSanityPost } = GetFeaturedPosts();
  const posts: IPost[] = allSanityPost.nodes;
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      {
        posts?.length > 0 &&
          <div className="posts-section-container">
            <h2>Featured Posts</h2>
            <Posts posts={posts} />
            <div className="seeMore">
              <Link to="/blog-posts" ><i>See More ></i></Link>
            </div>
          </div>
      }
      <ProjectsSection />
    </Layout>
  )
}

export default IndexPage
