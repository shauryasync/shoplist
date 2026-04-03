function CategoryFilter({ onSelect }) {
  const categories = ["all", "beauty", "fragrances", "furniture", "groceries"];
  return (
    <div className="flex gap-2 overflow-x-auto mb-4">
      {categories.map((item) => (
        <button
          key={item}
          onClick={() => onSelect(item)}
          className="px-3 py-1 border rounded-full text-sm text-gray-600 hover:bg-gray-100 whitespace-nowrap"
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
