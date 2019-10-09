const Quotation = props => {
  return (
    <>
      <div>
        <blockquote>{props.text}</blockquote>
      </div>

      <style jsx>
        {`
          blockquote {
            /* font-family: "Merriweather", sans-serif; /*
            /* font-size: 1em; */
          }
        `}
      </style>
    </>
  );
};

export default Quotation;
