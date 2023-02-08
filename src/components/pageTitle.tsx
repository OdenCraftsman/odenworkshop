import React from "react";
import { format, parseISO } from "date-fns";
import { ja } from "date-fns/locale";

import Container from "./container";

import styles from '@/styles/pageTitle.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

export default function PageTitle({title, publish=undefined}:{title:string, publish?:string}) {
    return (
        <Container large>
            <div className={styles.flexContainer}>
                <h1 className={styles.title}>{title}</h1>
                {publish ?
                    (
                        <div className={styles.flexContainer}>
                            <FontAwesomeIcon icon={faClock} color="var(--gray-25)" />
                            <time dateTime={publish}>
                                <p className={styles.publish}>
                                    {format(
                                        parseISO(publish),
                                        'yyyy年MM月dd日',
                                        {locale: ja}
                                    )}
                                </p>
                            </time>
                        </div>
                    )
                    : null}
            </div>
        </Container>
    )
}