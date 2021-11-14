import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>The Vilas</h2>
            <p>Find Best Vilas In Your Area! </p>
          </div>
          <div className="col-md-6 ">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of whats new and exciting from us.</p>
              <div className="d-flex w-100 gap-2">
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <p>Copyright 2021 All Right Reserved!</p>
      </div>
    </footer>
  );
};

export default Footer;
