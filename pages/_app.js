import React from "react";
import App from "next/app";
import { createStore } from "easy-peasy";
import { StoreProvider } from "easy-peasy";
import { action } from "easy-peasy";
import Router from 'next/router'

import Layout from "../components/layout";

// Create a global data store using Easy Peasy
const storeModel = {
  user: {
    username: null,
    setUsername: action((state, payload) => {
      state.username = payload;
    })
  }
};

const store = createStore(storeModel);

const handleRouteChange = url => {
  console.log("App is changing to: ", url);
};

Router.events.on("routeChangeStart", handleRouteChange);

class MyApp extends App {
  constructor(props) {
    super(props);
    // this.state = { username: null };
  }

  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   const { Component, router, ctx } = appContext;
  //   const { req, query } = ctx;
  //   const { origin } = absoluteUrl(req);

  //   const apiOrigin = `${origin}/api`;

  //   const { token } = cookies(ctx);

  //   const resAuth = await fetch(apiOrigin + "/is-authenticated", {
  //     method: "post",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({ token: token })
  //   });

  //   const auth = resAuth ? await resAuth.json() : false;

  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);

  //   return {
  //     loggedIn: token ? auth.loggedIn : false,
  //     username: auth.loggedIn ? auth.payload.username : null,
  //     ...appProps
  //   };
  // }

  componentDidMount() {
    console.log(":)");
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <StoreProvider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StoreProvider>
    );
  }
}

export default MyApp;
