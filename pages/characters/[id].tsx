import { Character, GetCharacterResults } from "../../types";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import imageLoader from "../../imageLoader";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";

function CharacterPage({ character }: { character: Character }) {

    
    const router = useRouter();

    console.log(router.query.id);
  return (
    <div>
      <h1 className={styles.clist}>{character.name}</h1>
      <Image
        loader={imageLoader}
        unoptimized
        className={styles.testin}
        src={character.image}
        alt={character.name}
        width="200"
        height="200"
      />
    </div>
  );
}

CharacterPage.getLayout = function getLayout(page: typeof CharacterPage){
    return <Layout>
        {page}
    </Layout>
}

// export async function getStaticPaths() {
//   const res = await fetch("https://rickandmortyapi.com/api/character");
//   const { results }: GetCharacterResults = await res.json();

//   return {
//     paths: results.map((character) => {
//       return { params: { id: String(character.id) } };
//     }),
//     fallback: false
//   };
// }

export const getServerSideProps: GetServerSideProps = async (context) =>{
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${context.query.id}`
  );
  const character = await res.json();
  return {
    props: {
      character,
    },
  };
}
export default CharacterPage;
