import React from "react";
import "./Slidder.css";
function Carousel({ url1, url2, url3, url4, url5 }) {
  return (
    <div
      id="carouselExampleControlsNoTouching"
      class="carousel slide"
      data-bs-touch="false"
      data-bs-interval="false"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={url1} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={url2} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={url3} class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
