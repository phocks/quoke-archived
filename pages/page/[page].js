import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import axios from "axios";
import dayjs from "dayjs";
import { useStoreState, useStoreActions } from "easy-peasy";
import absoluteUrl from "next-absolute-url";
import smartquotes from "smartquotes";
import { useRouter } from "next/router";

import { apiGet, truncate } from "../../lib/utils";

import Layout from "../../components/layout";
// import Quotation from "../components/quotation";

import css from "../index.scss";

let cache = null;

const Pagination = props => {
  const { quotes } = props.data;
  const router = useRouter();
  const { page } = router.query;

  if (process.browser) cache = props.data;

  return (
    <Layout title="Quoke">
      <div className={css.root}>
        {quotes.map((quote, index) => (
          <div key={index} className={css.quote}>
            {truncate(quote.text, 50)}{" "}
            <Link href={"/quote/[slug]"} as={`/quote/${quote.slug}`}>
              <a>—></a>
            </Link>
          </div>
        ))}

        <div className={css.pagination}>
          {page === "2" ? (
            <Link href="/">
              <a>&lt; Previous</a>
            </Link>
          ) : (
            <Link href="/page/[page]" as={`/page/${+page - 1}`}>
              <a>&lt; Previous</a>
            </Link>
          )}
          &nbsp;/&nbsp;
          <Link href="/page/[page]" as={`/page/${+page + 1}`}>
            <a>Next &gt;</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

Pagination.getInitialProps = async ({ req, query }) => {
  let { page } = query;
  let data = {};

  const quotesPerPage = 5;
  const skipMultiplier = +page - 1;
  let skip = skipMultiplier * quotesPerPage;

  if (false) data = cache;
  else
    data.quotes = await apiGet(
      req,
      `/api/get-quotes?limit=${quotesPerPage}&skip=${skip}`
    );

  return { data: data };
};

export default Pagination;
