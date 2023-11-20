import React from 'react';

const ShopItem = ({ item, onAddToCart }) => {
    const { id, name } = item;

    const handleAddToCart = () => {
        // Call the parent component's callback to add the item to the cart
        onAddToCart(item);
    };

    return (
        <div className="shop-item">
            <h3>{name}</h3>
            {/* Add more details if needed */}
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ShopItem;