const PricingCard = ({ price }) => {
  return (
    <div className="pricing-card">
      <span className="discount">{price.discount}% Off</span>

      <div className="price-row">
        <p>
          <del>${price.adult.old}</del>
          <strong>${price.adult.new}</strong>
          <span>/ Adult</span>
        </p>

        <p>
          <del>${price.child.old}</del>
          <strong>${price.child.new}</strong>
          <span>/ Child</span>
        </p>
      </div>

      <ul className="benefits">
        <li>Best Price Guaranteed</li>
        <li>No Booking Fees</li>
        <li>Professional Local Guide</li>
      </ul>

      <button className="btn-primary">Check Availability</button>
    </div>
  );
};

export default PricingCard;
