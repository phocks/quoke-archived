import css from "./tinyQuote.scss";
import Link from "next/link";
import smartquotes from "smartquotes";
import marked from "marked";
import parse from "html-react-parser";
import dayjs from "dayjs";

export default props => {
  const { quote } = props;
  return (
    <div className={`${css.tinyQuote}`}>
      <div className={css.date}>{dayjs(quote.date).format("DD.MM.YY")}</div>
      <blockquote
        className={`${quote.text.length > 500 ? css.long : ""}`}
        cite="https://quoke.co"
      >
        <span>{parse(marked(smartquotes(quote.text)))}</span>
        {quote.author || quote.source ? <span> &mdash;</span> : ""}
        <small>
          <span className={css.author}>{quote.author}</span>
          {quote.source && <cite>, {quote.source}</cite>}
        </small>
      </blockquote>
    </div>
  );
};
