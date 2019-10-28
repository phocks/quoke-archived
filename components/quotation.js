import Link from "next/link";

const Quotation = props => {
  return (
    <>
      <blockquote>
        &ldquo;{props.text}&rdquo;
        <cite>
          <p>
            <small>—{props.author}</small>
          </p>
        </cite>
      </blockquote>

      <style jsx>
        {`
          blockquote {
            /*font-family: "Grenze", serif;
            font-size: 1.5em;*/
            margin: 0;
            max-width: 500px;
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
