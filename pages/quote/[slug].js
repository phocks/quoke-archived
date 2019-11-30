import { apiGet } from "../../lib/utils";

import Layout from "../../components/layout";
import Quotation from "../../components/quotation";
import Title from "../../components/title";

export default function Quote(props) {
  const { quote } = props;
  return (
    <Layout title="A quote from Quoke">
      <Title text="/quote" />
      <div className="spacer" />
      <Quotation quote={quote} />
    </Layout>
  );
}

Quote.getInitialProps = async ({ req, query }) => {
  const data = await apiGet(req, "/api/get-quote/" + query.slug);

  return {
    quote: data
  };
};
