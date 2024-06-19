import { useState, useEffect } from 'react';

const SearchForm = ({ types, onSearch }) => {
  const [selectedType, setSelectedType] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
    onSearch(e.target.value, searchTerm);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(selectedType, e.target.value);
  };

  return (
    <div className="p-4">
      <select
        className="border p-2"
        value={selectedType}
        onChange={handleTypeChange}
      >
        <option value="">All Types</option>
        {types.map(type => (
          <option key={type.name} value={type.name}>{type.name}</option>
        ))}
      </select>
      <input
        className="border p-2 ml-2"
        type="text"
        placeholder="Search Pokémon"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchForm;
