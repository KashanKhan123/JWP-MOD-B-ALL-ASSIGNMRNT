import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://www.mobilemate.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdi9vpom9l%2Fimage%2Fupload%2Fv1725960424%2FRealme_ib5wzn.jpg&w=3840&q=75" className="d-block w-100" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src="https://www.mobilemate.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdi9vpom9l%2Fimage%2Fupload%2Fv1725960424%2FRealme_ib5wzn.jpg&w=3840&q=75https://media.suara.com/pictures/653x366/2024/02/29/20183-realme.jpg" className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src="https://www.mobilemate.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdi9vpom9l%2Fimage%2Fupload%2Fv1725960424%2FRealme_ib5wzn.jpg&w=3840&q=75https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsbDEeycdnSzqlmpREdSeSFdoClAtwg9NPuWxnV797xhyzvECE0UFiaAyF0fMkUNd44YQ&usqp=CAU" className="d-block w-100" alt="Slide 3" />
        </div>
        <div className="carousel-item">
          <img src="https://www.mobilemate.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdi9vpom9l%2Fimage%2Fupload%2Fv1725960424%2FRealme_ib5wzn.jpg&w=3840&q=75https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8cTDpTt7vUpAuBJb3i1SqMJBTKRiiRG47pPNk_dd9Z0W6oF40GvM2xceXDz5XfI7cPc4&usqp=CAU" className="d-block w-100" alt="Slide 3" />
        </div>
        
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
