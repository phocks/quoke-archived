import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer>
        <Link href="/random">
          <a className={"no-underline"}>
            <i className="fas fa-random"></i>
          </a>
        </Link>
      </footer>

      <style jsx>
        {`
          footer {
            font-size: 1.5em;
            display: flex;
            align-items: center;
            background-color: white;
            padding: 4px 16px;
            color: #222;
          }
          footer a {
            margin-right: 10px;
            color: #222;
          }
          .no-underline {
            text-decoration: none;
          }
        `}
      </style>
    </>
  );
};

export default Footer;
