import fetch from "isomorphic-unfetch";
import absoluteUrl from "next-absolute-url";

import Quotation from "../../components/quotation";

export default function Quote(props) {
  const quote = props.quote;
  return (
    <>
      <main className="center">
        <section>
          <h1 className="quotation-mark">&ldquo;</h1>
          <Quotation
            text={quote.text}
            author={quote.author}
            source={quote.source}
          />
        </section>
      </main>
    </>
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
