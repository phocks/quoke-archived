import Link from "next/link";
// import css from "./foot.scss";

export default props => {
  return (
    <div className={"foot"}>
      <div className={"mid"}>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
      <div className={"sub"}>
        Made in Australia <img src={"/icons/favorite-7.svg"} />
      </div>

      <style jsx>{`
        .foot {
          background: black;
          color: white;
          min-height: 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-top: 1em;
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
          display: flex;
          align-items: center;
          font-size: 0.7em;
          color: dimgray;
          margin-bottom: 2em;
        }

        .sub img {
          filter: invert(0.4);
          height: 0.9em;
          padding-left: 8px;
        }
      `}</style>
    </div>
  );
};
