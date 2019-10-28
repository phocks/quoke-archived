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
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: white;
            min-height: 40px;
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
