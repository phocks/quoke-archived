import { apiGet, truncate } from "../../lib/utils";
import Link from "next/link";

import Layout from "../../components/layout";
import Title from "../../components/title";
import Item from "../../components/item";

import css from "./[slug].scss";

const cache = {};

export default function Quote(props) {
  const { topic, quotes } = props.data;

  if (process.browser) cache[topic.slug] = props.data;

  return (
    <Layout title={`${topic.name} / Quoke`}>
      <Title text={`/topic`} />
      <div className="spacer" />
      {quotes.length < 1 ? (
        <span className={css.link}>
          <Link href={"/"}>
            <a>No quotations found...</a>
          </Link>
        </span>
      ) : (
        quotes.map(quote => (
          <Item
            href={"/quote/[slug]"}
            as={"/quote/" + quote.slug}
            key={quote._id}
          >
            {quote.title || truncate(quote.text, 4)}
          </Item>
          // <span className={css.link} key={quote._id}>
          //   <Link href={"/quote/[slug]"} as={"/quote/" + quote.slug}>
          //     <a>{quote.title || truncate(quote.text, 4)}</a>
          //   </Link>
          // </span>
        ))
      )}
    </Layout>
  );
}

Quote.getInitialProps = async ({ req, query }) => {
  let data = {};

  if (cache[query.slug]) data = cache[query.slug];
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
