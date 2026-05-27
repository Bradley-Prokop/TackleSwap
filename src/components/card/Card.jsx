import './Card.css';


export default function Card({
  title,
  image,
  price,
  className,
}) {
  return (
    <div className={`card-container ${className || ""}`}>
      <div className="card-image-wrapper">
        <span className="card-badge">Live</span>

        <img
          className="card-img"
          src={image}
          alt={title}
        />
      </div>

      <div className="card-content">
        <h3 className="card-title">{title}</h3>

        <p className="card-price">${price}</p>

        <p className="card-subtext">
          Newly listed fishing gear
        </p>
      </div>
    </div>
  );
}
