// import React from 'react'
import Head from "next/head";
import Link from "next/link";
import fetch from 'isomorphic-unfetch';

const Home = props => (
  <div>
    <Head>
      <title>Quoke - A few quotations</title>
      <link rel="icon" href="/static/favicon.ico" />
    </Head>

    <div className="container">
      <p>{props.text}</p>      
    </div>

    <style jsx>{`
      
    `}</style>
  </div>
);

Home.getInitialProps = async () => {
  return {
    text:"There is no progress without sacrifice."
  };
};

export default Home;
