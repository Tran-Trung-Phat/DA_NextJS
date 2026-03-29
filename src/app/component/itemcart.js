'use client'
import { themHoacCapNhat, xoasanpham } from "@/app/store/cartSlice";
import { useDispatch } from "react-redux";
export default function ItemCart({ sanpham }) {
  const dispatch = useDispatch();
  const tangGiamSoluong = (e,sl) =>{
    e.preventDefault();
    dispatch(themHoacCapNhat({
          id:  sanpham.id,
          img: sanpham.img,
          ten: sanpham.ten,
          gia: sanpham.gia,
          mau: sanpham.mau,
          size: sanpham.size,
          soluong: sl,
        }))
  }

  const xoaSanPham = (e) =>{
     e.preventDefault();
     dispatch(xoasanpham({ id: sanpham.id, mau: sanpham.mau, size: sanpham.size }));
  }
  return(
    <>
     <tr>
                <td className="shoping__cart__item">
                  <img src={sanpham.img} alt={sanpham.ten} style={{width: '250px'}} />
                  <h5 style={{ fontSize: '24px', fontWeight: 'bold' }}>
                    {sanpham.ten}
                    {sanpham.mau && sanpham.size && (
                      <>
                        <br /> <small style={{ fontSize: '18px' }}>({sanpham.mau}, {sanpham.size})</small>
                      </>
                    )}
                  </h5>
                </td>
                <td className="shoping__cart__price" style={{ fontSize: '20px' }}>${sanpham.gia}</td>
                <td className="shoping__cart__quantity">
                  <div className="quantity">
                    <div className="pro-qty">
                    <span onClick={(e) => {
                      if (sanpham.soluong > 1) tangGiamSoluong(e, sanpham.soluong - 1);
                      else xoaSanPham(e);
                      }} className="dec qtybtn">-</span>
                      <input type="text" value={sanpham.soluong} readOnly />
                    <span onClick={(e) =>tangGiamSoluong(e, sanpham.soluong + 1)} className="inc qtybtn">+</span>
                    </div>
                  </div>
                </td>
                <td className="shoping__cart__total" style={{ fontSize: '20px' }}>${(sanpham.soluong * sanpham.gia)}</td>
                <td className="shoping__cart__item__close">
                  <span onClick={xoaSanPham} className="icon_close" />
                </td>
              </tr>
    </>
  )
}