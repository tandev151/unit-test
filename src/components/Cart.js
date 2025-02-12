import React, { Component } from 'react';
import RecommendedItems from './RecommendedItems';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/slices/cartSlice';

class Cart extends Component {
  render() {
    const { cart } = this.props;

    let emptyElment = 'Cart is empty';

    return (
      <div>
        <h2>Shopping Cart</h2>
        {typeof cart !== 'object' || !!cart.length ? (
          emptyElment
        ) : (
          <ul>
            {this.props.cart.map((item) => (
              <li key={item.id}>
                {item.name} (x{item.count})
                <button
                  data-testid={`add-${item.id}`}
                  onClick={() => this.props.handleAddToCart(item)}>
                  +
                </button>
                <button
                  data-testid={`remove-${item.id}`}
                  onClick={() => this.props.handleRemoveFromCart(item.id)}>
                  -
                </button>
              </li>
            ))}
          </ul>
        )}

        <RecommendedItems handleAddToCart={this.props.handleAddToCart} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ cart: state.cart.cart });

const mapDispatchToProps = (dispatch) => ({
  handleAddToCart: (item) => dispatch(addToCart(item)),
  handleRemoveFromCart: (id) => dispatch(removeFromCart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
