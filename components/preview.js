import css from "./preview.scss";
import Link from "next/link";
import smartquotes from "smartquotes";

export default props => {
  const { quote } = props;
  return (
    <div className={css.preview}>
      <div className={css.text}>&ldquo;{smartquotes(quote.text)}&rdquo;</div>

      <div>
        <span className={css.author}>&mdash;{quote.author}</span>
        {quote.source && <cite>, {quote.source}</cite>}
      </div>
    </div>
  );
};
