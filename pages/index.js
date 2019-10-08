import Link from "next/link";
import fetch from "isomorphic-unfetch";
import absoluteUrl from "next-absolute-url";
import nextCookie from "next-cookies";

import authState from "../lib/authState";

// Components
import Layout from "../components/layout";
import Heading from "../components/heading";
import Quotation from "../components/quotation";

const Home = props => {
  const { loggedIn } = props;

  console.log(loggedIn);

  return (
    <Layout>
      <div className="container">
        <Quotation text={props.quote.text} />
        {/* <p>
          <small>
            <Link href={"/"}>
              <a>Another</a>
            </Link>
          </small>
        </p> */}
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
