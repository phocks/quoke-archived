import React from "react";
import App from "next/app";
import { createStore } from "easy-peasy";
import { StoreProvider } from "easy-peasy";
import { action } from "easy-peasy";
import Router from "next/router";


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

// Fires when navigation occurs
const handleRouteChange = url => {};

Router.events.on("routeChangeStart", handleRouteChange);

class MyApp extends App {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const { Component, pageProps } = this.props;
    return (
      <StoreProvider store={store}>
        
          <Component {...pageProps} />
        
      </StoreProvider>
    );
  }
}

export default MyApp;
