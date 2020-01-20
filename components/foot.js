import Link from "next/link";
import css from "./foot.scss";

export default props => {
  return (
    <div className={css.root}>
      <span className={css.fleuron}>❦</span>
    </div>
  );
};
