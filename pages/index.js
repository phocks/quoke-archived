// import React from 'react'
import Head from "next/head";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import absoluteUrl from "next-absolute-url";

const Home = props => (
  <div>
    <Head>
      <title>Quoke - A few quotations</title>
      <link rel="icon" href="/static/favicon.ico" />
    </Head>

    <div className="container">
      <p>{props.text}</p>
    </div>

    <style jsx>{``}</style>
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
