function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-3 shadow hover:shadow-md transition">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-40 object-cover mb-2 rounded"
      />

      <h4 className="font-semibold text-sm">{product.title}</h4>
      <p className="text-green-600 font-bold">₹ {product.price}</p>
      <p className="text-yellow-500 text-sm">⭐ {product.rating}</p>
    </div>
  );
}

export default ProductCard;
