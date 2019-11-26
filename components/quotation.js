import css from "./quotation.scss";
import Link from "next/link";
import smartquotes from "smartquotes";

import Head from "next/head";

export default props => {
  const { quote } = props;
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Calistoga&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={css.root} style={{ fontFamily: "'Calistoga', sans-serif" }}>
        <div className={css.container}>
          <div className={css.quote}>
            <div className={css.text}>
              {/* <i className="fas fa-quote-left"></i> */}
              <p>{smartquotes(quote.text)}</p>
              <small>
                <div className={css.citation}>
                  <p className={css.author}>
                    &mdash;{quote.author}
                    {props.source && (
                      <em className={css.source}>, {quote.source}</em>
                    )}
                  </p>
                </div>
              </small>
            </div>
          </div>
        </div>

        {/* <div className={css.container}>
        
        <p className={css.text}>{quote.text}</p>
        <small>
          <div className={css.citation}>
            <p className={css.author}>
              &mdash;{quote.author}
              {props.source && <em className={css.source}>, {quote.source}</em>}
            </p>
          </div>
        </small>
      </div> */}
      </div>
    </>
  );
};
