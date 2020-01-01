import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import axios from "axios";
import dayjs from "dayjs";
import { useStoreState, useStoreActions } from "easy-peasy";
import absoluteUrl from "next-absolute-url";
import smartquotes from "smartquotes";

import { apiGet } from "../lib/utils";

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
        <Quotation quote={quotes[0]}></Quotation>
      </div>
    </Layout>
  );
};

Home.getInitialProps = async ({ req, query }) => {
  let data = {};

  if (cache) data = cache;
  else data.quotes = await apiGet(req, "/api/get-user-quotes");

  return { data: data };
};

export default Home;
