import fetch from "isomorphic-unfetch";
import absoluteUrl from "next-absolute-url";

import Layout from "../../components/layout";
import Quotation from "../../components/quotation";

export default function Quote(props) {
  const quote = props.quote;
  return (
    <Layout>
      <main className="content">
        <Quotation text={quote.text} author={quote.author} />
      </main>
    </Layout>
  );
}

Quote.getInitialProps = async ({ req, query }) => {
  const { origin } = absoluteUrl(req);
  const apiOrigin = `${origin}`;

  const res = await fetch(apiOrigin + "/api/quote/" + query.slug);
  const data = await res.json();

  return {
    quote: data[0]
  };

  return {};
};
