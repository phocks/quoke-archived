import { useStoreState } from "easy-peasy";
import fetch from "isomorphic-unfetch";
import absoluteUrl from "next-absolute-url";
import Error from "./_error";

const Test = props => {
  const currentUser = useStoreState(state => {
    return state.user.username;
  });

  console.log("Current user: " + currentUser);

  if (!props.userFound) return <Error statusCode={404} />;
  else {
    return (
      <main className={"article"}>
        <section>
          <h2>@{props.username}</h2>
          <p>Date joined: {props.dateRegistered}</p>
        </section>
      </main>
    );
  }
};

Test.getInitialProps = async context => {
  const { req, query } = context;

  const { origin } = absoluteUrl(req);
  const apiOrigin = `${origin}`;

  const res = await fetch(apiOrigin + "/api/" + query.username);
  const data = await res.json();

  if (!data.userFound) {
    return { userFound: false };
  } else {
    return {
      userFound: true,
      username: data.username,
      dateRegistered: data.dateRegistered
    };
  }
};

export default Test;
