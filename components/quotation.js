import css from "./quotation.scss";
import Link  from "next/link"

const Quotation = props => {
  const { quote } = props;
  return (
    <div className={css.root}>
      <h2 className={css.quotationMark}>
        <Link href="/quote/[slug]" as={"/quote/" + quote.slug}>
          <a>&ldquo;</a>
        </Link>
      </h2>
      <p className={css.text}>{quote.text}</p>
      <small>
        <div className={css.citation}>
          <p className={css.author}>
            &mdash;{quote.author}
            {props.source && <em className={css.source}>, {quote.source}</em>}
          </p>
        </div>
      </small>
    </div>
  );
};

export default Quotation;
