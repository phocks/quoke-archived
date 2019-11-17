import dayjs from "dayjs";

import css from "./info.scss";

export default props => {
  const { quote } = props;
  return <div className={css.root}>
    <span className={css.dateAdded}>{dayjs(quote.date).format("DD MMMM YYYY")}</span>
  </div>;
};
