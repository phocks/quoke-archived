import { useStoreState, useStoreActions } from "easy-peasy";
import fetch from "isomorphic-unfetch";
import absoluteUrl from "next-absolute-url";
import Error from "./_error";
import dayjs from "dayjs";
import ellipsize from "ellipsize";
import Link from "next/link";

import { apiGet } from "../lib/utils";
import css from "./[username].scss";

import Title from "../components/title";
import Row from "../components/row";
import Layout from "../components/layout";
import Quote from "./author/[slug]";

const UserPage = props => {
  const currentUser = useStoreState(state => state.username);

  // const setTitle = useStoreActions(actions => actions.setTitle);
  // setTitle(props.userPageName + " - Quoke");

  if (!props.userFound) return <Error statusCode={404} />;
  else {
    return (
      <Layout title={props.userPageName + " / Quoke"}>
        <div className={css.root}>
          <Title text={"/" + props.userPageName} />
          <div className="spacer"></div>
          <Row>
            {/* <p>
              Date joined: {dayjs(props.dateRegistered).format("DD MMMM YYYY")}
            </p>
            {currentUser === props.userPageName && <LogoutButton />} */}
            {props.userQuotes.map(quote => {
              console.log(quote);
              return (
                <div key={quote._id} className={css.singleQuote}>
                  <Link href={"/quote/[slug]"} as={"/quote/" + quote.slug}>
                    <a>{ellipsize(quote.text, 30)}</a>
                  </Link>
                </div>
              );
            })}
          </Row>
        </div>
      </Layout>
    );
  }
};

UserPage.getInitialProps = async ({ req, query }) => {
  // const { req, query } = context;

  // const { origin } = absoluteUrl(req);
  // const apiOrigin = `${origin}`;

  // const res = await fetch(apiOrigin + "/api/get-user/" + query.username);
  // const data = await res.json();

  const userData = await apiGet(req, "/api/get-user/" + query.username);
  const userQuotes = await apiGet(
    req,
    "/api/get-user-quotes/" + query.username
  );

  if (!userData.userFound) {
    return { userFound: false };
  } else {
    return {
      userFound: true,
      userPageName: userData.username,
      dateRegistered: userData.dateRegistered,
      userQuotes: userQuotes
    };
  }
};

export default UserPage;
