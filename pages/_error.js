import React from "react";
import Layout from "../components/layout";

function Error({ statusCode }) {
  return (
    <Layout>
      <main>
        <p>
          {statusCode
            ? `An error ${statusCode} occurred on server`
            : "An error occurred on client"}
        </p>
      </main>
    </Layout>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;