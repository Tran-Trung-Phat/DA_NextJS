'use client';

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductDetailsPage() {
  const params = useParams();
  const productId = params?.id;
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (productId) {
      console.log('Fetching product ID:', productId);
      axios
        .get(`https://dummyjson.com/products/${productId}`)
        .then((res) => {
          console.log('Product fetched:', res.data);
          setProduct(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error('Error fetching product:', err);
          setIsLoading(false);
        });
    }
  }, [productId]);

  if (isLoading) {
    return <div style={{ textAlign: 'center', padding: '100px' }}>Loading...</div>;
  }

  if (!product) {
    return <div style={{ textAlign: 'center', padding: '100px' }}>Product not found</div>;
  }

  return (
    <section className="product-details spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="product__details__pic">
              <div
                className="product__details__pic__left product__thumb nice-scroll"
                tabIndex={1}
                style={{ overflowY: "hidden", outline: "none" }}
              >
                {product.images?.map((img, i) => (
                  <a key={i} className={`pt ${i === 0 ? 'active' : ''}`} href={`#product-${i + 1}`}>
                    <img src={img} alt={product.title} />
                  </a>
                ))}
              </div>
              <div className="product__details__slider__content">
                <div className="product__details__pic__slider owl-carousel owl-loaded">
                  <div className="owl-stage-outer">
                    <div
                      className="owl-stage"
                      style={{
                        transform: "translate3d(0px, 0px, 0px)",
                        transition: "all 0.5s ease",
                        width: `${(product.images?.slice(0, 4)?.length || 0) * 518.2}px`,
                      }}
                    >
                      {product.images?.slice(0, 4).map((img, i) => (
                        <div key={i} className={`owl-item ${i === 0 ? "active" : ""}`} style={{ width: "518.2px" }}>
                          <img
                            data-hash={`product-${i + 1}`}
                            className="product__big__img"
                            src={img}
                            alt={product.title}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="owl-nav">
                    <button type="button" role="presentation" className="owl-prev disabled">
                      <i className="arrow_carrot-left" />
                    </button>
                    <button type="button" role="presentation" className="owl-next">
                      <i className="arrow_carrot-right" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="product__details__text">
              <h3>
                {product.title}
                <span>Brand: {product.brand || 'Coming Soon'}</span>
              </h3>
              <div className="rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <span>( {Math.round(product.rating || 0)} Stars )</span>
              </div>
              <div className="product__details__price">${product.price}</div>
              <p>{product.description}</p>
              
              <div className="product__details__button">
                <div className="quantity">
                  <span>Quantity:</span>
                  <div className="pro-qty">
                    <span className="dec qtybtn">-</span>
                    <input type="text" defaultValue={1} />
                    <span className="inc qtybtn">+</span>
                  </div>
                </div>
                <a href="#" className="cart-btn">
                  <span className="icon_bag_alt" /> Add to cart
                </a>
                <ul>
                  <li>
                    <a href="#">
                      <span className="icon_heart_alt" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon_adjust-horiz" />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="product__details__widget">
                <ul>
                  <li>
                    <span>Availability:</span>
                    <div className="stock__checkbox">
                      <label htmlFor="stockin">
                        In Stock
                        <input type="checkbox" id="stockin" />
                        <span className="checkmark" />
                      </label>
                    </div>
                  </li>
                  <li>
                    <span>SKU:</span>
                    <p>{product.sku || 'N/A'}</p>
                  </li>
                  <li>
                    <span>Category:</span>
                    <p>{product.category || 'N/A'}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
