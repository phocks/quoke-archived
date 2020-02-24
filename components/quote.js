import Link from "next/link";
import smartquotes from "smartquotes";
import marked from "marked";
import parse from "html-react-parser";
import dayjs from "dayjs";
import slug from "slug";
slug.defaults.mode = "rfc3986";
import { truncate } from "../lib/utils";

export default props => {
  const { quote } = props;
  return (
    <div className={"quotation"}>
      <div className={"info"}>
        <span>
          {props.isLinked ? (
            <Link href={"/quote/[slug]"} as={`/quote/${quote.slug}`}>
              <a>{dayjs(quote.date).format("DD.MM.YY")}</a>
            </Link>
          ) : (
            dayjs(quote.date).format("DD.MM.YY")
          )}
        </span>

        {quote.topics && <span> · </span>}

        {quote.topics &&
          quote.topics.map((topic, index) => (
            <span key={index}>
              <Link href={"/search?q=" + slug(topic)}>
                <a>{topic}</a>
              </Link>{" "}
            </span>
          ))}
      </div>
      <blockquote
        className={`${quote.text.length > 500 ? "long" : ""}`}
        cite="https://quoke.co"
      >
        {props.isTruncated ? (
          <span>{parse(marked(smartquotes(truncate(quote.text, 42))))}</span>
        ) : (
          <span>{parse(marked(smartquotes(quote.text)))}</span>
        )}
        <small>
          {quote.author || quote.source ? (
            <span className="emdash"> &mdash;</span>
          ) : (
            ""
          )}

          <span className={"author"}>{quote.author}</span>
          {quote.source && <cite>, {quote.source}</cite>}
        </small>
      </blockquote>
      <style jsx>
        {`
          .quotation {
            margin-bottom: 3rem;
          }

          .info {
            color: #aaa;
            font-size: small;
            margin-bottom: 1em;
          }

          .info a:hover {
            text-decoration: none;
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
