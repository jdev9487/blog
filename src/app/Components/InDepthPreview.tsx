import Link from "next/link";
import Avatar from '@mui/material/Avatar';
import { InDepthMetadata } from "./inDepthMetadata";
import ShareIcon from '@mui/icons-material/Share';
import Image from 'next/image';

export default function InDepthPreview(props: InDepthMetadata) {
    return (
        <div className="flex flex-row border border-background-secondary shadow">
            <div className="flex flex-col py-3 px-12 w-full">
                <div className="flex flex-row items-center gap-2 justify-between text-secondary">
                    <div className="flex flex-row items-center">
                        <Link href={`${process.env.IN_DEPTH_URL_CLIENT}/pdf/${props.slug}`} >
                            <h2 className="text-main hover:text-secondary text-3xl uppercase font-thin border-b-0">
                                {props.title}
                            </h2>
                        </Link>
                        <Image className="ml-2" src="/images/pdf.png" alt="pdf" height={32} width={40}/>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <Avatar src={`${process.env.AVATARS_URL}/${props.user}`} />
                        <div>
                            <p className="text-xs font-thin mb-0">{props.user}</p>
                        </div>
                    </div>
                </div>
                <p className="text-md font-thin mb-0 text-secondary">{props.description}</p>
                <div className="grow border-b mb-2 border-main/30"/>
                <div className="flex flex-row-reverse">
                    <ShareIcon className="text-main"/>
                </div>
            </div>
        </div>
    )
};