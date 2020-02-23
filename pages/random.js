import { useEffect } from "react";
import { useRouter } from "next/router";
import absoluteUrl from "next-absolute-url";
// import slug from "slug";

import Layout from "../components/layout";

const Random = props => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/quote/[slug]", "/quote/" + props.randomQuote.slug);
  }, []);
  return (
    <Layout>
      <main className={"mid"}></main>
    </Layout>
  );
};

Random.getInitialProps = async ctx => {
  const { req, query } = ctx;
  const { origin } = absoluteUrl(req);

  const apiOrigin = `${origin}/api`;

  const resRandom = await fetch(apiOrigin + "/random");
  const randomQuote = await resRandom.json();

  return {
    randomQuote: randomQuote
  };
};

export default Random;
