import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { useStoreState, useStoreActions } from "easy-peasy";

import css from "./heading.scss";

const Heading = props => {
  const [username, setUsername] = useState();
  const setGlobalUsername = useStoreActions(
    actions => actions.user.setUsername
  );

  const user = useStoreState(state => state.user.username);

  useEffect(() => {
    axios.post("/api/is-authenticated", {}).then(
      response => {
        if (response.data.loggedIn === true) {
          setGlobalUsername(response.data.payload.username);
          setUsername(user);
        }
      },
      { withCredentials: true }
    );
  });

  return (
    <header className={css.root}>
      <div>
        <span className={css.branding}>
          <Link href="/">
            <a>Quoke</a>
          </Link>
        </span>
      </div>
      <div className={css.nav}>
        {/* <Link href="/about">
            <a>About</a>
          </Link> */}
        {user ? (
          <Link href={"/[username]"} as={"/" + user}>
            <a>{user}</a>
          </Link>
        ) : (
          <Link href="/login">
            <a>Login</a>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Heading;
