import { useEffect } from "react";
import { useRouter } from "next/router";
import absoluteUrl from "next-absolute-url";
// import slug from "slug";

import Layout from "../components/layout";

// Number of words to truncate the quote text to
const SLUG_WORD_COUNT = 10;

const Random = props => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/quote/[slug]", "/quote/" + props.randomQuote.slug);
  }, []);
  return <main className="content"></main>;
};

Random.getInitialProps = async ctx => {
  const { req, query } = ctx;
  const { origin } = absoluteUrl(req);

  const apiOrigin = `${origin}/api`;

  const resRandom = await fetch(apiOrigin + "/random");
  const randomQuote = await resRandom.json();

  console.log(randomQuote);

  return {
    randomQuote: randomQuote
  };
};

export default Random;
