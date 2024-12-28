import React from 'react';
import Data from './Data';
import './App.css';

function App() {
  return (
    <div className="card-container">
      {Data.map((e) => (
        <div className="card" key={e.id}>
          <img src={e.image} alt={e.title} />
          <p className="card-category">{e.category}</p>
          <h3 className="card-title">{e.title}</h3>
          <p className="card-description">{e.description}</p>
          <p className="card-price">${e.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default App;
