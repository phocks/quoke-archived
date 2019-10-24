import React from "react";
import App from "next/app";
import absoluteUrl from "next-absolute-url";
import cookies from "next-cookies";
import fetch from "isomorphic-unfetch";
import { createStore } from "easy-peasy";
import { StoreProvider } from "easy-peasy";
import { action } from "easy-peasy"; // 👈 import

import Layout from "../components/layout";

const storeModel = {
  user: {
    username: "none",
    setUsername: action((state, payload) => {
      state.username = payload;
    })
  }
};

const store = createStore(storeModel);

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  static async getInitialProps(appContext) {
    const { Component, router, ctx } = appContext;
    const { req, query } = ctx;
    const { origin } = absoluteUrl(req);

    const apiOrigin = `${origin}/api`;

    const { token } = cookies(ctx);

    const resAuth = await fetch(apiOrigin + "/is-authenticated", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ token: token })
    });

    const auth = resAuth ? await resAuth.json() : false;

    console.log(auth);

    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);

    return {
      loggedIn: token ? auth.loggedIn : false,
      username: auth.loggedIn ? auth.payload.username : null,
      ...appProps
    };
  }

  componentDidMount() {
    console.log(":)");
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <StoreProvider store={store}>
        <Layout username={this.props.username}>
          <Component {...pageProps} />
        </Layout>
      </StoreProvider>
    );
  }
}

export default MyApp;
