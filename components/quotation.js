import css from "./quotation.scss";
import Link from "next/link";
import smartquotes from "smartquotes";

export default props => {
  const { quote } = props;
  return (
    <div className={`${css.quotation}`}>
      <blockquote className={`${quote.text.length > 500 ? css.long : ""}`} cite="https://quoke.co">
        <span>&ldquo;{smartquotes(quote.text)}&rdquo;</span>
        <small>
          {" "}
          <span className={css.author}>&mdash;{quote.author}</span>
          {quote.source && <cite>, {quote.source}</cite>}
        </small>
      </blockquote>
    </div>
  );
};
