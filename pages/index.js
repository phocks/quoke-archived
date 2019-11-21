import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import axios from "axios";
import dayjs from "dayjs";
import { useStoreState, useStoreActions } from "easy-peasy";
import absoluteUrl from "next-absolute-url";

import Quotation from "../components/quotation";
import Info from "../components/info";
import Title from "../components/title";

import css from "./index.scss";

const Home = props => {
  const setTitle = useStoreActions(actions => actions.setTitle);
  setTitle("Quoke");

  const { quotes } = props;

  return (
    <div className={css.root}>
      <Title text="/quoke" />
      <Quotation quote={props.randomQuote} />
      <hr />
      
      {/* <Info quote={props.randomQuote} /> */}
      {/* <div className={css.quotesRoot}>
        <div className={css.quotesContainer}>
          {quotes &&
            quotes.map((quote, index) => <div key={index} className={css.quoteTeaser}>{quote.text}</div>)}
        </div>
      </div> */}
    </div>
  );
};

Home.getInitialProps = async ({ req, query }) => {
  const { origin } = absoluteUrl(req);

  let fetched = await fetch(origin + "/api/random");
  const randomQuote = await fetched.json();

  fetched = await fetch(origin + "/api/get-quotes");
  const quotes = await fetched.json();

  return {
    randomQuote: randomQuote,
    quotes: quotes
  };
};

export default Home;
