import css from "./quotation.scss";
import Link from "next/link";
import smartquotes from "smartquotes";

export default props => {
  const { quote } = props;
  return (
    <div className={css.root}>
      <blockquote cite="https://quoke.co">
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
