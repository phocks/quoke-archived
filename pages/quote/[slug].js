import fetch from "isomorphic-unfetch";
import absoluteUrl from "next-absolute-url";

import Layout from "../../components/layout";

export default function Quote(props) {
  const quote = props.data;
  return (
    <Layout>
      <blockquote>
      <p>"{quote.text}"</p>
      <cite>—{quote.author}</cite>
      </blockquote>
    </Layout>
  );
}

Quote.getInitialProps = async ({ req, query }) => {
  const { origin } = absoluteUrl(req);
  const apiOrigin = `${origin}`;

  const res = await fetch(apiOrigin + "/api/quote/" + query.slug);
  const data = await res.json();

  return {
    data: data[0]
  };

  return {}
};
