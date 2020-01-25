import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import axios from "axios";
import dayjs from "dayjs";
import { useStoreState, useStoreActions } from "easy-peasy";
import absoluteUrl from "next-absolute-url";
import smartquotes from "smartquotes";

import { apiGet, truncate } from "../lib/utils";

import Layout from "../components/layout";
import Quotation from "../components/quotation";

import css from "./index.scss";

let cache = null;

const Home = props => {
  const { quotes } = props.data;

  if (process.browser) cache = props.data;

  return (
    <Layout title="Quoke">
      <div className={css.root}>
        <div className={css.content}>
          <h1>Discover some inspirational quotes today</h1>
          <h2>What is this? <Link href="/about"><a>Learn more</a></Link></h2>
        </div>

        <hr />

        <div className={css.quotesContainer}>
          {quotes.map((quote, index) => (
            <div key={index} className={css.quote}>
              {truncate(quote.text, 50)}{" "}
              <Link href={"/quote/[slug]"} as={`/quote/${quote.slug}`}>
                <a>—></a>
              </Link>
            </div>
          ))}

          <div className={css.pagination}>
            <Link href="/page/[page]" as="/page/2">
              <a>Next &gt;</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

Home.getInitialProps = async ({ req, query }) => {
  let data = {};

  const quotesPerPage = 5;
  let skip = 0;

  if (cache) data = cache;
  else
    data.quotes = await apiGet(
      req,
      `/api/get-quotes?limit=${quotesPerPage}&skip=${skip}`
    );

  return { data: data };
};

export default Home;
