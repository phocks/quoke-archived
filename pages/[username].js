import { useStoreState, useStoreActions } from "easy-peasy";
import fetch from "isomorphic-unfetch";
import absoluteUrl from "next-absolute-url";
import Error from "./_error";
import dayjs from "dayjs";

import css from "./[username].scss";

import LogoutButton from "../components/LogoutButton";
import Title from "../components/title";
import Row from "../components/row";

const UserPage = props => {
  const currentUser = useStoreState(state => state.username);

  const setTitle = useStoreActions(actions => actions.setTitle);
  setTitle(props.userPageName + " - Quoke");

  if (!props.userFound) return <Error statusCode={404} />;
  else {
    return (
      <div className={css.root}>
        <Title text={"/" + props.userPageName} />
        <Row>
          
          {/* <p>
            Date joined: {dayjs(props.dateRegistered).format("DD MMMM YYYY")}
          </p>
          {currentUser === props.userPageName && <LogoutButton />} */}
        </Row>
      </div>
    );
  }
};

UserPage.getInitialProps = async context => {
  const { req, query } = context;

  const { origin } = absoluteUrl(req);
  const apiOrigin = `${origin}`;

  const res = await fetch(apiOrigin + "/api/get-user/" + query.username);
  const data = await res.json();

  if (!data.userFound) {
    return { userFound: false };
  } else {
    return {
      userFound: true,
      userPageName: data.username,
      dateRegistered: data.dateRegistered
    };
  }
};

export default UserPage;
