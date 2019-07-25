import Head from 'next/head';
import Link from 'next/link';

const Layout = ({children}) => (
  <>
    <Head>
      <title>ExtraSave</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <nav>
      <div>
        <Link href="/">
          <img className="logo" src="/static/logo.png" alt="logo" />
        </Link>
        <p>Extra Save</p>
      </div>
    </nav>
    {children}
    <style jsx global>{`
      body {
        margin: 0;
        padding: 0;
        font-family: Helvetica;
      }
      nav {
        background: #0A2753;
        display: flex;
        color: white;
      }
      nav > div {
        display: flex;
        align-items: center;
        font-size: 24px;
        font-family: Arial;
        font-style: bold;
        margin: 0;
      }
      .logo {
        width: 76px;
        margin: 0 10px;
      }
    `}</style>
  </>
);

export default Layout;
