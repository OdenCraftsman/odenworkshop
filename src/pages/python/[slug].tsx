import { format, parseISO } from "date-fns";
import { ja } from "date-fns/locale";
import Link from "next/link";

import { getAllSlugs, getPostBySlug } from "@/lib/api";
import Container from "@/components/container";
import PageTitle from "@/components/pageTitle";
import PostBody from "@/components/postBody";
import Meta from "@/components/meta";
import PageNation from "@/components/pagenation";
import { CategoryList } from "..";

const CATEGORY = CategoryList[0]

export default function Post(
    {title, publish, content, categories,}
    :{title:string, publish:string, content:string, categories:string[],}
) {
    return(
        <>
            <Meta title={title}/>
            <article>
                <PageTitle
                    title={title}
                    publish={publish}
                />
                <Container>
                    <PostBody htmlString={content} />
                </Container>
            </article>
            <PageNation/>
        </>
    )
}

export async function getStaticPaths() {
    const allSlugs = await getAllSlugs({
        category:CATEGORY,
        limit:100,
    });
    let allPaths = allSlugs.map(
        ({slug}:{slug:string}) => `/${CATEGORY}/${slug}`
    )
    return {
        paths: allPaths,
        fallback: false,
    }
}

export async function getStaticProps(context: { params: {slug: string}}) {
    const slug = context.params.slug;
    const post = await getPostBySlug({category:CATEGORY, slug:slug});
    return {
        props: {
            title: post.title,
            publish: post.publishDate,
            content: post.content,
            categories: post.categories,
        },
    }
}