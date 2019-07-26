import Layout from '../../components/layout.js';
import fetch from 'isomorphic-fetch';
import Router from 'next/router';

const ProductPage = ({data}) => {
  data ? console.log(data) : null;
  return (
    <Layout>
      <div className="container">
        <div className="productHighlight">
          <img
            src={data.productBaseInfoV1.imageUrls['400x400']}
            alt={data.productBaseInfoV1.title}
          />
        </div>
        <div className="productAbout">
          <span className="breadcrumb">
            {data.productBaseInfoV1.categoryPath}
          </span>
          <p style={{fontSize: '23px', margin: '0'}}>
            {data.productBaseInfoV1.title}
          </p>
          <p>
            <b>
              <span style={{fontSize: '28px', margin: '0'}}>
                &#8377; {data.productBaseInfoV1.flipkartSpecialPrice.amount}
              </span>
            </b>
            &nbsp;&nbsp;
            <span
              style={{
                textDecoration: 'line-through',
                color: '#888',
                fontSize: '15px',
              }}>
              &#8377; {data.productBaseInfoV1.maximumRetailPrice.amount}
            </span>
            &nbsp;&nbsp;
            <span style={{color: 'forestgreen'}}>
              {data.productBaseInfoV1.discountPercentage}% off
            </span>
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <ul>
              {data.productBaseInfoV1.offers.map(offer => (
                <li key={offer.length + offer.slice(0, 2)}>{offer}</li>
              ))}
            </ul>
            <a target="_blank" href={data.productBaseInfoV1.productUrl}>
              <button
                style={{
                  padding: '9px 11px',
                  backgroundColor: '#F60057',
                  color: 'white',
                  fontSize: '17px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}>
                BUY
              </button>
            </a>
          </div>
          <p style={{padding: '10px'}}>
            {data.productBaseInfoV1.productDescription.length > 3 ? (
              data.productBaseInfoV1.productDescription
            ) : (
              <hr />
            )}
          </p>
          <div>
            {data.categorySpecificInfoV1.keySpecs.length ? (
              <b>Key Features:</b>
            ) : null}
            <ul>
              {data.categorySpecificInfoV1.keySpecs.map(spec => (
                <li key={spec.length + spec.slice(0, 2)}>{spec}</li>
              ))}
            </ul>
          </div>
          <div>
            {data.categorySpecificInfoV1.specificationList.length ? (
              <h2>Specifications</h2>
            ) : null}
            <hr />
            {data.categorySpecificInfoV1.specificationList.map(spec => (
              <div key={spec.key}>
                <h3>{spec.key}</h3>
                {spec.values.map(deepSpec => (
                  <p className="deep-spec-wrap" key={deepSpec.key}>
                    <span className="deep-spec-key">{deepSpec.key}</span>
                    <span className="deep-spec-val">{deepSpec.value}</span>
                  </p>
                ))}
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @media only screen and (min-width: 500px) {
          .container {
            display: flex;
            align-items: flex-start;
            justify-content: space-around;
          }
          .productHighlight {
            position: sticky;
            top: 120px;
            left: 0;
          }
        }
        .container {
          margin: 15px;
          padding: 10px;
          line-height: 1.5;
        }
        .productHighlight {
          padding: 20px 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .productAbout {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          max-width: 700px;
          padding: 15px;
          margin: 20px 0;
        }
        .breadcrumb {
          font-size: 13px;
          color: #777;
          letter-spacing: 1.6px;
        }
        ul {
          padding: 0 40px;
          max-width: 400px;
        }
        li {
          padding: 0 3px;
          word-spacing: 2px;
        }
        .deep-spec-wrap {
          display: flex;
          justify-content: flex-start;
        }
        .deep-spec-wrap span {
          width: 100%;
          text-align: left;
          margin: 0;
          line-height: 1.3;
          padding: 5px 10px;
        }
        .deep-spec-key {
          color: #666;
          max-width: 200px;
        }
        .deep-spec-val {
          max-width: 400px;
        }
      `}</style>
    </Layout>
  );
};

ProductPage.getInitialProps = async function(context) {
  const {id} = context.query;
  const res = await fetch(
    `https://affiliate-api.flipkart.net/affiliate/1.0/product.json?id=${id}`,
    {
      method: 'GET',
      headers: {
        'Fk-Affiliate-Id': 'mrrajnish',
        'Fk-Affiliate-Token': '68233d4f014d45d889cd0c3d382221b2',
      },
    },
  );
  const data = await res.json();
  return {data};
};

export default ProductPage;
