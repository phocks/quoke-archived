import axios from "axios";

export default props => {
  const addQuote = async event => {
    event.preventDefault();

    const text = event.target.text.value;
    const author = event.target.author.value;
    const source = event.target.source.value;
    const slug = event.target.slug.value;

    const res = await axios.post(
      "/api/add/quote",
      {
        text: text,
        author: author,
        source: source,
        slug: slug,
        noRedirect: true
      },
      { withCredentials: true }
    );

  };
  return (
    <>
      <main className="">
        <section>
          <p>Add quotation:</p>
          <form action="/api/add/quote" method="post" onSubmit={addQuote}>
            <input
              type="text"
              name="text"
              placeholder="Quotation text"
              required
            />
            <input type="text" name="author" placeholder="Author" />
            <input type="text" name="source" placeholder="Source" />
            <input type="text" name="slug" placeholder="URL slug" required />
            <input type="submit" value="Add quote" />
          </form>
        </section>
      </main>
      <style jsx>
        {`
          main {
            display: flex;
            justify-content: center;
          }
          section {
            max-width: 480px;
            flex: 1;
          }
          input,
          .btn {
            width: 100%;
            /*max-width: 480px;*/
            padding: 12px;
            border: 1px solid #e1e1e1;
            border-radius: 4px;
            margin: 5px 0;
            opacity: 0.85;
            display: block;
            font-size: 17px;
            line-height: 20px;
            text-decoration: none;
            background: none;
          }
        `}
      </style>
    </>
  );
};
