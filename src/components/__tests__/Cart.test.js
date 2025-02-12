import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Cart from '../Cart';

describe('Cart Component', () => {
  it('should render cart items correctly', () => {
    const cart = [{ id: 1, name: 'Item 1', count: 1 }];
    const { getByText } = render(
      <Cart
        cart={cart}
        handleAddToCart={() => {}}
        handleRemoveFromCart={() => {}}
      />
    );
    expect(getByText('Item 1 (x1)')).toBeInTheDocument();
  });

  it('should trigger addToCart on button click', () => {
    const cart = [{ id: 1, name: 'Item 1', count: 1 }];
    const handleAddToCart = jest.fn();
    const { getByTestId } = render(
      <Cart
        cart={cart}
        handleAddToCart={handleAddToCart}
        handleRemoveFromCart={() => {}}
      />
    );
    fireEvent.click(getByTestId('add-1'));
    expect(handleAddToCart).toHaveBeenCalledWith(cart[0]);
  });

  it('should trigger removeFromCart on button click', () => {
    const cart = [{ id: 1, name: 'Item 1', count: 1 }];
    const handleRemoveFromCart = jest.fn();
    const { getByTestId } = render(
      <Cart
        cart={cart}
        handleAddToCart={() => {}}
        handleRemoveFromCart={handleRemoveFromCart}
      />
    );
    fireEvent.click(getByTestId('remove-1'));
    expect(handleRemoveFromCart).toHaveBeenCalledWith(1);
  });
});
