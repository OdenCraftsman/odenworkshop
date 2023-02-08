import Container from './container'
import Social from './social'

import styles from '@/styles/footer.module.css'

export default function Footer({fixed=false}:{fixed?:boolean}){
    return (
        <footer className={fixed? styles.fixedWrapper: styles.wrapper}>
            <Container>
                <div className={styles.flexContainer}>
                    <h1>OdeeenWorkshop</h1>
                    <Social/>
                </div>
            </Container>
        </footer>
    )
}