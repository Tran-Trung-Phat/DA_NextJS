import Link from "next/link";

export default function Bot(){
    return(
        <>
        <footer className="footer">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-md-6 col-sm-7">
        <div className="footer__about">
          <div className="footer__logo">
            <Link href="/">
              <img src="/img/logo.png" alt="Logo" />
            </Link>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt cilisis.
          </p>
          <div className="footer__payment">
            <Link href="#">
              <img src="/img/payment/payment-1.png" alt="Payment" />
            </Link>
            <Link href="#">
              <img src="/img/payment/payment-2.png" alt="Payment" />
            </Link>
            <Link href="#">
              <img src="/img/payment/payment-3.png" alt="Payment" />
            </Link>
            <Link href="#">
              <img src="/img/payment/payment-4.png" alt="Payment" />
            </Link>
            <Link href="#">
              <img src="/img/payment/payment-5.png" alt="Payment" />
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-3 col-sm-5">
        <div className="footer__widget">
          <h6>Quick links</h6>
          <ul>
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Blogs</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
            <li>
              <Link href="#">FAQ</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-2 col-md-3 col-sm-4">
        <div className="footer__widget">
          <h6>Account</h6>
          <ul>
            <li>
              <Link href="#">My Account</Link>
            </li>
            <li>
              <Link href="#">Orders Tracking</Link>
            </li>
            <li>
              <Link href="#">Checkout</Link>
            </li>
            <li>
              <Link href="#">Wishlist</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-4 col-md-8 col-sm-8">
        <div className="footer__newslatter">
          <h6>NEWSLETTER</h6>
          <form action="#">
            <input type="text" placeholder="Email" />
            <button type="submit" className="site-btn">
              Subscribe
            </button>
          </form>
          <div className="footer__social">
            <Link href="#">
              <i className="fa fa-facebook" />
            </Link>
            <Link href="#">
              <i className="fa fa-twitter" />
            </Link>
            <Link href="#">
              <i className="fa fa-youtube-play" />
            </Link>
            <Link href="#">
              <i className="fa fa-instagram" />
            </Link>
            <Link href="#">
              <i className="fa fa-pinterest" />
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
        <div className="footer__copyright__text">
          <p>
            Copyright © 2026 All rights reserved | This template is made with{" "}
            <i className="fa fa-heart" aria-hidden="true" /> by{" "}
            <Link href="https://colorlib.com" target="_blank">
              Colorlib
            </Link>
          </p>
        </div>
        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
      </div>
    </div>
  </div>
</footer>

<div className="search-model">
  <div className="h-100 d-flex align-items-center justify-content-center">
    <div className="search-close-switch">+</div>
    <form className="search-model-form">
      <input type="text" id="search-input" placeholder="Search here....." />
    </form>
  </div>
</div>


        
        </>
    );
}