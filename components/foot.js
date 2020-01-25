import Link from "next/link";
import css from "./foot.scss";

export default props => {
  return (
    <div className={css.foot}>
      <Link href="/"><a>Home</a></Link> <Link href="/about"><a>About</a></Link>
    </div>
  );
};
