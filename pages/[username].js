import { useStoreState } from "easy-peasy";

const Test = props => {
  const username = useStoreState(state => {
    console.log(state);
    return state.user.username;
  });

  return (
    <main className={"mid"}>
      {/* <p>{props.username}</p> */}
      <p>{username}</p>
    </main>
  );
};

Test.getInitialProps = async context => {
  const { req, query } = context;

  console.log(query);

  return { username: query.username };
};

export default Test;
