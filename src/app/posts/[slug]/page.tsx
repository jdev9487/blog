import remarkMath from 'remark-math'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeMathjax from 'rehype-mathjax'
import remarkFrontmatter from 'remark-frontmatter'
import {remark} from 'remark'
import {read} from 'to-vfile'
import getPostsMetadata from '@/app/Components/getPostsMetadata'
import getPostMetadata from '@/app/Components/getPostMetadata'

const getPostContent = async (slug: string) => {
    const folder = "./src/posts/";
    const file = `${folder}${slug}.md`;

    const processor = remark()
        .use(remarkParse)
        .use(remarkMath)
        .use(remarkRehype)
        .use(rehypeMathjax)
        .use(rehypeStringify)
        .use(remarkFrontmatter, ['yaml', 'toml'])
        .freeze();
    
    var readFile = await read(file);
    const content = processor.processSync(readFile);

    return content;
}

export const generateStaticParams = async () => {
    const posts = getPostsMetadata();
    return posts.map(p => ({
        slug: p.slug
    }));
}

const PostPage = async (props: any) => {
    const slug = props.params.slug;
    const remark = await getPostContent(slug);
    const frontmatter = getPostMetadata(slug);
    return(
        <div>
            <h1 className="text-secondary text-6xl text-center my-16">
                {frontmatter.title}
            </h1>
            <video autoPlay loop src={`/${frontmatter.featuredAnimation}.mp4`} />
            <div dangerouslySetInnerHTML={{ __html: remark.value }}/>
        </div>
    )
}

export default PostPage;