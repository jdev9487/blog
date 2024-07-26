import { PostMetadata } from "./Components/postMetadata";
import PostPreview from "./Components/PostPreview";

export default async function Page() {
  const res = await fetch(`${process.env.MARKDOWN_URL}/front-matter`, {
    cache: "no-store"
  })
  let mattersJson = JSON.stringify(await res.json())
  let posts: PostMetadata[] = JSON.parse(mattersJson)
  const previews = posts.map(p => {
    return(
      <PostPreview key={p.slug} {...p}/>
    )
  })
  return (
    <div className="flex flex-col gap-4 mt-4">
      {previews}
    </div>
  )
}