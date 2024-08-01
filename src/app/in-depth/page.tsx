import { InDepthMetadata } from "../Components/inDepthMetadata";
import InDepthPreview from "../Components/InDepthPreview";

export default async function Posts() {
  const res = await fetch(`${process.env.IN_DEPTH_URL}/pdf/metadata`, {
    cache: "no-store"
  })
  let inDepthsJson = JSON.stringify(await res.json())
  let inDepths: InDepthMetadata[] = JSON.parse(inDepthsJson)
  const previews = inDepths.map(id => {
    return(
      <InDepthPreview key={id.slug} {...id}/>
    )
  })
  return (
    <div className="flex flex-col gap-4 mt-4">
      {previews}
    </div>
  )
}