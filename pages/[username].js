import { useStoreState } from "easy-peasy";
import Error from './_error'

const Test = props => {
  const username = useStoreState(state => {
    console.log(state);
    return state.user.username;
  });

  // return <Error statusCode={404} />

  return (
    <main className={"mid"}>
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
