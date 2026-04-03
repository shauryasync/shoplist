function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-200">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-3">
        <p className="text-xs text-gray-400 uppercase">{product.category}</p>

        <h3 className="text-sm font-medium text-gray-800">{product.title}</h3>

        <div className="flex items-center justify-between mt-2">
          <p className="text-blue-600 font-semibold">₹ {product.price}</p>

          <p className="text-yellow-500 text-sm">
            ⭐ {product.rating.toFixed(1)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
