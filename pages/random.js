import { useEffect } from "react";
import { useRouter } from "next/router";
import absoluteUrl from "next-absolute-url";

import Layout from "../components/layout";

const Random = props => {
  const router = useRouter();
  
  useEffect(() => {router.push("/quote/" + props.randomQuote._id.toString());}, []);
  return (
    <Layout>
      <main className="content"></main>
    </Layout>
  );
};

Random.getInitialProps = async ctx => {
  const { req, query } = ctx;
  const { origin } = absoluteUrl(req);

  const apiOrigin = `${origin}/api/`;

  const resRandom = await fetch(apiOrigin + "random");
  const randomQuote = await resRandom.json();

  return {
    randomQuote: randomQuote
  };
};

export default Random;
