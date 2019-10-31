import { useState, useEffect } from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import absoluteUrl from "next-absolute-url";
import cookies from "next-cookies";

// import authState from "../lib/authState";

// Components
import Layout from "../components/layout";
import Quotation from "../components/quotation";

const Home = props => {
  const [homeQuote, setHomeQuote] = useState({
    text:
      "Science is not only compatible with spirituality; it is a profound source of spirituality. When we recognize our place in an immensity of light-years and in the passage of ages, when we grasp the intricacy, beauty, and subtlety of life, then that soaring feeling, that sense of elation and humility combined, is surely spiritual. So are our emotions in the presence of great art or music or literature, or acts of exemplary selfless courage such as those of Mohandas Gandhi or Martin Luther King, Jr. The notion that science and spirituality are somehow mutually exclusive does a disservice to both.",
    author: "Carl Sagan",
    source: "The Demon-Haunted World: Science as a Candle in the Dark",
    slug: "science-is-not-only-compatible-with-spirituality"
  });

  useEffect(() => {});

  return (
    <>
      {/* <Layout username={props.username}> */}
      <main className="">
        <section>
          {/* <h1 className="heading">quoke.</h1> */}
          <Quotation
            text={homeQuote && homeQuote.text}
            author={homeQuote && homeQuote.author}
          />
          {/* <Link href={"/quote/[slug]"} as={"/quote/" + props.quote.slug}><a> &gt;</a></Link> */}
        </section>
      </main>
      <style jsx>
        {`
          main {
            display: flex;
            justify-content: left;
          }
          section {
            max-width: 640px;
            flex: 1;
          }
          h1.heading {
            max-width: 720px;
          }
        `}
      </style>
      {/* </Layout> */}
    </>
  );
};

export default Home;
