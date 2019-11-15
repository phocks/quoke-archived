import css from "./quotation.scss";

const Quotation = props => {
  return (
    <div className={css.root}>
      <h2 className={css.quotationMark}>&ldquo;</h2>
      <p className={css.text}>{props.text}</p>
      <small>
        <div className={css.citation}>
          <p className={css.author}>
            &mdash;{props.author}
            {props.source && <em className={css.source}>, {props.source}</em>}
          </p>
        </div>
      </small>
    </div>
  );
};

export default Quotation;
