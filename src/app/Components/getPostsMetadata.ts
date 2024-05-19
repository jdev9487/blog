import { PostMetadata } from "./postMetadata";

const getPostsMetadata = async (): Promise<PostMetadata[]> => {
  const res = await fetch('http://localhost:8000/front-matter')
  let mattersJson = JSON.stringify(await res.json())
  let matters: PostMetadata[] = JSON.parse(mattersJson)
  return matters
}

export default getPostsMetadata;