import Link from "next/link";
import fetch from "isomorphic-unfetch";
import absoluteUrl from "next-absolute-url";

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
      <Link href="/register"><a>Register</a></Link>
      <blockquote>{props.quote.text}</blockquote>
    </div>
  </Layout>
);

Home.getInitialProps = async ({ req, query }) => {
  const { origin } = absoluteUrl(req);
  const apiOrigin = `${origin}`;

  const res = await fetch(apiOrigin + "/api/random");
  const data = await res.json();

  return {
    quote: data
  };
};

export default Home;
