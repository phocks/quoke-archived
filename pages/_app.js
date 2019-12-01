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

    this.state = { progress: 0 };
  }

  // Fires when navigation occurs
  routeChangeStart = url => {
    console.log(url);
    this.setState({ progress: 100 });
  };

  routeChangeEnd = url => {};

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const { Component, pageProps } = this.props;
    return (
      <StoreProvider store={store}>
        <Component {...pageProps}></Component>
        <Progress progress={this.state.progress} />
      </StoreProvider>
    );
  }
}

export default MyApp;
