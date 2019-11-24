import fetch from "isomorphic-unfetch";
import absoluteUrl from "next-absolute-url";

import Quotation from "../../components/quotation";
import Info from "../../components/info";

export default function Quote(props) {
  const { quote } = props;
  return <Quotation quote={quote} />;
}

Quote.getInitialProps = async ({ req, query }) => {
  const { origin } = absoluteUrl(req);

  const res = await fetch(origin + "/api/quote/" + query.slug);
  const data = await res.json();

  return {
    quote: data
  };
};
