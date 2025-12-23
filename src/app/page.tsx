import { BoxCharacters } from "../components/box_characters";

export default function Home(){
  return(
    <main>
      <div>
        <h1>Gravitty Falls</h1>
        <h2>Trust no One</h2>
        <button>Explore the mystery</button>
      </div>
      
      <div>
        <BoxCharacters />
      </div>
    </main>
  )
}
