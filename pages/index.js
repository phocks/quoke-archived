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
      <div>{props.text}</div>
      <Link href="/quote/[slug]" as={`/quote/${"a-sorrowful-sight-i-saw"}`}>
        <a>Quote!</a>
      </Link>
    </div>
  </Layout>
);

Home.getInitialProps = async ({ req, query }) => {
  const { origin } = absoluteUrl(req);
  const apiOrigin = `${origin}`;

  const res = await fetch(apiOrigin + "/api/test");
  const data = await res.json();

  const randomPos = Math.floor(Math.random() * data.length);
  const text = data[randomPos].text;

  return {
    text: text
  };
};

export default Home;
