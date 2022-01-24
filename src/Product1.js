<div className="product">
  <div className="product_info">
    <p>{title}</p>
    <p className="product_price">
      <small>Rs - </small>
      <strong>{price}</strong>
    </p>
    <div className="product_rating">
      {Array(rating)
        .fill()
        .map((_, i) => (
          <p>⭐</p>
        ))}
    </div>
  </div>
  <img alt="product image" src={image} />
  <button onClick={addToBasket}>Add to Basket</button>
</div>;
