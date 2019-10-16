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
            font-family: "Grenze", serif;
            font-size: 1.4rem;
            margin: 0;
          }

          @media (min-width: 641px) {
            blockquote {
              font-size: 2.3rem;
              padding-left: 5vw;
              padding-right: 5vw;
              max-width: 1600px;
            }
          }

          @media (min-width: 961px) {
            blockquote {
              font-size: 3.3rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default Quotation;
