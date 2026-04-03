function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      className="w-full p-3 border rounded-lg mb-4 outline-none focus:ring-2 focus:ring-blue-500"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default SearchBar;
