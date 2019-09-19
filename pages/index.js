// import React from 'react'
import Head from "next/head";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

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

Home.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/test");
  const data = await res.json();

  return {
    text: data[1].text
  };
};

export default Home;
