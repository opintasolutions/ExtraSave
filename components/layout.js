import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import {useState} from 'react';

const Layout = ({children}) => {
  const [query, setQuery] = useState('');
  return (
    <>
      <Head>
        <title>ExtraSave</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <nav>
        <div className="brandname">
          <img
            onClick={() => Router.push('/query', '/')}
            className="logo"
            src="/static/logo.png"
            alt="logo"
          />
          <p>Extra Save</p>
        </div>
        <div className="searchbox">
          <input
            onChange={e => setQuery(e.target.value)}
            onKeyPress={e =>
              e.which === 13 ? Router.push(`/query/${query}`) : null
            }
            value={query}
            placeholder="search ..."
          />
          <button onClick={() => Router.push(`/query/${query}`)}>
            &#x1f50d;
          </button>
        </div>
      </nav>
      <div className="wrapper">{children}</div>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-family: Arial;
        }
        .wrapper {
          margin-top: 150px;
        }
        @media only screen and (min-width: 500px) {
          nav {
            display: flex;
          }
          .wrapper {
            margin-top: 100px;
          }
        }
        nav {
          background: #0a2753;
          align-items: center;
          justify-content: space-between;
          color: white;
          position: fixed;
          top: 0;
          width: 100%;
        }
        .brandname {
          display: flex;
          align-items: center;
          font-size: 24px;
          font-family: Arial;
          font-weight: bold;
          margin: 0;
        }
        .logo {
          width: 76px;
          margin: 0 10px;
          cursor: pointer;
        }
        .searchbox {
          border: 1px solid #ccc;
          display: flex;
          margin: 10px;
          height: 33px;
          border-radius: 2px;
        }
        input {
          width: 100%;
          font-size: 16px;
          border: none;
          padding: 0 10px;
        }
        button {
          background-color: white;
          border: none;
          color: #0a2753;
          font-size: 23px;
        }
      `}</style>
    </>
  );
};

export default Layout;
