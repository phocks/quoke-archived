const Test = props => {
  return <main className={"mid"}>{props.username}</main>;
};

Test.getInitialProps = async context => {
  const { req, query } = context;

  console.log(query);

  return query;
};

export default Test;
