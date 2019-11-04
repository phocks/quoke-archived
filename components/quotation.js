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
          blockquote {
            font-family: 'Titillium Web', sans-serif;
            font-size: 16px;
            margin: 0 0 30px;
          }

          @media (min-width: 641px) {
            blockquote {
              font-size: 18px;
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
