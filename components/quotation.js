import css from "./quotation.scss";
import Link from "next/link";
import smartquotes from "smartquotes";

export default props => {
  const { quote } = props;
  return (
    <div className={css.root}>
      <blockquote cite="https://quoke.co">
        <span>&ldquo;{smartquotes(quote.text)}&rdquo;</span>

        <footer>
          {" "}
          &mdash;{quote.author}
          {quote.source && <cite>, {quote.source}</cite>}
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
    //             {quote.source && (
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
