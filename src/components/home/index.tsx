import { Grandstander } from "next/font/google";

import styles from "./index.module.css"

//create the font
const grandstander = Grandstander({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-grandstander"
})

export function HomePage(){
    return(
        <main className={styles.main}>
            <div className={styles.container}>
            <h1 className={`${styles.h1} ${grandstander.className}`}>Gravitty Falls</h1>
            <h2 className={`${styles.h2} ${grandstander.className}`}>Trust no One</h2>
            <button className={styles.button}>Explore the mystery</button>
        </div>
        </main>
    )
}
