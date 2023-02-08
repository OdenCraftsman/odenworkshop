import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { deflate } from 'zlib'
import { Main } from 'next/document'

import Container from '@/components/container'
import PageTitle from '@/components/pageTitle'
import Meta from '@/components/meta'
import CategoryListComponent from '@/components/categoryListComponent'

export const CategoryList = ['python', 'typescript'];

export default function IndexPage(){
    return (
        <>
            <Meta title='初めに'/>
            <article>
                <PageTitle title='初めに' />
                <Container>
                    <div className={styles.mainContent}>
                        <h2>このサイトの目的</h2>
                        <p>本ウェブサイトの目的は、サイトの開発を通して、Next.jsやReact、TypeScriptなどのウェブ開発技術を学習し、実用することである。また、開発後は、ウェブ開発技術に限らず、様々なプログラミングや機械学習などについて幅広く掲載し、備忘録として用いる。</p>
                    </div>
                </Container>
                <Container>
                    <div className={styles.mainContent}>
                        <h2>カテゴリー一覧</h2>
                        <CategoryListComponent categoryList={CategoryList}/>
                    </div>
                </Container>
            </article>
        </>
    )
}