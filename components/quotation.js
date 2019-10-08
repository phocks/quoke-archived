const Quotation = props => {
  return (
    <>
      <div>
        <blockquote>{props.text}</blockquote>
      </div>

      <style jsx>
        {`
          blockquote {
            font-family: "Merriweather", sans-serif;
            font-size: 1rem;
          }
        `}
      </style>
    </>
  );
};

export default Quotation;
