import Link from "next/link";
import Avatar from '@mui/material/Avatar';
import { InDepthMetadata } from "./inDepthMetadata";
import ShareIcon from '@mui/icons-material/Share';

export default function InDepthPreview(props: InDepthMetadata) {
    return (
        <div className="flex flex-row border border-background-secondary shadow">
            <div className="flex flex-col py-6 px-12 w-full">
                <div className="flex flex-row items-center gap-2 pb-6 text-secondary">
                    <Avatar src={`${process.env.AVATARS_URL}/${props.user}`} />
                    <div>
                        <p className="text-xs font-thin mb-0">{props.user}</p>
                    </div>
                </div>
                <Link href={`${process.env.IN_DEPTH_URL}/pdf/${props.slug}`} >
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