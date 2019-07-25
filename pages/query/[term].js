import Layout from '../../components/layout.js';
import fetch from 'isomorphic-fetch';
import {useState} from 'react';
import Router from 'next/router';

const ResultPage = ({data}) => {
  const [query, setQuery] = useState('');

  return (
    <Layout>
      <div className="titlebar">
        <h2>Best Selling</h2>
        <div>
          <input
            onChange={e => setQuery(e.target.value)}
            onKeyPress={e =>
              e.which === 13 ? Router.push(`/query/${query}`) : null
            }
            value={query}
            placeholder="search"
          />
          <button onClick={() => Router.push(`/query/${query}`)}>
            &#x1f50d;
          </button>
        </div>
      </div>
      <ul className="productlist">
        {data.products.map(p => (
          <li key={p.productBaseInfoV1.id}>
            <div className="image">
              <img
                src={p.productBaseInfoV1.imageUrls['200x200']}
                alt={p.productBaseInfoV1.title}
              />
            </div>
            <div className="productDesc">
              <span>{p.productBaseInfoV1.title}</span>
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
            </div>
          </li>
        ))}
      </ul>
      <style jsx>{`
        @media only screen and (min-width: 500px) {
          .productlist {
            display: grid;
            grid-template-columns: auto auto auto;
            justify-content: space-evenly;
            padding: 20px;
          }
          .productlist li {
            margin: 30px 0;
          }
        }
        .productlist {
          padding: 0;
        }
        .productlist li {
          width: 300px;
          padding: 10px;
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          flex-direction: column;
          border: 1px solid #ddd;
          border-radius: 3px;
          margin: 10px auto;
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
          font-size: 18px;
          letter-spacing: 1.1px;
        }
        .titlebar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 15px;
          border-bottom: 1px solid black;
          letter-spacing: 1.1px;
        }
        .titlebar > div {
          border: 1px solid #ccc;
          display: flex;
          margin: 10px;
          height: 33px;
          border-radius: 2px;
        }
        .titlebar input {
          width: 130px;
          font-size: 16px;
          border: none;
          padding: 0 10px;
        }
        .titlebar button {
          background-color: white;
          border: none;
          color: #0a2753;
          font-size: 23px;
        }
      `}</style>
    </Layout>
  );
};

ResultPage.getInitialProps = async function(context) {
  const {term} = context.query;
  const res = await fetch(
    `https://affiliate-api.flipkart.net/affiliate/1.0/search.json?query=${term}&resultCount=9`,
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

export default ResultPage;
