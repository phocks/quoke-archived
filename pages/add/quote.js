import Layout from "../../components/layout";
import css from "./quote.scss";
import axios from "axios";

export default props => {
  const addQuote = async event => {
    event.preventDefault();

    const title = event.target.title.value;
    const text = event.target.text.value;
    const author = event.target.author.value;
    const source = event.target.source.value;

    const res = await axios.post(
      "/api/add/quote",
      {
        title: title,
        text: text,
        author: author,
        source: source,
        noRedirect: true
      },
      { withCredentials: true }
    );
  };

  return (
    <Layout title={"Add quote / Quoke"}>
      <div className={css.root}>
        <section>
          <p>Add quotation:</p>
          <form action="/api/add/quote" method="post" onSubmit={addQuote}>
            <input
              type="text"
              name="title"
              placeholder="Quotation text"
              required
            />
            <textarea rows="5" cols="60" name="description">
              Enter details here...
            </textarea>
            <input type="text" name="author" placeholder="Author" />
            <input type="text" name="source" placeholder="Source" />
            <input type="submit" value="Add quote" />
          </form>
        </section>
      </div>
    </Layout>
  );
};
