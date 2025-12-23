import { BoxCharacters } from "../components/box_characters";
import { HomePage } from "../components/home";

import styles from "./page.module.css"

export default function Home(){
  return(
    <main className={styles.main}>
      <HomePage />
      <div className={styles.content}>
        <BoxCharacters />
      </div>
    </main>
  )
}
