import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import products from './products.json';
import ProductCard from '../components/ProductCard';
import { useCart } from 'react-use-cart';

const ProductList = () => {
  const { items } = useCart();
  const [productQuantities, setProductQuantities] = useState({});

  useEffect(() => {
    const initialQuantities = products.reduce((acc, product) => {
      const cartItem = items.find(item => item.id === product.id);
      acc[product.id] = cartItem ? cartItem.quantity : 0;
      return acc;
    }, {});
    setProductQuantities(initialQuantities);
  }, [items]);

  const handleQuantityChange = (id, quantity) => {
    setProductQuantities(prevState => ({
      ...prevState,
      [id]: quantity
    }));
  };

  return (
    <Container className='mt-5 mb-5'>
      <Row>
        {products.map((item) => {
          return (
            <Col key={item.id}>
              <ProductCard
                id={item.id}
                img={item.image}
                name={item.name}
                color={item.color}
                price={item.price}
                quantity={productQuantities[item.id] || 0}
                onQuantityChange={handleQuantityChange}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ProductList;