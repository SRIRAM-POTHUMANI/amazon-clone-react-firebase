<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={image} class="img-fluid rounded-start" alt="..." />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        <strong>
          <small>₹</small>
          {price}
        </strong>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  </div>
</div>;

<div className="checkoutProduct">
  <img className="checkoutProduct__image" src={image} />

  <div className="checkoutProduct__info">
    <p className="checkoutProduct__title">{title}</p>
    <p className="checkoutProduct__price">
      <small>₹</small>
      <strong>{price}</strong>
    </p>
    <div className="checkoutProduct__rating">
      {Array(rating)
        .fill()
        .map((_, i) => (
          <p>🌟</p>
        ))}
    </div>
    {!hideButton && (
      <button onClick={removeFromBasket}>Remove from Basket</button>
    )}
  </div>
</div>;
