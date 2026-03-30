'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';
import Breadcrumb from './Breadcrumb';

export default function ProductDetailsPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            axios.get(`https://dummyjson.com/products/${id}`)
                .then(res => {
                    setProduct(res.data);
                    setLoading(false);
                })
                .catch(err => {
                    console.error(err);
                    setLoading(false);
                });
        }
    }, [id]);

    if (loading) return <div className="container spad" style={{ textAlign: 'center' }}>Loading...</div>;
    if (!product) return <div className="container spad" style={{ textAlign: 'center' }}>Product not found</div>;

    return (
        <>
            <Breadcrumb />
            <section className="product-details spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="product__details__pic">
                                <div className="product__details__pic__left product__thumb nice-scroll">
                                    {product.images?.map((img, index) => (
                                        <a className={`pt ${index === 0 ? 'active' : ''}`} href="#product-1" key={index}>
                                            <img src={img} alt={product.title} />
                                        </a>
                                    ))}
                                </div>
                                <div className="product__details__slider__content">
                                    <div className="product__details__pic__slider owl-carousel">
                                        <img data-hash="product-1" className="product__big__img" src={product.thumbnail} alt={product.title} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="product__details__text">
                                <h3>{product.title} <span>Brand: {product.brand}</span></h3>
                                <div className="rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <span>( {product.reviews?.length || 0} reviews )</span>
                                </div>
                                <div className="product__details__price">
                                    $ {product.price}
                                </div>
                                <p>{product.description}</p>
                                <div className="product__details__button">
                                    <div className="quantity">
                                        <span>Quantity:</span>
                                        <div className="pro-qty">
                                            <input type="text" defaultValue={1} />
                                        </div>
                                    </div>
                                    <a href="#" className="cart-btn"><span className="icon_bag_alt" /> Add to cart</a>
                                    <ul>
                                        <li><a href="#"><span className="icon_heart_alt" /></a></li>
                                        <li><a href="#"><span className="icon_adjust-horiz" /></a></li>
                                    </ul>
                                </div>
                                <div className="product__details__widget">
                                    <ul>
                                        <li>
                                            <span>Availability:</span>
                                            <div className="stock__checkbox">
                                                <label htmlFor="stockin">
                                                    {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                                                    <input type="checkbox" id="stockin" checked={product.stock > 0} readOnly />
                                                    <span className="checkmark" />
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
                        <div className="col-lg-12">
                            <div className="product__details__tab">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">Description</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab">Specification</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab">Reviews ( {product.reviews?.length || 0} )</a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                        <h6>Description</h6>
                                        <p>{product.description}</p>
                                    </div>
                                    <div className="tab-pane" id="tabs-2" role="tabpanel">
                                        <h6>Specification</h6>
                                        <p>Brand: {product.brand}</p>
                                        <p>Category: {product.category}</p>
                                        <p>Weight: {product.weight} kg</p>
                                        <p>Dimensions: {product.dimensions?.width} x {product.dimensions?.height} x {product.dimensions?.depth} cm</p>
                                    </div>
                                    <div className="tab-pane" id="tabs-3" role="tabpanel">
                                        <h6>Reviews</h6>
                                        {product.reviews?.map((review, idx) => (
                                            <div key={idx} className="mb-3">
                                                <p className="mb-1"><strong>{review.reviewerName}</strong> - <span className="text-muted">{new Date(review.date).toLocaleDateString()}</span></p>
                                                <div className="rating mb-1">
                                                    {[...Array(5)].map((_, i) => (
                                                        <i key={i} className={`fa fa-star ${i < review.rating ? '' : 'text-muted'}`} style={{color: i < review.rating ? '#e3c01c' : '#ccc'}} />
                                                    ))}
                                                </div>
                                                <p>{review.comment}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}