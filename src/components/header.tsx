import Link from "next/link"

import { useState } from "react"
import Nav from "@/components/nav"
import Container from "@/components/container"

import styles from '@/styles/header.module.css'
import Burger from "./burger"

export default function Header({burger}:{burger:boolean}){
    const [menuState, setMenuState] = useState<boolean>(false);
    const changeMenuState = (): void => {
        setMenuState( (prop) => !prop );
    }
    const closeState = (): void => {
        setMenuState(false);
    }
    return (
        <>
            <header className={styles.header}>
                <Container large>
                    <div className={styles.flexContainer}>
                        <div className={styles.flexContainer}>
                            { burger ? (
                                <nav className={menuState ? styles.open: styles.close}>
                                    <button className={styles.btn} onClick={changeMenuState}>
                                        <span className={styles.bar}></span>
                                        <span className='sr-only'>menu</span>
                                    </button>
                                </nav>
                            ) : null }
                            <Link href='/'>
                                <h1 className={styles.title}>おでん工房</h1>
                            </Link>
                        </div>
                        <Nav />
                    </div>
                </Container>
                <hr className={styles.hr}/>
            </header>
            {/* <div className={styles.menuList}>
                <li>
                    <ul>初めに</ul>
                    <ul>Python</ul>
                    <ul>機械学習</ul>
                    <ul>TypeScript</ul>
                </li>
            </div> */}
        </>
    )
}
