import Link from "next/link";
import css from "./foot.scss";

export default props => {
  return (
    <div className={css.foot}>
      <div className={css.mid}>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
      <div className={css.sub}>
        Made in Australia <img src={"/icons/favorite-7.svg"} />
      </div>
    </div>
  );
};
