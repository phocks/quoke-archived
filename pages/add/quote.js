export default props => {
  return (
    <>
      <form action="/api/register" method="post">
        <input type="text" name="text" placeholder="Quotation text" required />
        <input type="text" name="author" placeholder="Author" />
        <input type="text" name="source" placeholder="Source" required />
        <input type="submit" value="Add quote" />
      </form>
      <style jsx>
        {`
          input,
          .btn {
            width: 100%;
            padding: 12px;
            border: 1px solid #e1e1e1;
            border-radius: 4px;
            margin: 5px 0;
            opacity: 0.85;
            display: inline-block;
            font-size: 17px;
            line-height: 20px;
            text-decoration: none;
          }
        `}
      </style>
    </>
  );
};
