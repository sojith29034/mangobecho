import products from './products.json';
import ProductCard from '../components/ProductCard'

const ProductList = () => {
  return (
    <div className="flex grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} img={product.image} name={product.name} color={product.color} price={product.price} />
      ))}
    </div>
  );
};

export default ProductList;
