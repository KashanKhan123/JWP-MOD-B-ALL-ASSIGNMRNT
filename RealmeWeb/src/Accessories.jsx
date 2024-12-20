import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const accessories = [
  {
    label: 'NEW',
    title: 'realme Buds T110',
    description: 'Listen in Full Color',
    price: 'Rs.4,999',
    image: 'https://gadgetnmusic.com/wp-content/uploads/2024/05/Realme-Buds-T110-Earbuds-12.jpg',
  },
  {
    label: '',
    title: 'realme Buds Q',
    description: 'Music Never Ends',
    price: 'Rs.7,999',
    image: 'https://rabisastore.pk/cdn/shop/products/realme-buds-q-black-with-official-warranty-prcie-in-Pakistan.jpg?v=1697282492&width=1445',
  },
];

const CardSection = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4">Accessories</h2>
      <div className="d-flex justify-content-end mb-4">
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">Audio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Smart Wearable</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="row g-4">
        {accessories.map((item, index) => (
          <div className="col-md-6" key={index}>
            <div className="card h-100 border-0 shadow-sm hover-card">
              <div className="card-body">
                {item.label && (
                  <span className="badge bg-info text-white mb-2">{item.label}</span>
                )}
                <h5 className="card-title fw-bold">{item.title}</h5>
                <p className="card-text text-muted">{item.description}</p>
                {item.price && <p className="fw-bold">{item.price}</p>}
              </div>
              <img
                src={item.image}
                className="card-img-bottom"
                alt={item.title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
