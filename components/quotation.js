import Link from "next/link";

const Quotation = props => {
  return (
    <>
      <div>
        <blockquote>&ldquo;{props.text}&rdquo;
        <cite><p><small>—{props.author}</small></p></cite>
        </blockquote>
      </div>

      <style jsx>
        {`
          blockquote {
            font-family: 'Grenze', serif;
            font-size: 1.3em;
            border: none;
            color: white;
            margin-left: 18px;
            margin-right: 18px;
          }
        `}
      </style>
    </>
  );
};

export default Quotation;
