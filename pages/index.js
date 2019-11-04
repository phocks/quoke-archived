import { useState, useEffect } from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import absoluteUrl from "next-absolute-url";
import cookies from "next-cookies";
import axios from "axios";
import dayjs from "dayjs";

// Components
import Layout from "../components/layout";
import Quotation from "../components/quotation";

const Home = props => {
  const [homeQuotes, setHomeQuotes] = useState();

  const init = async () => {
    const result = await axios.get("/api/get-quotes/quoke");
    setHomeQuotes(result.data);

    // Setup Masonry.js layout
    // var elem = document.querySelector(".grid");
    // var msnry = new Masonry(elem, {
    //   // options
    //   itemSelector: ".grid-item",
    //   columnWidth: 410
    // });
  };

  useEffect(() => {
    init();
  }, []);

  const q = homeQuotes && homeQuotes[0];

  return (
    <>
      <main className="">
        <section>
          {/* {homeQuotes &&
            homeQuotes.map(quote => {
              return (
                <Quotation
                  text={quote.text}
                  author={quote.author}
                  key={quote._id}
                />
              );
            })} */}
          <h1 className="quotation-mark">&ldquo;</h1>
          {q && <Quotation text={q.text} author={q.author} source={q.source} key={q._id} />}

          {q && (
            <div className="date"><Link href="/quote/[slug]" as={"/quote/" + q.slug}>{dayjs(q.date).format("DD MMMM YYYY")}</Link></div>
          )}
        </section>
      </main>
      <style jsx>{`
        .date {
          color: #657786;
          font-size: 13px;
          font-family: "Inconsolata", monospace;
        }
        .quotation-mark {
          font-size: 38px;
          font-family: 'Paytone One', sans-serif;
        }
      `}</style>
    </>
  );
};

export default Home;
