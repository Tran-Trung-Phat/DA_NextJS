'use client';

import { themHoacCapNhat } from "@/app/store/cartSlice";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";


export default function DetailsPage() {

  const [sl,setSL] =useState(1);
  const [color, setColor] = useState('Red');
  const [size, setSize] = useState('XS');
  const dispatch = useDispatch();
  const TSPGH = (e) => {
    e.preventDefault();
    const product = data.product;
    dispatch(themHoacCapNhat({
      id: data.product.id,
      img: data.product.images && data.product.images.length > 0 ? data.product.images[0] : '',
      ten: data.product.title,
      gia: data.product.price,
      soluong: sl,
      mau: color,
      size: size,
    }))
    alert('Đã thêm sản phẩm vào giỏ hàng')
  }

  const params = useParams();
  // Kiểm tra nếu details là số thì lấy, ngược lại mặc định là 1
  const details = (params?.details && !isNaN(Number(params.details))) ? params.details : 1;
  
  const [data, setData] = useState({ product: {}, isLoading: true });

  useEffect(() => {
    if (details) {
      console.log('Fetching product with ID:', details);
      const url = `https://dummyjson.com/products/${details}`;
      console.log('URL:', url);
      
      axios.get(url)
        .then(KQ => {
          console.log('Product data:', KQ.data);
          setData({ product: KQ.data, isLoading: false });
        })
        .catch(e => {
          console.error('Error fetching product:', e);
          setData({ product: {}, isLoading: false });
        });
    }
  }, [details])

  if (data.isLoading) {
    return <div style={{ textAlign: 'center', padding: '50px' }}>Loading...</div>
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

                {data.product.images?.map((v, i) =>
                  <a key={i} className={`pt ${i === 0 ? 'active' : ''}`} href={`#product-${i + 1}`}>
                    <img src={v} alt="" />
                  </a>
                )}

              </div>
              <div className="product__details__slider__content">
                <div className="product__details__pic__slider owl-carousel owl-loaded">
                  <div className="owl-stage-outer">
                    <div
                      className="owl-stage"
                      style={{
                        transform: "translate3d(0px, 0px, 0px)",
                        transition: "all 0.5s ease",
                        width: `${(data.product.images?.slice(0, 4)?.length || 0) * 518.2}px`
                      }}
                    >
                      {data.product.images?.slice(0, 4).map((v, i) => (
                        <div
                          key={i}
                          className={`owl-item ${i === 0 ? "active" : ""}`}
                          style={{ width: "518.2px" }}
                        >
                          <img
                            data-hash={`product-${i + 1}`}
                            className="product__big__img"
                            src={v}
                            alt={data.product.title}
                          />
                        </div>
                      ))}
                    </div>

                  </div>
                  <div className="owl-nav">
                    <button
                      type="button"
                      role="presentation"
                      className="owl-prev disabled"
                    >
                      <i className="arrow_carrot-left" />
                    </button>
                    <button type="button" role="presentation" className="owl-next">
                      <i className="arrow_carrot-right" />
                    </button>
                  </div>
                  <div className="owl-dots disabled" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="product__details__text">
              <h3>
                {data.product.title}
                <span>Brand: {data.product.brand || 'Brand'}</span>
              </h3>
              <div className="rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <span>( {data.product.rating || 0} reviews )</span>
              </div>
              <div className="product__details__price">
                ${data.product.price}
              </div>
              <p>
                {data.product.description}
              </p>
              <div className="product__details__button">
                <div className="quantity">
                  <span>Quantity:</span>
                  <div className="pro-qty">
                    <span onClick={() => {if(sl >1) setSL(sl -1)}} className="dec qtybtn">-</span>
                    <input type="text" value={sl} onChange={(e) => setSL(parseInt(e.target.value) || 1)}/>
                    <span onClick={() => setSL(sl +1)} className="inc qtybtn">+</span>
                  </div>
                </div>
                <a onClick={TSPGH} href="#" className="cart-btn">
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
                    <span>Available color:</span>
                    <div className="color__checkbox">
                      <label htmlFor="red">
                        <input
                          type="radio"
                          name="color__radio"
                          id="red"
                          checked={color === 'Red'}
                          onChange={() => setColor('Red')}
                        />
                        <span className="checkmark" />
                      </label>
                      <label htmlFor="black">
                        <input type="radio" name="color__radio" id="black" 
                          checked={color === 'Black'}
                          onChange={() => setColor('Black')}
                        />
                        <span className="checkmark black-bg" />
                      </label>
                      <label htmlFor="grey">
                        <input type="radio" name="color__radio" id="grey" 
                          checked={color === 'Grey'}
                          onChange={() => setColor('Grey')}
                        />
                        <span className="checkmark grey-bg" />
                      </label>
                    </div>
                  </li>
                  <li>
                    <span>Available size:</span>
                    <div className="size__btn">
                      <label htmlFor="xs-btn" className={size === 'XS' ? "active" : ""}>
                        <input type="radio" id="xs-btn" 
                          checked={size === 'XS'}
                          onChange={() => setSize('XS')}
                        />
                        xs
                      </label>
                      <label htmlFor="s-btn" className={size === 'S' ? "active" : ""}>
                        <input type="radio" id="s-btn" 
                          checked={size === 'S'}
                          onChange={() => setSize('S')}
                        />s
                      </label>
                      <label htmlFor="m-btn" className={size === 'M' ? "active" : ""}>
                        <input type="radio" id="m-btn" 
                          checked={size === 'M'}
                          onChange={() => setSize('M')}
                        />m
                      </label>
                      <label htmlFor="l-btn" className={size === 'L' ? "active" : ""}>
                        <input type="radio" id="l-btn" 
                          checked={size === 'L'}
                          onChange={() => setSize('L')}
                        />l
                      </label>
                    </div>
                  </li>
                  <li>
                    <span>Promotions:</span>
                    <p>Free shipping</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
