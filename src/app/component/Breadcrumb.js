'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname(); // ví dụ: "/", "/shop", "/contact"

  // tách path thành mảng
  const segments = pathname.split("/").filter(Boolean);

  // map tên hiển thị
  const nameMap = {
    shop: "Shop",
    contact: "Contact",
    products: "Products",
    spdetails: "Product Details",
  };

  return (
    <div className="breadcrumb-option">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb__links">
              <Link href="/">
                <i className="fa fa-home" /> Home
              </Link>

              {segments.map((seg, index) => {
                const href = "/" + segments.slice(0, index + 1).join("/");
                const name = nameMap[seg] || seg;

                return (
                  <span key={index}> {name}</span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
