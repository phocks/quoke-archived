import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import axios from "axios";
import dayjs from "dayjs";
import { useStoreState, useStoreActions } from "easy-peasy";
import absoluteUrl from "next-absolute-url";
import smartquotes from "smartquotes";

import Layout from "../components/layout";
import Quotation from "../components/quotation";
import Info from "../components/info";
import Title from "../components/title";

import css from "./index.scss";

const Home = props => {
  const { quotes } = props;

  return (
    <Layout title="Quoke.">
      <div className={css.root}>
        <Title text="/quoke" />
        <div className="spacer" />

        {quotes.map((quote, index) => {
          return (
            <div key={quote._id}>
              <div className="spacer" />
              <div className={css.quoteContainer}>
                <Link href="/quote/[slug]" as={"/quote/" + quote.slug}>
                  <a>
                    <div className={css.quote}>
                      <i className="fas fa-quote-left"></i>
                      <p>{smartquotes(quote.text)}</p>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="spacer" />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

Home.getInitialProps = async ({ req, query }) => {
  const { origin } = absoluteUrl(req);

  // let fetched = await fetch(origin + "/api/random");
  // const randomQuote = await fetched.json();

  const fetched = await fetch(origin + "/api/get-user-quotes/quoke");
  const quotes = await fetched.json();

  return {
    // randomQuote: randomQuote,
    quotes: quotes
  };
};

export default Home;
