import Link from "next/dist/client/link";

export function BoxCharacters(){
    return(
        <main>
            <Link href="/characters">
                <h1>Characters</h1>
                <p>Meet the characters</p>
            </Link>
        </main>
    )
}