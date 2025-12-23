import { Grandstander } from "next/font/google";

import { BoxCharacters } from "../components/box_characters";

import styles from "./page.module.css"

//create the font
const grandstander = Grandstander({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-grandstander"
})

export default function Home(){
  return(
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={`${styles.h1} ${grandstander.className}`}>Gravitty Falls</h1>
        <h2>Trust no One</h2>
        <button>Explore the mystery</button>
      </div>

      <div>
        <BoxCharacters />
      </div>
    </main>
  )
}
