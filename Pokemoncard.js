import Link from 'next/link';

const PokemonCard = ({ pokemon }) => (
  <div className="border p-4 m-2">
    <h3>{pokemon.name}</h3>
    <Link href={`/pokemon/${pokemon.name}`}>
      <a className="text-blue-500">View Details</a>
    </Link>
  </div>
);

export default PokemonCard;
