import Link from "next/link";
import fetch from "isomorphic-unfetch";
import absoluteUrl from "next-absolute-url";
import nextCookie from "next-cookies";
import jwt from "jsonwebtoken";

// Components
import Layout from "../components/layout";
import Heading from "../components/heading";

const authState = token => {
  if (!token) return { loggedIn: false };
  try {
    var decoded = jwt.verify(token, process.env.jwtSecret);
    return { loggedIn: true, payload: decoded };
  } catch (err) {
    return { loggedIn: false, error: err };
  }
};

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
      <p>Logged in: {props.loggedIn.toString()}</p>
      <p>{props.username}</p>
    </div>
  </Layout>
);

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
    username: auth.payload.username,
    quote: randomQuote
  };
};

export default Home;
