import Link from "next/link"
import css from "./item.scss";

export default props => (
  <span className={css.link}>
    <Link href={props.href} as={props.as}>
      <a>{props.children}</a>
    </Link>
  </span>
);
