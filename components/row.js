import css from "./row.scss";

export default props => (
  <div className={css.root}>
    <div className={css.container}>{props.children}</div>
  </div>
);
