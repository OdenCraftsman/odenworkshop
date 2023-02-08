import React from "react"
import Image from 'next/image'
import parse from 'html-react-parser'

import styles from '@/styles/post-body.module.css'

export default function PostBody({htmlString}:{htmlString:string}){
    const contentReact = parse(
        htmlString,
        { replace: (node) => {
                if (node.name === 'img'){
                    const {src, alt, width, height} = node.attribs;
                    return(
                        <Image
                            src={src}
                            width={width}
                            height={height}
                            alt={alt}
                        />
                    )
                }
            }
        },
    )
    return(
        <div className={styles.stack}>
            {contentReact}
        </div>
    )
}