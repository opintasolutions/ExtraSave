import fetch from 'isomorphic-fetch';
import Router from 'next/router';
import Layout from '../components/layout.js';
import ProductCard from '../components/productCard.js';

const IndexPage = ({data}) => {
  return (
    <Layout>
      <ul className="productlist">
        {data.products.map(p => (
          <ProductCard p={p} />
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
        }
        .productlist {
          padding: 0;
        }
      `}</style>
    </Layout>
  );
};

IndexPage.getInitialProps = async function() {
  const res = await fetch(
    'https://affiliate-api.flipkart.net/affiliate/1.0/search.json?query=best&resultCount=9',
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

export default IndexPage;
