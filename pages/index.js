import Link from "next/link";
import fetch from "isomorphic-unfetch";
import absoluteUrl from "next-absolute-url";
import nextCookie from "next-cookies";

import authState from "../lib/authState";

// Components
import Layout from "../components/layout";
import Heading from "../components/heading";

const Home = props => {
  const { loggedIn } = props;

  console.log(loggedIn);

  return (
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
      </div>
    </Layout>
  );
};

Home.getInitialProps = async ctx => {
  const { req, query } = ctx;
  const { origin } = absoluteUrl(req);
  const apiOrigin = `${origin}/api/`;

  const res = await fetch(apiOrigin + "random");
  const randomQuote = await res.json();

  const { token } = nextCookie(ctx);
  const auth = authState(token);

  return {
    loggedIn: auth.loggedIn,
    quote: randomQuote
  };
};

export default Home;
