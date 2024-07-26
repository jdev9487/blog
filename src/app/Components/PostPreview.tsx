import Link from "next/link";
import Avatar from '@mui/material/Avatar';
import { PostMetadata } from "./postMetadata";
import ShareIcon from '@mui/icons-material/Share';

export default function PostPreview(props: PostMetadata) {
    return (
        <div className="flex flex-row border border-background-secondary shadow min-h-80">
            <div className="flex basis-1/2">
                <img id="thumbnail" className="object-cover" src={`${process.env.ANIMATION_URL}/thumbnails/${props.featuredAnimation}`} />
            </div>
            <div className="flex flex-col basis-1/2 py-6 px-12">
                <div className="flex flex-row items-center gap-2 pb-6 text-secondary">
                    <Avatar src={`${process.env.AVATARS_URL}/${props.user}`} />
                    <div>
                        <p className="text-xs font-thin mb-0">{props.user}</p>
                        <p className="text-xs font-thin mb-0">{props.date}</p>
                    </div>
                </div>
                <Link href={`/posts/${props.slug}`}>
                    <h2 className="text-main hover:text-secondary text-3xl uppercase font-thin mb-4 border-b-0">
                        {props.title}
                    </h2>
                </Link>
                <p className="text-md font-thin text-secondary">{props.description}</p>
                <div className="grow border-b mb-2 border-main/30"/>
                <div className="flex flex-row-reverse">
                    <ShareIcon className="text-main"/>
                </div>
            </div>
        </div>
    )
};