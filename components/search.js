import css from "./search.scss";

export default props => {
  const handleSubmit = event => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <div className={css.search}>
      <img src="/icons/magnifier-1.svg" />
      <form method="get" action="/search" onSubmit={handleSubmit}>
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
