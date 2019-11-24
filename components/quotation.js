import css from "./Quotation.scss";
import Link from "next/link";
import smartquotes from "smartquotes";

const Quotation = props => {
  const { quote } = props;
  return (
    <div className={css.root}>
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
  );
};

export default Quotation;
