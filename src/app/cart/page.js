'use client';
import { useDispatch, useSelector } from "react-redux";
import { xoahet } from "../store/cartSlice";
import Link from "next/link";
import Breadcrumb from "../component/Breadcrumb";
import ItemCart from "../component/itemcart";

export default function CartPage() {
  const cart = useSelector((state) => state.gioHang);
  const dispatch = useDispatch();

  const handleCheckout = (e) => {
    e.preventDefault();
    if (cart.sanpham.length === 0) {
      alert("Giỏ hàng đang trống!");
      return;
    }
    alert("Bạn đã thanh toán thành công!");
    dispatch(xoahet());
  };

  return (
    <>
      <Breadcrumb />
      <section className="shoping-cart spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="shoping__cart__table">
                <table>
                  <thead>
                    <tr>
                      <th className="shoping__product">Products</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {cart.sanpham.map((item, index) => (
                      <ItemCart key={index} sanpham={item} />
                    ))}
                    {cart.sanpham.length === 0 && (
                      <tr>
                        <td colSpan="5" className="text-center">Giỏ hàng trống</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div className="shoping__checkout">
                <h5>Cart Total</h5>
                <ul>
                  <li>Subtotal <span>${cart.tongtien}</span></li>
                  <li>Total <span>${cart.tongtien}</span></li>
                </ul>
                <a href="#" className="primary-btn" onClick={handleCheckout}>PROCEED TO CHECKOUT</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}