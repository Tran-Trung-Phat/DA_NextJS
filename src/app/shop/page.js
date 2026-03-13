'use client';

import Breadcrumb from "../component/Breadcrumb";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { themHoacCapNhat } from "../store/cartSlice";

export default function Shop(){
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [selectedColor, setSelectedColor] = useState('');

  const router = useRouter();
  const dispatch = useDispatch();
  
  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=0")
      .then(res => {
        setProducts(res.data.products);
        setFilteredProducts(res.data.products);
      })
      .catch(err => console.log(err));
  }, []);

  const handleFilter = (e) => {
    e.preventDefault();
    let result = products.filter(p => p.price >= Number(minPrice) && p.price <= Number(maxPrice));

    if (selectedColor) {
      const colorTerm = selectedColor.toLowerCase().replace('s', ''); // Remove plural 's' for better match
      result = result.filter(p => 
        (p.title && p.title.toLowerCase().includes(colorTerm)) ||
        (p.description && p.description.toLowerCase().includes(colorTerm))
      );
    }
    setFilteredProducts(result);
  };


    return(
        <>
        <Breadcrumb/>
        <section className="shop spad">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-3">
        <div className="shop__sidebar">
          <div className="sidebar__categories">
            <div className="section-title">
              <h4>Categories</h4>
            </div>
            <div className="categories__accordion">
              <div className="accordion" id="accordionExample">
                <div className="card">
                  <div className="card-heading active">
                    <a data-toggle="collapse" data-target="#collapseOne">
                      Women
                    </a>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse show"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <ul>
                        <li>
                          <Link href="#">Coats</Link>
                        </li>
                        <li>
                          <Link href="#">Jackets</Link>
                        </li>
                        <li>
                          <Link href="#">Dresses</Link>
                        </li>
                        <li>
                          <Link href="#">Shirts</Link>
                        </li>
                     
                        <li>
                          <Link href="#">Jeans</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-heading">
                    <a data-toggle="collapse" data-target="#collapseTwo">
                      Men
                    </a>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <ul>
                        <li>
                          <a href="#">Coats</a>
                        </li>
                        <li>
                          <a href="#">Jackets</a>
                        </li>
                        <li>
                          <a href="#">Dresses</a>
                        </li>
                        <li>
                          <a href="#">Shirts</a>
                        </li>
                        <li>
                          <a href="#">T-shirts</a>
                        </li>
                        <li>
                          <a href="#">Jeans</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-heading">
                    <a data-toggle="collapse" data-target="#collapseThree">
                      Kids
                    </a>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <ul>
                        <li>
                          <a href="#">Coats</a>
                        </li>
                        <li>
                          <a href="#">Jackets</a>
                        </li>
                        <li>
                          <a href="#">Dresses</a>
                        </li>
                        <li>
                          <a href="#">Shirts</a>
                        </li>
                        <li>
                          <a href="#">T-shirts</a>
                        </li>
                        <li>
                          <a href="#">Jeans</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-heading">
                    <a data-toggle="collapse" data-target="#collapseFour">
                      Accessories
                    </a>
                  </div>
                  <div
                    id="collapseFour"
                    className="collapse"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <ul>
                        <li>
                          <a href="#">Coats</a>
                        </li>
                        <li>
                          <a href="#">Jackets</a>
                        </li>
                        <li>
                          <a href="#">Dresses</a>
                        </li>
                        <li>
                          <a href="#">Shirts</a>
                        </li>
                        <li>
                          <a href="#">T-shirts</a>
                        </li>
                        <li>
                          <a href="#">Jeans</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-heading">
                    <a data-toggle="collapse" data-target="#collapseFive">
                      Cosmetic
                    </a>
                  </div>
                  <div
                    id="collapseFive"
                    className="collapse"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <ul>
                        <li>
                          <a href="#">Coats</a>
                        </li>
                        <li>
                          <a href="#">Jackets</a>
                        </li>
                        <li>
                          <a href="#">Dresses</a>
                        </li>
                        <li>
                          <a href="#">Shirts</a>
                        </li>
                        <li>
                          <a href="#">T-shirts</a>
                        </li>
                        <li>
                          <a href="#">Jeans</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar__filter">
            <div className="section-title">
              <h4>Shop by price</h4>
            </div>
            <div className="filter-range-wrap">
              <div
                className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                data-min={33}
                data-max={99}
              >
                <div
                  className="ui-slider-range ui-corner-all ui-widget-header"
                  style={{ left: "0%", width: "100%" }}
                />
                <span
                  tabIndex={0}
                  className="ui-slider-handle ui-corner-all ui-state-default"
                  style={{ left: "0%" }}
                />
                <span
                  tabIndex={0}
                  className="ui-slider-handle ui-corner-all ui-state-default"
                  style={{ left: "100%" }}
                />
              </div>
              <div className="range-slider">
                <div className="price-input">
                  <p>Price:</p>
                  <input type="number" id="minamount" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
                  <input type="number" id="maxamount" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
                </div>
              </div>
            </div>
            <a href="#" onClick={handleFilter}>Filter</a>
          </div>
          <div className="sidebar__sizes">
            <div className="section-title">
              <h4>Shop by size</h4>
            </div>
            <div className="size__list">
              <label htmlFor="xxs">
                xxs
                <input type="checkbox" id="xxs" />
                <span className="checkmark" />
              </label>
              <label htmlFor="xs">
                xs
                <input type="checkbox" id="xs" />
                <span className="checkmark" />
              </label>
              <label htmlFor="xss">
                xs-s
                <input type="checkbox" id="xss" />
                <span className="checkmark" />
              </label>
              <label htmlFor="s">
                s
                <input type="checkbox" id="s" />
                <span className="checkmark" />
              </label>
              <label htmlFor="m">
                m
                <input type="checkbox" id="m" />
                <span className="checkmark" />
              </label>
              <label htmlFor="ml">
                m-l
                <input type="checkbox" id="ml" />
                <span className="checkmark" />
              </label>
              <label htmlFor="l">
                l
                <input type="checkbox" id="l" />
                <span className="checkmark" />
              </label>
              <label htmlFor="xl">
                xl
                <input type="checkbox" id="xl" />
                <span className="checkmark" />
              </label>
            </div>
          </div>
          <div className="sidebar__color">
            <div className="section-title">
              <h4>Shop by color</h4>
            </div>
            <div className="size__list color__list">
              <label htmlFor="black">
                Blacks
                <input type="checkbox" id="black" checked={selectedColor === 'Blacks'} onChange={() => setSelectedColor(selectedColor === 'Blacks' ? '' : 'Blacks')} />
                <span className="checkmark" />
              </label>
              <label htmlFor="whites">
                Whites
                <input type="checkbox" id="whites" checked={selectedColor === 'Whites'} onChange={() => setSelectedColor(selectedColor === 'Whites' ? '' : 'Whites')} />
                <span className="checkmark" />
              </label>
              <label htmlFor="reds">
                Reds
                <input type="checkbox" id="reds" checked={selectedColor === 'Reds'} onChange={() => setSelectedColor(selectedColor === 'Reds' ? '' : 'Reds')} />
                <span className="checkmark" />
              </label>
              <label htmlFor="greys">
                Greys
                <input type="checkbox" id="greys" checked={selectedColor === 'Greys'} onChange={() => setSelectedColor(selectedColor === 'Greys' ? '' : 'Greys')} />
                <span className="checkmark" />
              </label>
              <label htmlFor="blues">
                Blues
                <input type="checkbox" id="blues" checked={selectedColor === 'Blues'} onChange={() => setSelectedColor(selectedColor === 'Blues' ? '' : 'Blues')} />
                <span className="checkmark" />
              </label>
              <label htmlFor="beige">
                Beige Tones
                <input type="checkbox" id="beige" checked={selectedColor === 'Beige'} onChange={() => setSelectedColor(selectedColor === 'Beige' ? '' : 'Beige')} />
                <span className="checkmark" />
              </label>
              <label htmlFor="greens">
                Greens
                <input type="checkbox" id="greens" checked={selectedColor === 'Greens'} onChange={() => setSelectedColor(selectedColor === 'Greens' ? '' : 'Greens')} />
                <span className="checkmark" />
              </label>
              <label htmlFor="yellows">
                Yellows
                <input type="checkbox" id="yellows" checked={selectedColor === 'Yellows'} onChange={() => setSelectedColor(selectedColor === 'Yellows' ? '' : 'Yellows')} />
                <span className="checkmark" />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-9 col-md-9">
        <div className="row">
          {filteredProducts.map((item) => (
            <div className="col-lg-4 col-md-6" key={item.id}>
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg={item.thumbnail}
                  style={{ backgroundImage: `url("${item.thumbnail}")`, cursor: "pointer" }}
                  onClick={() => router.push(`/spdetails/${item.id}`)}
                >
                  <ul className="product__hover">
                    <li>
                      <a href={item.thumbnail} className="image-popup" onClick={(e) => e.stopPropagation()}>
                        <span className="arrow_expand" />
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => e.stopPropagation()}>
                        <span className="icon_heart_alt" />
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        dispatch(themHoacCapNhat({
                          id: item.id,
                          img: item.thumbnail,
                          ten: item.title,
                          gia: item.price,
                          soluong: 1
                        }));
                        alert('Đã thêm sản phẩm vào giỏ hàng');
                      }}>
                        <span className="icon_bag_alt" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>
                    <Link href={`/spdetails/${item.id}`}>{item.title}</Link>
                  </h6>
                  <div className="rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                  <div className="product__price">$ {item.price}</div>
                </div>
              </div>
            </div>
          ))}
          <div className="col-lg-12 text-center">
            <div className="pagination__option">
              <a href="#">1</a>
              <a href="#">2</a>
              <a href="#">3</a>
              <a href="#">
                <i className="fa fa-angle-right" />
              </a>
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