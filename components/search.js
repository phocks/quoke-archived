import css from "./search.scss";

export default props => {
  return (
    <div className={css.root}>
      <form method="get" action="/search">
        <input type="search" placeholder="Search..." name="query"></input>
      </form>
    </div>
  );
};
