import cartReducer, { addToCart, removeFromCart } from '../slices/cartSlice';

describe('cartSlice', () => {
  it('should handle initial state', () => {
    expect(cartReducer(undefined, { type: undefined })).toEqual({ cart: [] });
  });

  it('should add an item to the cart', () => {
    const previousState = { cart: [] };
    expect(
      cartReducer(previousState, addToCart({ id: 1, name: 'Item 1' }))
    ).toEqual({ cart: [{ id: 1, name: 'Item 1', count: 1 }] });
  });

  it('should increment count when adding existing item', () => {
    const previousState = { cart: [{ id: 1, name: 'Item 1', count: 1 }] };
    expect(
      cartReducer(previousState, addToCart({ id: 1, name: 'Item 1' }))
    ).toEqual({ cart: [{ id: 1, name: 'Item 1', count: 2 }] });
  });

  it('should decrease count when removing item', () => {
    const previousState = { cart: [{ id: 1, name: 'Item 1', count: 2 }] };
    expect(cartReducer(previousState, removeFromCart(1))).toEqual({
      cart: [{ id: 1, name: 'Item 1', count: 1 }]
    });
  });

  it('should remove item when count reaches 0', () => {
    const previousState = { cart: [{ id: 1, name: 'Item 1', count: 1 }] };
    expect(cartReducer(previousState, removeFromCart(1))).toEqual({ cart: [] });
  });
});
