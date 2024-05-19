import { PostMetadata } from "./postMetadata";

const getPostMetadata = async (slug: string): Promise<PostMetadata> => {
  const res = await fetch(`http://localhost:8000/front-matter/${slug}`)
  let mattersJson = JSON.stringify(await res.json())
  let matters: PostMetadata = JSON.parse(mattersJson)
  return matters
}

export default getPostMetadata;