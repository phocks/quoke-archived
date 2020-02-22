import React from "react";
import App from "next/app";
import { createStore } from "easy-peasy";
import { StoreProvider } from "easy-peasy";
import { action } from "easy-peasy";
import Router from "next/router";

import Progress from "../components/progress";

// Create a global data store using Easy Peasy
const storeModel = {
  username: null,
  setUsername: action((state, payload) => {
    state.username = payload;
  }),
  title: "Quoke",
  setTitle: action((state, payload) => {
    state.title = payload;
  })
};

const store = createStore(storeModel);

class MyApp extends App {
  constructor(props) {
    super(props);
  }

  // Fires when navigation occurs
  routeChangeStart = url => {
    console.log(url);
  };

  routeChangeEnd = url => {};

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const { Component, pageProps } = this.props;
    return (
      <StoreProvider store={store}>
        <Progress />
        <Component {...pageProps}></Component>
      </StoreProvider>
    );
  }
}

export default MyApp;
