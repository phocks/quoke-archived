import { useEffect } from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import absoluteUrl from "next-absolute-url";
import cookies from "next-cookies";

// import authState from "../lib/authState";

// Components
import Layout from "../components/layout";
import Quotation from "../components/quotation";

const Home = props => {
  const { loggedIn } = props;

  useEffect(() => {
    // console.log("Logged in state: " + loggedIn);
    // console.log(props.quote);
  });

  return (
    <>
      {/* <Layout username={props.username}> */}
      <main className="mid">
        <h1 className="heading">quoke.</h1>
        {/* <Quotation text={props.quote.text} author={props.quote.author} /> */}
        {/* <Link href={"/quote/[slug]"} as={"/quote/" + props.quote.slug}><a> &gt;</a></Link> */}
      </main>
      <style jsx>
        {`
          h1.heading {
            /* font-family: "Press Start 2P", cursive; */
            /* font-size: 48px; */
            max-width: 720px;
          }
        `}
      </style>
      {/* </Layout> */}
    </>
  );
};

export default Home;
