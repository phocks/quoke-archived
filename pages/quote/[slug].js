import { apiGet, truncate } from "../../lib/utils";

import Layout from "../../components/layout";
import Quote from "../../components/quote"

import css from "./[slug].scss";

export default function Quotation(props) {
  const { quote } = props.data;

  return (
    <Layout title={(quote.title || truncate(quote.text, 5)) + " — Quoke"}>
      <div className={`${css.root} col`}>
        <Quote quote={quote} />
      </div>
    </Layout>
  );
}

Quotation.getInitialProps = async ({ req, query }) => {
  let data = {};

  data.quote = await apiGet(req, "/api/get-quote/" + query.slug);

  return {
    data: data
  };
};
