import Link from "next/link";

export default function ItemSP({ p }) {
  console.log('ItemSP received product:', p);
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mix women">
      <div className="product__item">

        <div
          className="product__item__pic"
          style={{
            backgroundImage: `url(${p.images?.[0]})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="label new">New</div>

          <ul className="product__hover">
            <li>
              <Link href={p.images?.[0] || '#'}>
                <span className="arrow_expand" />
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="icon_heart_alt" />
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="icon_bag_alt" />
              </Link>
            </li>
          </ul>
        </div>

        <div className="product__item__text">
          <h6>
            <Link href={`/spdetails/${p.id}`}>
              {p.title}
            </Link>
          </h6>
          <div className="product__price">${p.price}</div>
        </div>

      </div>
    </div>
  );
}
