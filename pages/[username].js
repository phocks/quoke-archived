const Test = props => {
  return <main>{props.username}</main>;
};

Test.getInitialProps = async context => {
  const { req, query } = context;

  console.log(query);

  return query;
};

export default Test;
