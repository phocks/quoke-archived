import { useEffect } from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import absoluteUrl from "next-absolute-url";
import cookies from 'next-cookies'

import authState from "../lib/authState";

// Components
import Layout from "../components/layout";
import Heading from "../components/heading";
import Quotation from "../components/quotation";

const Home = props => {
  const { loggedIn } = props;

  useEffect(() => {
    console.log("Logged in state: " + loggedIn);
    console.log(props.quote);
  });

  return (
    <Layout>
      <div className="container">
        <Link href={"/"}>
          <a>
            <h3></h3>
          </a>
        </Link>
        <Quotation text={props.quote.text} author={props.quote.author} />
        {/* <Link href={"/quote/[slug]"} as={"/quote/" + props.quote.slug}><a> &gt;</a></Link> */}
      </div>

      <style jsx>
        {`
          h3 {
            margin-left: 18px;
            background: white;
            height: 5px;
            width: 38px;
          }

          a {
            color: white;
          }
        `}
      </style>
    </Layout>
  );
};

Home.getInitialProps = async ctx => {
  const { req, query } = ctx;
  const { origin } = absoluteUrl(req);

  const apiOrigin = `${origin}/api/`;

  const res = await fetch(apiOrigin + "random");
  const randomQuote = await res.json();

  const { token } = cookies(ctx);
  const auth = authState(token);

  console.log(auth)

  return {
    loggedIn: auth.loggedIn,
    quote: randomQuote
  };
};

export default Home;
