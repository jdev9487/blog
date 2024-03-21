import fs from "fs";
import { PostMetadata } from "./postMetadata";
import matter from 'gray-matter';

const getPostMetadata = (slug: string): PostMetadata => {
  const folder = "./src/posts/";
  const file = `${folder}${slug}.md`;
  const mtr = matter(fs.readFileSync(file))
  return {
    title: mtr.data.title,
    date: mtr.data.date,
    description: mtr.data.description,
    slug: slug,
    user: mtr.data.user,
    featuredAnimation: mtr.data.featuredAnimation
  }
}

export default getPostMetadata;