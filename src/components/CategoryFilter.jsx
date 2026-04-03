import { useState } from "react";

function CategoryFilter({ onSelect }) {
  const categories = ["all", "beauty", "fragrances", "furniture", "groceries"];
  const [active, setActive] = useState("all");

  const handleClick = (ev) => {
    setActive(ev);
    onSelect(ev);
  };

  return (
    <div className="flex gap-2 overflow-x-auto mb-6">
      {categories.map((item) => (
        <button
          key={item}
          onClick={() => handleClick(item)}
          className={`px-3 py-1 rounded-full text-sm whitespace-nowrap transition
            ${
              active === item
                ? "bg-blue-600 text-white"
                : "border text-gray-600 hover:bg-gray-100"
            }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
