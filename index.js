import { usePokemon } from '../hooks/usePokemon';
import SearchForm from '../components/SearchForm';
import PokemonCard from '../components/hooks/PokemonCard';

const Home = () => {
  const { types, filteredPokemon, filterPokemon } = usePokemon();

  return (
    <div className="container mx-auto p-4">
      <SearchForm types={types} onSearch={filterPokemon} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredPokemon.map(pokemon => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default Home;
