import Link from "next/link";
import smartquotes from "smartquotes";

import css from "./QuoteTeaser.scss";

export default ({ quote }) => {
  return (
    <div className={css.quoteContainer} key={quote._id}>
      <div className={css.quote}>
        <Link href="/quote/[slug]" as={"/quote/" + quote.slug}>
          <a>
            <div className={css.inside}>
              <i className="fas fa-quote-left"></i>
              <p>{smartquotes(quote.text)}</p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};
