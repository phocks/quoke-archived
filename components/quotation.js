import Link from "next/link";
import Head from "next/head";

const Quotation = props => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Titillium+Web&display=swap"
          rel="stylesheet"
        />
      </Head>

      <blockquote>
        {props.text}
        <cite>
          <small>
            &mdash;{props.author}
            {props.source && <i>, {props.source}</i>}
          </small>
        </cite>
      </blockquote>

      <style jsx>
        {`
          blockquote {
            /* font-family: "Titillium Web", sans-serif; */
            font-size: 1.1em;
            margin: 0 0 30px;
            max-width: 640px;
          }

          @media (min-width: 641px) {
            blockquote {
              font-size: 1.4em;
            }
          }

          @media (min-width: 961px) {
            blockquote {
              font-size: 1.8em;
            }
          }

          cite {
            display: block;
            margin-top: 1em;
            font-style: normal;
          }
        `}
      </style>
    </>
  );
};

export default Quotation;
