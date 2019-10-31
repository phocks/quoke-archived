import Link from "next/link";

const Quotation = props => {
  return (
    <>
      <blockquote>
        &ldquo;{props.text}&rdquo;
        <cite>
          <p>
            &mdash;{props.author}
          </p>
        </cite>
      </blockquote>

      <style jsx>
        {`
          blockquote {
            font-family: 'Zilla Slab Highlight', cursive;
            font-size: 1.5em;
            margin: 0;
          }

          /* @media (min-width: 641px) {
            blockquote {
              font-size: 1.8em;
              padding-left: 5vw;
              padding-right: 5vw;
              max-width: 960px;
            }
          }

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
