import '@/styles/globals.css'

import { AppProps } from "next/app";
import Head from 'next/head'
import { useState, useLayoutEffect } from "react";
import { Context, createContext } from 'vm';

import '@fortawesome/fontawesome-svg-core/styles.css'
import {config} from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { CategoryList } from '.';

// constant params
const burgerDisplayWidth:number = 1000;
const limitDisplayWidth:number = 500;

function App({ Component, pageProps }: AppProps){
    // burger display state
    const [burgerDisplayState, setBurgerDisplayState] = useState<boolean>(true);
    useLayoutEffect( () => {
        window.addEventListener(
            'resize',
            () => {
                if(window.innerWidth <= burgerDisplayWidth){
                    setBurgerDisplayState((prop) => true);
                } else if (window.innerWidth >= burgerDisplayWidth) {
                    setBurgerDisplayState((prop) => false);
                } else if (window.innerWidth < limitDisplayWidth) {
                    window.resizeTo(limitDisplayWidth, window.innerHeight);
                };
            }
        );
    }, []);
    const router = useRouter();
    const fileName = router.pathname.split('/').pop()
    let isIndex:boolean;
    if(fileName === ''  || CategoryList.includes(fileName as string)){
        isIndex = true;
    } else {
        isIndex = false;
    }
    return(
        <>
            <Header burger={burgerDisplayState}/>
            <main>
                <Component {...pageProps} />
                {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/highlight.min.js"></script>
                <script>
                    hljs.initHighlightingOnLoad();
                </script> */}
            </main>
            <Footer fixed={isIndex}/>
        </>
    )
}

export default App