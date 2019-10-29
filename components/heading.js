import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { useStoreState } from "easy-peasy";
import { useStoreActions } from "easy-peasy";

const Heading = props => {
  const [username, setUsername] = useState();
  const setGlobalUsername = useStoreActions(
    actions => actions.user.setUsername
  );

  const user = useStoreState(state => state.user.username);

  useEffect(() => {
    // setUsername(props.username);
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
    <>
      <header>
        <div>
          <h1 className="branding">
            <Link href="/">
              <a>Q</a>
            </Link>
          </h1>
        </div>
        <div className={"nav"}>
          {/* <Link href="/about">
            <a>About</a>
          </Link> */}
          {user ? (
            <Link href={"/[username]"} as={"/" + username}>
              <a>{user}</a>
            </Link>
          ) : (
            <Link href="/login">
              <a>Login</a>
            </Link>
          )}
        </div>
      </header>

      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
          /* align-items: center; */
          padding: 8px 16px;
        }
        a {
        }
        .branding {
          font-family: "Press Start 2P", cursive;
          font-size: 33px;
          margin: 0;
          position: relative;
          top: -3px;
        }
        .branding a {
          text-decoration: none;
        }
        .nav a {
          margin-left: 6px;
        }
      `}</style>
    </>
  );
};

export default Heading;
