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

const Home = props => {
  const { quotes, topics } = props;

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

        {/* {quotes.map((quote, index) => {
          return <QuoteTeaser quote={quote}></QuoteTeaser>;
        })} */}
      </div>
    </Layout>
  );
};

Home.getInitialProps = async ({ req, query }) => {
  const topicsArray = await apiGet(req, "/api/get-topics");
  return { topics: topicsArray };
};

export default Home;
