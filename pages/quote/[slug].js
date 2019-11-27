import fetch from "isomorphic-unfetch";
import absoluteUrl from "next-absolute-url";

import Layout from "../../components/layout";
import Quotation from "../../components/quotation";
import Title from "../../components/title";

export default function Quote(props) {
  const { quote } = props;
  return (
    <Layout title="A quote from Quoke">
      <Title text="/quote" />
      <div className="spacer" />
      <hr />
      <Quotation quote={quote} />
      <hr />
    </Layout>
  );
}

Quote.getInitialProps = async ({ req, query }) => {
  const { origin } = absoluteUrl(req);

  const res = await fetch(origin + "/api/quote/" + query.slug);
  const data = await res.json();

  return {
    quote: data
  };
};
