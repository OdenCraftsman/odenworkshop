import Link from "next/link";

import { getAllPosts, getAllSlugs, getPostBySlug } from "@/lib/api";

import styles from '@/styles/categoryList.module.css';

export default function PostsList({category, posts}:{category:string, posts:{title:string, slug:string,}}){
    return (
        <>
            <li className={styles.list}>
                {posts.map(
                    ({title, slug}:{title:string, slug:string}) => (
                        <ul>
                            <Link href={`/${category}/${slug}`}>
                                {title}
                            </Link>
                        </ul>
                    )
                )}
            </li>
        </>
    )
}