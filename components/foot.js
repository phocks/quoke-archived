import Link from "next/link";

export default props => {
  return (
    <div className={"foot"}>
      <div className={"mid"}>
        {/* <Link href="/">
          <a>Home</a>
        </Link>{" "}
        <Link href="/about">
          <a>About</a>
        </Link> */}
      </div>
      {/* <div className={"sub"}>
        Made in Australia <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"/></svg>
      </div> */}

      <style jsx>{`
        .foot {
          font-size: 1.25rem;
          color: white;
          min-height: 50px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-top: 1em;
          font-weight: bold;
          border-top: 1px solid GAINSBORO;
        }

        a {
          color: white;
          text-decoration: none;
          padding: 0 0.5rem;
        }

        a:hover {
          text-decoration: underline;
        }

        .mid {
          margin-bottom: 0.7em;
        }

        .sub {
          font-weight: normal;
          display: flex;
          align-items: center;
          font-size: 0.7em;
          color: dimgray;
          margin-bottom: 2em;
        }

        .sub svg {
          filter: invert(0.4);
          height: 0.9em;
          padding-left: 8px;
        }
      `}</style>
    </div>
  );
};
