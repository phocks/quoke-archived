import Layout from "../components/layout";
import { apiGet } from "../lib/utils";
import Quote from "../components/quote";

const Search = props => {
  return (
    <Layout title={"About — Quoke"} searchQuery={props.q}>
      <div className={"search"}>
        <div className={"top"}>
          <h1 className={"title"}>Results for {props.q}</h1>
          <p>here are your results (search still in beta...)</p>
        </div>
      </div>

      <hr />

      <div className="col">
        {props.results &&
          props.results.map((quote, index) => {
            return (
              <div className="result" key={index}>
                <Quote quote={quote} />
              </div>
            );
          })}
      </div>
      <style jsx>
        {`
          .search {
            font-size: 1.25rem;
            text-align: center;
            padding-left: 1rem;
            padding-right: 1rem;
          }

          .top {
            padding-top: 0.5em;
            padding-bottom: 1em;
            max-width: 640px;
            margin: auto;
          }

          h1 {
            font-size: 1.25rem;
          }

          hr {
            margin-bottom: 2rem;
          }
        `}
      </style>
    </Layout>
  );
};

Search.getInitialProps = async ({ req, query }) => {
  const searchResults = await apiGet(req, "/api/search?q=" + query.q);

  return { q: query.q, results: searchResults };
};

export default Search;
