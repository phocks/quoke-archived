import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import axios from "axios";
import dayjs from "dayjs";
import { useStoreState, useStoreActions } from "easy-peasy";
import absoluteUrl from "next-absolute-url";

import css from "./index.scss";

const Home = props => {
  const setTitle = useStoreActions(actions => actions.setTitle);
  setTitle("Quoke");

  return (
    <main className={css.root}>
      <section>
        <h2 className={css.quotationMark}>&ldquo;</h2>
        <p className={css.text}>{props.randomQuote.text}</p>
        <small>
          <div className={css.citation}>
            <p className={css.author}>
              &mdash;{props.randomQuote.author}
              {props.randomQuote.source && (
                <em className={css.source}>, {props.randomQuote.source}</em>
              )}
            </p>
          </div>
        </small>
        <hr />
      </section>
    </main>
  );
};

Home.getInitialProps = async ({ req, query }) => {
  const { origin } = absoluteUrl(req);

  const fetched = await fetch(origin + "/api/random");
  const data = await fetched.json();

  return {
    randomQuote: data
  };
};

export default Home;
