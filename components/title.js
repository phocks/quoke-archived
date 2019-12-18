import Link from "next/link"
import css from "./title.scss";

export default props => {
  const { text } = props;
  return (
    <div className={css.root}>
      <div className={css.title}><Link href={"/"}><a>{text}</a></Link></div>
    </div>
  );
};
