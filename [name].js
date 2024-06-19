import Link from 'next/link';
import { useRouter } from 'next/router';

const PokemonDetails = ({ pokemon }) => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <div className="container mx-auto p-4">
      <nav className="breadcrumb">
        <Link href="/">Home</Link> &gt; <span>{name}</span>
      </nav>
      <div className="border p-4 mt-4">
        <h1>{pokemon.name}</h1>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>
        <p>Types: {pokemon.types.map(t => t.type.name).join(', ')}</p>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
  const pokemon = await response.json();

  return {
    props: { pokemon },
  };
}

export default PokemonDetails;
