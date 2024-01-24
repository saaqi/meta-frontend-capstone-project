export default function Testimonials() {
    return (
      <div className="testimonials-parent">
        <p className="testimonials-title">Testimonials</p>
        <div className="testimonials">
          <div className="testimonial">
            <img
              className="reviewer-img"
              src="/images/user1.webp"
              alt="greek salad"
            />
            <div className="name-rating">
              <p className="reviewer-name">Richard</p>
              <p className="reviewer-rating">5/5</p>
            </div>
            <div className="review-text">
              <p>
                "Little Lemon has become my go-to spot for a quick and delicious
                meal. The menu variety is impressive, and the freshness of the
                ingredients is truly noticeable. As a guy who enjoys bold
                flavors, I appreciate the unique twists on classic dishes. The
                ambiance is laid-back, making it perfect for a casual lunch or
                dinner. Can't recommend the lemon-infused dishes enough!"
              </p>
            </div>
          </div>
          <div className="testimonial">
            <img
              className="reviewer-img"
              src="/images/user2.webp"
              alt="greek salad"
            />
            <div className="name-rating">
              <p className="reviewer-name">Jane</p>
              <p className="reviewer-rating">5/5</p>
            </div>
            <div className="review-text">
              <p>
                "Absolutely love the charm of Little Lemon! It's my personal
                sanctuary for delightful dining. The attention to detail in each
                dish is unmatched, and the presentation is Instagram-worthy. The
                staff is friendly, and the atmosphere is cozy. Whether it's a
                solo outing or a girls' night, this place always delivers a
                memorable experience. The lemon-themed decor adds a whimsical
                touch, making it a truly enchanting dining destination."
              </p>
            </div>
          </div>
          <div className="testimonial">
            <img
              className="reviewer-img"
              src="/images/user3.webp"
              alt="greek salad"
            />
            <div className="name-rating">
              <p className="reviewer-name">Michale & Lucinda</p>
              <p className="reviewer-rating">5/5</p>
            </div>
            <div className="review-text">
              <p>
                "Little Lemon is our ultimate date night spot! From the moment
                we step in, the warm ambiance sets the mood perfectly. The menu
                offers something for every palate, allowing us to share and
                savor a variety of flavors. The staff is attentive, ensuring our
                dining experience is always top-notch. The romantic setting,
                coupled with the delectable dishes, makes Little Lemon the ideal
                place for creating lasting memories together."
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
