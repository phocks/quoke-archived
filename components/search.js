import css from "./search.scss";

export default props => {
  return (
    <div className={css.root}>
      <form><input type="search" placeholder="Search..."></input></form>
    </div>
  );
};