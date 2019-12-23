import css from "./quotation.scss";
import Link from "next/link";
import smartquotes from "smartquotes";

export default props => {
  const { quote } = props;
  return (
    <div className={css.root}>
      <blockquote cite="https://www.huxley.net/bnw/four.html">
        <p>
          Words can be like X-rays, if you use them properly—they’ll go through
          anything. You read and you’re pierced.
        </p>
        <footer>
          —Aldous Huxley, <cite>Brave New World</cite>
        </footer>
      </blockquote>
    </div>
    // <div className={css.root}>
    //   <div className={css.container}>
    //     <div className={css.quote}>
    //       <div className={css.text}>{smartquotes(quote.text)}</div>
    //       <div className={css.citationContainer}>
    //         <div className={css.citation}>
    //           <span className={css.author}>
    //             &mdash;{quote.author}
    //             {props.source && (
    //               <em className={css.source}>, {quote.source}</em>
    //             )}
    //           </span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
