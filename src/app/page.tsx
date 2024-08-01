import Link from "next/link";
// import { PostMetadata } from "./Components/postMetadata";
// import PostPreview from "./Components/PostPreview";

export default async function Page() {
  // const res = await fetch(`${process.env.MARKDOWN_URL}/front-matter`, {
  //   cache: "no-store"
  // })
  // let mattersJson = JSON.stringify(await res.json())
  // let posts: PostMetadata[] = JSON.parse(mattersJson)
  // const previews = posts.map(p => {
  //   return(
  //     <PostPreview key={p.slug} {...p}/>
  //   )
  // })
  return (
    <div>
      <Link href={`/posts`}>Animated</Link>
      <Link href={`/in-depth`}>In Depth</Link>
    </div>
    // <div className="flex flex-col gap-4 mt-4">
    //   {previews}
    // </div>
  )
}