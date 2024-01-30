function Card({ imageUrl, title, price }) {
  return (
    <div className="cars-card">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{`${price} / d`}</p>
    </div>
  );
}

export default Card;
