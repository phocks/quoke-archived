import Layout from "../components/layout";

const Search = props => {
  return (
    <Layout title={"About — Quoke"}>
      <div className={"search"}>
        <div className={"top"}>
          <h1 className={"title"}>Results for {props.q}</h1>
          <p>here are your results (search feature coming soon...)</p>
        </div>
      </div>
      <hr />
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
        `}
      </style>
    </Layout>
  );
};

Search.getInitialProps = async ({ req, query }) => {
  console.log(query);

  return { q: query.q };
};

export default Search;
