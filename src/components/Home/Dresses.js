import React from 'react';
import '../../Styles/Home/Dresses.css'

export default function Dresses() {
  return (
    <div>
      
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block dressimage" src="https://cdn.shopify.com/s/files/1/0632/3286/8566/products/hher_studios_seam_detail_belted_dress_burnt_orange_6_5d4af7df-3dcc-4422-a691-8fcaed936e60.jpg?v=1645458270&width=550" alt="First slide" />
            <h3>MAXI BALTED DRESS</h3>
            <h3>150</h3>
          </div>
          <div className="carousel-item">
          <img className="d-block" src="https://cdn.shopify.com/s/files/1/0632/3286/8566/products/hher_studios_seam_detail_belted_dress_burnt_orange_6_5d4af7df-3dcc-4422-a691-8fcaed936e60.jpg?v=1645458270&width=550" alt="First slide" />
          </div>

        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
}
