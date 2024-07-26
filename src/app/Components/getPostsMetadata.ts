import { PostMetadata } from "./postMetadata";

const getPostsMetadata = async (): Promise<PostMetadata[]> => {
  const res = await fetch(`${process.env.MARKDOWN_URL}/front-matter`, {
    cache: "no-store"
  })
  let mattersJson = JSON.stringify(await res.json())
  let matters: PostMetadata[] = JSON.parse(mattersJson)
  return matters
}

export default getPostsMetadata;