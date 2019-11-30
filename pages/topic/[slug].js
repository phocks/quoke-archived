import { apiGet } from "../../lib/utils";
import Link from "next/link";

import Layout from "../../components/layout";
import Title from "../../components/title";

import css from "./[slug].scss";

export default function Quote(props) {
  return (
    <Layout title={`${props.topic.name} / Quoke`}>
      <Title text={`/${props.topic.slug}`} />
      <div className="spacer" />
      {props.quotes.length < 1 ? (
        <span>No quotes...</span>
      ) : (
        props.quotes.map(quote => (
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
  const topic = await apiGet(req, `/api/get-topic?slug=${query.slug}`);
  const quotes = await apiGet(req, `/api/get-topic-quotes?topic=${topic.name}`);

  return {
    topic: topic,
    quotes: quotes
  };
};

function truncate(str, no_words) {
  return str
    .split(" ")
    .splice(0, no_words)
    .join(" ");
}
