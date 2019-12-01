import css from "./progress.scss";

export default props => {
  const { progress = 0 } = props;

  return <div className={css.root} style={{ width: progress + "%" }}></div>;
};
