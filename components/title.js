import css from "./title.scss";

export default props => {
  const { text } = props;
  return (
    <div className={css.root}>
      <div className={css.title}>{text}</div>
    </div>
  );
};
