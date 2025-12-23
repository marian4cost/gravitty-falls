import { Grandstander } from "next/font/google";

import styles from "./index.module.css"

const grandstander = Grandstander({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-grandstander"
})

export default function AboutPage(){
    return(
        <main className={styles.main}>
            <h2 className={`${styles.h2} ${grandstander.className}`}>Sobre o Projeto</h2>
            <p className={styles.p}>Este projeto é uma página desenvolvida por fã com a finalidade de treinar e revisar conceitos fundamentais do Next.js. Aqui eu exploro rotas, componentes, estilização, otimização e outros recursos do framework, utilizando o tema de Gravity Falls como inspiração criativa.</p>
        </main>
    )
}