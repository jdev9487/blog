import getPostsMetadata from "./Components/getPostsMetadata";
import PostPreview from "./Components/PostPreview";

const HomePage = async () => {
  const posts = await getPostsMetadata();
  const previews = posts.map(p => {
    return(
      <PostPreview key={p.slug} {...p} />
    )
  })
  return (
    <div className="flex flex-col gap-4 mt-4">
      {previews}
    </div>
  )
}

export default HomePage;