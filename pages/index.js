import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import axios from "axios";
import dayjs from "dayjs";
import { useStoreState, useStoreActions } from "easy-peasy";
import absoluteUrl from "next-absolute-url";

import Quotation from "../components/quotation";
import Info from "../components/info";

import css from "./index.scss";

const Home = props => {
  const setTitle = useStoreActions(actions => actions.setTitle);
  setTitle("Quoke");

  return (
    <>
    <center><h2>quoke</h2></center>
    <main className={css.root}>
      <section>
        
          
        
        <Quotation quote={props.randomQuote} />
        <hr />
        <Info quote={props.randomQuote} />
      </section>
    </main></>
  );
};

Home.getInitialProps = async ({ req, query }) => {
  const { origin } = absoluteUrl(req);

  const fetched = await fetch(origin + "/api/random");
  const data = await fetched.json();

  return {
    randomQuote: data
  };
};

export default Home;
