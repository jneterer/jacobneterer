import { graphql, useStaticQuery } from "gatsby";
import { IGetPostsResponse } from "../../contracts/blog-posts/iget-posts-response";

export const GetFeaturedPosts = (): IGetPostsResponse => {
  const posts: IGetPostsResponse = useStaticQuery(
    graphql`query 
      {
        allSanityPost(filter: {featuredPost: {eq: true}}, sort: {fields: datePosted, order: DESC}) {
          nodes {
            _id
            datePosted(formatString: "MMMM Do, YYYY")
            title
            description
            url
          }
        }
      }
    `
  )
  return posts;
}