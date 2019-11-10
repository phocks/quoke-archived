import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import axios from "axios";
import dayjs from "dayjs";
import { useStoreState } from "easy-peasy";
import absoluteUrl from "next-absolute-url";

import css from "./index.scss";

const Home = props => {
  return (
    <main className={css.root}>
      <section>
        <div className={css.title}>{props.randomQuote.text}</div>
      </section>
    </main>
  );
};

Home.getInitialProps = async ({ req, query }) => {
  const { origin } = absoluteUrl(req);
  const apiOrigin = `${origin}`;

  const fetched = await fetch(apiOrigin + "/api/random");
  const data = await fetched.json();

  return {
    randomQuote: data
  };
};

export default Home;
