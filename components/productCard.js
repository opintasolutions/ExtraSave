import Router from 'next/router';

const ProductCard = ({p}) => (
  <>
    <li
      key={p.productBaseInfoV1.productId}
      onClick={() => Router.push(`/product/${p.productBaseInfoV1.productId}`)}
      title={p.productBaseInfoV1.title}>
      <div className="image">
        <img
          src={p.productBaseInfoV1.imageUrls['200x200']}
          alt={p.productBaseInfoV1.title}
        />
      </div>
      <div className="productDesc">
        <span style={{color: '#777', fontWeight: 'bold'}}>
          {p.productBaseInfoV1.productBrand}
        </span>
        <br />
        <span>{p.productBaseInfoV1.title.slice(0, 22)}...</span>
        <br />
        <br />
        <span>
          <b>&#8377; {p.productBaseInfoV1.flipkartSpecialPrice.amount}</b>
        </span>
        &nbsp;&nbsp;
        <span
          style={{
            textDecoration: 'line-through',
            color: '#888',
            fontSize: '15px',
          }}>
          &#8377; {p.productBaseInfoV1.maximumRetailPrice.amount}
        </span>
        &nbsp;&nbsp;
        <span>{p.productBaseInfoV1.discountPercentage}% off</span>
      </div>
    </li>
    <style jsx>{`
      @media only screen and (min-width: 500px) {
        li {
          margin: 30px 0;
        }
      }
      li {
        width: 300px;
        padding: 10px;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;
        border-radius: 3px;
        margin: 10px auto;
        cursor: pointer;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
      }
      li:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
          0 10px 10px rgba(0, 0, 0, 0.22);
      }
      .image {
        width: 200px;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .productDesc {
        text-align: left;
        padding: 20px;
        font-family: Arial;
        font-size: 16px;
        line-height: 1.2;
      }
    `}</style>
  </>
);

export default ProductCard;
