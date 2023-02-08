import Head from "next/head";

export default function Meta({title}:{title:string}) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content="Storage of my technology" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/styles/dracula.min.css"></link> */}
        </Head>
    )
}