import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './SmartphoneCards'
import './SmartphoneCard.css'

const products = [
  {
    label: 'NEW',
    title: 'realme C75',
    description: 'Dhulai Horai Hai',
    price: '',
    image: 'https://g-mart.pk/wp-content/uploads/Realme-C75-4G-438x593.jpg',
  },
  {
    label: 'NEW',
    title: 'realme 13+ 5G',
    description: 'Speed to Victory',
    price: 'Rs.89,999',
    image: 'https://gsmfloor.pk/wp-content/uploads/Realme-13-5G.jpg',
  },
  {
    label: 'NEW',
    title: 'realme GT 6',
    description: 'Power meets AI',
    price: 'Rs.149,999',
    image: 'https://images.priceoye.pk/realme-gt-6-pakistan-priceoye-ury4m.jpg',
  },
  {
    label: 'NEW',
    title: 'realme Note 60',
    description: 'Champion Quality',
    price: 'From Rs.26,999',
    image: 'https://eezepc.com/wp-content/uploads/2024/10/realme.webp',
  },
  {
    label: 'NEW',
    title: 'realme C61',
    description: 'Hard to break',
    price: 'From Rs.32,999',
    image: 'https://i0.wp.com/pricedekho.com.pk/wp-content/uploads/2024/09/realme-c61-61-800x900.webp',
  },
  {
    label: 'NEW',
    title: 'realme C65',
    description: 'Unbreakable champion',
    price: 'From Rs.49,999',
    image: 'https://media.wisemarket.com.pk/product/realme-c65-11.webp',
  },
  {
    label: 'NEW',
    title: 'realme C75',
    description: 'Dhulai Horai Hai',
    price: '',
    image: 'https://g-mart.pk/wp-content/uploads/Realme-C75-4G-438x593.jpg',
  },
  {
    label: 'NEW',
    title: 'realme 13+ 5G',
    description: 'Speed to Victory',
    price: 'Rs.89,999',
    image: 'https://gsmfloor.pk/wp-content/uploads/Realme-13-5G.jpg',
  },
  {
    label: 'NEW',
    title: 'realme GT 6',
    description: 'Power meets AI',
    price: 'Rs.149,999',
    image: 'https://images.priceoye.pk/realme-gt-6-pakistan-priceoye-ury4m.jpg',
  },
  {
    label: 'NEW',
    title: 'realme Note 60',
    description: 'Champion Quality',
    price: 'From Rs.26,999',
    image: 'https://eezepc.com/wp-content/uploads/2024/10/realme.webp',
  },
  {
    label: 'NEW',
    title: 'realme C61',
    description: 'Hard to break',
    price: 'From Rs.32,999',
    image: 'https://i0.wp.com/pricedekho.com.pk/wp-content/uploads/2024/09/realme-c61-61-800x900.webp',
  },
  {
    label: 'NEW',
    title: 'realme C65',
    description: 'Unbreakable champion',
    price: 'From Rs.49,999',
    image: 'https://media.wisemarket.com.pk/product/realme-c65-11.webp',
  },
  {
    label: 'NEW',
    title: 'realme C75',
    description: 'Dhulai Horai Hai',
    price: '',
    image: 'https://g-mart.pk/wp-content/uploads/Realme-C75-4G-438x593.jpg',
  },
  {
    label: 'NEW',
    title: 'realme 13+ 5G',
    description: 'Speed to Victory',
    price: 'Rs.89,999',
    image: 'https://gsmfloor.pk/wp-content/uploads/Realme-13-5G.jpg',
  },
  {
    label: 'NEW',
    title: 'realme GT 6',
    description: 'Power meets AI',
    price: 'Rs.149,999',
    image: 'https://images.priceoye.pk/realme-gt-6-pakistan-priceoye-ury4m.jpg',
  },
  {
    label: 'NEW',
    title: 'realme Note 60',
    description: 'Champion Quality',
    price: 'From Rs.26,999',
    image: 'https://eezepc.com/wp-content/uploads/2024/10/realme.webp',
  },
  {
    label: 'NEW',
    title: 'realme C61',
    description: 'Hard to break',
    price: 'From Rs.32,999',
    image: 'https://i0.wp.com/pricedekho.com.pk/wp-content/uploads/2024/09/realme-c61-61-800x900.webp',
  },
  {
    label: 'NEW',
    title: 'realme C65',
    description: 'Unbreakable champion',
    price: 'From Rs.49,999',
    image: 'https://media.wisemarket.com.pk/product/realme-c65-11.webp',
  },
];

const CardSection = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4">SmartPhones</h2>
      <div className="row g-4">
        {products.map((product, index) => (
          <div className="col-md-6 col-lg-4 kashan" key={index}>
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <span className="badge bg-info text-white mb-2">{product.label}</span>
                <h5 className="card-title fw-bold">{product.title}</h5>
                <p className="card-text text-muted">{product.description}</p>
                {product.price && <p className="fw-bold">{product.price}</p>}
              </div>
              <img src={product.image} className="card-img-bottom" alt={product.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
};







export default CardSection;
