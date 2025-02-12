import React, { Component } from 'react';

class RecommendedItems extends Component {
  recommendedItems = [
    { id: 1, name: 'Recommended Product 1' },
    { id: 2, name: 'Recommended Product 2' },
    { id: 3, name: 'Recommended Product 3' }
  ];

  render() {
    return (
      <div>
        <h3>Recommended Items</h3>
        <ul>
          {this.recommendedItems.map((item) => (
            <li key={item.id}>
              {item.name}{' '}
              <button onClick={() => this.props.handleAddToCart(item)}>
                Add to Cart {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default RecommendedItems;
