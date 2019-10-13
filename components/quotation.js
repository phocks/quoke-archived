import Link from "next/link";

const Quotation = props => {
  return (
    <>
      
        <blockquote>&ldquo;{props.text}&rdquo;
        <cite><p><small>—{props.author}</small></p></cite>
        </blockquote>
      

      <style jsx>
        {`
          blockquote {
            margin: 0;
          }
        `}
      </style>
    </>
  );
};

export default Quotation;
