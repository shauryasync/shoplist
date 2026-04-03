function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      className="w-full p-2 border rounded mb-4"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default SearchBar;
