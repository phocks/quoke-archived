import React from "react";
import App from "next/app";
import absoluteUrl from "next-absolute-url";
import cookies from "next-cookies";
import fetch from "isomorphic-unfetch";

import Layout from "../components/layout";

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

    // const resRandom = await fetch(apiOrigin + "/random");
    // const randomQuote = await resRandom.json();

    const { token } = cookies(ctx);

    if (!token) {
      return {
        loggedIn: false
      };
    }

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
      loggedIn: auth.loggedIn,
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
      <Layout username={this.props.username}>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
