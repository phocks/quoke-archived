import { apiGet, truncate } from "../../lib/utils";

import Layout from "../../components/layout";
import Quotation from "../../components/quotation";

import css from "./[slug].scss";

const cache = {};

export default function Quote(props) {
  const { quote } = props.data;

  if (process.browser) cache[quote.slug] = props.data;

  return (
    <Layout title={(quote.title || truncate(quote.text, 5)) + " — Quoke"}>
      <div className={css.root}>
        {/* <div className={css.title}>
          <h1>A quotation by Carl Sagan</h1>
        </div> */}

        <Quotation quote={quote} />
        {/* <div className={css.info}>213 views</div> */}
      </div>
      <hr />
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      ></script>

      <ins
        class="adsbygoogle"
        style={{display:"block"}}
        data-ad-client="ca-pub-4754239438008393"
        data-ad-slot="8725133602"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
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
