import css from "./search.scss";

export default props => {
  return (
    <div className={css.search}>
      <img src="/icons/magnifier-1.svg" />
      <form method="get" action="/search">
        <input
          type="search"
          placeholder="Search..."
          name="q"
          autoComplete="off"
        ></input>
      </form>
    </div>
  );
};
