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
import Info from "../components/info";
import Title from "../components/title";

import css from "./index.scss";
import QuoteTeaser from "../components/QuoteTeaser";

let cache = null;

const Home = props => {
  const { topics } = props.data;

  if (process.browser) cache = props.data;

  return (
    <Layout title="Quoke">
      <div className={css.root}>
        <Title text="/quoke" />
        <div className="spacer"></div>

        {topics.map(topic => (
          <span className={css.topicLink} key={topic._id}>
            <Link href={"/topic/[slug]"} as={"/topic/" + topic.slug}>
              <a>{topic.name}</a>
            </Link>
          </span>
        ))}
      </div>
    </Layout>
  );
};

Home.getInitialProps = async ({ req, query }) => {
  let data = {};

  if (cache) data = cache;
  else data.topics = await apiGet(req, "/api/get-topics");

  return { data: data };
};

export default Home;
