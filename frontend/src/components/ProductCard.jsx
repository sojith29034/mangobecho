import React from "react";
import { useCart } from "react-use-cart";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const ProductCard = (props) => {
    const { addItem, updateItemQuantity, items } = useCart();

    const handleIncrement = () => {
        const existingItem = items.find(item => item.id === props.id);
        if (existingItem) {
            updateItemQuantity(props.id, existingItem.quantity + 1);
        } else {
            addItem({ id: props.id, ...props, quantity: 1 });
        }
        props.onQuantityChange(props.id, props.quantity + 1);
    };

    const handleDecrement = () => {
        const existingItem = items.find(item => item.id === props.id);
        if (existingItem && existingItem.quantity > 1) {
            updateItemQuantity(props.id, existingItem.quantity - 1);
            props.onQuantityChange(props.id, props.quantity - 1);
        } else if (existingItem && existingItem.quantity === 1) {
            updateItemQuantity(props.id, 0); // or use a removeItem function if available
            props.onQuantityChange(props.id, 0);
        }
    };

    const handleChange = (event) => {
        const value = Math.max(1, Math.min(12, parseInt(event.target.value) || 0));
        props.onQuantityChange(props.id, value);
    };

    return (
        <Card className="text-center">
            <Card.Img variant="top" src={props.image} alt={props.name} />
            <Card.Body className="flex flex-col justify-between pt-4">
                <Card.Title className="text-xl font-bold tracking-wide">{props.name}</Card.Title>
                <Card.Text className="text-lg text-gray-600 font-bold mt-auto">₹ {props.price}</Card.Text>
            </Card.Body>

            <InputGroup className="p-3">
                <Button variant="outline-primary" type="button" id="decrement-button" onClick={handleDecrement}>
                    -
                </Button>
                <Form.Control className="text-center" type="text" id="quantity-input" value={props.quantity} onChange={handleChange} required />
                <Button variant="outline-primary" type="button" id="increment-button" onClick={handleIncrement}>
                    +
                </Button>
            </InputGroup>
        </Card>
    );
};

export default ProductCard;
