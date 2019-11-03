import { useState, useEffect } from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import absoluteUrl from "next-absolute-url";
import cookies from "next-cookies";
import axios from "axios";

// Components
import Layout from "../components/layout";
import Quotation from "../components/quotation";

const Home = props => {
  const [homeQuotes, setHomeQuotes] = useState();

  const init = async () => {
    const result = await axios.get("/api/main");
    setHomeQuotes(result.data);

    // Setup Masonry.js layout
    var elem = document.querySelector(".grid");
    var msnry = new Masonry(elem, {
      // options
      itemSelector: ".grid-item",
      columnWidth: 410
    });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <main className="">
        <section>
          <div className="grid">
            {homeQuotes &&
              homeQuotes.map(quote => {
                return (
                  <Quotation
                    text={quote.text}
                    author={quote.author}
                    key={quote._id}
                  />
                );
              })}
          </div>
        </section>
      </main>
      <style jsx>
        {`
          h1.heading {
            max-width: 720px;
          }
        `}
      </style>
    </>
  );
};

export default Home;
