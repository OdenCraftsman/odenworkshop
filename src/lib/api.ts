import { createClient } from "microcms-js-sdk"

export const client = createClient({
    serviceDomain: process.env.SERVICE_DOMAIN as string,
    apiKey: process.env.API_KEY as string,
})

export async function getPostBySlug({category, slug}:{category:string, slug:string}) {
    try {
        const post = await client.get({
            endpoint: category,
            queries: {filters: `slug[equals]${slug}`},
        });
        return post.contents[0]
    } catch(err) {
        console.log(" ------ getPostBySlug -----")
        console.log(err)
    }
}

export async function getAllSlugs({category, limit}:{category:string,limit:number}) {
    try {
        const slugs = await client.get({
            endpoint: category,
            queries: {
                fields: 'title,slug',
                orders: '-publishDate',
                limit: limit,
            }
        });
        return slugs.contents
    } catch(err) {
        console.log(" ------ getAllSlugs -----")
        console.log(err)
    }
}

export async function getAllPosts({category, limit, }:{category:string, limit:number}){
    try{
        const posts = await client.get({
            endpoint: category,
            queries:{
                fields: 'title,slug',
                orders: '-publishDate',
                limit: limit,
            },
        })
        return posts.contents
    } catch(err) {
        console.log(" ------ getAllPosts -----")
        console.log(err)
    }
}