function Pricing() {
  return (
    <section className="pricing">
      <h2>Simple, transparent pricing</h2>

      <div className="pricing-cards">
        <div className="price-card">
          <h3>Basic</h3>
          <p className="price">₹0</p>
          <p>Perfect for individuals</p>
          <button>Get Started</button>
        </div>

        <div className="price-card popular">
          <h3>Pro</h3>
          <p className="price">₹999 / mo</p>
          <p>Best for growing teams</p>
          <button>Book a Demo</button>
        </div>

        <div className="price-card">
          <h3>Enterprise</h3>
          <p className="price">Custom</p>
          <p>For large organizations</p>
          <button>Contact Us</button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
