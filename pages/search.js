import Layout from "../components/layout";
import css from "./search.scss";

const Search = props => {
  return (
    <Layout title={"About — Quoke"}>
      <div className={css.search}>
        <div className={css.top}>
          <h1 className={css.title}>Results</h1>
          <p>here are your results (search feature coming soon...)</p>
        </div>
      </div>
      <hr />
    </Layout>
  );
};

Search.getInitialProps = async ({ req, query }) => {
  console.log("hello");

  return {};
};

export default Search;
