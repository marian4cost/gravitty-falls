import styles from "./characters.module.css"

import { Grandstander } from "next/font/google";

const grandstander = Grandstander({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-grandstander"
})

export default function CharactersPage(){
    return(
        <main className={styles.main}>
            <h2 className={`${styles.h2} ${grandstander.className}`}>Personagens</h2>
        </main>
    )
}