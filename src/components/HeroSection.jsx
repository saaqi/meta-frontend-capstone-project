import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-desc">
          <p className="title">Little Lemon</p>
          <p className="subtitle">Chicago</p>
          <p className="desc">
            Indulge your taste buds at Little Lemon, where freshness meets
            flavor in every dish. Discover a culinary haven, offering a diverse
            menu crafted with passion and care.
          </p>
          <Link to="/booking">
            <button className="reserve-btn btn">Reserve a table</button>
          </Link>
        </div>
        <div className="img-wrapper">
          <img className="hero-img" src="../images/hero.png" alt="hero image" />
        </div>
      </div>
    </div>
  );
}
