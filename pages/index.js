// import React from 'react'
import Head from "next/head";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import absoluteUrl from "next-absolute-url";

// Components
import Layout from "../components/layout";
import Heading from "../components/heading";

const Home = props => (
  <div>
    <Head>
      <title>Quoke - A few quotations</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <link rel="icon" href="/static/favicon.ico" />
      <link rel="stylesheet" href="/static/normalize.css"></link>
      <link
        rel="stylesheet"
        href="https://unpkg.com/spectre.css/dist/spectre.min.css"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/spectre.css/dist/spectre-exp.min.css"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/spectre.css/dist/spectre-icons.min.css"
      />
    </Head>

    <div className="container">
      <Heading />
      <p>{props.text}</p>
    </div>

    <style jsx global>
      {``}
    </style>
  </div>
);

Home.getInitialProps = async ({ req, query }) => {
  const { origin } = absoluteUrl(req);
  const apiOrigin = `${origin}`;

  const res = await fetch(apiOrigin + "/api/test");
  const data = await res.json();

  const randomPos = Math.floor(Math.random() * data.length);
  console.log(randomPos);
  const text = data[randomPos].text;

  return {
    text: text
  };
};

export default Home;
