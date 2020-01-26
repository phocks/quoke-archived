import Layout from "../components/layout";
import css from "./about.scss";

const Search = props => {
  return (
    <Layout title={"About — Quoke"}>
      <div className={css.about}>
        <div className={css.top}>
          <h1 className={css.title}>Results</h1>
          <p>here are your results</p>
        </div>
      </div>
      <hr />
    </Layout>
  );
};

export default Search;
