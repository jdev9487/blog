import remarkMath from 'remark-math'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeMathjax from 'rehype-mathjax'
import remarkFrontmatter from 'remark-frontmatter'
import { remark } from 'remark'
import getPostsMetadata from '@/app/Components/getPostsMetadata'
import getPostMetadata from '@/app/Components/getPostMetadata'

const getPostContent = async (slug: string) => {
    const processor = remark()
        .use(remarkParse)
        .use(remarkMath)
        .use(remarkRehype)
        .use(rehypeMathjax)
        .use(rehypeStringify)
        .use(remarkFrontmatter, ['yaml', 'toml'])
        .freeze();

    const res = await fetch(`${process.env.MARKDOWN_URL}/markdown/${slug}`)
    const markdown = await res.text()

    const content = processor.processSync(markdown);

    return content;
}

export const generateStaticParams = async () => {
    const posts = await getPostsMetadata();
    return posts.map(p => ({
        slug: p.slug
    }));
}

const PostPage = async (props: any) => {
    const slug = props.params.slug;
    const remark = await getPostContent(slug);
    const frontmatter = await getPostMetadata(slug);
    return (
        <div>
            <h1 className="text-secondary text-6xl text-center my-16">
                {frontmatter.title}
            </h1>
            <video muted playsInline autoPlay loop src={`${process.env.ANIMATION_URL}/animations/${frontmatter.featuredAnimation}`} />
            <div dangerouslySetInnerHTML={{ __html: remark.value }} />
        </div>
    )
}

export default PostPage;