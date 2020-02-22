import Link from "next/link";
import smartquotes from "smartquotes";
import marked from "marked";
import parse from "html-react-parser";
import dayjs from "dayjs";

export default props => {
  const { quote } = props;
  return (
    <div className={"quotation"}>
      <div className={"date"}>{dayjs(quote.date).format("DD.MM.YY")}</div>
      <blockquote
        className={`${quote.text.length > 500 ? "long" : ""}`}
        cite="https://quoke.co"
      >
        <span>{parse(marked(smartquotes(quote.text)))}</span>
        {quote.author || quote.source ? <span> &mdash;</span> : ""}
        <small>
          <span className={"author"}>{quote.author}</span>
          {quote.source && <cite>, {quote.source}</cite>}
        </small>
      </blockquote>
      <style jsx>
        {`
          .date {
            color: #aaa;
            font-size: small;
            margin-bottom: 1em;
          }

          blockquote {
            font-size: 1.5em;
            margin: auto;
          }

          .author {
            white-space: nowrap;
          }
        `}
      </style>
    </div>
  );
};
