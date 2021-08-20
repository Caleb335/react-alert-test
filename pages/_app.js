import "../styles/globals.css";
import React from "react";
import Head from "next/head";
import Message from "../src/utils/alert-template";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <link rel="icon" href="#" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <title>Alert</title>
      </Head>
      <Message>
        <Component {...pageProps} />
      </Message>
    </React.Fragment>
  );
}

export default MyApp;
