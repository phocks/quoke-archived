import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import axios from "axios";
import dayjs from "dayjs";
import { useStoreState } from "easy-peasy";

// Components
import Quotation from "../components/quotation";

const Home = props => {
  const [homeQuotes, setHomeQuotes] = useState();
  const username = useStoreState(state => state.user.username);

  const sync = async () => {
    const result = await axios.get("/api/get-quotes/quoke");
    setHomeQuotes(result.data);
  };

  const likeQuote = async slug => {
    console.log("Liking quote");
    const result = await axios.post("/api/like/quote/" + slug, {});
    console.log(result);
  };

  const unlikeQuote = async slug => {
    console.log("Unliking quote");
    const result = await axios.post("/api/unlike/quote/" + slug, {});
    console.log(result);
  };

  useEffect(() => {
    // sync();
  }, []);

  return (
    <>
      <main className="center">
        {props.title}
        {/* <section>
          {homeQuotes &&
            homeQuotes.map(quote => {
              return (
                <div className="list-quote" key={quote._id}>
                  <Quotation text={quote.text} author={quote.author} />
                  <div className="date">
                    <Link href="/quote/[slug]" as={"/quote/" + quote.slug}>
                      <a>{dayjs(quote.date).format("DD MMMM YYYY")}</a>
                    </Link>
                    {quote.likedBy && quote.likedBy.includes(username) ? (
                      <span
                        className="pseudo-link"
                        href="#"
                        onClick={async () => {
                          await unlikeQuote(quote.slug);
                          await sync();
                        }}
                      >
                        Unlike
                      </span>
                    ) : (
                      <span
                        className="pseudo-link"
                        href="#"
                        onClick={async () => {
                          await likeQuote(quote.slug);
                          await sync();
                        }}
                      >
                        Like
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
        </section> */}
      </main>
      <style jsx>{`
        a {
          margin-right: 10px;
        }
        .date {
          color: #657786;
          font-size: 13px;
          font-family: "Inconsolata", monospace;
        }
      `}</style>
    </>
  );
};

Home.getInitialProps = async function() {
  return {
    title: "quoke"
  };
};

export default Home;
