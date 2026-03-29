import Link from "next/link";
import { categories } from "../data";
import { useSelector } from "react-redux";
export default function Top(){
  const {sosp} = useSelector(state => state.gioHang)
  const info = useSelector(state => state.auth);
    return(
        <>
        
  {/* Page Preloder */}
  
  {/* Offcanvas Menu Begin */}
  <div className="offcanvas-menu-overlay" />
  <div className="offcanvas-menu-wrapper">
    <div className="offcanvas__close">+</div>
    <ul className="offcanvas__widget">
      <li>
        <span className="icon_search search-switch" />
      </li>
      <li>
        <Link href="#">
          <span className="icon_heart_alt" />
            <div className="tip">2</div>
        </Link>
      </li>
      <li>
        <Link href="#">
          <span className="icon_bag_alt" />
          <div className="tip">2</div>
        </Link>
      </li>
    </ul>
    <div className="offcanvas__logo">
      <Link href="./index.html">
        <img src="img/logo.png" alt="" />
      </Link>
    </div>
    <div id="mobile-menu-wrap" />
    <div className="offcanvas__auth">
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
    </div>
  </div>
  {/* Offcanvas Menu End */}
  {/* Header Section Begin */}
  <header className="header">
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-3 col-lg-2">
          <div className="header__logo">
            <Link href="./index.html">
              <img src="img/logo.png" alt="" />
            </Link>
          </div>
        </div>
        <div className="col-xl-6 col-lg-7">
          <nav className="header__menu">
            <ul>
              <li className="active">
                <Link href="/">Home</Link>
              </li>

              {categories.map((v,i)=>(i>1 && i<4)?  <li key={i} ><a href={v.slug}>{v.name}</a></li>:null)}
               <li >
                  <a href="/contact">Contact</a>
                  
                </li>

                <li >
                  <a href="/shop">Shop</a>
                  
                </li>


                <li >
                  
                  <Link href="/spdetails/1">Product Details</Link>
                  
                </li>


            </ul>
          </nav>
        </div>
        <div className="col-lg-3">
          <div className="header__right">
            <div className="header__right__auth">
              <Link href={info.id == 0 ? "/login" : "#"} >{info.id == 0 ? "/Login" : `Hi: ${info.firstName}`}</Link>
              <Link href="/register">Register</Link>
            </div>
            <ul className="header__right__widget">
              <li>
                <span className="icon_search search-switch" />
              </li>
              <li>
                <Link href="#">
                  <span className="icon_heart_alt" />
                  <div className="tip">2</div>
                </Link>
              </li>
              <li>
                <Link href="/cart">
                  <span className="icon_bag_alt" />
                  <div className="tip">{sosp}</div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="canvas__open">
        <i className="fa fa-bars" />
      </div>
    </div>
  </header>
  {/* Header Section End */}


        </>
    )
}