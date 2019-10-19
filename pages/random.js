import { useEffect } from "react";
import { useRouter } from "next/router";
import absoluteUrl from "next-absolute-url";
import slugify from "slugify";

import Layout from "../components/layout";

// Number of words to truncate the quote text to
const SLUG_WORD_COUNT = 8;

const Random = props => {
  const router = useRouter();

  useEffect(() => {
    const quoteText = props.randomQuote.text;
    const truncatedText = truncate(quoteText, SLUG_WORD_COUNT);
    const slugText = slugify(truncatedText, { lower: true });
    router.replace("/quote/[slug]", "/quote/" + slugText);
  }, []);
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

function truncate(str, no_words) {
  return str
    .split(" ")
    .splice(0, no_words)
    .join(" ");
}
