import { apiGet, truncate } from "../../lib/utils";

import Layout from "../../components/layout";
import Quotation from "../../components/quotation";
// import Title from "../../components/title";

const cache = {};

export default function Quote(props) {
  const { quote } = props.data;

  if (process.browser) cache[quote.slug] = props.data;

  return (
    <Layout title={(quote.title || truncate(quote.text, 4)) + " / Quoke"}>
      <Quotation quote={quote} />
    </Layout>
  );
}

Quote.getInitialProps = async ({ req, query }) => {
  let data = {};

  if (cache[query.slug]) data = cache[query.slug];
  else {
    data.quote = await apiGet(req, "/api/get-quote/" + query.slug);
  }

  return {
    data: data
  };
};
