// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import Cart from '../Cart';

// describe('Cart Component', () => {
//   it('should render cart items correctly', () => {
//     const cart = [{ id: 1, name: 'Item 1', count: 1 }];
//     const { getByText } = render(
//       <Cart
//         cart={cart}
//         handleAddToCart={() => {}}
//         handleRemoveFromCart={() => {}}
//       />
//     );
//     expect(getByText('Item 1 (x1)')).toBeInTheDocument();
//   });

//   //   it('should trigger addToCart on button click', () => {
//   //     const cart = [{ id: 1, name: 'Item 1', count: 1 }];
//   //     const handleAddToCart = jest.fn();
//   //     const { getByTestId } = render(
//   //       <Cart
//   //         cart={cart}
//   //         handleAddToCart={handleAddToCart}
//   //         handleRemoveFromCart={() => {}}
//   //       />
//   //     );
//   //     fireEvent.click(getByTestId('add-1'));
//   //     expect(handleAddToCart).toHaveBeenCalledWith(cart[0]);
//   //   });

//   //   it('should trigger removeFromCart on button click', () => {
//   //     const cart = [{ id: 1, name: 'Item 1', count: 1 }];
//   //     const handleRemoveFromCart = jest.fn();
//   //     const { getByTestId } = render(
//   //       <Cart
//   //         cart={cart}
//   //         handleAddToCart={() => {}}
//   //         handleRemoveFromCart={handleRemoveFromCart}
//   //       />
//   //     );
//   //     fireEvent.click(getByTestId('remove-1'));
//   //     expect(handleRemoveFromCart).toHaveBeenCalledWith(1);
//   //   });
// });

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CartContainer from '../Cart';
import { addToCart, removeFromCart } from '../../redux/slices/cartSlice';
import '@testing-library/jest-dom';

const mockStore = configureStore([]);
const initialState = {
  cart: [
    { id: 1, name: 'Recommended Product 1', count: 2 },
    { id: 2, name: 'Recommended Product 2', count: 1 }
  ]
};

describe('CartContainer Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
    console.log({ initialState });
    store.dispatch = jest.fn(); // Mock dispatch
  });

  //   test('renders cart items correctly', () => {
  //     // expect(screen.getByText('Cart is empty')).toBeInTheDocument();
  //     expect(screen.getByText('Recommended Product 1')).toBeInTheDocument();
  //     expect(screen.getByText('Recommended Product 2')).toBeInTheDocument();
  //   });

  //   test('dispatches addToCart action when add button is clicked', () => {
  //     // render(
  //     //   <Provider store={store}>
  //     //     <CartContainer />
  //     //   </Provider>
  //     // );

  //     fireEvent.click(screen.getByText('Add to Cart Recommended Product 1')); // Assuming button exists

  //     expect(store.dispatch).toHaveBeenCalledWith(
  //       addToCart({ id: 1, name: 'Recommended Product 1' })
  //     );
  //   });

  test('dispatches removeFromCart action when remove button is clicked', () => {
    // render(
    //   <Provider store={store}>
    //     <CartContainer />
    //   </Provider>
    // );

    fireEvent.click(screen.getByTestId('remove-1'));

    expect(store.dispatch).toHaveBeenCalledWith(removeFromCart(1));
  });
});
