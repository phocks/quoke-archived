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
              placeholder="Title (a few words from start of quote)"
              required
            />
            <textarea rows="5" cols="50" name="text" placeholder="Quotation text" />
            <input type="text" name="author" placeholder="Author (who said it?)" />
            <input type="text" name="source" placeholder="Source (where's it from?)" />
            <input type="submit" value="Add quote" />
          </form>
        </section>
      </div>
    </Layout>
  );
};
