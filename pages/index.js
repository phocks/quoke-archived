import Link from "next/link";
import fetch from "isomorphic-unfetch";
import absoluteUrl from "next-absolute-url";
import nextCookie from 'next-cookies'

// Components
import Layout from "../components/layout";
import Heading from "../components/heading";

const Home = props => (
  <Layout>
    <div className="container">
      {/* <Heading /> */}
      {/* <div>{props.text}</div> */}
      {/* <h1>
        <Link href="/quote/[slug]" as={`/quote/${"a-sorrowful-sight-i-saw"}`}>
          <a>Q</a>
        </Link>
      </h1> */}

      <blockquote>{props.quote.text}</blockquote>
      <p>Logged in as {props.username}</p>
    </div>
  </Layout>
);

Home.getInitialProps = async (ctx) => {
  const { req, query } = ctx;
  const { origin } = absoluteUrl(req);
  const apiOrigin = `${origin}/api/`;

  const res = await fetch(apiOrigin + "random");
  const randomQuote = await res.json();

  const cookies = parseCookies(ctx)
 

  return {
    quote: randomQuote
  };
};

export default Home;
