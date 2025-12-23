import Link from "next/dist/client/link";
import Image from "next/image";

import styles from "./index.module.css"

export function BoxCharacters(){
    return(
        <main className={styles.main}>
            <Link href="/characters" className={styles.container}>
                <Image 
                className={styles.image}
                src="/billCipher.png"
                alt="Bill Cipher"
                width={180}
                height={180}
                />
                <h2 className={styles.h2}>Characters</h2>
                <p className={styles.p}>Meet the characters from the saga</p>
            </Link>
        </main>
    )
}