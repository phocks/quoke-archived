import { apiGet } from "../../lib/utils";
import Link from "next/link";

import Layout from "../../components/layout";
import Title from "../../components/title";

import css from "./[slug].scss";

let cache = null;

export default function Quote(props) {
  const { topic, quotes } = props.data;

  if (process.browser) cache = props.data;

  return (
    <Layout title={`${topic.name} / Quoke`}>
      <Title text={`/topic: ${topic.name}`} />
      <div className="spacer" />
      {quotes.length < 1 ? (
        <span>No quotes...</span>
      ) : (
        quotes.map(quote => (
          <span className={css.link} key={quote._id}>
            <Link href={"/quote/[slug]"} as={"/quote/" + quote.slug}>
              <a>{truncate(quote.text, 4)}</a>
            </Link>
          </span>
        ))
      )}
    </Layout>
  );
}

Quote.getInitialProps = async ({ req, query }) => {
  let data = {};

  if (cache) data = cache;
  else {
    data.topic = await apiGet(req, `/api/get-topic?slug=${query.slug}`);
    data.quotes = await apiGet(
      req,
      `/api/get-topic-quotes?topic=${data.topic.name}`
    );
  }

  return {
    data: data
  };
};

function truncate(str, no_words) {
  return str
    .split(" ")
    .splice(0, no_words)
    .join(" ");
}
