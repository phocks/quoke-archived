import { useState, useEffect } from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import absoluteUrl from "next-absolute-url";
import cookies from "next-cookies";
import axios from "axios";

// import authState from "../lib/authState";

// Components
import Layout from "../components/layout";
import Quotation from "../components/quotation";

const Home = props => {
  const [homeQuotes, setHomeQuotes] = useState();

  const init = async () => {
    const result = await axios.get("/api/quoke");
    setHomeQuotes(result.data);

    // Setup Masonry.js layout
    var elem = document.querySelector(".grid");
    var msnry = new Masonry(elem, {
      // options
      itemSelector: ".grid-item",
      columnWidth: 450
    });

    // element argument can be a selector string
    //   for an individual element
    // var msnry = new Masonry(".grid", {
    //   // options
    //   itemSelector: ".grid-item",
    //   columnWidth: 400
    // });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      {/* <Layout username={props.username}> */}
      <main className="">
        <section>
          <div className="grid">
            {/* <h1 className="heading">quoke.</h1> */}
            {homeQuotes &&
              homeQuotes.map(quote => {
                console.log(typeof quote._id);
                return (
                  <Quotation
                    text={quote.text}
                    author={quote.author}
                    key={quote._id}
                  />
                );
              })}
            {/* <Link href={"/quote/[slug]"} as={"/quote/" + props.quote.slug}><a> &gt;</a></Link> */}{" "}
          </div>
        </section>
      </main>
      <style jsx>
        {`
          /*main {
            display: flex;
            justify-content: left;
          }
          section {
            flex: 1;
          } */
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
