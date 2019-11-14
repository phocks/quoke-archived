import Link from "next/link"
import css from "./nav.scss";

const Nav = props => {
  return <div className={css.root}>
    <div className={css.container}>
      <Link href="/about"><a>About</a></Link>
    </div>
  </div>;
};

export default Nav;