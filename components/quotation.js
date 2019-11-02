import Link from "next/link";

const Quotation = props => {
  return (
    <>
      <div className="grid-item">
        <blockquote>
          &ldquo;{props.text}&rdquo;
          <cite>
            <p>&mdash;{props.author}</p>
          </cite>
        </blockquote>
      </div>
      <style jsx>
        {`
          @import url("https://fonts.googleapis.com/css?family=Zilla+Slab+Highlight&display=swap");

          blockquote {
            font-family: "Zilla Slab Highlight", sans-serif;
            font-size: 1.4em;
            margin: 0 0 30px;
          }

          @media (min-width: 641px) {
            blockquote {
              font-size: 1.5em;
            }
          }
          /*

          @media (min-width: 961px) {
            blockquote {
              font-size: 2.0em;
            }
          } */
        `}
      </style>
    </>
  );
};

export default Quotation;
