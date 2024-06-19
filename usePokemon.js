import { useState, useEffect } from 'react';

export const usePokemon = () => {
  const [types, setTypes] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  useEffect(() => {
    const fetchTypes = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/type');
      const data = await response.json();
      setTypes(data.results);
    };

    const fetchPokemon = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
      const data = await response.json();
      setPokemon(data.results);
      setFilteredPokemon(data.results);
    };

    fetchTypes();
    fetchPokemon();
  }, []);

  const filterPokemon = (type, searchTerm) => {
    let filtered = pokemon;
    if (type) {
      filtered = filtered.filter(p => p.types.includes(type));
    }
    if (searchTerm) {
      filtered = filtered.filter(p => p.name.includes(searchTerm.toLowerCase()));
    }
    setFilteredPokemon(filtered);
  };

  return {
    types,
    filteredPokemon,
    filterPokemon
  };
};
