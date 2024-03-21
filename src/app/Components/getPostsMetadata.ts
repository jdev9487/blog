import fs from "fs";
import { PostMetadata } from "./postMetadata";
import matter from 'gray-matter';
import moment from 'moment';

const getPostsMetadata = (): PostMetadata[] => {
  const folder = "./src/posts"
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter(f => f.endsWith(".md"));
  return markdownPosts.map(mdp => {
    const slug = mdp.replace(".md", "");
    const mtr = matter(fs.readFileSync(`${folder}/${mdp}`))
    const date = Date.parse(mtr.data.date);
    const formatted = (moment(date)).format('MMM DD, YYYY')
  
    return {
        title: mtr.data.title,
        date: formatted,
        description: mtr.data.description,
        slug: slug,
        user: mtr.data.user,
        featuredAnimation: mtr.data.featuredAnimation
    }
  });
}

export default getPostsMetadata;